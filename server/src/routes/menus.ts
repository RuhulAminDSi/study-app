import { Router } from "express";
import { pool } from "../db/pool.js";
import type { AuthRequest } from "../middleware/auth.js";

const router = Router();

router.get("/", async (_req, res) => {
  const result = await pool.query(
    "SELECT * FROM side_menus ORDER BY sort_order",
  );
  res.json(result.rows);
});

router.get("/with-sub", async (_req, res) => {
  const menus = await pool.query("SELECT * FROM side_menus ORDER BY sort_order");
  const subs = await pool.query("SELECT * FROM sub_side_menus ORDER BY sort_order");

  const subMap: Record<string, any[]> = {};
  for (const s of subs.rows) {
    if (!subMap[s.side_menu_id]) subMap[s.side_menu_id] = [];
    subMap[s.side_menu_id].push(s);
  }

  const result = menus.rows.map((m: any) => ({
    ...m,
    sub_menus: subMap[m.id] || [],
  }));

  res.json(result);
});

router.post("/", async (req: AuthRequest, res) => {
  const { chapter_id, label_en, label_bn, icon } = req.body;
  const { rows } = await pool.query(
    `INSERT INTO side_menus (chapter_id, label_en, label_bn, icon)
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [chapter_id, label_en, label_bn || null, icon || null],
  );
  res.status(201).json(rows[0]);
});

router.put("/:id", async (req: AuthRequest, res) => {
  const { label_en, label_bn, icon, is_active, chapter_id } = req.body;
  const { rows } = await pool.query(
    `UPDATE side_menus SET label_en = COALESCE($1, label_en), label_bn = $2,
     icon = $3, is_active = COALESCE($4, is_active), chapter_id = COALESCE($5, chapter_id)
     WHERE id = $6 RETURNING *`,
    [label_en, label_bn ?? null, icon ?? null, is_active, chapter_id, req.params.id],
  );
  if (!rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(rows[0]);
});

router.patch("/:id/toggle", async (req: AuthRequest, res) => {
  const { rows } = await pool.query(
    "UPDATE side_menus SET is_active = NOT is_active WHERE id = $1 RETURNING *",
    [req.params.id],
  );
  if (!rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(rows[0]);
});

router.delete("/:id", async (req: AuthRequest, res) => {
  const { rows } = await pool.query("DELETE FROM side_menus WHERE id = $1 RETURNING id", [req.params.id]);
  if (!rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json({ deleted: true });
});

export default router;
