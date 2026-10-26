import { Router, type Response } from "express";
import { pool } from "../db/pool.js";
import { asyncHandler } from "../http/asyncHandler.js";
import { UUID_RE } from "../validation/taxonomy.js";
import { parseAnnouncement, type AnnouncementInput } from "../validation/content.js";
import type { AuthRequest } from "../middleware/auth.js";

/** Notices on the candidate dashboard (exam dates, circulars, maintenance), managed by any admin role. */
export const announcementsRouter = Router();

const invalid = (res: Response, fields: Record<string, string>) =>
  res.status(400).json({ error: "Please correct the highlighted fields.", code: "validation_failed", fields });
const notFound = (res: Response) => res.status(404).json({ error: "Not found" });

const COLUMNS: (keyof AnnouncementInput)[] = [
  "title_en", "title_bn", "body_en", "body_bn", "tone", "link_url", "link_label_en", "link_label_bn",
  "starts_at", "ends_at", "is_pinned", "is_published",
];

/** Published notices whose window includes now: pinned first, then newest. */
export const LIVE_ANNOUNCEMENTS_SQL = `
  SELECT id, title_en, title_bn, body_en, body_bn, tone, link_url, link_label_en, link_label_bn, starts_at, ends_at, is_pinned
  FROM announcements
  WHERE is_published AND (starts_at IS NULL OR starts_at <= now()) AND (ends_at IS NULL OR ends_at > now())
  ORDER BY is_pinned DESC, COALESCE(starts_at, created_at) DESC
  LIMIT 10`;

announcementsRouter.get("/", asyncHandler(async (_req, res) => {
  res.json((await pool.query("SELECT * FROM announcements ORDER BY is_pinned DESC, COALESCE(starts_at, created_at) DESC")).rows);
}));

announcementsRouter.post("/", asyncHandler(async (req: AuthRequest, res) => {
  const parsed = parseAnnouncement(req.body);
  if (parsed.ok === false) { invalid(res, parsed.fields); return; }
  const { rows } = await pool.query(
    `INSERT INTO announcements (${COLUMNS.join(", ")}, created_by)
     VALUES (${COLUMNS.map((_, i) => `$${i + 1}`).join(", ")}, $${COLUMNS.length + 1}) RETURNING *`,
    [...COLUMNS.map((c) => parsed.value[c]), req.user?.id ?? null],
  );
  res.status(201).json(rows[0]);
}));

announcementsRouter.put("/:id", asyncHandler(async (req: AuthRequest, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  const parsed = parseAnnouncement(req.body);
  if (parsed.ok === false) { invalid(res, parsed.fields); return; }
  const { rows } = await pool.query(
    `UPDATE announcements SET ${COLUMNS.map((c, i) => `${c} = $${i + 2}`).join(", ")}, updated_at = now()
     WHERE id = $1 RETURNING *`,
    [req.params.id, ...COLUMNS.map((c) => parsed.value[c])],
  );
  if (!rows[0]) { notFound(res); return; }
  res.json(rows[0]);
}));

announcementsRouter.delete("/:id", asyncHandler(async (req: AuthRequest, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  const { rows } = await pool.query("DELETE FROM announcements WHERE id = $1 RETURNING id", [req.params.id]);
  if (!rows[0]) { notFound(res); return; }
  res.json({ deleted: true });
}));
