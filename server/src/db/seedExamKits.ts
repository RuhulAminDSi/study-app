// Seeds Exam Kits (data/exam-kits/<slug>.json) and exam blueprints (data/blueprints/<id>.json), plan E0.
// Fills gaps only, like seedExamPrep: a kit or blueprint the seed created before and an admin deleted is not
// brought back (seed_ledger). A kit already in the database is refreshed whenever its file's content differs, and is
// published when its file changes from draft to published.
import fs from "fs";
import path from "path";
import type { Pool, PoolClient } from "pg";
import { pool } from "./pool.js";
import { withTransaction } from "./tx.js";
import { apportion, remember, seededBefore } from "./seedExamPrep.js";
import { checkKit, type ExamKit, type KitFact } from "../services/examKitShape.js";

type Db = Pool | PoolClient;

export interface BlueprintSection {
  type: "mcq" | "written";
  label: string;
  practised?: boolean;
  questionCount?: number | null;
  marksPerQuestion?: number;
  negativeMark?: number;
  marks?: number;
  subjectWeights?: Record<string, number>;
}
export interface Blueprint {
  id: string;
  title: { en: string; bn: string };
  durationMinutes: number;
  totalMarks: number;
  sections: BlueprintSection[];
}

const readJson = <T>(file: string): T => JSON.parse(fs.readFileSync(file, "utf8").replace(/^\uFEFF/, "")) as T;
/** JSON with object keys sorted, so a file and its jsonb copy (which reorders keys) compare equal. */
const canonical = (v: unknown): string =>
  JSON.stringify(v, (_k, x) =>
    x && typeof x === "object" && !Array.isArray(x)
      ? Object.fromEntries(Object.keys(x).sort().map((k) => [k, (x as Record<string, unknown>)[k]]))
      : x,
  );
const jsonFiles = (dir: string) =>
  fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".json") && !f.startsWith("_")).sort() : [];

export function loadFacts(kitsDir: string): Map<string, KitFact> {
  const file = path.join(kitsDir, "_facts.json");
  if (!fs.existsSync(file)) return new Map();
  return new Map(readJson<{ facts: KitFact[] }>(file).facts.map((f) => [f.id, f]));
}

/** Questions per lesson_slug and type in the starter files (data/questions/*.json). */
export function bankCounts(questionsDir: string): Map<string, { mcq: number; written: number; programming: number }> {
  const out = new Map<string, { mcq: number; written: number; programming: number }>();
  for (const f of jsonFiles(questionsDir)) {
    for (const q of readJson<{ lesson_slug?: string; type: "mcq" | "written" | "programming" }[]>(path.join(questionsDir, f))) {
      if (!q.lesson_slug) continue;
      const c = out.get(q.lesson_slug) ?? { mcq: 0, written: 0, programming: 0 };
      c[q.type]++;
      out.set(q.lesson_slug, c);
    }
  }
  return out;
}

/** Checks every kit file; returns the problems (empty = all valid). */
export function checkKitFiles(kitsDir: string, questionsDir: string, today = new Date()): string[] {
  const facts = loadFacts(kitsDir);
  const bank = bankCounts(questionsDir);
  return jsonFiles(kitsDir).flatMap((f) => {
    const kit = readJson<ExamKit>(path.join(kitsDir, f));
    return checkKit(kit, f, { facts, bank: bank.get(kit.slug) ?? { mcq: 0, written: 0, programming: 0 }, today });
  });
}

