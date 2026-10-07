import fs from "fs";
import path from "path";
import type { Pool, PoolClient } from "pg";
import { pool } from "./pool.js";
import { withTransaction } from "./tx.js";
import { commitImport, parseImportText, rowToDraft } from "../services/importer.js";

type Db = Pool | PoolClient;

export const SUBJECTS: { code: string; chapterNumber: number | null; name_en: string; name_bn: string; category: "technical" | "general" }[] = [
  { code: "PHY", chapterNumber: 1, name_en: "Basic Physics", name_bn: "পদার্থবিদ্যার মূল ধারণা", category: "technical" },
  { code: "ICS", chapterNumber: 2, name_en: "Introduction to Computer Systems", name_bn: "কম্পিউটার সিস্টেমের পরিচিতি", category: "technical" },
  { code: "EC", chapterNumber: 3, name_en: "Electrical Circuits", name_bn: "তড়িৎ সার্কিট", category: "technical" },
  { code: "DLD", chapterNumber: 4, name_en: "Digital Logic Design", name_bn: "ডিজিটাল লজিক ডিজাইন", category: "technical" },
  { code: "ELN", chapterNumber: 5, name_en: "Basic Electronics", name_bn: "মৌলিক ইলেকট্রনিক্স", category: "technical" },
  { code: "MPI", chapterNumber: 6, name_en: "Microprocessor and Interfacing", name_bn: "মাইক্রোপ্রসেসর ও ইন্টারফেসিং", category: "technical" },
  { code: "CA", chapterNumber: 7, name_en: "Computer Architecture", name_bn: "কম্পিউটার আর্কিটেকচার", category: "technical" },
  { code: "COM", chapterNumber: 8, name_en: "Communication Theory", name_bn: "যোগাযোগ তত্ত্ব", category: "technical" },
  { code: "NET", chapterNumber: 9, name_en: "Computer Networking and Security", name_bn: "কম্পিউটার নেটওয়ার্কিং ও নিরাপত্তা", category: "technical" },
  { code: "SPL", chapterNumber: 10, name_en: "Structured Programming (C)", name_bn: "স্ট্রাকচার্ড প্রোগ্রামিং (C)", category: "technical" },
  { code: "OOP", chapterNumber: 11, name_en: "Object Oriented Programming", name_bn: "অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং", category: "technical" },
  { code: "DM", chapterNumber: 12, name_en: "Discrete Mathematics", name_bn: "ডিসক্রিট গণিত", category: "technical" },
  { code: "GRAPH", chapterNumber: 13, name_en: "Graph Theory", name_bn: "গ্রাফ তত্ত্ব", category: "technical" },
  { code: "TOC", chapterNumber: 14, name_en: "Theory of Computation", name_bn: "গণনার তত্ত্ব", category: "technical" },
  { code: "DSA", chapterNumber: 15, name_en: "Data Structures and Algorithms", name_bn: "ডেটা স্ট্রাকচার ও অ্যালগরিদম", category: "technical" },
  { code: "DBMS", chapterNumber: 16, name_en: "Database Systems", name_bn: "ডেটাবেস সিস্টেম", category: "technical" },
  { code: "SE", chapterNumber: 17, name_en: "Software Engineering", name_bn: "সফটওয়্যার ইঞ্জিনিয়ারিং", category: "technical" },
  { code: "OS", chapterNumber: 18, name_en: "Operating System", name_bn: "অপারেটিং সিস্টেম", category: "technical" },
  { code: "AI", chapterNumber: 19, name_en: "Artificial Intelligence", name_bn: "কৃত্রিম বুদ্ধিমত্তা", category: "technical" },
  { code: "BAN", chapterNumber: null, name_en: "Bangla", name_bn: "বাংলা", category: "general" },
  { code: "ENG", chapterNumber: null, name_en: "English", name_bn: "ইংরেজি", category: "general" },
  { code: "MATH", chapterNumber: null, name_en: "Mathematics", name_bn: "গণিত", category: "general" },
  { code: "GK", chapterNumber: null, name_en: "General Knowledge", name_bn: "সাধারণ জ্ঞান", category: "general" },
];

const PLACEHOLDER_EN = "Placeholder values — check the subject weights and exam pattern against the latest job circular before publishing.";
const PLACEHOLDER_BN = "ডিফল্ট মান — প্রকাশের আগে সর্বশেষ নিয়োগ বিজ্ঞপ্তির সাথে বিষয়ভিত্তিক গুরুত্ব ও পরীক্ষার কাঠামো মিলিয়ে নিন।";

