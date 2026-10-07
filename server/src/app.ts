import express, { Router } from "express";
import cors from "cors";
import path from "path";
import { config, type AppConfig } from "./config.js";
import { pool } from "./db/pool.js";
import { adminRequired, candidateRequired } from "./middleware/auth.js";
import { createAuthLimiter } from "./middleware/rateLimit.js";
import { asyncHandler } from "./http/asyncHandler.js";
import authRoutes from "./routes/auth.js";
import chaptersRoutes from "./routes/chapters.js";
import menusRoutes from "./routes/menus.js";
import lessonsRoutes from "./routes/lessons.js";
import filesRoutes from "./routes/files.js";
import dashboardRoutes from "./routes/dashboard.js";
import { candidateAuthRouter, candidateMeRouter } from "./routes/candidateAuth.js";

export function createApp(overrides: Partial<Pick<AppConfig, "trustProxy" | "authRateLimitMax">> = {}) {
  const settings = { ...config, ...overrides };
  const isProduction = settings.isProduction;
  const frontendDist = path.resolve(__dirname, "../frontend-dist");
  const app = express();
  if (settings.trustProxy) app.set("trust proxy", 1);

  app.use(cors({ origin: "*", credentials: true }));
  app.use(express.json({ limit: "10mb" }));
  app.use("/uploads", express.static(path.resolve(config.uploadDir)));
  if (isProduction) app.use(express.static(frontendDist));

  app.use("/api/auth/login", createAuthLimiter(settings.authRateLimitMax));
  app.use("/api/auth", authRoutes);
  app.use("/api/chapters", adminRequired, chaptersRoutes);
  app.use("/api/menus", adminRequired, menusRoutes);
  app.use("/api/lessons", adminRequired, lessonsRoutes);
  app.use("/api/files", adminRequired, filesRoutes);
  app.use("/api/dashboard", adminRequired, dashboardRoutes);
  app.use("/api/candidate/auth", createAuthLimiter(settings.authRateLimitMax), candidateAuthRouter);
  app.use("/api/candidate/me", candidateRequired, candidateMeRouter);

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  app.use("/api/public", createPublicRouter());

  if (isProduction) {
    app.get("*", (_req, res) => {
      res.sendFile(path.join(frontendDist, "index.html"));
    });
  }

  app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error(err);
    const status = err.status || 500;
    if (status >= 500) {
      // Internal details (SQL errors, stack messages) stay in the server log, not the response.
      res.status(status).json({ error: "Something went wrong on our side. Please try again.", code: "internal_error" });
      return;
    }
    res.status(status).json({ error: err.message || "Request failed" });
  });

  return app;
}

/** Read-only endpoints for the public site (no auth). */
function createPublicRouter() {
  const router = Router();
  router.get("/chapters/published", asyncHandler(async (_req, res) => {
    const result = await pool.query("SELECT * FROM chapters WHERE is_published = true ORDER BY sort_order");
    res.json(result.rows);
  }));
  router.get("/chapters/:id", asyncHandler(async (req, res) => {
    const result = await pool.query("SELECT * FROM chapters WHERE id = $1", [req.params.id]);
    if (!result.rows[0]) { res.status(404).json({ error: "Not found" }); return; }
    res.json(result.rows[0]);
  }));
  router.get("/menus", asyncHandler(async (_req, res) => {
    const result = await pool.query("SELECT * FROM side_menus WHERE is_active = true ORDER BY sort_order");
    res.json(result.rows);
  }));
  router.get("/lessons/published", asyncHandler(async (_req, res) => {
    const result = await pool.query("SELECT * FROM lessons WHERE is_published = true ORDER BY lesson_number");
    res.json(result.rows);
  }));
  router.get("/lessons/by-menu/:menuId", asyncHandler(async (req, res) => {
    const result = await pool.query(
      "SELECT * FROM lessons WHERE side_menu_id = $1 AND is_published = true ORDER BY lesson_number",
      [req.params.menuId],
    );
    res.json(result.rows);
  }));
  router.get("/lessons/:id", asyncHandler(async (req, res) => {
    const result = await pool.query("SELECT * FROM lessons WHERE id = $1", [req.params.id]);
    if (!result.rows[0]) { res.status(404).json({ error: "Not found" }); return; }
    res.json(result.rows[0]);
  }));
  return router;
}
