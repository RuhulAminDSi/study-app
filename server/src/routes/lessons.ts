import { Router, type Response } from "express";
import type { PoolClient } from "pg";
import { pool } from "../db/pool.js";
import { asyncHandler } from "../http/asyncHandler.js";
import { withTransaction } from "../db/tx.js";
import { UUID_RE } from "../validation/taxonomy.js";
import { LESSON_SNAPSHOT_FIELDS, parseLessonUpdate } from "../validation/content.js";
import type { AuthRequest } from "../middleware/auth.js";

const router = Router();

router.get("/", asyncHandler(async (_req, res) => {
  const result = await pool.query(
    "SELECT * FROM lessons ORDER BY lesson_number",
  );
  res.json(result.rows);
}));

router.get("/published", asyncHandler(async (_req, res) => {
  const result = await pool.query(
    "SELECT * FROM lessons WHERE is_published = true ORDER BY lesson_number",
  );
  res.json(result.rows);
}));

router.get("/by-menu/:menuId", asyncHandler(async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM lessons WHERE side_menu_id = $1 ORDER BY lesson_number",
    [req.params.menuId],
  );
  res.json(result.rows);
}));

router.get("/:id", asyncHandler(async (req, res) => {
  const result = await pool.query("SELECT * FROM lessons WHERE id = $1", [req.params.id]);
  if (!result.rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(result.rows[0]);
}));

router.post("/", asyncHandler(async (req: AuthRequest, res) => {
  const { side_menu_id, title_en, title_bn, level } = req.body;
  const { rows } = await pool.query(
    `INSERT INTO lessons (side_menu_id, lesson_number, title_en, title_bn, content_en, level)
     SELECT $1, COALESCE(MAX(lesson_number), 0) + 1, $2, $3, '', $4
     FROM lessons WHERE side_menu_id = $1
     RETURNING *`,
    [side_menu_id, title_en, title_bn || null, level || "Beginner"],
  );
  res.status(201).json(rows[0]);
}));

router.post("/swap-order", asyncHandler(async (req: AuthRequest, res) => {
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
}));

const invalid = (res: Response, fields: Record<string, string>) =>
  res.status(400).json({ error: "Please correct the highlighted fields.", code: "validation_failed", fields });

/** A lesson whose body is a notes-viewer marker is owned by the notes pipeline (notes:apply rewrites it). */
const showsNoteSet = (content: string | null) => !!content && content.includes('class="hn-viewer"');

const snapshotOf = (row: Record<string, unknown>) => LESSON_SNAPSHOT_FIELDS.map((k) => row[k] ?? null);
const sameSnapshot = (a: Record<string, unknown>, b: Record<string, unknown>) =>
  JSON.stringify(snapshotOf(a)) === JSON.stringify(snapshotOf(b));

/** Keeps the most recent versions of each lesson; older ones are dropped so history stays bounded. */
const KEEP_REVISIONS = 100;

async function recordRevision(client: PoolClient, row: Record<string, unknown>, editor: AuthRequest["user"] | null, note: string | null) {
  await client.query(
    `INSERT INTO lesson_revisions (lesson_id, ${LESSON_SNAPSHOT_FIELDS.join(", ")}, note, edited_by, edited_by_name)
     VALUES ($1, ${LESSON_SNAPSHOT_FIELDS.map((_, i) => `$${i + 2}`).join(", ")}, $10, $11, $12)`,
    [row.id, ...snapshotOf(row), note, editor?.id ?? null, editor?.username ?? null],
  );
}

/**
 * Writes `changes` to the lesson and, when its text changed, records the new version (the first edit
 * also records the lesson as it was, so the seed or imported text can always be restored).
 */
async function saveLesson(client: PoolClient, current: Record<string, unknown>, changes: Record<string, unknown>, editor: AuthRequest["user"] | null, note: string | null) {
  const keys = Object.keys(changes);
  if (!keys.length) return current;
  const { rows } = await client.query(
    `UPDATE lessons SET ${keys.map((k, i) => `${k} = $${i + 2}`).join(", ")}, updated_at = now() WHERE id = $1 RETURNING *`,
    [current.id, ...keys.map((k) => changes[k])],
  );
  const updated = rows[0];
  if (!sameSnapshot(current, updated)) {
    const { rows: existing } = await client.query("SELECT 1 FROM lesson_revisions WHERE lesson_id = $1 LIMIT 1", [current.id]);
    if (!existing.length) await recordRevision(client, current, null, "original");
    await recordRevision(client, updated, editor, note);
    await client.query(
      `DELETE FROM lesson_revisions WHERE lesson_id = $1 AND id NOT IN
       (SELECT id FROM lesson_revisions WHERE lesson_id = $1 ORDER BY created_at DESC LIMIT ${KEEP_REVISIONS})`,
      [current.id],
    );
  }
  return updated;
}

router.put("/:id", asyncHandler(async (req: AuthRequest, res) => {
  if (!UUID_RE.test(req.params.id)) { res.status(404).json({ error: "Not found" }); return; }
  const parsed = parseLessonUpdate(req.body);
  if (parsed.ok === false) { invalid(res, parsed.fields); return; }
  const changes: Record<string, unknown> = { ...parsed.value };

  const result = await withTransaction(async (client) => {
    const current = (await client.query("SELECT * FROM lessons WHERE id = $1 FOR UPDATE", [req.params.id])).rows[0];
    if (!current) return { status: 404 as const };
    const bodyChanged = (["content_en", "content_bn"] as const).some((k) => k in changes && changes[k] !== current[k]);
    if (bodyChanged && showsNoteSet(current.content_en)) return { status: 409 as const };
    // Moving to another section: append unless a number was chosen, or the old number could collide there.
    if (changes.side_menu_id && changes.side_menu_id !== current.side_menu_id && changes.lesson_number === undefined) {
      const next = await client.query("SELECT COALESCE(MAX(lesson_number), 0) + 1 AS n FROM lessons WHERE side_menu_id = $1", [changes.side_menu_id]);
      changes.lesson_number = next.rows[0].n;
    }
    return { status: 200 as const, lesson: await saveLesson(client, current, changes, req.user ?? null, null) };
  });

  if (result.status === 404) { res.status(404).json({ error: "Not found" }); return; }
  if (result.status === 409) {
    res.status(409).json({ error: "This lesson shows a note set; its body is managed by the notes pipeline.", code: "managed_by_notes" });
    return;
  }
  res.json(result.lesson);
}));

router.get("/:id/revisions", asyncHandler(async (req, res) => {
  if (!UUID_RE.test(req.params.id)) { res.json([]); return; }
  const { rows } = await pool.query(
    "SELECT * FROM lesson_revisions WHERE lesson_id = $1 ORDER BY created_at DESC LIMIT 100",
    [req.params.id],
  );
  res.json(rows);
}));

router.post("/:id/revisions/:revisionId/restore", asyncHandler(async (req: AuthRequest, res) => {
  const { id, revisionId } = req.params;
  if (!UUID_RE.test(id) || !UUID_RE.test(revisionId)) { res.status(404).json({ error: "Not found" }); return; }
  const lesson = await withTransaction(async (client) => {
    const current = (await client.query("SELECT * FROM lessons WHERE id = $1 FOR UPDATE", [id])).rows[0];
    const revision = (await client.query("SELECT * FROM lesson_revisions WHERE id = $1 AND lesson_id = $2", [revisionId, id])).rows[0];
    if (!current || !revision) return null;
    const changes = Object.fromEntries(LESSON_SNAPSHOT_FIELDS.map((k) => [k, revision[k]]));
    return saveLesson(client, current, changes, req.user ?? null, "restored");
  });
  if (!lesson) { res.status(404).json({ error: "Not found" }); return; }
  res.json(lesson);
}));

router.patch("/:id/toggle-publish", asyncHandler(async (req: AuthRequest, res) => {
  const { rows } = await pool.query("UPDATE lessons SET is_published = NOT is_published WHERE id = $1 RETURNING *", [req.params.id]);
  if (!rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json(rows[0]);
}));

router.delete("/:id", asyncHandler(async (req: AuthRequest, res) => {
  const { rows } = await pool.query("DELETE FROM lessons WHERE id = $1 RETURNING id", [req.params.id]);
  if (!rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  res.json({ deleted: true });
}));

export default router;
