import request from "supertest";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { createApp } from "../src/app";
import { resetDb } from "./helpers/db";
import { createAdmin, candidateToken, legacyAdminToken } from "./helpers/auth";

beforeEach(resetDb);

describe("admin-only routes", () => {
  it("accept an admin token", async () => {
    const admin = await createAdmin();
    const res = await request(createApp()).get("/api/chapters").set("Authorization", `Bearer ${admin.token}`);
    expect(res.status).toBe(200);
  });

  it("reject a candidate token with 403", async () => {
    const res = await request(createApp()).get("/api/chapters").set("Authorization", `Bearer ${candidateToken()}`);
    expect(res.status).toBe(403);
  });

  it("reject a pre-upgrade token without kind with 401", async () => {
    const res = await request(createApp()).get("/api/chapters").set("Authorization", `Bearer ${legacyAdminToken()}`);
    expect(res.status).toBe(401);
  });

  it("reject a missing token with 401", async () => {
    const res = await request(createApp()).get("/api/dashboard/stats");
    expect(res.status).toBe(401);
  });
});

describe("POST /api/auth/login", () => {
  it("issues an admin-kind token", async () => {
    const admin = await createAdmin();
    const res = await request(createApp()).post("/api/auth/login").send({ username: admin.username, password: admin.password });
    expect(res.status).toBe(200);
    expect(jwt.decode(res.body.token)).toMatchObject({ kind: "admin", id: admin.id, role: "admin" });
  });

  it("returns 429 after 10 attempts from one client", async () => {
    const app = createApp();
    for (let i = 0; i < 10; i++) {
      await request(app).post("/api/auth/login").send({ username: "nobody", password: "wrong" });
    }
    const res = await request(app).post("/api/auth/login").send({ username: "nobody", password: "wrong" });
    expect(res.status).toBe(429);
    expect(res.body.code).toBe("too_many_attempts");
  });

  it("counts one client as one even when the proxy appends a different port each time", async () => {
    const app = createApp({ trustProxy: true });
    const attempt = (xff: string) =>
      request(app).post("/api/auth/login").set("X-Forwarded-For", xff).send({ username: "nobody", password: "wrong" });
    for (let i = 0; i < 10; i++) await attempt(`203.0.113.1:${40000 + i}`);
    expect((await attempt("203.0.113.1:49999")).status).toBe(429);
    expect((await attempt("203.0.113.2:40000")).status).toBe(401);
  });

  it("does not count successful logins toward the limit (shared IPs such as a classroom or mobile NAT)", async () => {
    const admin = await createAdmin();
    const app = createApp();
    for (let i = 0; i < 12; i++) {
      const res = await request(app).post("/api/auth/login").send({ username: admin.username, password: admin.password });
      expect(res.status).toBe(200);
    }
  });

  it("counts clients separately behind a proxy", async () => {
    const app = createApp({ trustProxy: true });
    const attempt = (ip: string) =>
      request(app).post("/api/auth/login").set("X-Forwarded-For", ip).send({ username: "nobody", password: "wrong" });
    for (let i = 0; i < 10; i++) await attempt("203.0.113.1");
    expect((await attempt("203.0.113.1")).status).toBe(429);
    expect((await attempt("203.0.113.2")).status).toBe(401);
  });
});

describe("POST /api/auth/login timing", () => {
  it("checks a password hash even for unknown usernames, so response time doesn't reveal which exist", async () => {
    const spy = vi.spyOn(bcrypt, "compare");
    try {
      await request(createApp()).post("/api/auth/login").send({ username: "no-such-admin", password: "whatever-123" });
      expect(spy).toHaveBeenCalledTimes(1);
    } finally {
      spy.mockRestore();
    }
  });
});

describe("POST /api/auth/register", () => {
  const body = { username: "newadmin", email: "new@example.com", password: "long-password-1" };

  it("rejects a password shorter than 8 characters or of the wrong type with 400", async () => {
    const root = await createAdmin("super_admin");
    for (const password of ["short", 12345678, { a: 1 }]) {
      const res = await request(createApp())
        .post("/api/auth/register")
        .set("Authorization", `Bearer ${root.token}`)
        .send({ ...body, password });
      expect(res.status).toBe(400);
    }
  });

  it("rejects anonymous callers", async () => {
    expect((await request(createApp()).post("/api/auth/register").send(body)).status).toBe(401);
  });

  it("rejects admins who are not super admins", async () => {
    const editor = await createAdmin("editor");
    const res = await request(createApp()).post("/api/auth/register").set("Authorization", `Bearer ${editor.token}`).send(body);
    expect(res.status).toBe(403);
  });

  it("lets a super admin create an editor", async () => {
    const root = await createAdmin("super_admin");
    const res = await request(createApp()).post("/api/auth/register").set("Authorization", `Bearer ${root.token}`).send(body);
    expect(res.status).toBe(201);
    expect(res.body.user).toMatchObject({ username: "newadmin", role: "editor" });
  });

  it("rejects unknown roles with 400", async () => {
    const root = await createAdmin("super_admin");
    const res = await request(createApp())
      .post("/api/auth/register")
      .set("Authorization", `Bearer ${root.token}`)
      .send({ ...body, role: "owner" });
    expect(res.status).toBe(400);
  });
});
