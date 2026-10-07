import bcrypt from "bcrypt";
import type { Pool } from "pg";
import { pool } from "./pool.js";
import { config } from "../config.js";

export interface SuperAdminInput {
  username: string;
  email: string;
  password: string;
}

/**
 * Creates a super admin, or promotes and re-activates an existing admin with that username and
 * resets their password. This is the only way to get the first super admin now that
 * POST /api/auth/register requires one.
 */
export async function ensureSuperAdmin(db: Pool, input: SuperAdminInput): Promise<"created" | "promoted"> {
  if (input.password.length < 8) throw new Error("Password must be at least 8 characters");
  const passwordHash = await bcrypt.hash(input.password, config.bcryptRounds);
  const updated = await db.query(
    "UPDATE admin_users SET role = 'super_admin', is_active = true, password_hash = $2, updated_at = now() WHERE username = $1",
    [input.username, passwordHash],
  );
  if (updated.rowCount) return "promoted";
  await db.query(
    "INSERT INTO admin_users (username, email, password_hash, role) VALUES ($1, $2, $3, 'super_admin')",
    [input.username, input.email, passwordHash],
  );
  return "created";
}

// CLI: ADMIN_PASSWORD=... npm run create-admin -- <username> <email>
// The password comes from the environment so it doesn't land in shell history.
if (require.main === module) {
  const [username, email] = process.argv.slice(2);
  const password = process.env.ADMIN_PASSWORD ?? "";
  if (!username || !email || !password) {
    console.error("Usage: ADMIN_PASSWORD=<password> npm run create-admin -- <username> <email>");
    process.exit(1);
  }
  ensureSuperAdmin(pool, { username, email, password })
    .then((result) => console.log(`Super admin "${username}" ${result}.`))
    .then(() => pool.end())
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err.message || err);
      process.exit(1);
    });
}
