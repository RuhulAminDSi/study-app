import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";
import { createApp } from "../src/app";
import { pool } from "../src/db/pool";
import { insertCandidate, insertJobPost, resetDb } from "./helpers/db";
import { candidateToken, createAdmin } from "./helpers/auth";

beforeEach(resetDb);

const app = () => createApp();
async function adminToken(role: "super_admin" | "admin" | "editor" = "admin") {
  return (await createAdmin(role)).token;
}
const as = (token: string) => ({
  get: (url: string) => request(app()).get(url).set("Authorization", `Bearer ${token}`),
  patch: (url: string, body: object) => request(app()).patch(url).set("Authorization", `Bearer ${token}`).send(body),
  post: (url: string, body: object) => request(app()).post(url).set("Authorization", `Bearer ${token}`).send(body),
  del: (url: string) => request(app()).delete(url).set("Authorization", `Bearer ${token}`),
});

async function addCandidate(email: string, fullName = "Rahim Uddin", opts: { active?: boolean; daysAgo?: number; lastLoginDaysAgo?: number | null } = {}) {
  const id = await insertCandidate(email);
  await pool.query(
    `UPDATE candidates SET full_name = $2, is_active = $3,
            created_at = now() - make_interval(days => $4),
            last_login = CASE WHEN $5::int IS NULL THEN NULL ELSE now() - make_interval(days => $5::int) END
      WHERE id = $1`,
    [id, fullName, opts.active ?? true, opts.daysAgo ?? 0, opts.lastLoginDaysAgo ?? null],
  );
  return id;
}

describe("access to /api/candidates", () => {
  it("is refused without a token, to candidates and to editors", async () => {
    expect((await request(app()).get("/api/candidates")).status).toBe(401);
    expect((await as(candidateToken()).get("/api/candidates")).status).toBe(403);
    const editor = await as(await adminToken("editor")).get("/api/candidates");
    expect(editor.status).toBe(403);
    expect(editor.body.code).toBe("forbidden");
  });

  it("is open to admins and super admins", async () => {
    expect((await as(await adminToken("admin")).get("/api/candidates")).status).toBe(200);
    expect((await as(await adminToken("super_admin")).get("/api/candidates")).status).toBe(200);
  });
});

describe("GET /api/candidates", () => {
  it("lists candidates newest first with paging, and never exposes password hashes", async () => {
    await addCandidate("old@example.com", "Old One", { daysAgo: 10 });
    await addCandidate("new@example.com", "New One", { daysAgo: 1 });
    const res = await as(await adminToken()).get("/api/candidates?pageSize=1");
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({ total: 2, page: 1, pageSize: 1 });
    expect(res.body.items).toHaveLength(1);
    expect(res.body.items[0]).toMatchObject({ email: "new@example.com", fullName: "New One", isActive: true, attemptCount: 0 });
    expect(JSON.stringify(res.body)).not.toContain("password");
  });

  it("searches name, email and phone, treating % and _ literally", async () => {
    await addCandidate("karim@example.com", "Karim Hossain");
    const id = await addCandidate("other@example.com", "Someone");
    await pool.query("UPDATE candidates SET phone = '01712345678' WHERE id = $1", [id]);
    const t = await adminToken();
    expect((await as(t).get("/api/candidates?q=hossain")).body.items.map((c: { email: string }) => c.email)).toEqual(["karim@example.com"]);
    expect((await as(t).get("/api/candidates?q=0171234")).body.items.map((c: { email: string }) => c.email)).toEqual(["other@example.com"]);
    expect((await as(t).get("/api/candidates?q=%25")).body.total).toBe(0);
  });

  it("filters by status and sorts by last sign-in", async () => {
    await addCandidate("a@example.com", "A", { lastLoginDaysAgo: 5 });
    await addCandidate("b@example.com", "B", { lastLoginDaysAgo: 1 });
    await addCandidate("c@example.com", "C", { active: false });
    const t = await adminToken();
    expect((await as(t).get("/api/candidates?status=inactive")).body.items.map((c: { email: string }) => c.email)).toEqual(["c@example.com"]);
    expect((await as(t).get("/api/candidates?status=active&sort=last_login")).body.items.map((c: { email: string }) => c.email))
      .toEqual(["b@example.com", "a@example.com"]);
  });

  it("includes the target post's title", async () => {
    const postId = await insertJobPost("Assistant Programmer");
    const id = await addCandidate("p@example.com");
    await pool.query("UPDATE candidates SET target_post_id = $2 WHERE id = $1", [id, postId]);
    const res = await as(await adminToken()).get("/api/candidates");
    expect(res.body.items[0]).toMatchObject({ targetPostId: postId, targetPostTitle: "Assistant Programmer" });
  });
});

