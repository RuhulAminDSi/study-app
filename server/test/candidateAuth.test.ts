import request from "supertest";
import jwt from "jsonwebtoken";
import { describe, it, expect, beforeEach } from "vitest";
import { createApp } from "../src/app";
import { pool } from "../src/db/pool";
import { resetDb, insertJobPost } from "./helpers/db";
import { createAdmin } from "./helpers/auth";

beforeEach(resetDb);

const signup = { fullName: "Rahim Uddin", email: "rahim@example.com", password: "secret-123" };

async function register(body: object = signup, app = createApp()) {
  return request(app).post("/api/candidate/auth/register").send(body);
}

describe("POST /api/candidate/auth/register", () => {
  it("creates an account and returns a candidate-kind token", async () => {
    const res = await register();
    expect(res.status).toBe(201);
    expect(res.body.candidate).toEqual({
      id: expect.any(String),
      fullName: "Rahim Uddin",
      email: "rahim@example.com",
      phone: null,
      targetPostId: null,
      preferredLanguage: "bn",
    });
    expect(jwt.decode(res.body.token)).toMatchObject({ kind: "candidate", id: res.body.candidate.id });
    expect(JSON.stringify(res.body)).not.toContain("password");
  });

  it("keeps a Bangla full name intact", async () => {
    const res = await register({ ...signup, fullName: "মোঃ রহিম উদ্দিন" });
    expect(res.status).toBe(201);
    const { rows } = await pool.query("SELECT full_name FROM candidates WHERE id = $1", [res.body.candidate.id]);
    expect(rows[0].full_name).toBe("মোঃ রহিম উদ্দিন");
  });

  it("returns a Bangla name with joiners byte-for-byte from register and /me", async () => {
    const name = "সুমাইয়া ক্ষ‌মা"; // includes ZWNJ (U+200C), which must survive
    const reg = await register({ ...signup, fullName: name });
    expect(reg.body.candidate.fullName).toBe(name);
    const me = await request(createApp()).get("/api/candidate/me").set("Authorization", `Bearer ${reg.body.token}`);
    expect(me.body.candidate.fullName).toBe(name);
  });

  it("returns field codes for invalid input", async () => {
    const res = await register({ fullName: "", email: "x", password: "1" });
    expect(res.status).toBe(400);
    expect(res.body).toMatchObject({
      code: "validation_failed",
      fields: { fullName: "name_length", email: "email_invalid", password: "password_short" },
    });
  });

  it("rejects an email that differs only by case with 409", async () => {
    await register();
    const res = await register({ ...signup, email: "RAHIM@example.com" });
    expect(res.status).toBe(409);
    expect(res.body).toMatchObject({ code: "email_taken", fields: { email: "email_taken" } });
  });

  it("rejects a target post that does not exist", async () => {
    const res = await register({ ...signup, targetPostId: "11111111-1111-1111-1111-111111111111" });
    expect(res.status).toBe(400);
    expect(res.body.fields).toEqual({ targetPostId: "post_unknown" });
  });

  it("accepts an existing target post", async () => {
    const postId = await insertJobPost();
    const res = await register({ ...signup, targetPostId: postId });
    expect(res.status).toBe(201);
    expect(res.body.candidate.targetPostId).toBe(postId);
  });
});

describe("POST /api/candidate/auth/login", () => {
  it("normalises email so case and spaces don't matter", async () => {
    await register({ ...signup, email: " Rahim@Example.COM " });
    const res = await request(createApp()).post("/api/candidate/auth/login").send({ email: "RAHIM@example.com ", password: "secret-123" });
    expect(res.status).toBe(200);
    expect(res.body.candidate.email).toBe("rahim@example.com");
  });

  it("gives the same answer for a wrong password and an unknown email", async () => {
    await register();
    const wrong = await request(createApp()).post("/api/candidate/auth/login").send({ email: signup.email, password: "nope-nope" });
    const unknown = await request(createApp()).post("/api/candidate/auth/login").send({ email: "who@example.com", password: "nope-nope" });
    expect(wrong.status).toBe(401);
    expect(unknown.status).toBe(401);
    expect(wrong.body).toEqual(unknown.body);
    expect(wrong.body.code).toBe("bad_credentials");
  });

  it("refuses a deactivated account", async () => {
    const { body } = await register();
    await pool.query("UPDATE candidates SET is_active = false WHERE id = $1", [body.candidate.id]);
    const res = await request(createApp()).post("/api/candidate/auth/login").send({ email: signup.email, password: signup.password });
    expect(res.status).toBe(401);
  });

  it("returns 400 with field codes when fields are missing", async () => {
    const res = await request(createApp()).post("/api/candidate/auth/login").send({});
    expect(res.status).toBe(400);
    expect(res.body.fields).toEqual({ email: "required", password: "required" });
  });

  it("returns 429 after 10 attempts from one client", async () => {
    const app = createApp();
    for (let i = 0; i < 10; i++) {
      await request(app).post("/api/candidate/auth/login").send({ email: "who@example.com", password: "nope-nope" });
    }
    const res = await request(app).post("/api/candidate/auth/login").send({ email: "who@example.com", password: "nope-nope" });
    expect(res.status).toBe(429);
  });
});

describe("/api/candidate/me", () => {
  it("returns the signed-in candidate", async () => {
    const { body } = await register();
    const res = await request(createApp()).get("/api/candidate/me").set("Authorization", `Bearer ${body.token}`);
    expect(res.status).toBe(200);
    expect(res.body.candidate.email).toBe("rahim@example.com");
  });

  it("rejects an admin token with 403", async () => {
    const admin = await createAdmin();
    const res = await request(createApp()).get("/api/candidate/me").set("Authorization", `Bearer ${admin.token}`);
    expect(res.status).toBe(403);
  });

  it("updates language and target post", async () => {
    const { body } = await register();
    const postId = await insertJobPost();
    const res = await request(createApp())
      .patch("/api/candidate/me")
      .set("Authorization", `Bearer ${body.token}`)
      .send({ preferredLanguage: "en", targetPostId: postId });
    expect(res.status).toBe(200);
    expect(res.body.candidate).toMatchObject({ preferredLanguage: "en", targetPostId: postId });
  });

  it("rejects an invalid update with field codes", async () => {
    const { body } = await register();
    const res = await request(createApp())
      .patch("/api/candidate/me")
      .set("Authorization", `Bearer ${body.token}`)
      .send({ preferredLanguage: "fr" });
    expect(res.status).toBe(400);
    expect(res.body.fields).toEqual({ preferredLanguage: "language_invalid" });
  });

  it("returns 401 for a deactivated account", async () => {
    const { body } = await register();
    await pool.query("UPDATE candidates SET is_active = false WHERE id = $1", [body.candidate.id]);
    const res = await request(createApp()).get("/api/candidate/me").set("Authorization", `Bearer ${body.token}`);
    expect(res.status).toBe(401);
    expect(res.body.code).toBe("account_inactive");
  });
});
