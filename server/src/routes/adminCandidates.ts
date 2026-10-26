import { Router, type Response } from "express";
import bcrypt from "bcrypt";
import { pool } from "../db/pool.js";
import { config } from "../config.js";
import { asyncHandler } from "../http/asyncHandler.js";
import { UUID_RE } from "../validation/taxonomy.js";
import { passwordProblem, validateAdminCandidateUpdate, type AdminCandidateUpdate } from "../validation/candidate.js";
import { jobPostExists } from "../services/candidates.js";

/**
 * Candidate management for the admin panel (mounted behind adminRequired + the admin/super_admin roles).
 * Never selects password_hash into a response.
 */
export const adminCandidatesRouter = Router();

const invalid = (res: Response, fields: Record<string, string>) =>
  res.status(400).json({ error: "Please correct the highlighted fields.", code: "validation_failed", fields });
const notFound = (res: Response) => res.status(404).json({ error: "Not found" });

const SELECT = `
  SELECT c.id, c.full_name, c.email, c.phone, c.target_post_id, p.title_en AS target_post_title,
         c.preferred_language, c.is_active, c.last_login, c.created_at,
         (SELECT count(*)::int FROM attempts a WHERE a.candidate_id = c.id) AS attempt_count
    FROM candidates c LEFT JOIN job_posts p ON p.id = c.target_post_id`;

interface Row {
  id: string; full_name: string; email: string; phone: string | null; target_post_id: string | null;
  target_post_title: string | null; preferred_language: "bn" | "en"; is_active: boolean;
  last_login: Date | null; created_at: Date; attempt_count: number;
}

const toAdminCandidate = (r: Row) => ({
  id: r.id,
  fullName: r.full_name,
  email: r.email,
  phone: r.phone,
  targetPostId: r.target_post_id,
  targetPostTitle: r.target_post_title,
  preferredLanguage: r.preferred_language,
  isActive: r.is_active,
  lastLogin: r.last_login,
  createdAt: r.created_at,
  attemptCount: r.attempt_count,
});

async function findCandidate(id: string) {
  if (!UUID_RE.test(id)) return null;
  const { rows } = await pool.query<Row>(`${SELECT} WHERE c.id = $1`, [id]);
  return rows[0] ? toAdminCandidate(rows[0]) : null;
}

const SORTS: Record<string, string> = {
  created: "c.created_at DESC",
  last_login: "c.last_login DESC NULLS LAST, c.created_at DESC",
  name: "lower(c.full_name), c.created_at DESC",
};

adminCandidatesRouter.get("/", asyncHandler(async (req, res) => {
  const q = req.query as Record<string, string | undefined>;
  const page = Math.max(1, parseInt(q.page ?? "1", 10) || 1);
  const pageSize = Math.min(100, Math.max(1, parseInt(q.pageSize ?? "25", 10) || 25));
  const where: string[] = [];
  const params: unknown[] = [];

  const search = (q.q ?? "").trim();
  if (search) {
    // ILIKE with the wildcards escaped, so a typed % or _ matches itself.
    params.push(`%${search.replace(/[\\%_]/g, (ch) => `\\${ch}`)}%`);
    const p = `$${params.length}`;
    where.push(`(c.full_name ILIKE ${p} OR c.email ILIKE ${p} OR c.phone ILIKE ${p})`);
  }
  if (q.status === "active") where.push("c.is_active");
  else if (q.status === "inactive") where.push("NOT c.is_active");

  const whereSql = where.length ? `WHERE ${where.join(" AND ")}` : "";
  const order = SORTS[q.sort ?? ""] ?? SORTS.created;
  const total = (await pool.query(`SELECT count(*)::int AS n FROM candidates c ${whereSql}`, params)).rows[0].n;
  const { rows } = await pool.query<Row>(
    `${SELECT} ${whereSql} ORDER BY ${order} LIMIT ${pageSize} OFFSET ${(page - 1) * pageSize}`,
    params,
  );
  res.json({ items: rows.map(toAdminCandidate), total, page, pageSize });
}));

adminCandidatesRouter.get("/stats", asyncHandler(async (_req, res) => {
  const { rows } = await pool.query(`
    SELECT count(*)::int AS total,
           count(*) FILTER (WHERE is_active)::int AS active,
           count(*) FILTER (WHERE NOT is_active)::int AS inactive,
           count(*) FILTER (WHERE created_at > now() - interval '7 days')::int AS "newLast7Days",
           count(*) FILTER (WHERE last_login > now() - interval '7 days')::int AS "activeLast7Days"
      FROM candidates`);
  res.json(rows[0]);
}));

adminCandidatesRouter.get("/:id", asyncHandler(async (req, res) => {
  const candidate = await findCandidate(req.params.id);
  if (!candidate) { notFound(res); return; }
  res.json(candidate);
}));

const COLUMNS: Record<keyof AdminCandidateUpdate, string> = {
  fullName: "full_name",
  email: "email",
  phone: "phone",
  targetPostId: "target_post_id",
  preferredLanguage: "preferred_language",
  isActive: "is_active",
};

adminCandidatesRouter.patch("/:id", asyncHandler(async (req, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  const result = validateAdminCandidateUpdate(req.body);
  if (result.ok === false) { invalid(res, result.fields); return; }
  const update = result.value;
  if (update.targetPostId && !(await jobPostExists(update.targetPostId))) {
    invalid(res, { targetPostId: "post_unknown" });
    return;
  }

  const keys = Object.keys(update) as (keyof AdminCandidateUpdate)[];
  if (keys.length) {
    try {
      const { rowCount } = await pool.query(
        `UPDATE candidates SET ${keys.map((k, i) => `${COLUMNS[k]} = $${i + 2}`).join(", ")}, updated_at = now() WHERE id = $1`,
        [req.params.id, ...keys.map((k) => update[k])],
      );
      if (!rowCount) { notFound(res); return; }
    } catch (err) {
      if ((err as { code?: string }).code === "23505") {
        res.status(409).json({ error: "Another account already uses this email.", code: "email_taken", fields: { email: "email_taken" } });
        return;
      }
      throw err;
    }
  }
  const candidate = await findCandidate(req.params.id);
  if (!candidate) { notFound(res); return; }
  res.json(candidate);
}));

adminCandidatesRouter.post("/:id/password", asyncHandler(async (req, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  const problem = passwordProblem(req.body?.password);
  if (problem) { invalid(res, { password: problem }); return; }
  const hash = await bcrypt.hash(req.body.password, config.bcryptRounds);
  const { rowCount } = await pool.query("UPDATE candidates SET password_hash = $2, updated_at = now() WHERE id = $1", [req.params.id, hash]);
  if (!rowCount) { notFound(res); return; }
  res.json({ updated: true });
}));

adminCandidatesRouter.delete("/:id", asyncHandler(async (req, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  // Attempts, answers, bookmarks and progress go with the account (ON DELETE CASCADE).
  const { rowCount } = await pool.query("DELETE FROM candidates WHERE id = $1", [req.params.id]);
  if (!rowCount) { notFound(res); return; }
  res.json({ deleted: true });
}));