export const JOB_POSTS: { organization: string; title_en: string; title_bn: string; weights: Record<string, number> }[] = [
  {
    organization: "BPSC", title_en: "Assistant Programmer", title_bn: "সহকারী প্রোগ্রামার",
    weights: { NET: 0.12, DBMS: 0.12, SPL: 0.1, DSA: 0.1, OOP: 0.08, OS: 0.08, SE: 0.08, CA: 0.06, DLD: 0.06, MPI: 0.04, DM: 0.04, TOC: 0.03, AI: 0.03, ICS: 0.03, COM: 0.03 },
  },
  {
    organization: "Bangladesh Bank", title_en: "Assistant Programmer", title_bn: "সহকারী প্রোগ্রামার",
    weights: { NET: 0.14, DBMS: 0.14, SPL: 0.12, DSA: 0.12, OOP: 0.1, OS: 0.1, SE: 0.08, ICS: 0.06, CA: 0.05, DLD: 0.05, AI: 0.04 },
  },
  {
    organization: "Bankers' Selection Committee", title_en: "Officer (IT)", title_bn: "অফিসার (আইটি)",
    weights: { NET: 0.14, DBMS: 0.14, ICS: 0.12, SPL: 0.1, OS: 0.1, OOP: 0.08, DSA: 0.08, SE: 0.08, DLD: 0.06, CA: 0.05, AI: 0.05 },
  },
];

/** Splits `total` across weights proportionally (largest remainder), so the parts always sum to `total`. */
export function apportion(weights: number[], total: number): number[] {
  const sum = weights.reduce((a, b) => a + b, 0);
  const exact = weights.map((w) => (w / sum) * total);
  const parts = exact.map(Math.floor);
  let left = total - parts.reduce((a, b) => a + b, 0);
  const order = exact.map((x, i) => [x - Math.floor(x), i] as const).sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  for (const [, i] of order) {
    if (left <= 0) break;
    parts[i]++;
    left--;
  }
  return parts;
}

type SeedKind = "subject" | "topic" | "job_post" | "question";

/** True when the seed created (or adopted) this row on an earlier run — never create it again. */
async function seededBefore(db: Db, kind: SeedKind, key: string): Promise<boolean> {
  return ((await db.query("SELECT 1 FROM seed_ledger WHERE kind = $1 AND key = $2", [kind, key])).rowCount ?? 0) > 0;
}

async function remember(db: Db, kind: SeedKind, key: string) {
  await db.query("INSERT INTO seed_ledger (kind, key) VALUES ($1, $2) ON CONFLICT DO NOTHING", [kind, key]);
}

async function seedSubjects(db: Db) {
  let subjects = 0;
  let topics = 0;
  for (let i = 0; i < SUBJECTS.length; i++) {
    const s = SUBJECTS[i];
    const chapter = s.chapterNumber
      ? (await db.query("SELECT id FROM chapters WHERE chapter_number = $1", [s.chapterNumber])).rows[0]?.id ?? null
      : null;
    if (!(await seededBefore(db, "subject", s.code))) {
      const inserted = await db.query(
        `INSERT INTO subjects (code, name_en, name_bn, category, chapter_id, sort_order) VALUES ($1,$2,$3,$4,$5,$6)
         ON CONFLICT (code) DO NOTHING`,
        [s.code, s.name_en, s.name_bn, s.category, chapter, i + 1],
      );
      subjects += inserted.rowCount ?? 0;
      await remember(db, "subject", s.code); // also adopts a subject that already existed
    }
    const subject = (await db.query("SELECT id, chapter_id FROM subjects WHERE code = $1", [s.code])).rows[0];
    if (!subject || !chapter) continue; // deleted by an admin, or no lessons to link yet
    // Link a subject created before its chapter existed, without overwriting an admin's choice.
    if (!subject.chapter_id) await db.query("UPDATE subjects SET chapter_id = $2 WHERE id = $1", [subject.id, chapter]);
    // One topic per lesson of the linked chapter, named after the lesson so imported topics match.
    const lessons = await db.query(
      `SELECT l.id, l.title_en, l.title_bn, l.lesson_number FROM lessons l JOIN side_menus m ON m.id = l.side_menu_id
        WHERE m.chapter_id = $1 ORDER BY m.sort_order, l.lesson_number`,
      [chapter],
    );
    for (const l of lessons.rows) {
      if (await seededBefore(db, "topic", l.id)) continue;
      const t = await db.query(
        `INSERT INTO topics (subject_id, name_en, name_bn, lesson_id, sort_order) VALUES ($1,$2,$3,$4,$5)
         ON CONFLICT (subject_id, name_en) DO NOTHING`,
        [subject.id, String(l.title_en).slice(0, 200), l.title_bn ? String(l.title_bn).slice(0, 200) : null, l.id, l.lesson_number],
      );
      topics += t.rowCount ?? 0;
      await remember(db, "topic", l.id);
    }
  }
  return { subjects, topics };
}

