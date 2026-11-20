import { Router, type Response } from "express";
import { pool } from "../db/pool.js";
import { withTransaction } from "../db/tx.js";
import { asyncHandler } from "../http/asyncHandler.js";
import { text } from "../services/questionContent.js";
import { getSettings, parseSetting, saveSetting, SETTING_KEYS, type SiteSettings } from "../services/siteSettings.js";
import { UUID_RE } from "../validation/taxonomy.js";
import type { AuthRequest } from "../middleware/auth.js";
import { PLAN_SELECT } from "./site.js";

const invalid = (res: Response, fields: Record<string, string>) =>
  res.status(400).json({ error: "Please correct the highlighted fields.", code: "validation_failed", fields });
const notFound = (res: Response) => res.status(404).json({ error: "Not found" });

// ── Settings (/api/admin-settings): contact, payment numbers, paywall ───────────

export const adminSettingsRouter = Router();

adminSettingsRouter.get("/", asyncHandler(async (_req, res) => { res.json(await getSettings()); }));

adminSettingsRouter.put("/:key", asyncHandler(async (req: AuthRequest, res) => {
  const key = req.params.key as keyof SiteSettings;
  if (!SETTING_KEYS.includes(key)) { notFound(res); return; }
  const parsed = parseSetting(key, req.body);
  if (parsed.ok === false) { invalid(res, parsed.fields); return; }
  await saveSetting(key, parsed.value, req.user?.id ?? null);
  res.json(await getSettings());
}));

// ── Articles (/api/articles) ────────────────────────────────────────────────────

export const adminArticlesRouter = Router();

const ARTICLE_CATEGORIES = ["guideline", "news", "written", "solution"] as const;
/** Far above any real article; stops a runaway paste. */
const MAX_BODY = 500_000;

interface ArticleInput {
  slug: string; category: string; title_en: string; title_bn: string | null; summary_en: string | null; summary_bn: string | null;
  body_en: string; body_bn: string | null; cover_file_id: string | null; tags: string[]; is_pinned: boolean; is_published: boolean;
}

/** "BPSC Non-Cadre circular 2025!" → "bpsc-non-cadre-circular-2025"; Bangla-only titles fall back to a dated slug. */
export function slugify(title: string): string {
  const s = title.toLowerCase().normalize("NFKD").replace(/[^\x20-\x7e]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
  return s.replace(/-+$/, "") || `article-${Date.now().toString(36)}`;
}

function parseArticle(input: unknown): { ok: true; value: ArticleInput } | { ok: false; fields: Record<string, string> } {
  const b = (input ?? {}) as Record<string, unknown>;
  const fields: Record<string, string> = {};
  const category = b.category as string;
  if (!(ARTICLE_CATEGORIES as readonly string[]).includes(category)) fields.category = "category_invalid";
  const title_en = text(b.title_en);
  if (!title_en) fields.title_en = "required";
  else if (title_en.length > 200) fields.title_en = "too_long";
  const title_bn = text(b.title_bn);
  if (title_bn && title_bn.length > 200) fields.title_bn = "too_long";
  let slug = text(b.slug)?.toLowerCase() ?? "";
  if (!slug && title_en) slug = slugify(title_en);
  if (slug && (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug) || slug.length > 120)) fields.slug = "slug_invalid";
  const body_en = typeof b.body_en === "string" ? b.body_en : "";
  const body_bn = typeof b.body_bn === "string" && b.body_bn.trim() ? b.body_bn : null;
  if (body_en.length > MAX_BODY) fields.body_en = "too_long";
  if (body_bn && body_bn.length > MAX_BODY) fields.body_bn = "too_long";
  if (b.is_published === true && !body_en.replace(/<[^>]*>/g, "").trim() && !body_bn) fields.body_en = "required";
  let cover_file_id: string | null = null;
  if (b.cover_file_id) {
    if (typeof b.cover_file_id !== "string" || !UUID_RE.test(b.cover_file_id)) fields.cover_file_id = "file_unknown";
    else cover_file_id = b.cover_file_id;
  }
  const tags = Array.isArray(b.tags)
    ? [...new Set(b.tags.filter((x): x is string => typeof x === "string").map((x) => x.trim().slice(0, 40)).filter(Boolean))].slice(0, 10)
    : [];
  const summary = (v: unknown) => text(v)?.slice(0, 500) ?? null;
  if (Object.keys(fields).length) return { ok: false, fields };
  return {
    ok: true,
    value: {
      slug, category, title_en: title_en!, title_bn, summary_en: summary(b.summary_en), summary_bn: summary(b.summary_bn),
      body_en, body_bn, cover_file_id, tags, is_pinned: b.is_pinned === true, is_published: b.is_published === true,
    },
  };
}

