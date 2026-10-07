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

const LABELS: Record<Lang, { pdf: string; open: string }> = {
  en: { pdf: "Download PDF", open: "Open full page" },
  bn: { pdf: "PDF ডাউনলোড", open: "পূর্ণ পৃষ্ঠায় খুলুন" },
};

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/**
 * Lesson body for a note set. The app's NotesViewer (src/components/NotesViewer.tsx) recognises this
 * block by its data-* attributes and renders the full viewer: notebook shown by default, a PDF tab
 * with preview, download and details. The markup itself is the plain fallback: the framed notebook
 * page (keeps its CSS and SVG ids isolated) with "Download PDF" and "Open full page" buttons.
 */
export function viewerHtml(entry: NotesEntry, lang: Lang): string {
  const base = `/notes/${entry.slug}/${entry.slug}.${lang}`;
  const heading = escapeHtml(entry.heading[lang]);
  const l = LABELS[lang];
  const kind = entry.mode === "add" ? ' data-notes-kind="revision"' : "";
  return (
    `<div class="hn-viewer" data-notes="${entry.slug}" data-lang="${lang}" data-title="${heading}"${kind}>` +
    `<div class="hn-viewer-bar"><span class="hn-viewer-title">${heading}</span>` +
    `<span class="hn-viewer-links"><a href="${base}.pdf" download>${l.pdf}</a>` +
    `<a href="${base}.html" target="_blank" rel="noopener">${l.open}</a></span></div>` +
    `<iframe class="hn-viewer-frame" src="${base}.html" title="${heading}"></iframe></div>`
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
  opts: { force?: boolean; publishedDir?: string } = {},
): Promise<NotesResult[]> {
  const results: NotesResult[] = [];
  for (const entry of entries) {
    // Never point a lesson at files that are not published yet: the SPA fallback would frame the app itself.
    if (opts.publishedDir) {
      const missing = (["en", "bn"] as const)
        .map((lang) => `${entry.slug}/${entry.slug}.${lang}.html`)
        .filter((f) => !fs.existsSync(path.join(opts.publishedDir as string, f)));
      if (missing.length) {
        results.push({ slug: entry.slug, action: "skipped", reason: `not published yet (missing ${missing.join(", ")}; run notes/build/publish.mjs)` });
        continue;
      }
    }
    const chapter = (await db.query("SELECT id, level FROM chapters WHERE chapter_number = $1", [entry.chapterNumber])).rows[0];
    if (!chapter) {
      results.push({ slug: entry.slug, action: "skipped", reason: `chapter ${entry.chapterNumber} not found` });
      continue;
    }
    const lesson = (
      await db.query(
        // Its own lesson (by marker) first, so an added lesson is still found after its title changes.
        `SELECT l.id, l.content_en, l.content_bn FROM lessons l JOIN side_menus m ON m.id = l.side_menu_id
          WHERE m.chapter_id = $1 AND (l.title_en = $2 OR strpos(l.content_en, $3) > 0)
          ORDER BY (strpos(l.content_en, $3) > 0) DESC, m.sort_order, l.lesson_number LIMIT 1`,
        [chapter.id, entry.lessonTitleEn, `data-notes="${entry.slug}"`],
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
                code_en = NULL, code_bn = NULL, updated_at = now(),
                title_en = CASE WHEN $6 THEN $7 ELSE title_en END,
                title_bn = CASE WHEN $6 THEN COALESCE($8, title_bn) ELSE title_bn END
          WHERE id = $1`,
        // An added lesson belongs to the notes, so it follows the manifest title; a replaced one keeps its own.
        [lesson.id, ...fields, entry.mode === "add", entry.lessonTitleEn, entry.lessonTitleBn ?? null],
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

/** Where the published notes live: public/notes in the repo, frontend-dist/notes in a deployed server. */
export function findPublishedDir(): string | undefined {
  return [path.resolve(__dirname, "../../../public/notes"), path.resolve(__dirname, "../../frontend-dist/notes")].find((d) => fs.existsSync(d));
}

export async function loadSeedModules(): Promise<SeedModule[]> {
  const { modules } = await import("../../data/modules/index");
  return modules as SeedModule[];
}

// CLI: npm run notes:apply [-- --force]
if (require.main === module) {
  const force = process.argv.includes("--force");
  (async () => {
    const publishedDir = findPublishedDir();
    if (!publishedDir) console.warn("warning: no published notes folder found; lessons are attached without checking the files exist");
    const results = await applyNotes(pool, loadNotesManifest(), await loadSeedModules(), { force, publishedDir });
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
