import { createHash } from "crypto";
import { Router, type Response } from "express";
import jwt from "jsonwebtoken";
import rateLimit from "express-rate-limit";
import { pool } from "../db/pool.js";
import { getSettings } from "../services/siteSettings.js";
import { asyncHandler } from "../http/asyncHandler.js";
import { clientKey } from "../middleware/rateLimit.js";
import { UUID_RE } from "../validation/taxonomy.js";
import { PUBLISHED_RESOURCES_SQL } from "./resources.js";

/**
 * Open endpoints (no sign-in) for the landing page and visitors: live counts, open job circulars, the contact
 * number, and a free sample MCQ test. Nothing here reveals drafts or the answers of a question used in a timed
 * test whose answers are held back.
 */
export const siteRouter = Router();

/** Visitors may hit these freely, but not hammer them: 120 requests a minute per IP. */
siteRouter.use(rateLimit({
  windowMs: 60_000,
  limit: 120,
  keyGenerator: (req) => clientKey(req.ip),
  validate: { ip: false },
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "Too many requests. Try again in a minute.", code: "too_many_requests" },
}));

// ── Site info ──────────────────────────────────────────────────────────────────

const STATS_SQL = `
  SELECT
    (SELECT count(*) FROM questions WHERE is_published AND type = 'mcq')::int AS mcq,
    (SELECT count(*) FROM questions WHERE is_published AND type <> 'mcq')::int AS written,
    (SELECT count(*) FROM chapters WHERE is_published)::int AS subjects,
    (SELECT count(*) FROM lessons l JOIN side_menus m ON m.id = l.side_menu_id AND m.is_active
       JOIN chapters c ON c.id = m.chapter_id AND c.is_published WHERE l.is_published)::int AS lessons,
    (SELECT count(*) FROM mock_tests WHERE is_published AND NOT is_archived
       AND (available_until IS NULL OR available_until > now()))::int AS tests,
    (SELECT count(*) FROM resources WHERE is_published AND category = 'circular'
       AND (ends_on IS NULL OR ends_on >= CURRENT_DATE))::int AS open_circulars,
    (SELECT count(*) FROM resources WHERE is_published AND category <> 'circular')::int AS resources,
    (SELECT count(*) FROM articles WHERE is_published)::int AS articles,
    (SELECT count(*) FROM mock_tests WHERE is_free AND is_published AND NOT is_archived)::int AS free_sets`;

/** The counts change slowly; one query a minute is plenty however many visitors load the landing page. */
let statsCache: { at: number; value: Record<string, number> } | null = null;
const STATS_TTL_MS = 60_000;

/** Test hook: drops the cached counts. */
export function clearSiteCache() { statsCache = null; }

siteRouter.get("/site-info", asyncHandler(async (_req, res) => {
  if (!statsCache || Date.now() - statsCache.at > STATS_TTL_MS) {
    const { rows } = await pool.query(STATS_SQL);
    statsCache = { at: Date.now(), value: rows[0] };
  }
  const s = statsCache.value;
  const settings = await getSettings();
  res.json({
    stats: {
      mcq: s.mcq, written: s.written, subjects: s.subjects, lessons: s.lessons, tests: s.tests,
      openCirculars: s.open_circulars, resources: s.resources, articles: s.articles, freeSets: s.free_sets,
    },
    contact: { ...settings.contact, whatsapp: settings.contact.whatsapp || null },
    payment: { bkash: settings.payment.bkash, nagad: settings.payment.nagad, rocket: settings.payment.rocket },
    paywall: { enabled: settings.paywall.enabled },
  });
}));

// ── Resources ───────────────────────────────────────────────────────────────────

/** Every published resource (circulars, notices, suggestions, past exam questions, other files): the Resources page is open to visitors. */
siteRouter.get("/resources", asyncHandler(async (_req, res) => {
  res.json((await pool.query(PUBLISHED_RESOURCES_SQL)).rows);
}));

// ── Open circulars ─────────────────────────────────────────────────────────────