export async function seedExamKits(db: Db, kitsDir: string, questionsDir: string) {
  const problems = checkKitFiles(kitsDir, questionsDir);
  if (problems.length) throw new Error(`Exam kits have problems — ${problems.slice(0, 10).join("; ")}`);
  const facts = loadFacts(kitsDir);
  let added = 0;
  let refreshed = 0;
  for (const f of jsonFiles(kitsDir)) {
    const kit = readJson<ExamKit>(path.join(kitsDir, f));
    // the referenced facts travel with the kit, so the reader needs one request
    const data = { ...kit, factsResolved: kit.facts.map((id) => facts.get(id)).filter(Boolean) };
    const current = await db.query("SELECT data FROM exam_kits WHERE slug = $1", [kit.slug]);
    if (current.rows[0]) {
      const stored = current.rows[0].data ?? {};
      if (canonical(stored) !== canonical(data)) {
        // a kit whose file moves from draft to published goes live; an admin's later unpublish is left alone
        const goesLive = stored.status !== "published" && kit.status === "published";
        await db.query(
          `UPDATE exam_kits SET data = $2, lesson_title_en = $3, updated_at = now()${goesLive ? ", is_published = true" : ""} WHERE slug = $1`,
          [kit.slug, data, kit.lessonTitleEn],
        );
        refreshed++;
      }
    } else if (!(await seededBefore(db, "exam_kit", kit.slug))) {
      await db.query(
        "INSERT INTO exam_kits (slug, chapter_number, lesson_title_en, data, is_published) VALUES ($1, $2, $3, $4, $5)",
        [kit.slug, kit.chapter, kit.lessonTitleEn, data, kit.status === "published"],
      );
      added++;
    }
    await remember(db, "exam_kit", kit.slug);
  }
  return { added, refreshed };
}

/** One unpublished model test per blueprint; its practised sections become per-subject sections. */
export async function seedBlueprints(db: Db, dir: string) {
  const subjectIds = new Map<string, string>((await db.query("SELECT id, code FROM subjects")).rows.map((r) => [r.code, r.id]));
  let added = 0;
  for (const f of jsonFiles(dir)) {
    const b = readJson<Blueprint>(path.join(dir, f));
    if (await seededBefore(db, "blueprint", b.id)) continue;
    const practised = b.sections.filter((s) => s.practised && s.questionCount && s.marksPerQuestion);
    const total = practised.reduce((n, s) => n + (s.questionCount ?? 0), 0);
    const first = practised[0];
    const mock = await db.query(
      `INSERT INTO mock_tests (title_en, title_bn, mode, duration_minutes, total_questions, marks_per_question, negative_mark, is_published, kind, blueprint_id)
       VALUES ($1, $2, 'random', $3, $4, $5, $6, false, 'model', $7) RETURNING id`,
      [b.title.en, b.title.bn, b.durationMinutes, total, first.marksPerQuestion, first.negativeMark ?? 0, b.id],
    );
    for (const s of practised) {
      const entries = Object.entries(s.subjectWeights ?? {}).filter(([code]) => subjectIds.has(code));
      const counts = apportion(entries.map(([, w]) => w), s.questionCount ?? 0);
      for (let i = 0; i < entries.length; i++) {
        if (!counts[i]) continue;
        await db.query(
          `INSERT INTO mock_test_sections (mock_test_id, subject_id, question_count, type, marks_per_question, negative_mark)
           VALUES ($1, $2, $3, $4, $5, $6)`,
          [mock.rows[0].id, subjectIds.get(entries[i][0]), counts[i], s.type, s.marksPerQuestion, s.negativeMark ?? 0],
        );
      }
    }
    await remember(db, "blueprint", b.id);
    added++;
  }
  return added;
}

// CLI: npm run seed:exam-kits
if (require.main === module) {
  const data = path.resolve(__dirname, "../../data");
  withTransaction(async (client) => ({
    kits: await seedExamKits(client, path.join(data, "exam-kits"), path.join(data, "questions")),
    blueprints: await seedBlueprints(client, path.join(data, "blueprints")),
  }))
    .then((s) => {
      console.log(`✔ exam kits +${s.kits.added} (refreshed ${s.kits.refreshed}), blueprint model tests +${s.blueprints}`);
      return pool.end();
    })
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err.message || err);
      process.exit(1);
    });
}
