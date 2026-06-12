import { Router } from "express";
import { pool } from "../db/pool.js";

const router = Router();

router.get("/stats", async (_req, res) => {
  const [chapters, lessons, menus] = await Promise.all([
    pool.query("SELECT COUNT(*)::int AS total, COUNT(*) FILTER (WHERE is_published)::int AS published FROM chapters"),
    pool.query("SELECT COUNT(*)::int AS total, COUNT(*) FILTER (WHERE is_published)::int AS published FROM lessons"),
    pool.query("SELECT COUNT(*)::int AS total, COUNT(*) FILTER (WHERE is_active)::int AS active FROM side_menus"),
  ]);

  res.json({
    total_chapters: chapters.rows[0].total,
    published_chapters: chapters.rows[0].published,
    total_lessons: lessons.rows[0].total,
    published_lessons: lessons.rows[0].published,
    total_side_menus: menus.rows[0].total,
    active_side_menus: menus.rows[0].active,
  });
});

export default router;