/** Published circulars still taking applications: pinned first, then nearest last date. */
siteRouter.get("/open-circulars", asyncHandler(async (req, res) => {
  const limit = Math.min(30, Math.max(1, parseInt(String(req.query.limit ?? "8"), 10) || 8));
  const { rows } = await pool.query(
    `SELECT r.id, r.tag, r.title_en, r.title_bn, r.details_en, r.details_bn, r.apply_url, r.link_url,
            to_char(r.starts_on, 'YYYY-MM-DD') AS starts_on, to_char(r.ends_on, 'YYYY-MM-DD') AS ends_on, r.is_pinned,
            CASE WHEN f.storage_path IS NULL THEN NULL ELSE '/uploads/' || f.storage_path END AS file_url
       FROM resources r LEFT JOIN uploaded_files f ON f.id = r.file_id
      WHERE r.is_published AND r.category = 'circular' AND (r.ends_on IS NULL OR r.ends_on >= CURRENT_DATE)
      ORDER BY r.is_pinned DESC, r.ends_on NULLS LAST, r.created_at DESC
      LIMIT $1`,
    [limit],
  );
  res.json(rows);
}));

// ── Free sample test ──────────────────────────────────────────────────────────

const FREE_MAX = 25;

/**
 * Questions a visitor may see with their answers: published MCQs that are not on the fixed paper of a test whose
 * answers are released late or never (those would leak a running exam).
 */
const FREE_POOL = `q.is_published AND q.type = 'mcq' AND NOT EXISTS (
  SELECT 1 FROM mock_test_questions mq JOIN mock_tests mt ON mt.id = mq.mock_test_id
   WHERE mq.question_id = q.id AND mt.result_release <> 'immediate')`;

/** Subjects with enough free questions to make a set. */
siteRouter.get("/free-test/subjects", asyncHandler(async (_req, res) => {
  const { rows } = await pool.query(
    `SELECT s.code, s.name_en, s.name_bn, count(q.id)::int AS question_count
       FROM subjects s JOIN questions q ON q.subject_id = s.id AND ${FREE_POOL}
      GROUP BY s.id HAVING count(q.id) >= 5 ORDER BY s.sort_order, s.code`,
  );
  res.json(rows.map((r) => ({ code: r.code, nameEn: r.name_en, nameBn: r.name_bn, questionCount: r.question_count })));
}));

/** A random set of up to 25 MCQs (optionally from one subject), with the options but not the answers. */
siteRouter.get("/free-test", asyncHandler(async (req, res) => {
  const count = Math.min(FREE_MAX, Math.max(5, parseInt(String(req.query.count ?? "20"), 10) || 20));
  const subject = typeof req.query.subject === "string" && /^[A-Za-z0-9_-]{1,20}$/.test(req.query.subject) ? req.query.subject : null;
  const { rows } = await pool.query(
    `SELECT q.id, q.stem_en, q.stem_bn, q.code_snippet, s.code AS subject_code, s.name_en AS subject_en, s.name_bn AS subject_bn,
            (SELECT json_agg(json_build_object('id', o.id, 'textEn', o.text_en, 'textBn', o.text_bn) ORDER BY o.position)
               FROM question_options o WHERE o.question_id = q.id) AS options
       FROM questions q JOIN subjects s ON s.id = q.subject_id
      WHERE ${FREE_POOL} AND ($1::text IS NULL OR s.code = $1)
      ORDER BY random() LIMIT $2`,
    [subject, count],
  );
  res.json({
    durationMinutes: Math.ceil(rows.length * 0.6),
    questions: rows.map((r) => ({
      id: r.id, stemEn: r.stem_en, stemBn: r.stem_bn, code: r.code_snippet,
      subject: { code: r.subject_code, nameEn: r.subject_en, nameBn: r.subject_bn },
      options: r.options ?? [],
    })),
  });
}));

const invalid = (res: Response, fields: Record<string, string>) =>
  res.status(400).json({ error: "Please correct the highlighted fields.", code: "validation_failed", fields });

