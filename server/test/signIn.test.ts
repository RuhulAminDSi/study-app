import request from "supertest";
import jwt from "jsonwebtoken";
import { beforeEach, describe, expect, it } from "vitest";
import { createApp } from "../src/app";
import { pool } from "../src/db/pool";
import { resetDb } from "./helpers/db";
import { createAdmin } from "./helpers/auth";

beforeEach(resetDb);

const signIn = (body: object, app = createApp()) => request(app).post("/api/auth/sign-in").send(body);

async function registerCandidate(email = "rahim@example.com", password = "secret-123") {
  const res = await request(createApp()).post("/api/candidate/auth/register").send({ fullName: "Rahim Uddin", email, password });
  return res.body.candidate as { id: string };
}

describe("POST /api/auth/sign-in (one sign-in for candidates and admins)", () => {
  it("signs a candidate in by email", async () => {
    const candidate = await registerCandidate();
    const res = await signIn({ identifier: "  RAHIM@example.com ", password: "secret-123" });
    expect(res.status).toBe(200);
    expect(res.body.kind).toBe("candidate");
    expect(res.body.candidate).toMatchObject({ id: candidate.id, email: "rahim@example.com" });
    expect(jwt.decode(res.body.token)).toMatchObject({ kind: "candidate", id: candidate.id });
    const { rows } = await pool.query("SELECT last_login FROM candidates WHERE id = $1", [candidate.id]);
    expect(rows[0].last_login).not.toBeNull();
  });

  it("signs an admin in by username", async () => {
    const admin = await createAdmin("super_admin");
    const res = await signIn({ identifier: admin.username, password: admin.password });
    expect(res.status).toBe(200);
    expect(res.body.kind).toBe("admin");
    expect(res.body.user).toMatchObject({ id: admin.id, username: admin.username, role: "super_admin" });
    expect(jwt.decode(res.body.token)).toMatchObject({ kind: "admin", id: admin.id, role: "super_admin" });
  });

  it("signs an admin in by email, ignoring case", async () => {
    const admin = await createAdmin();
    const res = await signIn({ identifier: `${admin.username}@EXAMPLE.com`, password: admin.password });
    expect(res.status).toBe(200);
    expect(res.body.kind).toBe("admin");
  });

  it("falls through to the admin account when the same email's candidate password doesn't match", async () => {
    const admin = await createAdmin();
    await registerCandidate(`${admin.username}@example.com`, "candidate-pass-1");
    const asAdmin = await signIn({ identifier: `${admin.username}@example.com`, password: admin.password });
    expect(asAdmin.body.kind).toBe("admin");
    const asCandidate = await signIn({ identifier: `${admin.username}@example.com`, password: "candidate-pass-1" });
    expect(asCandidate.body.kind).toBe("candidate");
  });

  it("refuses a wrong password with one generic code", async () => {
    await registerCandidate();
    const admin = await createAdmin();
    for (const body of [
      { identifier: "rahim@example.com", password: "wrong-pass" },
      { identifier: admin.username, password: "wrong-pass" },
      { identifier: "nobody@example.com", password: "whatever-1" },
    ]) {
      const res = await signIn(body);
      expect(res.status).toBe(401);
      expect(res.body.code).toBe("bad_credentials");
      expect(res.body.token).toBeUndefined();
    }
  });

  it("refuses deactivated accounts", async () => {
    const admin = await createAdmin();
    await pool.query("UPDATE admin_users SET is_active = false WHERE id = $1", [admin.id]);
    const candidate = await registerCandidate();
    await pool.query("UPDATE candidates SET is_active = false WHERE id = $1", [candidate.id]);
    expect((await signIn({ identifier: admin.username, password: admin.password })).status).toBe(401);
    expect((await signIn({ identifier: "rahim@example.com", password: "secret-123" })).status).toBe(401);
  });

  it("asks for both fields", async () => {
    const res = await signIn({ identifier: "", password: "" });
    expect(res.status).toBe(400);
    expect(res.body).toMatchObject({ code: "validation_failed", fields: { identifier: "required", password: "required" } });
  });
});