describe("GET /api/candidates/stats", () => {
  it("counts all, active, inactive, new and recently signed-in candidates", async () => {
    await addCandidate("1@example.com", "One", { daysAgo: 2, lastLoginDaysAgo: 1 });
    await addCandidate("2@example.com", "Two", { daysAgo: 30, lastLoginDaysAgo: 20 });
    await addCandidate("3@example.com", "Three", { daysAgo: 40, active: false });
    const res = await as(await adminToken()).get("/api/candidates/stats");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ total: 3, active: 2, inactive: 1, newLast7Days: 1, activeLast7Days: 1 });
  });
});

describe("GET/PATCH/DELETE /api/candidates/:id", () => {
  it("returns one candidate, and 404 for an unknown or malformed id", async () => {
    const id = await addCandidate("one@example.com");
    const t = await adminToken();
    expect((await as(t).get(`/api/candidates/${id}`)).body).toMatchObject({ id, email: "one@example.com" });
    expect((await as(t).get("/api/candidates/00000000-0000-0000-0000-0000000000aa")).status).toBe(404);
    expect((await as(t).get("/api/candidates/not-a-uuid")).status).toBe(404);
  });

  it("edits profile fields and the active flag", async () => {
    const id = await addCandidate("edit@example.com");
    const postId = await insertJobPost();
    const res = await as(await adminToken()).patch(`/api/candidates/${id}`, {
      fullName: "  Edited   Name ", email: "NEW@Example.com", phone: "01812345678", targetPostId: postId, preferredLanguage: "bn", isActive: false,
    });
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      fullName: "Edited Name", email: "new@example.com", phone: "01812345678", targetPostId: postId, preferredLanguage: "bn", isActive: false,
    });
  });

  it("rejects invalid fields and an email another candidate has", async () => {
    await addCandidate("taken@example.com");
    const id = await addCandidate("mine@example.com");
    const t = await adminToken();
    const bad = await as(t).patch(`/api/candidates/${id}`, { email: "nope", isActive: "yes", preferredLanguage: "fr" });
    expect(bad.status).toBe(400);
    expect(bad.body.fields).toEqual({ email: "email_invalid", isActive: "active_invalid", preferredLanguage: "language_invalid" });
    const taken = await as(t).patch(`/api/candidates/${id}`, { email: "TAKEN@example.com" });
    expect(taken.status).toBe(409);
    expect(taken.body.code).toBe("email_taken");
  });

  it("deletes a candidate", async () => {
    const id = await addCandidate("gone@example.com");
    const t = await adminToken();
    expect((await as(t).del(`/api/candidates/${id}`)).body).toEqual({ deleted: true });
    expect((await as(t).get(`/api/candidates/${id}`)).status).toBe(404);
    expect((await as(t).del(`/api/candidates/${id}`)).status).toBe(404);
  });
});

describe("POST /api/candidates/:id/password", () => {
  it("sets a new password the candidate can sign in with", async () => {
    const id = await addCandidate("reset@example.com");
    const t = await adminToken();
    expect((await as(t).post(`/api/candidates/${id}/password`, { password: "short" })).body.fields).toEqual({ password: "password_short" });
    expect((await as(t).post(`/api/candidates/${id}/password`, { password: "brand-new-pass" })).body).toEqual({ updated: true });
    const signIn = await request(app()).post("/api/auth/sign-in").send({ identifier: "reset@example.com", password: "brand-new-pass" });
    expect(signIn.body.kind).toBe("candidate");
  });
});

describe("a deactivated candidate", () => {
  it("can no longer read lessons with a token issued before", async () => {
    const id = await addCandidate("blocked@example.com");
    const token = candidateToken(id, "blocked@example.com");
    expect((await as(token).get("/api/public/lessons/published")).status).toBe(200);
    await as(await adminToken()).patch(`/api/candidates/${id}`, { isActive: false });
    const res = await as(token).get("/api/public/lessons/published");
    expect(res.status).toBe(401);
    expect(res.body.code).toBe("account_inactive");
  });
});