/** Marks a free set: the correct option and explanation of each question asked (1 mark each, no negative marking). */
siteRouter.post("/free-test/check", asyncHandler(async (req, res) => {
  const answers = req.body?.answers;
  if (!Array.isArray(answers) || answers.length === 0 || answers.length > FREE_MAX) { invalid(res, { answers: "answers_invalid" }); return; }
  const chosen = new Map<string, string | null>();
  for (const a of answers) {
    const qid = a?.questionId;
    const oid = a?.optionId ?? null;
    if (typeof qid !== "string" || !UUID_RE.test(qid) || (oid !== null && (typeof oid !== "string" || !UUID_RE.test(oid)))) {
      invalid(res, { answers: "answers_invalid" }); return;
    }
    chosen.set(qid, oid);
  }
  const { rows } = await pool.query(
    `SELECT q.id, q.explanation_en, q.explanation_bn,
            (SELECT o.id FROM question_options o WHERE o.question_id = q.id AND o.is_correct LIMIT 1) AS correct_option_id
       FROM questions q WHERE q.id = ANY($1::uuid[]) AND ${FREE_POOL}`,
    [[...chosen.keys()]],
  );
  let correct = 0, wrong = 0;
  const results = rows.map((r) => {
    const picked = chosen.get(r.id) ?? null;
    const isCorrect = picked === null ? null : picked === r.correct_option_id;
    if (isCorrect === true) correct++; else if (isCorrect === false) wrong++;
    return { questionId: r.id, correctOptionId: r.correct_option_id, isCorrect, explanationEn: r.explanation_en, explanationBn: r.explanation_bn };
  });
  res.json({ total: rows.length, correct, wrong, skipped: rows.length - correct - wrong, results });
}));

// ── Plans ──────────────────────────────────────────────────────────────────────

export const PLAN_SELECT = `SELECT id, name_en, name_bn, description_en, description_bn, features_en, features_bn, months, price_bdt,
  is_featured, is_active, sort_order FROM plans`;

/** Active plans for the pricing page, cheapest first within the admin's order. */
siteRouter.get("/plans", asyncHandler(async (_req, res) => {
  res.json((await pool.query(`${PLAN_SELECT} WHERE is_active ORDER BY sort_order, months, price_bdt`)).rows);
}));

// ── Articles ───────────────────────────────────────────────────────────────────

const ARTICLE_CATEGORIES = ["guideline", "news", "written", "solution"];
const ARTICLE_CARD = `a.id, a.slug, a.category, a.title_en, a.title_bn, a.summary_en, a.summary_bn, a.tags, a.is_pinned, a.published_at, a.views,
  CASE WHEN f.storage_path IS NULL THEN NULL ELSE '/uploads/' || f.storage_path END AS cover_url`;

/** Published articles, newest first (pinned on top), 12 a page, filtered by category, tag or words. */
siteRouter.get("/articles", asyncHandler(async (req, res) => {
  const q = req.query as Record<string, string | undefined>;
  const params: unknown[] = [];
  const where = ["a.is_published"];
  if (q.category && ARTICLE_CATEGORIES.includes(q.category)) { params.push(q.category); where.push(`a.category = $${params.length}`); }
  if (q.tag) { params.push(q.tag.slice(0, 60)); where.push(`$${params.length} = ANY(a.tags)`); }
  if (q.q?.trim()) {
    params.push(`%${q.q.trim().slice(0, 100).replace(/[\\%_]/g, (ch) => `\\${ch}`)}%`);
    const p = `$${params.length}`;
    where.push(`(a.title_en ILIKE ${p} OR a.title_bn ILIKE ${p} OR a.summary_en ILIKE ${p} OR a.summary_bn ILIKE ${p})`);
  }
  const pageSize = 12;
  const page = Math.max(1, parseInt(q.page ?? "1", 10) || 1);
  const sqlWhere = where.join(" AND ");
  const total = (await pool.query(`SELECT count(*)::int AS n FROM articles a WHERE ${sqlWhere}`, params)).rows[0].n;
  const { rows } = await pool.query(
    `SELECT ${ARTICLE_CARD} FROM articles a LEFT JOIN uploaded_files f ON f.id = a.cover_file_id
      WHERE ${sqlWhere} ORDER BY a.is_pinned DESC, a.published_at DESC NULLS LAST, a.created_at DESC
      LIMIT ${pageSize} OFFSET ${(page - 1) * pageSize}`,
    params,
  );
  res.json({ items: rows, total, page, pageSize });
}));

