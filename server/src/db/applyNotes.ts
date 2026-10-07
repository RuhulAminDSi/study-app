import fs from "fs";
import path from "path";
import type { Pool, PoolClient } from "pg";
import { pool } from "./pool.js";
import type { SeedModule } from "./seed.js";

type Db = Pool | PoolClient;
type Lang = "en" | "bn";

/** One entry of server/data/notes/manifest.json: which lesson a handwritten note set attaches to. */
export interface NotesEntry {
  slug: string;
  chapterNumber: number;
  /** replace = take over an existing seeded lesson; add = append a new lesson to the chapter */
  mode: "replace" | "add";
  lessonTitleEn: string;
  lessonTitleBn?: string;
  heading: Record<Lang, string>;
  takeaways: Record<Lang, string[]>;
}

export interface NotesResult {
  slug: string;
  action: "replaced" | "refreshed" | "inserted" | "skipped";
  reason?: string;
}

const LABELS: Record<Lang, { pdf: string; open: string; md: string }> = {
  en: { pdf: "Download PDF", open: "Open full page", md: "Markdown" },
  bn: { pdf: "PDF ডাউনলোড", open: "পূর্ণ পৃষ্ঠায় খুলুন", md: "Markdown" },
};

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/** Lesson body: a viewer that frames the published notes page (keeps its CSS and SVG ids isolated). */
export function viewerHtml(entry: NotesEntry, lang: Lang): string {
  const base = `/notes/${entry.slug}/${entry.slug}.${lang}`;
  const heading = escapeHtml(entry.heading[lang]);
  const l = LABELS[lang];
  const kind = entry.mode === "add" ? ' data-notes-kind="revision"' : "";
  return (
    `<div class="hn-viewer" data-notes="${entry.slug}" data-lang="${lang}"${kind}>` +
    `<div class="hn-viewer-bar"><span class="hn-viewer-title">${heading}</span>` +
    `<span class="hn-viewer-links"><a href="${base}.pdf" download>${l.pdf}</a>` +
    `<a href="${base}.html" target="_blank" rel="noopener">${l.open}</a>` +
    `<a href="${base}.md" target="_blank" rel="noopener">${l.md}</a></span></div>` +
    `<iframe class="hn-viewer-frame" src="${base}.html" title="${heading}" loading="lazy"></iframe></div>`
  );
}

const managedBy = (content: string | null, slug: string) => (content ?? "").includes(`data-notes="${slug}"`);
const same = (a: string | null | undefined, b: string | null | undefined) => (a ?? "").trim() === (b ?? "").trim();

/**
 * Attaches handwritten note sets to lessons. Guarded and idempotent: a lesson is only overwritten
 * while it still holds its original seed text or is already managed by the same note set, unless
 * `force` is set, so an admin's edits are never lost silently.
 */
export async function applyNotes(
  db: Db,
  entries: NotesEntry[],
  seedModules: SeedModule[],
  opts: { force?: boolean } = {},
): Promise<NotesResult[]> {
  const results: NotesResult[] = [];
  for (const entry of entries) {
    const chapter = (await db.query("SELECT id, level FROM chapters WHERE chapter_number = $1", [entry.chapterNumber])).rows[0];
    if (!chapter) {
      results.push({ slug: entry.slug, action: "skipped", reason: `chapter ${entry.chapterNumber} not found` });
      continue;
    }
    const lesson = (
      await db.query(
        `SELECT l.id, l.content_en, l.content_bn FROM lessons l JOIN side_menus m ON m.id = l.side_menu_id
          WHERE m.chapter_id = $1 AND l.title_en = $2 ORDER BY m.sort_order, l.lesson_number LIMIT 1`,
        [chapter.id, entry.lessonTitleEn],
      )
    ).rows[0];
    const fields = [
      viewerHtml(entry, "en"),
      viewerHtml(entry, "bn"),
      entry.takeaways.en,
      entry.takeaways.bn,
    ];

    if (lesson) {
      const managed = managedBy(lesson.content_en, entry.slug);
      const seedLesson = seedModules[entry.chapterNumber - 1]?.lessons.find((s) => s.title === entry.lessonTitleEn);
      const untouchedSeed =
        entry.mode === "replace" && !!seedLesson && same(lesson.content_en, seedLesson.content) && same(lesson.content_bn, seedLesson.contentBn);
      if (!managed && !untouchedSeed && !opts.force) {
        results.push({ slug: entry.slug, action: "skipped", reason: "lesson was edited by an admin (use --force to overwrite)" });
        continue;
      }
      await db.query(
        `UPDATE lessons SET content_en = $2, content_bn = $3, takeaways_en = $4, takeaways_bn = $5,
                code_en = NULL, code_bn = NULL, updated_at = now()
          WHERE id = $1`,
        [lesson.id, ...fields],
      );
      results.push({ slug: entry.slug, action: managed ? "refreshed" : "replaced" });
      continue;
    }

    if (entry.mode === "replace") {
      results.push({ slug: entry.slug, action: "skipped", reason: `lesson "${entry.lessonTitleEn}" not found` });
      continue;
    }
    const menu = (
      await db.query("SELECT id FROM side_menus WHERE chapter_id = $1 ORDER BY sort_order, created_at LIMIT 1", [chapter.id])
    ).rows[0];
    if (!menu) {
      results.push({ slug: entry.slug, action: "skipped", reason: `chapter ${entry.chapterNumber} has no side menu` });
      continue;
    }
    await db.query(
      `INSERT INTO lessons (side_menu_id, lesson_number, title_en, title_bn, content_en, content_bn, takeaways_en, takeaways_bn, level, is_published)
       VALUES ($1, (SELECT COALESCE(max(lesson_number), 0) + 1 FROM lessons WHERE side_menu_id = $1), $2, $3, $4, $5, $6, $7, $8, true)`,
      [menu.id, entry.lessonTitleEn, entry.lessonTitleBn ?? null, ...fields, chapter.level || "Beginner"],
    );
    results.push({ slug: entry.slug, action: "inserted" });
  }
  return results;
}

export function loadNotesManifest(file = path.resolve(__dirname, "../../data/notes/manifest.json")): NotesEntry[] {
  return JSON.parse(fs.readFileSync(file, "utf8")).notes as NotesEntry[];
}

export async function loadSeedModules(): Promise<SeedModule[]> {
  const { modules } = await import("../../data/modules/index");
  return modules as SeedModule[];
}

// CLI: npm run notes:apply [-- --force]
if (require.main === module) {
  const force = process.argv.includes("--force");
  (async () => {
    const results = await applyNotes(pool, loadNotesManifest(), await loadSeedModules(), { force });
    for (const r of results) console.log(`${r.action.padEnd(9)} ${r.slug}${r.reason ? ` (${r.reason})` : ""}`);
  })()
    .then(() => pool.end())
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("notes:apply failed:", err);
      pool.end();
      process.exit(1);
    });
}
