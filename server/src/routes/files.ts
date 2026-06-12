import { Router } from "express";
import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { pool } from "../db/pool.js";
import { config } from "../config.js";
import type { AuthRequest } from "../middleware/auth.js";

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, config.uploadDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${uuidv4()}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = /\.(png|jpe?g|gif|webp|svg|pdf|docx?|txt)$/i;
    if (allowed.test(path.extname(file.originalname))) {
      cb(null, true);
    } else {
      cb(new Error("File type not allowed"));
    }
  },
});

const router = Router();

router.get("/", async (_req, res) => {
  const result = await pool.query(
    "SELECT * FROM uploaded_files ORDER BY created_at DESC",
  );
  res.json(result.rows);
});

router.post("/upload", upload.single("file"), async (req: AuthRequest, res) => {
  const file = req.file;
  if (!file) {
    res.status(400).json({ error: "No file uploaded" });
    return;
  }

  const result = await pool.query(
    `INSERT INTO uploaded_files (original_name, storage_path, mime_type, file_size, uploaded_by)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [file.originalname, file.filename, file.mimetype, file.size, req.user?.id || null],
  );

  res.status(201).json(result.rows[0]);
});

router.get("/:id", async (req, res) => {
  const result = await pool.query("SELECT * FROM uploaded_files WHERE id = $1", [req.params.id]);
  if (!result.rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(result.rows[0]);
});

router.delete("/:id", async (req: AuthRequest, res) => {
  const result = await pool.query("DELETE FROM uploaded_files WHERE id = $1 RETURNING storage_path", [req.params.id]);
  if (!result.rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json({ deleted: true });
});

export default router;