/** One published article with its body, counting the view; plus up to 4 others from the same category. */
siteRouter.get("/articles/:slug", asyncHandler(async (req, res) => {
  const slug = req.params.slug;
  if (!/^[a-z0-9-]{1,120}$/.test(slug)) { res.status(404).json({ error: "Not found" }); return; }
  const { rows } = await pool.query(
    `UPDATE articles a SET views = views + 1 FROM (SELECT id FROM articles WHERE slug = $1 AND is_published) x
      WHERE a.id = x.id RETURNING a.id`,
    [slug],
  );
  if (!rows[0]) { res.status(404).json({ error: "Not found" }); return; }
  const full = await pool.query(
    `SELECT ${ARTICLE_CARD}, a.body_en, a.body_bn, a.updated_at FROM articles a LEFT JOIN uploaded_files f ON f.id = a.cover_file_id WHERE a.id = $1`,
    [rows[0].id],
  );
  const article = full.rows[0];
  const related = await pool.query(
    `SELECT ${ARTICLE_CARD} FROM articles a LEFT JOIN uploaded_files f ON f.id = a.cover_file_id
      WHERE a.is_published AND a.category = $1 AND a.id <> $2 ORDER BY a.published_at DESC NULLS LAST LIMIT 4`,
    [article.category, article.id],
  );
  res.json({ ...article, related: related.rows });
}));

// ── Free sets: tests an admin marked free, open to visitors ─────────────────────

const FREE_SET = `mt.is_free AND mt.is_published AND NOT mt.is_archived AND mt.mode = 'fixed'
  AND (mt.available_from IS NULL OR mt.available_from <= now()) AND (mt.available_until IS NULL OR mt.available_until > now())`;

const freeSecret = () => `${process.env.JWT_SECRET ?? ""}:free-set`;
const visitorKey = (ip: string | undefined, name: string) =>
  createHash("sha256").update(`${clientKey(ip)}|${name.toLowerCase()}|${freeSecret()}`).digest("hex");

async function freeSet(id: string) {
  if (!UUID_RE.test(id)) return null;
  const { rows } = await pool.query(
    `SELECT mt.id, mt.title_en, mt.title_bn, mt.description_en, mt.description_bn, mt.duration_minutes,
            mt.marks_per_question::float AS marks_per_question, mt.negative_mark::float AS negative_mark,
            (SELECT count(*)::int FROM mock_test_questions mq JOIN questions q ON q.id = mq.question_id AND q.is_published AND q.type = 'mcq'
              WHERE mq.mock_test_id = mt.id) AS question_count,
            (SELECT count(DISTINCT (lower(display_name), visitor_key))::int FROM free_attempts fa WHERE fa.mock_test_id = mt.id) AS participants
       FROM mock_tests mt WHERE mt.id = $1 AND ${FREE_SET}`,
    [id],
  );
  return rows[0] ?? null;
}

