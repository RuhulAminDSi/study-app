import { Router } from "express";
import fs from "fs/promises";
import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { pool } from "../db/pool.js";
import { config } from "../config.js";
import { asyncHandler } from "../http/asyncHandler.js";
import { UUID_RE } from "../validation/taxonomy.js";
import type { AuthRequest } from "../middleware/auth.js";

/**
 * Media library: files served at /uploads/<storage_path> for use in lessons. SVG is refused because it
 * can carry script, and uploads are served from the app's own origin.
 */
const ALLOWED = /\.(png|jpe?g|gif|webp|pdf)$/i;
const MAX_BYTES = 10 * 1024 * 1024;

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, config.uploadDir),
  filename: (_req, file, cb) => cb(null, `${uuidv4()}${path.extname(file.originalname).toLowerCase()}`),
});

const upload = multer({
  storage,
  limits: { fileSize: MAX_BYTES },
  fileFilter: (_req, file, cb) => cb(null, ALLOWED.test(path.extname(file.originalname))),
});

const withUrl = <T extends { storage_path: string }>(row: T) => ({ ...row, url: `/uploads/${row.storage_path}` });

const router = Router();

router.get("/", asyncHandler(async (_req, res) => {
  const result = await pool.query("SELECT * FROM uploaded_files ORDER BY created_at DESC");
  res.json(result.rows.map(withUrl));
}));

router.post("/upload", (req, res, next) => {
  upload.single("file")(req, res, (err: unknown) => {
    if (err instanceof multer.MulterError && err.code === "LIMIT_FILE_SIZE") {
      res.status(400).json({ error: "The file is larger than 10 MB.", code: "file_too_large" });
      return;
    }
    if (err) { next(err); return; }
    next();
  });
}, asyncHandler(async (req: AuthRequest, res) => {
  const file = req.file;
  if (!file) {
    res.status(400).json({ error: "Choose a PNG, JPG, GIF, WebP or PDF file.", code: "file_type" });
    return;
  }
  const result = await pool.query(
    `INSERT INTO uploaded_files (original_name, storage_path, mime_type, file_size, uploaded_by)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [file.originalname, file.filename, file.mimetype, file.size, req.user?.id || null],
  );
  res.status(201).json(withUrl(result.rows[0]));
}));

router.get("/:id", asyncHandler(async (req, res) => {
  if (!UUID_RE.test(req.params.id)) { res.status(404).json({ error: "Not found" }); return; }
  const result = await pool.query("SELECT * FROM uploaded_files WHERE id = $1", [req.params.id]);
  if (!result.rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(withUrl(result.rows[0]));
}));

router.delete("/:id", asyncHandler(async (req: AuthRequest, res) => {
  if (!UUID_RE.test(req.params.id)) { res.status(404).json({ error: "Not found" }); return; }
  const result = await pool.query("DELETE FROM uploaded_files WHERE id = $1 RETURNING storage_path", [req.params.id]);
  if (!result.rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  // basename() keeps a tampered storage_path from reaching outside the upload folder.
  await fs.rm(path.resolve(config.uploadDir, path.basename(result.rows[0].storage_path)), { force: true });
  res.json({ deleted: true });
}));

export default router;
