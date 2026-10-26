import { Router, type Response } from "express";
import bcrypt from "bcrypt";
import { pool } from "../db/pool.js";
import { config } from "../config.js";
import { signToken } from "../auth/tokens.js";
import type { CandidateRequest } from "../middleware/auth.js";
import { asyncHandler } from "../http/asyncHandler.js";
import { normalizeEmail, validateProfileUpdate, validateRegistration, type ProfileUpdate } from "../validation/candidate.js";
import { CANDIDATE_COLUMNS, jobPostExists, toPublicCandidate, type PublicCandidate } from "../services/candidates.js";

export const candidateAuthRouter = Router();
export const candidateMeRouter = Router();

function sendValidationError(res: Response, fields: Record<string, string>) {
  res.status(400).json({ error: "Please correct the highlighted fields.", code: "validation_failed", fields });
}

function sendSession(res: Response, status: number, candidate: PublicCandidate) {
  res.status(status).json({ token: signToken({ kind: "candidate", id: candidate.id, email: candidate.email }), candidate });
}

let dummyHash: string | null = null;
/** Hash compared against when the email is unknown, so response time doesn't reveal which emails exist. */
async function getDummyHash(): Promise<string> {
  dummyHash ??= await bcrypt.hash("timing-equaliser", config.bcryptRounds);
  return dummyHash;
}

candidateAuthRouter.post("/register", asyncHandler(async (req, res) => {
  const result = validateRegistration(req.body);
  if (result.ok === false) { sendValidationError(res, result.fields); return; }
  const input = result.value;

  if (input.targetPostId && !(await jobPostExists(input.targetPostId))) {
    sendValidationError(res, { targetPostId: "post_unknown" });
    return;
  }

  const passwordHash = await bcrypt.hash(input.password, config.bcryptRounds);
  try {
    const { rows } = await pool.query(
      `INSERT INTO candidates (full_name, email, phone, password_hash, target_post_id, preferred_language)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING ${CANDIDATE_COLUMNS}`,
      [input.fullName, input.email, input.phone, passwordHash, input.targetPostId, input.preferredLanguage],
    );
    sendSession(res, 201, toPublicCandidate(rows[0]));
  } catch (err) {
    if ((err as { code?: string }).code === "23505") {
      res.status(409).json({ error: "An account with this email already exists.", code: "email_taken", fields: { email: "email_taken" } });
      return;
    }
    throw err;
  }
}));

candidateAuthRouter.post("/login", asyncHandler(async (req, res) => {
  const email = normalizeEmail(req.body?.email);
  const password = typeof req.body?.password === "string" ? req.body.password : "";
  if (!email || !password) {
    const fields: Record<string, string> = {};
    if (!email) fields.email = "required";
    if (!password) fields.password = "required";
    sendValidationError(res, fields);
    return;
  }

  const { rows } = await pool.query(
    `SELECT ${CANDIDATE_COLUMNS}, password_hash, is_active FROM candidates WHERE lower(email) = $1`,
    [email],
  );
  const row = rows[0];
  let passwordOk = false;
  if (row) passwordOk = await bcrypt.compare(password, row.password_hash);
  else await bcrypt.compare(password, await getDummyHash());

  if (!row || !row.is_active || !passwordOk) {
    res.status(401).json({ error: "Email or password is incorrect.", code: "bad_credentials" });
    return;
  }

  await pool.query("UPDATE candidates SET last_login = now() WHERE id = $1", [row.id]);
  sendSession(res, 200, toPublicCandidate(row));
}));

function sendInactive(res: Response) {
  res.status(401).json({ error: "This account is not available. Sign in again.", code: "account_inactive" });
}

candidateMeRouter.get("/", asyncHandler<CandidateRequest>(async (req, res) => {
  const { rows } = await pool.query(`SELECT ${CANDIDATE_COLUMNS} FROM candidates WHERE id = $1 AND is_active`, [req.candidate.id]);
  if (!rows[0]) { sendInactive(res); return; }
  res.json({ candidate: toPublicCandidate(rows[0]) });
}));

const PROFILE_COLUMNS: Record<keyof ProfileUpdate, string> = {
  fullName: "full_name",
  phone: "phone",
  targetPostId: "target_post_id",
  preferredLanguage: "preferred_language",
};

candidateMeRouter.patch("/", asyncHandler<CandidateRequest>(async (req, res) => {
  const result = validateProfileUpdate(req.body);
  if (result.ok === false) { sendValidationError(res, result.fields); return; }
  const update = result.value;

  if (update.targetPostId && !(await jobPostExists(update.targetPostId))) {
    sendValidationError(res, { targetPostId: "post_unknown" });
    return;
  }

  const keys = Object.keys(update) as (keyof ProfileUpdate)[];
  const sql = keys.length
    ? `UPDATE candidates SET ${keys.map((k, i) => `${PROFILE_COLUMNS[k]} = $${i + 2}`).join(", ")}
       WHERE id = $1 AND is_active RETURNING ${CANDIDATE_COLUMNS}`
    : `SELECT ${CANDIDATE_COLUMNS} FROM candidates WHERE id = $1 AND is_active`;
  const { rows } = await pool.query(sql, [req.candidate.id, ...keys.map((k) => update[k])]);
  if (!rows[0]) { sendInactive(res); return; }
  res.json({ candidate: toPublicCandidate(rows[0]) });
}));