async function seedJobPostsAndMocks(db: Db) {
  let jobPosts = 0;
  let mockTests = 0;
  const ids = new Map<string, string>(
    (await db.query("SELECT id, code FROM subjects")).rows.map((r) => [r.code, r.id]),
  );
  for (const p of JOB_POSTS) {
    const key = `${p.organization}|${p.title_en}`;
    if (await seededBefore(db, "job_post", key)) continue; // possibly renamed or deleted since — leave it alone
    const inserted = await db.query(
      `INSERT INTO job_posts (organization, title_en, title_bn, exam_pattern_en, exam_pattern_bn, is_published)
       VALUES ($1,$2,$3,$4,$5,false) ON CONFLICT (organization, title_en) DO NOTHING RETURNING id`,
      [p.organization, p.title_en, p.title_bn, PLACEHOLDER_EN, PLACEHOLDER_BN],
    );
    await remember(db, "job_post", key);
    if (!inserted.rows[0]) continue; // existed before the ledger — adopt it as is
    jobPosts++;
    const postId = inserted.rows[0].id;
    const entries = Object.entries(p.weights).filter(([code]) => ids.has(code));
    for (const [code, weight] of entries) {
      await db.query("INSERT INTO job_post_subjects (job_post_id, subject_id, weight) VALUES ($1,$2,$3)", [postId, ids.get(code), weight]);
    }
    const mock = await db.query(
      `INSERT INTO mock_tests (title_en, title_bn, job_post_id, mode, duration_minutes, total_questions, marks_per_question, negative_mark, is_published)
       VALUES ($1, $2, $3, 'random', 50, 50, 1, 0.25, false) RETURNING id`,
      [`${p.organization} ${p.title_en} — Model Test 1`, `${p.title_bn} — মডেল টেস্ট ১`, postId],
    );
    mockTests++;
    const counts = apportion(entries.map(([, w]) => w), 50);
    for (let i = 0; i < entries.length; i++) {
      if (counts[i] > 0) {
        await db.query("INSERT INTO mock_test_sections (mock_test_id, subject_id, question_count) VALUES ($1,$2,$3)", [mock.rows[0].id, ids.get(entries[i][0]), counts[i]]);
      }
    }
  }
  return { jobPosts, mockTests };
}

async function seedQuestions(db: Db, dir: string) {
  if (!fs.existsSync(dir)) return 0;
  const subjects = new Map<string, string>(
    (await db.query("SELECT id, code FROM subjects")).rows.map((r) => [String(r.code).toUpperCase(), r.id]),
  );
  let added = 0;
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".json")).sort()) {
    const rows = parseImportText("json", fs.readFileSync(path.join(dir, file), "utf8"));
    const results = rows.map((raw, i) => rowToDraft(raw, i + 1, subjects));
    const problems = results.flatMap((r) => r.problems);
    if (problems.length) {
      // A subject an admin deleted is skipped, not an error; anything else in the file is.
      const real = problems.filter((p) => p.code !== "subject_unknown");
      if (real.length) {
        const list = real.slice(0, 10).map((p) => `${file} row ${p.row}: ${p.field} ${p.code}`).join("; ");
        throw new Error(`Starter content has invalid rows — ${list}`);
      }
    }
    for (const { draft } of results) {
      if (!draft || (await seededBefore(db, "question", draft.hash))) continue;
      const exists = await db.query("SELECT 1 FROM questions WHERE content_hash = $1", [draft.hash]);
      if (!exists.rowCount) added += await commitImport(db, [draft], { source: "original", publish: true, createdBy: null });
      await remember(db, "question", draft.hash); // keyed by the original hash, so later edits don't matter
    }
  }
  return added;
}

/** Seeds the exam-prep data, filling gaps only. Returns how many rows of each kind this run added. */
export async function seedExamPrep(db: Db, questionsDir: string) {
  const { subjects, topics } = await seedSubjects(db);
  const { jobPosts, mockTests } = await seedJobPostsAndMocks(db);
  const questions = await seedQuestions(db, questionsDir);
  return { subjects, topics, jobPosts, mockTests, questions };
}

// CLI: npm run seed:exam-prep
if (require.main === module) {
  const dir = path.resolve(__dirname, "../../data/questions");
  withTransaction((client) => seedExamPrep(client, dir))
    .then((s) => {
      console.log(`✔ subjects +${s.subjects}, topics +${s.topics}, job posts +${s.jobPosts}, mock tests +${s.mockTests}, questions +${s.questions}`);
      return pool.end();
    })
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err.message || err);
      process.exit(1);
    });
}
