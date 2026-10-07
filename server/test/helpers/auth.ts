import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../../src/db/pool";
import { signToken, type AdminRole } from "../../src/auth/tokens";

export async function createAdmin(role: AdminRole = "admin", password = "admin-pass-123") {
  const username = `${role}_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  const hash = await bcrypt.hash(password, 4);
  const { rows } = await pool.query(
    "INSERT INTO admin_users (username, email, password_hash, role) VALUES ($1, $2, $3, $4) RETURNING id, username, role",
    [username, `${username}@example.com`, hash, role],
  );
  const user = rows[0] as { id: string; username: string; role: AdminRole };
  return { ...user, password, token: signToken({ kind: "admin", id: user.id, username: user.username, role: user.role }) };
}

export function candidateToken(id = "00000000-0000-0000-0000-000000000001", email = "candidate@example.com") {
  return signToken({ kind: "candidate", id, email });
}

/** A token in the pre-upgrade shape: valid signature, no `kind`. */
export function legacyAdminToken() {
  return jwt.sign({ id: "00000000-0000-0000-0000-000000000002", username: "old", role: "admin" }, process.env.JWT_SECRET!);
}
