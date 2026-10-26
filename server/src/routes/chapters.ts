import { Router } from "express";
import { pool } from "../db/pool.js";
import { asyncHandler } from "../http/asyncHandler.js";
import { withTransaction } from "../db/tx.js";
import type { AuthRequest } from "../middleware/auth.js";

const router = Router();

router.get("/", asyncHandler(async (_req, res) => {
  const result = await pool.query(
    "SELECT * FROM chapters ORDER BY sort_order, chapter_number",
  );
  res.json(result.rows);
}));

router.get("/published", asyncHandler(async (_req, res) => {
  const result = await pool.query(
    "SELECT * FROM chapters WHERE is_published = true ORDER BY sort_order, chapter_number",
  );
  res.json(result.rows);
}));

router.get("/:id", asyncHandler(async (req, res) => {
  const result = await pool.query("SELECT * FROM chapters WHERE id = $1", [req.params.id]);
  if (!result.rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(result.rows[0]);
}));

// A chapter's lessons hang off a side menu (a section), so its first section is created with the chapter.
// Otherwise the new chapter could not take any lessons.
router.post("/", asyncHandler(async (req: AuthRequest, res) => {
  const { chapter_number, title_en, title_bn, level, description, is_published } = req.body;
  const chapter = await withTransaction(async (client) => {
    const { rows } = await client.query(
      `INSERT INTO chapters (chapter_number, title_en, title_bn, level, description, is_published, sort_order)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [chapter_number, title_en, title_bn || null, level || "Beginner", description || null, is_published ?? false, chapter_number],
    );
    await client.query(
      "INSERT INTO side_menus (chapter_id, label_en, label_bn, sort_order, is_active) VALUES ($1, $2, $3, 1, true)",
      [rows[0].id, rows[0].title_en, rows[0].title_bn],
    );
    return rows[0];
  }).catch((err: { code?: string }) => {
    if (err.code === "23505") return null;
    throw err;
  });
  if (!chapter) {
    res.status(409).json({ error: "A chapter with this number already exists.", code: "number_taken", fields: { chapter_number: "number_taken" } });
    return;
  }
  res.status(201).json(chapter);
}));

/** Fields an admin may change on a chapter. Only the keys present in the body are touched; null clears. */
const CHAPTER_FIELDS = ["title_en", "title_bn", "level", "description", "is_published", "sort_order"] as const;
const LEVELS = ["Beginner", "Intermediate", "Advanced"];

router.put("/:id", asyncHandler(async (req: AuthRequest, res) => {
  const body = (req.body ?? {}) as Record<string, unknown>;
  const fields: Record<string, string> = {};
  if (body.title_en !== undefined && !(typeof body.title_en === "string" && body.title_en.trim())) fields.title_en = "required";
  if (body.level !== undefined && !LEVELS.includes(body.level as string)) fields.level = "level_invalid";
  if (Object.keys(fields).length) {
    res.status(400).json({ error: "Please correct the highlighted fields.", code: "validation_failed", fields });
    return;
  }
  const keys = CHAPTER_FIELDS.filter((k) => body[k] !== undefined);
  const values = keys.map((k) => (typeof body[k] === "string" ? (body[k] as string).trim() || null : body[k]));
  const sql = keys.length
    ? `UPDATE chapters SET ${keys.map((k, i) => `${k} = $${i + 2}`).join(", ")}, updated_at = now() WHERE id = $1 RETURNING *`
    : "SELECT * FROM chapters WHERE id = $1";
  const result = await pool.query(sql, [req.params.id, ...values]);
  if (!result.rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(result.rows[0]);
}));

router.patch("/:id/toggle-publish", asyncHandler(async (req: AuthRequest, res) => {
  const result = await pool.query(
    "UPDATE chapters SET is_published = NOT is_published WHERE id = $1 RETURNING *",
    [req.params.id],
  );
  if (!result.rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(result.rows[0]);
}));

router.delete("/:id", asyncHandler(async (req: AuthRequest, res) => {
  const result = await pool.query("DELETE FROM chapters WHERE id = $1 RETURNING id", [req.params.id]);
  if (!result.rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json({ deleted: true });
}));

export default router;