const ARTICLE_COLUMNS: (keyof ArticleInput)[] = [
  "slug", "category", "title_en", "title_bn", "summary_en", "summary_bn", "body_en", "body_bn", "cover_file_id", "tags", "is_pinned", "is_published",
];
const ARTICLE_ADMIN_SELECT = `SELECT a.*, CASE WHEN f.storage_path IS NULL THEN NULL ELSE '/uploads/' || f.storage_path END AS cover_url
  FROM articles a LEFT JOIN uploaded_files f ON f.id = a.cover_file_id`;

/** A database error from a duplicate slug or a deleted cover file, as a field error. */
function articleDbError(res: Response, e: unknown): boolean {
  const err = e as { code?: string; constraint?: string };
  if (err.code === "23505") { invalid(res, { slug: "slug_taken" }); return true; }
  if (err.code === "23503") { invalid(res, { cover_file_id: "file_unknown" }); return true; }
  return false;
}

adminArticlesRouter.get("/", asyncHandler(async (_req, res) => {
  // The list leaves out the bodies; the editor loads one article at a time.
  const { rows } = await pool.query(
    `SELECT a.id, a.slug, a.category, a.title_en, a.title_bn, a.tags, a.is_pinned, a.is_published, a.published_at, a.views, a.updated_at
       FROM articles a ORDER BY a.is_pinned DESC, COALESCE(a.published_at, a.created_at) DESC`,
  );
  res.json(rows);
}));

adminArticlesRouter.get("/:id", asyncHandler(async (req, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  const { rows } = await pool.query(`${ARTICLE_ADMIN_SELECT} WHERE a.id = $1`, [req.params.id]);
  if (!rows[0]) { notFound(res); return; }
  res.json(rows[0]);
}));

adminArticlesRouter.post("/", asyncHandler(async (req: AuthRequest, res) => {
  const parsed = parseArticle(req.body);
  if (parsed.ok === false) { invalid(res, parsed.fields); return; }
  try {
    const { rows } = await pool.query(
      `INSERT INTO articles (${ARTICLE_COLUMNS.join(", ")}, published_at, created_by)
       VALUES (${ARTICLE_COLUMNS.map((_, i) => `$${i + 1}`).join(", ")}, CASE WHEN $12 THEN now() END, $13) RETURNING id`,
      [...ARTICLE_COLUMNS.map((c) => parsed.value[c]), req.user?.id ?? null],
    );
    res.status(201).json((await pool.query(`${ARTICLE_ADMIN_SELECT} WHERE a.id = $1`, [rows[0].id])).rows[0]);
  } catch (e) { if (!articleDbError(res, e)) throw e; }
}));

adminArticlesRouter.put("/:id", asyncHandler(async (req: AuthRequest, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  const parsed = parseArticle(req.body);
  if (parsed.ok === false) { invalid(res, parsed.fields); return; }
  try {
    // published_at is set the first time an article is published and kept after that.
    const { rows } = await pool.query(
      `UPDATE articles SET ${ARTICLE_COLUMNS.map((c, i) => `${c} = $${i + 2}`).join(", ")},
              published_at = CASE WHEN $13 AND published_at IS NULL THEN now() ELSE published_at END, updated_at = now()
        WHERE id = $1 RETURNING id`,
      [req.params.id, ...ARTICLE_COLUMNS.map((c) => parsed.value[c])],
    );
    if (!rows[0]) { notFound(res); return; }
    res.json((await pool.query(`${ARTICLE_ADMIN_SELECT} WHERE a.id = $1`, [rows[0].id])).rows[0]);
  } catch (e) { if (!articleDbError(res, e)) throw e; }
}));

