import { Router } from "express";
import { pool } from "../db/pool.js";
import type { AuthRequest } from "../middleware/auth.js";

const router = Router();

router.get("/", async (_req, res) => {
  const result = await pool.query(
    "SELECT * FROM lessons ORDER BY lesson_number",
  );
  res.json(result.rows);
});

router.get("/published", async (_req, res) => {
  const result = await pool.query(
    "SELECT * FROM lessons WHERE is_published = true ORDER BY lesson_number",
  );
  res.json(result.rows);
});

router.get("/sub-menu/:subMenuId", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM lessons WHERE sub_side_menu_id = $1 ORDER BY lesson_number",
    [req.params.subMenuId],
  );
  res.json(result.rows);
});

router.get("/:id", async (req, res) => {
  const result = await pool.query("SELECT * FROM lessons WHERE id = $1", [req.params.id]);
  if (!result.rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(result.rows[0]);
});

router.post("/", async (req: AuthRequest, res) => {
  const { sub_side_menu_id, lesson_number, title_en, title_bn, content_en, content_bn, code_en, code_bn, takeaways_en, takeaways_bn, level } = req.body;
  const { rows } = await pool.query(
    `INSERT INTO lessons (sub_side_menu_id, lesson_number, title_en, title_bn, content_en, content_bn, code_en, code_bn, takeaways_en, takeaways_bn, level)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *`,
    [sub_side_menu_id, lesson_number, title_en, title_bn || null, content_en, content_bn || null, code_en || null, code_bn || null, takeaways_en || [], takeaways_bn || [], level || "Beginner"],
  );
  res.status(201).json(rows[0]);
});

router.put("/:id", async (req: AuthRequest, res) => {
  const { title_en, title_bn, content_en, content_bn, code_en, code_bn, takeaways_en, takeaways_bn, level, is_published } = req.body;
  const { rows } = await pool.query(
    `UPDATE lessons SET title_en = COALESCE($1, title_en), title_bn = $2, content_en = COALESCE($3, content_en),
     content_bn = $4, code_en = $5, code_bn = $6, takeaways_en = $7, takeaways_bn = $8,
     level = COALESCE($9, level), is_published = COALESCE($10, is_published)
     WHERE id = $11 RETURNING *`,
    [title_en, title_bn ?? null, content_en, content_bn ?? null, code_en ?? null, code_bn ?? null, takeaways_en ?? null, takeaways_bn ?? null, level, is_published, req.params.id],
  );
  if (!rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(rows[0]);
});

router.delete("/:id", async (req: AuthRequest, res) => {
  const { rows } = await pool.query("DELETE FROM lessons WHERE id = $1 RETURNING id", [req.params.id]);
  if (!rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json({ deleted: true });
});

export default router;
