import { Router } from "express";
import { pool } from "../db/pool.js";
import type { AuthRequest } from "../middleware/auth.js";

const router = Router();

router.get("/", async (_req, res) => {
  const result = await pool.query("SELECT * FROM sub_side_menus ORDER BY sort_order");
  res.json(result.rows);
});

router.post("/", async (req: AuthRequest, res) => {
  const { side_menu_id, label_en, label_bn } = req.body;
  const { rows } = await pool.query(
    `INSERT INTO sub_side_menus (side_menu_id, label_en, label_bn)
     VALUES ($1, $2, $3) RETURNING *`,
    [side_menu_id, label_en, label_bn || null],
  );
  res.status(201).json(rows[0]);
});

router.put("/:id", async (req: AuthRequest, res) => {
  const { label_en, label_bn, is_active } = req.body;
  const { rows } = await pool.query(
    `UPDATE sub_side_menus SET label_en = COALESCE($1, label_en), label_bn = $2,
     is_active = COALESCE($3, is_active) WHERE id = $4 RETURNING *`,
    [label_en, label_bn ?? null, is_active, req.params.id],
  );
  if (!rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(rows[0]);
});

router.patch("/:id/toggle", async (req: AuthRequest, res) => {
  const { rows } = await pool.query(
    "UPDATE sub_side_menus SET is_active = NOT is_active WHERE id = $1 RETURNING *",
    [req.params.id],
  );
  if (!rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(rows[0]);
});

router.delete("/:id", async (req: AuthRequest, res) => {
  const { rows } = await pool.query("DELETE FROM sub_side_menus WHERE id = $1 RETURNING id", [req.params.id]);
  if (!rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json({ deleted: true });
});

export default router;
