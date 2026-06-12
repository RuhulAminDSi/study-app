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

router.get("/by-menu/:menuId", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM lessons WHERE side_menu_id = $1 ORDER BY lesson_number",
    [req.params.menuId],
  );
  res.json(result.rows);
});

router.get("/:id", async (req, res) => {
  const result = await pool.query("SELECT * FROM lessons WHERE id = $1", [req.params.id]);
  if (!result.rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(result.rows[0]);
});

router.post("/", async (req: AuthRequest, res) => {
  const { side_menu_id, title_en, title_bn, level } = req.body;
  const { rows } = await pool.query(
    `INSERT INTO lessons (side_menu_id, lesson_number, title_en, title_bn, content_en, level)
     SELECT $1, COALESCE(MAX(lesson_number), 0) + 1, $2, $3, '', $4
     FROM lessons WHERE side_menu_id = $1
     RETURNING *`,
    [side_menu_id, title_en, title_bn || null, level || "Beginner"],
  );
  res.status(201).json(rows[0]);
});

router.post("/swap-order", async (req: AuthRequest, res) => {
  const { id1, id2 } = req.body;
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const a = (await client.query("SELECT lesson_number, side_menu_id FROM lessons WHERE id = $1", [id1])).rows[0];
    const b = (await client.query("SELECT lesson_number FROM lessons WHERE id = $1", [id2])).rows[0];
    const temp = (await client.query("SELECT COALESCE(MAX(lesson_number), 0) + 1 AS n FROM lessons WHERE side_menu_id = $1", [a.side_menu_id])).rows[0].n;
    await client.query("UPDATE lessons SET lesson_number = $1 WHERE id = $2", [temp, id1]);
    await client.query("UPDATE lessons SET lesson_number = $1 WHERE id = $2", [a.lesson_number, id2]);
    await client.query("UPDATE lessons SET lesson_number = $1 WHERE id = $2", [b.lesson_number, id1]);
    await client.query("COMMIT");
    const { rows } = await client.query("SELECT * FROM lessons WHERE id = ANY($1)", [[id1, id2]]);
    res.json(rows);
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.release();
  }
});

router.put("/:id", async (req: AuthRequest, res) => {
  const { side_menu_id, lesson_number, title_en, title_bn, content_en, content_bn, code_en, code_bn, takeaways_en, takeaways_bn, level, is_published } = req.body;
  const { rows } = await pool.query(
    `UPDATE lessons SET side_menu_id = COALESCE($1, side_menu_id), lesson_number = COALESCE($2, lesson_number),
     title_en = COALESCE($3, title_en), title_bn = COALESCE($4, title_bn), content_en = COALESCE($5, content_en),
     content_bn = COALESCE($6, content_bn), code_en = COALESCE($7, code_en), code_bn = COALESCE($8, code_bn), takeaways_en = $9, takeaways_bn = $10,
     level = COALESCE($11, level), is_published = COALESCE($12, is_published)
     WHERE id = $13 RETURNING *`,
    [side_menu_id ?? null, lesson_number, title_en, title_bn ?? null, content_en, content_bn ?? null, code_en ?? null, code_bn ?? null, takeaways_en ?? null, takeaways_bn ?? null, level, is_published, req.params.id],
  );
  if (!rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(rows[0]);
});

router.patch("/:id/toggle-publish", async (req: AuthRequest, res) => {
  const { rows } = await pool.query("UPDATE lessons SET is_published = NOT is_published WHERE id = $1 RETURNING *", [req.params.id]);
  if (!rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(rows[0]);
});

router.delete("/:id", async (req: AuthRequest, res) => {
  const { rows } = await pool.query("DELETE FROM lessons WHERE id = $1 RETURNING id", [req.params.id]);
  if (!rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json({ deleted: true });
});

export default router;