adminArticlesRouter.delete("/:id", asyncHandler(async (req, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  const { rowCount } = await pool.query("DELETE FROM articles WHERE id = $1", [req.params.id]);
  if (!rowCount) { notFound(res); return; }
  res.json({ deleted: true });
}));

// ── Plans (/api/plans) ──────────────────────────────────────────────────────────

export const adminPlansRouter = Router();

interface PlanInput {
  name_en: string; name_bn: string | null; description_en: string | null; description_bn: string | null;
  features_en: string[]; features_bn: string[]; months: number; price_bdt: number; is_featured: boolean; is_active: boolean; sort_order: number;
}

function parsePlan(input: unknown): { ok: true; value: PlanInput } | { ok: false; fields: Record<string, string> } {
  const b = (input ?? {}) as Record<string, unknown>;
  const fields: Record<string, string> = {};
  const name_en = text(b.name_en);
  if (!name_en) fields.name_en = "required";
  else if (name_en.length > 100) fields.name_en = "too_long";
  const name_bn = text(b.name_bn);
  if (name_bn && name_bn.length > 100) fields.name_bn = "too_long";
  const months = Number(b.months);
  if (!Number.isInteger(months) || months < 1 || months > 36) fields.months = "months_invalid";
  const price = Number(b.price_bdt);
  if (!Number.isInteger(price) || price < 0 || price > 1_000_000) fields.price_bdt = "price_invalid";
  const list = (v: unknown) => (Array.isArray(v) ? v.filter((x): x is string => typeof x === "string").map((x) => x.trim().slice(0, 200)).filter(Boolean).slice(0, 15) : []);
  if (Object.keys(fields).length) return { ok: false, fields };
  return {
    ok: true,
    value: {
      name_en: name_en!, name_bn, description_en: text(b.description_en)?.slice(0, 1000) ?? null, description_bn: text(b.description_bn)?.slice(0, 1000) ?? null,
      features_en: list(b.features_en), features_bn: list(b.features_bn), months, price_bdt: price,
      is_featured: b.is_featured === true, is_active: b.is_active !== false, sort_order: Number.isInteger(Number(b.sort_order)) ? Number(b.sort_order) : 0,
    },
  };
}

const PLAN_COLUMNS: (keyof PlanInput)[] = [
  "name_en", "name_bn", "description_en", "description_bn", "features_en", "features_bn", "months", "price_bdt", "is_featured", "is_active", "sort_order",
];

adminPlansRouter.get("/", asyncHandler(async (_req, res) => {
  res.json((await pool.query(`${PLAN_SELECT} ORDER BY sort_order, months, price_bdt`)).rows);
}));

adminPlansRouter.post("/", asyncHandler(async (req, res) => {
  const parsed = parsePlan(req.body);
  if (parsed.ok === false) { invalid(res, parsed.fields); return; }
  const { rows } = await pool.query(
    `INSERT INTO plans (${PLAN_COLUMNS.join(", ")}) VALUES (${PLAN_COLUMNS.map((_, i) => `$${i + 1}`).join(", ")}) RETURNING id`,
    PLAN_COLUMNS.map((c) => parsed.value[c]),
  );
  res.status(201).json((await pool.query(`${PLAN_SELECT} WHERE id = $1`, [rows[0].id])).rows[0]);
}));

adminPlansRouter.put("/:id", asyncHandler(async (req, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  const parsed = parsePlan(req.body);
  if (parsed.ok === false) { invalid(res, parsed.fields); return; }
  const { rowCount } = await pool.query(
    `UPDATE plans SET ${PLAN_COLUMNS.map((c, i) => `${c} = $${i + 2}`).join(", ")}, updated_at = now() WHERE id = $1`,
    [req.params.id, ...PLAN_COLUMNS.map((c) => parsed.value[c])],
  );
  if (!rowCount) { notFound(res); return; }
  res.json((await pool.query(`${PLAN_SELECT} WHERE id = $1`, [req.params.id])).rows[0]);
}));

/** Payments keep their own copy of the plan, so deleting a plan never changes what someone paid for. */
adminPlansRouter.delete("/:id", asyncHandler(async (req, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  const { rowCount } = await pool.query("DELETE FROM plans WHERE id = $1", [req.params.id]);
  if (!rowCount) { notFound(res); return; }
  res.json({ deleted: true });
}));

