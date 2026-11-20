import { Router, type Response } from "express";
import { pool } from "../db/pool.js";
import { asyncHandler } from "../http/asyncHandler.js";
import { UUID_RE } from "../validation/taxonomy.js";
import { parseResource, RESOURCE_CATEGORIES, type ResourceInput } from "../validation/content.js";
import type { AuthRequest } from "../middleware/auth.js";

/** Circulars, suggestions, past exam questions and other downloads for candidates, managed by any admin role. */
export const resourcesRouter = Router();

const invalid = (res: Response, fields: Record<string, string>) =>
  res.status(400).json({ error: "Please correct the highlighted fields.", code: "validation_failed", fields });
const notFound = (res: Response) => res.status(404).json({ error: "Not found" });

const COLUMNS: (keyof ResourceInput)[] = [
  "category", "tag", "title_en", "title_bn", "details_en", "details_bn", "file_id", "link_url", "apply_url",
  "starts_on", "ends_on", "is_pinned", "is_published",
];

/**
 * Each resource with its file's name, type and URL. Dates go out as `YYYY-MM-DD` text: a DATE read as a JS
 * Date would shift by the server's time zone.
 */
const SELECT = `
  SELECT r.id, r.category, r.tag, r.title_en, r.title_bn, r.details_en, r.details_bn, r.file_id, r.link_url, r.apply_url,
         to_char(r.starts_on, 'YYYY-MM-DD') AS starts_on, to_char(r.ends_on, 'YYYY-MM-DD') AS ends_on,
         r.is_pinned, r.is_published, r.created_at, r.updated_at,
         f.original_name AS file_name, f.mime_type AS file_type, f.file_size,
         CASE WHEN f.storage_path IS NULL THEN NULL ELSE '/uploads/' || f.storage_path END AS file_url
    FROM resources r LEFT JOIN uploaded_files f ON f.id = r.file_id`;

/** Pinned first; circulars still open come before closed ones, nearest deadline first; then newest. */
const ORDER = `ORDER BY r.is_pinned DESC,
  (r.ends_on IS NOT NULL AND r.ends_on < CURRENT_DATE),
  COALESCE(r.starts_on, r.created_at::date) DESC, r.created_at DESC`;

export const PUBLISHED_RESOURCES_SQL = `${SELECT} WHERE r.is_published ${ORDER}`;

const byId = async (id: string) => (await pool.query(`${SELECT} WHERE r.id = $1`, [id])).rows[0];

/** A file_id that names no uploaded file is a field error, not a server error. */
const isMissingFile = (e: unknown) => (e as { code?: string; constraint?: string }).code === "23503";

resourcesRouter.get("/", asyncHandler(async (req, res) => {
  const category = req.query.category;
  if (typeof category === "string" && (RESOURCE_CATEGORIES as readonly string[]).includes(category)) {
    res.json((await pool.query(`${SELECT} WHERE r.category = $1 ${ORDER}`, [category])).rows);
    return;
  }
  res.json((await pool.query(`${SELECT} ${ORDER}`)).rows);
}));

resourcesRouter.post("/", asyncHandler(async (req: AuthRequest, res) => {
  const parsed = parseResource(req.body);
  if (parsed.ok === false) { invalid(res, parsed.fields); return; }
  try {
    const { rows } = await pool.query(
      `INSERT INTO resources (${COLUMNS.join(", ")}, created_by)
       VALUES (${COLUMNS.map((_, i) => `$${i + 1}`).join(", ")}, $${COLUMNS.length + 1}) RETURNING id`,
      [...COLUMNS.map((c) => parsed.value[c]), req.user?.id ?? null],
    );
    res.status(201).json(await byId(rows[0].id));
  } catch (e) {
    if (isMissingFile(e)) { invalid(res, { file_id: "file_unknown" }); return; }
    throw e;
  }
}));

resourcesRouter.put("/:id", asyncHandler(async (req: AuthRequest, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  const parsed = parseResource(req.body);
  if (parsed.ok === false) { invalid(res, parsed.fields); return; }
  try {
    const { rows } = await pool.query(
      `UPDATE resources SET ${COLUMNS.map((c, i) => `${c} = $${i + 2}`).join(", ")}, updated_at = now()
       WHERE id = $1 RETURNING id`,
      [req.params.id, ...COLUMNS.map((c) => parsed.value[c])],
    );
    if (!rows[0]) { notFound(res); return; }
    res.json(await byId(rows[0].id));
  } catch (e) {
    if (isMissingFile(e)) { invalid(res, { file_id: "file_unknown" }); return; }
    throw e;
  }
}));

/** Removes the listing only; its file stays in the media library (it may be used elsewhere). */
resourcesRouter.delete("/:id", asyncHandler(async (req: AuthRequest, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  const { rows } = await pool.query("DELETE FROM resources WHERE id = $1 RETURNING id", [req.params.id]);
  if (!rows[0]) { notFound(res); return; }
  res.json({ deleted: true });
}));
