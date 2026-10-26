import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../db/pool.js";
import { config } from "../config.js";
import { signToken } from "../auth/tokens.js";
import { asyncHandler } from "../http/asyncHandler.js";
import { normalizeEmail } from "../validation/candidate.js";
import { CANDIDATE_COLUMNS, toPublicCandidate } from "../services/candidates.js";

/**
 * One sign-in for everybody (the Study Hub login page): an email or username plus a password.
 * Candidate accounts are checked first (by email), then admin accounts (by username or email), and the
 * response says which kind signed in. Failures share one code, and an unknown identifier still costs a
 * bcrypt comparison, so neither the message nor the timing reveals which accounts exist.
 */
export const signInRouter = Router();

let dummyHash: string | null = null;
async function getDummyHash(): Promise<string> {
  dummyHash ??= await bcrypt.hash("timing-equaliser", config.bcryptRounds);
  return dummyHash;
}

signInRouter.post("/", asyncHandler(async (req, res) => {
  const identifier = typeof req.body?.identifier === "string" ? req.body.identifier.trim() : "";
  const password = typeof req.body?.password === "string" ? req.body.password : "";
  if (!identifier || !password) {
    const fields: Record<string, string> = {};
    if (!identifier) fields.identifier = "required";
    if (!password) fields.password = "required";
    res.status(400).json({ error: "Please correct the highlighted fields.", code: "validation_failed", fields });
    return;
  }

  let compared = false;

  if (identifier.includes("@")) {
    const email = normalizeEmail(identifier);
    const { rows } = await pool.query(
      `SELECT ${CANDIDATE_COLUMNS}, password_hash, is_active FROM candidates WHERE lower(email) = $1`,
      [email],
    );
    const candidate = rows[0];
    if (candidate) {
      compared = true;
      if (candidate.is_active && (await bcrypt.compare(password, candidate.password_hash))) {
        await pool.query("UPDATE candidates SET last_login = now() WHERE id = $1", [candidate.id]);
        const publicCandidate = toPublicCandidate(candidate);
        res.json({
          kind: "candidate",
          token: signToken({ kind: "candidate", id: publicCandidate.id, email: publicCandidate.email }),
          candidate: publicCandidate,
        });
        return;
      }
    }
  }

  const { rows: admins } = await pool.query(
    "SELECT id, username, email, password_hash, role, is_active FROM admin_users WHERE username = $1 OR lower(email) = lower($1)",
    [identifier],
  );
  const admin = admins[0];
  if (admin) {
    compared = true;
    if (admin.is_active && (await bcrypt.compare(password, admin.password_hash))) {
      await pool.query("UPDATE admin_users SET last_login = now() WHERE id = $1", [admin.id]);
      res.json({
        kind: "admin",
        token: signToken({ kind: "admin", id: admin.id, username: admin.username, role: admin.role }),
        user: { id: admin.id, username: admin.username, email: admin.email, role: admin.role },
      });
      return;
    }
  }

  if (!compared) await bcrypt.compare(password, await getDummyHash());
  res.status(401).json({ error: "Email, username or password is incorrect.", code: "bad_credentials" });
}));
