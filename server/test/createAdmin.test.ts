import bcrypt from "bcrypt";
import { describe, it, expect, beforeEach } from "vitest";
import { pool } from "../src/db/pool";
import { ensureSuperAdmin } from "../src/db/createAdmin";
import { resetDb } from "./helpers/db";

beforeEach(resetDb);

async function findAdmin(username: string) {
  const { rows } = await pool.query("SELECT username, email, role, password_hash, is_active FROM admin_users WHERE username = $1", [username]);
  return rows[0];
}

describe("ensureSuperAdmin", () => {
  it("creates a super admin when the username is new", async () => {
    const result = await ensureSuperAdmin(pool, { username: "owner", email: "owner@example.com", password: "long-password-1" });
    expect(result).toBe("created");
    const admin = await findAdmin("owner");
    expect(admin).toMatchObject({ email: "owner@example.com", role: "super_admin", is_active: true });
    expect(await bcrypt.compare("long-password-1", admin.password_hash)).toBe(true);
  });

  it("promotes an existing admin and resets their password", async () => {
    await pool.query("INSERT INTO admin_users (username, email, password_hash, role, is_active) VALUES ('owner', 'old@example.com', 'x', 'editor', false)");
    const result = await ensureSuperAdmin(pool, { username: "owner", email: "owner@example.com", password: "new-password-1" });
    expect(result).toBe("promoted");
    const admin = await findAdmin("owner");
    expect(admin).toMatchObject({ role: "super_admin", is_active: true, email: "old@example.com" });
    expect(await bcrypt.compare("new-password-1", admin.password_hash)).toBe(true);
  });

  it("rejects a password shorter than 8 characters", async () => {
    await expect(ensureSuperAdmin(pool, { username: "owner", email: "owner@example.com", password: "short" })).rejects.toThrow(/at least 8/);
  });
});
