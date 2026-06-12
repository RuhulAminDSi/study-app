import { Router } from "express";
import { pool } from "../db/pool.js";
import type { AuthRequest } from "../middleware/auth.js";

const router = Router();

router.get("/", async (_req, res) => {
  const result = await pool.query(
    "SELECT * FROM chapters ORDER BY sort_order, chapter_number",
  );
  res.json(result.rows);
});

router.get("/published", async (_req, res) => {
  const result = await pool.query(
    "SELECT * FROM chapters WHERE is_published = true ORDER BY sort_order, chapter_number",
  );
  res.json(result.rows);
});

router.get("/:id", async (req, res) => {
  const result = await pool.query("SELECT * FROM chapters WHERE id = $1", [req.params.id]);
  if (!result.rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(result.rows[0]);
});

router.post("/", async (req: AuthRequest, res) => {
  const { chapter_number, title_en, title_bn, level, description, is_published } = req.body;
  const result = await pool.query(
    `INSERT INTO chapters (chapter_number, title_en, title_bn, level, description, is_published, sort_order)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING *`,
    [chapter_number, title_en, title_bn || null, level || "Beginner", description || null, is_published ?? false, chapter_number],
  );
  res.status(201).json(result.rows[0]);
});

router.put("/:id", async (req: AuthRequest, res) => {
  const { title_en, title_bn, level, description, is_published, sort_order } = req.body;
  const result = await pool.query(
    `UPDATE chapters SET title_en = COALESCE($1, title_en), title_bn = $2, level = COALESCE($3, level),
     description = $4, is_published = COALESCE($5, is_published), sort_order = COALESCE($6, sort_order)
     WHERE id = $7 RETURNING *`,
    [title_en, title_bn ?? null, level, description ?? null, is_published, sort_order, req.params.id],
  );
  if (!result.rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(result.rows[0]);
});

router.patch("/:id/toggle-publish", async (req: AuthRequest, res) => {
  const result = await pool.query(
    "UPDATE chapters SET is_published = NOT is_published WHERE id = $1 RETURNING *",
    [req.params.id],
  );
  if (!result.rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(result.rows[0]);
});

router.delete("/:id", async (req: AuthRequest, res) => {
  const result = await pool.query("DELETE FROM chapters WHERE id = $1 RETURNING id", [req.params.id]);
  if (!result.rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json({ deleted: true });
});

export default router;