/** The set's questions in paper order, with or without the answers. */
async function freeQuestions(id: string, withAnswers: boolean) {
  const { rows } = await pool.query(
    `SELECT q.id, q.stem_en, q.stem_bn, q.code_snippet, ${withAnswers ? "q.explanation_en, q.explanation_bn," : ""}
            s.name_en AS subject_en, s.name_bn AS subject_bn,
            (SELECT json_agg(json_build_object('id', o.id, 'textEn', o.text_en, 'textBn', o.text_bn
                     ${withAnswers ? ", 'isCorrect', o.is_correct" : ""}) ORDER BY o.position)
               FROM question_options o WHERE o.question_id = q.id) AS options
       FROM mock_test_questions mq JOIN questions q ON q.id = mq.question_id AND q.is_published AND q.type = 'mcq'
       JOIN subjects s ON s.id = q.subject_id
      WHERE mq.mock_test_id = $1 ORDER BY mq.position`,
    [id],
  );
  return rows.map((r) => ({
    id: r.id, stemEn: r.stem_en, stemBn: r.stem_bn, code: r.code_snippet,
    subject: { nameEn: r.subject_en, nameBn: r.subject_bn },
    options: r.options ?? [],
    ...(withAnswers ? { explanationEn: r.explanation_en, explanationBn: r.explanation_bn } : {}),
  }));
}

const freeCard = (r: Record<string, unknown>) => ({
  id: r.id, titleEn: r.title_en, titleBn: r.title_bn, descriptionEn: r.description_en, descriptionBn: r.description_bn,
  durationMinutes: r.duration_minutes, questionCount: r.question_count, participants: r.participants,
  marksPerQuestion: r.marks_per_question, negativeMark: r.negative_mark,
});

siteRouter.get("/free-sets", asyncHandler(async (_req, res) => {
  const { rows } = await pool.query(`SELECT mt.id FROM mock_tests mt WHERE ${FREE_SET} ORDER BY mt.created_at, mt.title_en`);
  const sets = await Promise.all(rows.map((r) => freeSet(r.id)));
  res.json(sets.filter(Boolean).map((s) => freeCard(s!)));
}));

siteRouter.get("/free-sets/:id", asyncHandler(async (req, res) => {
  const set = await freeSet(req.params.id);
  if (!set) { res.status(404).json({ error: "Not found" }); return; }
  res.json(freeCard(set));
}));

/** "See answers": every question with the right option and the explanation. */
siteRouter.get("/free-sets/:id/answers", asyncHandler(async (req, res) => {
  const set = await freeSet(req.params.id);
  if (!set) { res.status(404).json({ error: "Not found" }); return; }
  res.json({ ...freeCard(set), questions: await freeQuestions(set.id, true) });
}));

/** "Take exam": the paper without answers and a signed ticket that records when it started (the server times it). */
siteRouter.post("/free-sets/:id/start", asyncHandler(async (req, res) => {
  const set = await freeSet(req.params.id);
  if (!set) { res.status(404).json({ error: "Not found" }); return; }
  const ticket = jwt.sign({ kind: "free-set", t: set.id, at: Date.now() }, freeSecret(), { expiresIn: `${set.duration_minutes + 60}m` });
  res.status(201).json({ ...freeCard(set), ticket, questions: await freeQuestions(set.id, false) });
}));

const MERIT_SQL = `
  WITH best AS (
    SELECT DISTINCT ON (lower(display_name), visitor_key) id, display_name, score::float AS score, max_score::float AS max_score,
           correct, total, seconds, created_at
      FROM free_attempts WHERE mock_test_id = $1
     ORDER BY lower(display_name), visitor_key, score DESC, correct DESC, seconds, created_at)
  SELECT *, RANK() OVER (ORDER BY score DESC, correct DESC, seconds) AS place FROM best`;

const meritEntry = (r: Record<string, unknown>) => ({
  rank: Number(r.place), name: r.display_name, score: Number(r.score), maxScore: Number(r.max_score),
  correct: Number(r.correct), total: Number(r.total), seconds: Number(r.seconds),
});

