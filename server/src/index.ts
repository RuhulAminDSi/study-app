import express from "express";
import cors from "cors";
import path from "path";
import { config } from "./config.js";
import { authRequired } from "./middleware/auth.js";
import authRoutes from "./routes/auth.js";
import chaptersRoutes from "./routes/chapters.js";
import menusRoutes from "./routes/menus.js";
import submenusRoutes from "./routes/submenus.js";
import lessonsRoutes from "./routes/lessons.js";
import filesRoutes from "./routes/files.js";
import dashboardRoutes from "./routes/dashboard.js";

const app = express();

app.use(cors({ origin: "*", credentials: true }));
app.use(express.json({ limit: "10mb" }));
app.use("/uploads", express.static(path.resolve(config.uploadDir)));

// Public routes
app.use("/api/auth", authRoutes);

// Protected routes
app.use("/api/chapters", authRequired, chaptersRoutes);
app.use("/api/menus", authRequired, menusRoutes);
app.use("/api/submenus", authRequired, submenusRoutes);
app.use("/api/lessons", authRequired, lessonsRoutes);
app.use("/api/files", authRequired, filesRoutes);
app.use("/api/dashboard", authRequired, dashboardRoutes);

// Public read-only endpoints (no auth needed)
import { Router } from "express";
import { pool } from "./db/pool.js";
const publicRouter = Router();
publicRouter.get("/chapters/published", async (_req, res) => {
  const result = await pool.query("SELECT * FROM chapters WHERE is_published = true ORDER BY sort_order");
  res.json(result.rows);
});
publicRouter.get("/chapters/:id", async (req, res) => {
  const result = await pool.query("SELECT * FROM chapters WHERE id = $1", [req.params.id]);
  if (!result.rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(result.rows[0]);
});
publicRouter.get("/menus/with-sub", async (_req, res) => {
  const menus = await pool.query("SELECT * FROM side_menus WHERE is_active = true ORDER BY sort_order");
  const subs = await pool.query("SELECT * FROM sub_side_menus WHERE is_active = true ORDER BY sort_order");
  const subMap: Record<string, any[]> = {};
  for (const s of subs.rows) { if (!subMap[s.side_menu_id]) subMap[s.side_menu_id] = []; subMap[s.side_menu_id].push(s); }
  res.json(menus.rows.map((m: any) => ({ ...m, sub_menus: subMap[m.id] || [] })));
});
publicRouter.get("/lessons/published", async (_req, res) => {
  const result = await pool.query("SELECT * FROM lessons WHERE is_published = true ORDER BY lesson_number");
  res.json(result.rows);
});
publicRouter.get("/lessons/sub-menu/:subMenuId", async (req, res) => {
  const result = await pool.query("SELECT * FROM lessons WHERE sub_side_menu_id = $1 AND is_published = true ORDER BY lesson_number", [req.params.subMenuId]);
  res.json(result.rows);
});
publicRouter.get("/lessons/:id", async (req, res) => {
  const result = await pool.query("SELECT * FROM lessons WHERE id = $1", [req.params.id]);
  if (!result.rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(result.rows[0]);
});
app.use("/api/public", publicRouter);

// Error handling
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || "Internal server error" });
});

app.listen(config.port, () => {
  console.log(`⭐ StudyHub API running on http://localhost:${config.port}`);
});