// ── Payments (/api/payments): check a bKash/Nagad transaction, then approve or reject ──

export const adminPaymentsRouter = Router();

const PAYMENT_SELECT = `
  SELECT p.id, p.candidate_id, c.full_name, c.email, c.phone, c.subscription_until, p.plan_id, p.plan_name, p.months, p.amount_bdt,
         p.method, p.sender_number, p.trx_id, p.status, p.admin_note, p.reviewed_at, ru.username AS reviewed_by_name, p.created_at
    FROM payments p JOIN candidates c ON c.id = p.candidate_id LEFT JOIN admin_users ru ON ru.id = p.reviewed_by`;

adminPaymentsRouter.get("/", asyncHandler(async (req, res) => {
  const status = ["pending", "approved", "rejected"].includes(String(req.query.status)) ? String(req.query.status) : null;
  const q = typeof req.query.q === "string" ? req.query.q.trim().slice(0, 100) : "";
  const params: unknown[] = [status];
  let where = "($1::text IS NULL OR p.status = $1)";
  if (q) {
    params.push(`%${q.replace(/[\\%_]/g, (ch) => `\\${ch}`)}%`);
    where += ` AND (p.trx_id ILIKE $2 OR p.sender_number ILIKE $2 OR c.full_name ILIKE $2 OR c.email ILIKE $2)`;
  }
  const { rows } = await pool.query(`${PAYMENT_SELECT} WHERE ${where} ORDER BY (p.status = 'pending') DESC, p.created_at DESC LIMIT 200`, params);
  const counts = await pool.query("SELECT status, count(*)::int AS n FROM payments GROUP BY status");
  res.json({ items: rows, counts: Object.fromEntries(counts.rows.map((r) => [r.status, r.n])) });
}));

/** Approving adds the plan's months to the candidate's paid time (from today, or from the end of time already paid). */
adminPaymentsRouter.post("/:id/approve", asyncHandler(async (req: AuthRequest, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  const ok = await withTransaction(async (client) => {
    const { rows } = await client.query("SELECT candidate_id, months, status FROM payments WHERE id = $1 FOR UPDATE", [req.params.id]);
    const p = rows[0];
    if (!p) return "not_found";
    if (p.status !== "pending") return "already_reviewed";
    await client.query(
      `UPDATE candidates SET subscription_until = GREATEST(COALESCE(subscription_until, now()), now()) + make_interval(months => $2)
        WHERE id = $1`,
      [p.candidate_id, p.months],
    );
    await client.query(
      "UPDATE payments SET status = 'approved', admin_note = $2, reviewed_by = $3, reviewed_at = now() WHERE id = $1",
      [req.params.id, text(req.body?.note)?.slice(0, 500) ?? null, req.user?.id ?? null],
    );
    return "ok";
  });
  if (ok === "not_found") { notFound(res); return; }
  if (ok === "already_reviewed") { res.status(409).json({ error: "This payment was already reviewed.", code: "already_reviewed" }); return; }
  res.json((await pool.query(`${PAYMENT_SELECT} WHERE p.id = $1`, [req.params.id])).rows[0]);
}));

adminPaymentsRouter.post("/:id/reject", asyncHandler(async (req: AuthRequest, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  const note = text(req.body?.note)?.slice(0, 500);
  if (!note) { invalid(res, { note: "required" }); return; }
  const { rowCount } = await pool.query(
    "UPDATE payments SET status = 'rejected', admin_note = $2, reviewed_by = $3, reviewed_at = now() WHERE id = $1 AND status = 'pending'",
    [req.params.id, note, req.user?.id ?? null],
  );
  if (!rowCount) {
    const exists = (await pool.query("SELECT 1 FROM payments WHERE id = $1", [req.params.id])).rowCount;
    if (!exists) { notFound(res); return; }
    res.status(409).json({ error: "This payment was already reviewed.", code: "already_reviewed" }); return;
  }
  res.json((await pool.query(`${PAYMENT_SELECT} WHERE p.id = $1`, [req.params.id])).rows[0]);
}));