/** Marks a free attempt, records it under the visitor's name and answers with the result and the rank. */
siteRouter.post("/free-sets/:id/submit", asyncHandler(async (req, res) => {
  const set = await freeSet(req.params.id);
  if (!set) { res.status(404).json({ error: "Not found" }); return; }
  const name = typeof req.body?.name === "string" ? req.body.name.replace(/\s+/g, " ").trim() : "";
  if (name.length < 2 || name.length > 40) { invalid(res, { name: "name_length" }); return; }
  let ticket: { kind?: string; t?: string; at?: number };
  try { ticket = jwt.verify(String(req.body?.ticket ?? ""), freeSecret()) as typeof ticket; }
  catch { res.status(400).json({ error: "This attempt has expired. Start the set again.", code: "ticket_invalid" }); return; }
  if (ticket.kind !== "free-set" || ticket.t !== set.id || typeof ticket.at !== "number") {
    res.status(400).json({ error: "This attempt has expired. Start the set again.", code: "ticket_invalid" }); return;
  }
  const answers = Array.isArray(req.body?.answers) ? req.body.answers : [];
  const chosen = new Map<string, string>();
  for (const a of answers) {
    if (typeof a?.questionId === "string" && typeof a?.optionId === "string" && UUID_RE.test(a.questionId) && UUID_RE.test(a.optionId)) {
      chosen.set(a.questionId, a.optionId);
    }
  }
  const paper = await freeQuestions(set.id, true);
  let correct = 0, wrong = 0;
  const results = paper.map((q) => {
    const right = (q.options as { id: string; isCorrect: boolean }[]).find((o) => o.isCorrect)?.id ?? null;
    const picked = chosen.get(q.id) ?? null;
    const isCorrect = picked === null ? null : picked === right;
    if (isCorrect === true) correct++; else if (isCorrect === false) wrong++;
    return { questionId: q.id, correctOptionId: right, isCorrect };
  });
  const score = Math.round((correct * set.marks_per_question - wrong * set.negative_mark) * 100) / 100;
  const maxScore = Math.round(paper.length * set.marks_per_question * 100) / 100;
  // Time comes from the ticket, never the browser; a paper handed in late counts as the full duration.
  const seconds = Math.min(Math.round((Date.now() - ticket.at) / 1000), set.duration_minutes * 60);
  const saved = await pool.query(
    `INSERT INTO free_attempts (mock_test_id, display_name, visitor_key, correct, wrong, total, score, max_score, seconds)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id`,
    [set.id, name, visitorKey(req.ip, name), correct, wrong, paper.length, score, maxScore, seconds],
  );
  const merit = await pool.query(`SELECT m.id, m.place, count(*) OVER ()::int AS n FROM (${MERIT_SQL}) m`, [set.id]);
  // This try's place if it is the participant's best; otherwise where this score would sit.
  const own = merit.rows.find((r) => r.id === saved.rows[0].id);
  const better = await pool.query(
    `WITH best AS (SELECT DISTINCT ON (lower(display_name), visitor_key) score, correct, seconds FROM free_attempts WHERE mock_test_id = $1
       ORDER BY lower(display_name), visitor_key, score DESC, correct DESC, seconds, created_at)
     SELECT count(*)::int AS n FROM best WHERE score > $2 OR (score = $2 AND correct > $3) OR (score = $2 AND correct = $3 AND seconds < $4)`,
    [set.id, score, correct, seconds],
  );
  res.status(201).json({
    score, maxScore, correct, wrong, skipped: paper.length - correct - wrong, total: paper.length, seconds,
    rank: own ? Number(own.place) : better.rows[0].n + 1,
    participants: merit.rows[0]?.n ?? 1,
    results,
    explanations: Object.fromEntries(paper.map((q) => [q.id, { en: q.explanationEn ?? null, bn: q.explanationBn ?? null }])),
  });
}));

/** Merit list: each participant's best score; ties go to more correct answers, then the faster finish. */
siteRouter.get("/free-sets/:id/merit", asyncHandler(async (req, res) => {
  const set = await freeSet(req.params.id);
  if (!set) { res.status(404).json({ error: "Not found" }); return; }
  const { rows } = await pool.query(`${MERIT_SQL} ORDER BY place, seconds LIMIT 100`, [set.id]);
  res.json({ ...freeCard(set), entries: rows.map(meritEntry) });
}));
