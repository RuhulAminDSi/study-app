import { Router } from "express";
import { pool } from "../db/pool.js";
import { asyncHandler } from "../http/asyncHandler.js";
import type { ReaderRequest } from "../middleware/auth.js";

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Readers (under /api/public, after readerRequired): published kits; admins may preview drafts. */
export const publicExamKitsRouter = Router();

publicExamKitsRouter.get("/", asyncHandler(async (_req, res) => {
  const { rows } = await pool.query(
    `SELECT slug, chapter_number, lesson_title_en, (data->'heat'->>'asked')::int AS asked
     FROM exam_kits WHERE is_published ORDER BY chapter_number, slug`,
  );
  res.json(rows);
}));

publicExamKitsRouter.get("/:slug", asyncHandler(async (req: ReaderRequest, res) => {
  if (!SLUG.test(req.params.slug)) { res.status(404).json({ error: "Not found" }); return; }
  const preview = req.reader?.kind === "admin";
  const { rows } = await pool.query(
    `SELECT slug, chapter_number, lesson_title_en, data, is_published, updated_at FROM exam_kits
     WHERE slug = $1 AND (is_published OR $2)`,
    [req.params.slug, preview],
  );
  if (!rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(rows[0]);
}));

/** Admins (/api/exam-kits): list every kit and publish or unpublish one. Kit content comes from data files. */
export const adminExamKitsRouter = Router();

adminExamKitsRouter.get("/", asyncHandler(async (_req, res) => {
  const { rows } = await pool.query(
    `SELECT slug, chapter_number, lesson_title_en, is_published, data->>'status' AS status, data->>'updatedOn' AS updated_on,
            (data->'heat'->>'asked')::int AS asked
     FROM exam_kits ORDER BY chapter_number, slug`,
  );
  res.json(rows);
}));

adminExamKitsRouter.patch("/:slug", asyncHandler(async (req, res) => {
  if (typeof req.body?.is_published !== "boolean") {
    res.status(400).json({ error: "Please correct the highlighted fields.", code: "validation_failed", fields: { is_published: "required" } });
    return;
  }
  const { rows } = await pool.query(
    "UPDATE exam_kits SET is_published = $2, updated_at = now() WHERE slug = $1 RETURNING slug, is_published",
    [req.params.slug, req.body.is_published],
  );
  if (!rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(rows[0]);
}));
