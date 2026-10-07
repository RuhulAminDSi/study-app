import type { Pool, PoolClient } from "pg";
import { pool } from "./pool.js";

export interface SeedLesson {
  title: string;
  titleBn?: string;
  content?: string;
  contentBn?: string;
  code?: string;
  codeBn?: string;
  takeaways?: string[];
  takeawaysBn?: string[];
  level?: string;
}

export interface SeedModule {
  title: string;
  titleBn?: string;
  level?: string;
  lessons: SeedLesson[];
}

function sanitize(s: string | null | undefined): string | null {
  if (!s) return s;
  return s.replace(/\x00/g, "").trim(); // eslint-disable-line no-control-regex -- strips NUL bytes PostgreSQL rejects
}

/**
 * Seeds each module as chapter N with one side menu and its lessons, filling gaps only. Safe to
 * re-run: an existing chapter is left as the admins edited it, its first side menu is reused, and
 * lessons that already exist (same side menu + lesson number) are left untouched.
 */
export async function seedModules(db: Pool | PoolClient, modules: SeedModule[]) {
  let totalLessons = 0;

  for (let mi = 0; mi < modules.length; mi++) {
    const mod = modules[mi];
    const chNum = mi + 1;

    // Existing chapters belong to the admins who may have edited them, so only fill gaps.
    await db.query(
      `INSERT INTO chapters (chapter_number, title_en, title_bn, level, is_published, sort_order)
       VALUES ($1, $2, $3, $4, true, $5)
       ON CONFLICT (chapter_number) DO NOTHING`,
      [chNum, mod.title, mod.titleBn || null, mod.level || "Beginner", chNum],
    );
    const chResult = await db.query("SELECT id FROM chapters WHERE chapter_number = $1", [chNum]);
    const chapterId = chResult.rows[0].id;

    // side_menus has no unique key to conflict on, so look for the chapter's menu first.
    const existing = await db.query(
      "SELECT id FROM side_menus WHERE chapter_id = $1 ORDER BY sort_order, created_at LIMIT 1",
      [chapterId],
    );
    let sideMenuId: string = existing.rows[0]?.id;
    if (!sideMenuId) {
      const created = await db.query(
        `INSERT INTO side_menus (chapter_id, label_en, label_bn, sort_order, is_active)
         VALUES ($1, $2, $3, 1, true)
         RETURNING id`,
        [chapterId, mod.title, mod.titleBn || null],
      );
      sideMenuId = created.rows[0].id;
    }

    for (let li = 0; li < mod.lessons.length; li++) {
      const lesson = mod.lessons[li];
      const inserted = await db.query(
        `INSERT INTO lessons (side_menu_id, lesson_number, title_en, title_bn, content_en, content_bn, code_en, code_bn, takeaways_en, takeaways_bn, level, is_published)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, true)
         ON CONFLICT (side_menu_id, lesson_number) DO NOTHING`,
        [
          sideMenuId,
          li + 1,
          sanitize(lesson.title),
          sanitize(lesson.titleBn),
          sanitize(lesson.content) || "",
          sanitize(lesson.contentBn),
          sanitize(lesson.code),
          sanitize(lesson.codeBn),
          (lesson.takeaways || []).map((t) => sanitize(t)),
          (lesson.takeawaysBn || []).map((t) => sanitize(t)),
          lesson.level || mod.level || "Beginner",
        ],
      );
      totalLessons += inserted.rowCount ?? 0;
    }
    console.log(`  ✔ ${mod.title}: ${mod.lessons.length} lessons`);
  }

  return { chapters: modules.length, lessonsAdded: totalLessons };
}

export async function seed() {
  const { modules } = await import("../../data/modules/index");
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const result = await seedModules(client, modules as SeedModule[]);
    // Attach handwritten revision notes (guarded: never overwrites lessons an admin has edited).
    const { applyNotes, loadNotesManifest } = await import("./applyNotes.js");
    const notes = await applyNotes(client, loadNotesManifest(), modules as SeedModule[]);
    await client.query("COMMIT");
    console.log(`✔ ${result.chapters} chapters checked (existing ones left as they are)`);
    console.log(`✔ ${result.lessonsAdded} new lessons added`);
    for (const n of notes) console.log(`✔ notes ${n.slug}: ${n.action}${n.reason ? ` (${n.reason})` : ""}`);
    console.log("\n✅ Seed complete!");
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("Seed failed:", err);
    throw err;
  } finally {
    client.release();
  }
}

// CLI: npm run seed
if (require.main === module) {
  seed().then(() => {
    pool.end();
    process.exit(0);
  }).catch(() => {
    pool.end();
    process.exit(1);
  });
}
