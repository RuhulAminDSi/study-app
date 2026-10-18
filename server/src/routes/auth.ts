import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../db/pool.js";
import { config } from "../config.js";
import { signToken, type AdminRole } from "../auth/tokens.js";
import { superAdminRequired } from "../middleware/auth.js";
import { asyncHandler } from "../http/asyncHandler.js";

const router = Router();
const ADMIN_ROLES: AdminRole[] = ["super_admin", "admin", "editor"];

let dummyHash: string | null = null;
/** Hash compared against when the username is unknown, so response time doesn't reveal which usernames exist. */
async function getDummyHash(): Promise<string> {
  dummyHash ??= await bcrypt.hash("timing-equaliser", config.bcryptRounds);
  return dummyHash;
}

router.post("/login", asyncHandler(async (req, res) => {
  const { username, password } = req.body ?? {};
  if (!username || !password) {
    res.status(400).json({ error: "Username and password required" });
    return;
  }
  const result = await pool.query(
    "SELECT id, username, email, password_hash, role, is_active FROM admin_users WHERE username = $1",
    [username],
  );
  const user = result.rows[0];
  const passwordOk = await bcrypt.compare(String(password), user ? user.password_hash : await getDummyHash());
  if (!user || !user.is_active || !passwordOk) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }
  await pool.query("UPDATE admin_users SET last_login = now() WHERE id = $1", [user.id]);
  const token = signToken({ kind: "admin", id: user.id, username: user.username, role: user.role });
  res.json({ token, user: { id: user.id, username: user.username, email: user.email, role: user.role } });
}));

router.post("/register", superAdminRequired, asyncHandler(async (req, res) => {
  const { username, email, password, role = "editor" } = req.body ?? {};
  if (typeof username !== "string" || typeof email !== "string" || typeof password !== "string" || !username || !email) {
    res.status(400).json({ error: "username, email and password are required text fields" });
    return;
  }
  if (password.length < 8 || Buffer.byteLength(password, "utf8") > 72) {
    res.status(400).json({ error: "password must be 8–72 bytes long" });
    return;
  }
  if (!ADMIN_ROLES.includes(role)) {
    res.status(400).json({ error: `role must be one of: ${ADMIN_ROLES.join(", ")}` });
    return;
  }
  const passwordHash = await bcrypt.hash(password, config.bcryptRounds);
  try {
    const result = await pool.query(
      `INSERT INTO admin_users (username, email, password_hash, role)
       VALUES ($1, $2, $3, $4)
       RETURNING id, username, email, role`,
      [username, email, passwordHash, role],
    );
    res.status(201).json({ user: result.rows[0] });
  } catch (err) {
    if ((err as { code?: string }).code === "23505") {
      res.status(409).json({ error: "Username or email already exists" });
      return;
    }
    throw err;
  }
}));

export default router;
