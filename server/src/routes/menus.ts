import { Router, type Response } from "express";
import { pool } from "../db/pool.js";
import { asyncHandler } from "../http/asyncHandler.js";
import { UUID_RE } from "../validation/taxonomy.js";
import { parseMenu } from "../validation/content.js";
import type { AuthRequest } from "../middleware/auth.js";

/** Sections (side menus) group a chapter's lessons; readers see their labels when a chapter has more than one. */
const router = Router();

const invalid = (res: Response, fields: Record<string, string>) =>
  res.status(400).json({ error: "Please correct the highlighted fields.", code: "validation_failed", fields });
const notFound = (res: Response) => res.status(404).json({ error: "Not found" });

router.get("/", asyncHandler(async (_req, res) => {
  const result = await pool.query(
    "SELECT * FROM side_menus ORDER BY sort_order",
  );
  res.json(result.rows);
}));

router.post("/", asyncHandler(async (req: AuthRequest, res) => {
  const parsed = parseMenu(req.body, true);
  if (parsed.ok === false) { invalid(res, parsed.fields); return; }
  const { chapter_id, label_en, label_bn } = parsed.value;
  const { rows } = await pool.query(
    `INSERT INTO side_menus (chapter_id, label_en, label_bn, sort_order)
     SELECT $1, $2, $3, COALESCE(MAX(sort_order), 0) + 1 FROM side_menus WHERE chapter_id = $1
     RETURNING *`,
    [chapter_id, label_en, label_bn ?? null],
  ).catch((err: { code?: string }) => {
    if (err.code === "23503") return { rows: [] }; // unknown chapter
    throw err;
  });
  if (!rows[0]) { invalid(res, { chapter_id: "chapter_unknown" }); return; }
  res.status(201).json(rows[0]);
}));

/** Changes only the fields sent; null clears the Bangla label. */
router.put("/:id", asyncHandler(async (req: AuthRequest, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  const parsed = parseMenu(req.body, false);
  if (parsed.ok === false) { invalid(res, parsed.fields); return; }
  const changes = parsed.value as Record<string, unknown>;
  const keys = Object.keys(changes);
  const sql = keys.length
    ? `UPDATE side_menus SET ${keys.map((k, i) => `${k} = $${i + 2}`).join(", ")}, updated_at = now() WHERE id = $1 RETURNING *`
    : "SELECT * FROM side_menus WHERE id = $1";
  const { rows } = await pool.query(sql, [req.params.id, ...keys.map((k) => changes[k])]);
  if (!rows[0]) { notFound(res); return; }
  res.json(rows[0]);
}));

router.patch("/:id/toggle", asyncHandler(async (req: AuthRequest, res) => {
  const { rows } = await pool.query(
    "UPDATE side_menus SET is_active = NOT is_active WHERE id = $1 RETURNING *",
    [req.params.id],
  );
  if (!rows[0]) { notFound(res); return; }
  res.json(rows[0]);
}));

// Deleting a section would cascade to its lessons, so it has to be emptied (lessons moved or deleted) first.
router.delete("/:id", asyncHandler(async (req: AuthRequest, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  const { rows: lessons } = await pool.query("SELECT 1 FROM lessons WHERE side_menu_id = $1 LIMIT 1", [req.params.id]);
  if (lessons.length) {
    res.status(409).json({ error: "Move or delete this section's lessons first.", code: "menu_not_empty" });
    return;
  }
  const { rows } = await pool.query("DELETE FROM side_menus WHERE id = $1 RETURNING id", [req.params.id]);
  if (!rows[0]) { notFound(res); return; }
  res.json({ deleted: true });
}));

export default router;
