import { pool } from "./pool.js";

function sanitize(s: string | null | undefined): string | null {
  if (!s) return s;
  return s.replace(/\x00/g, "").trim();
}

async function seed() {
  const { modules } = await import("../../../src/data/modules/index");
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await client.query("DELETE FROM lessons");
    await client.query("DELETE FROM sub_side_menus");

    let totalSubMenus = 0;
    let totalLessons = 0;

    for (let mi = 0; mi < modules.length; mi++) {
      const mod = modules[mi];
      const chResult = await client.query(
        "SELECT id FROM chapters WHERE chapter_number = $1",
        [mi + 1],
      );
      if (!chResult.rows[0]) {
        console.log(`  ✗ Chapter ${mi + 1} not found: ${mod.title}`);
        continue;
      }
      const chapterId = chResult.rows[0].id;

      const smResult = await client.query(
        "SELECT id FROM side_menus WHERE chapter_id = $1 LIMIT 1",
        [chapterId],
      );
      if (!smResult.rows[0]) {
        console.log(`  ✗ Side menu not found for: ${mod.title}`);
        continue;
      }
      const sideMenuId = smResult.rows[0].id;

      for (let li = 0; li < mod.lessons.length; li++) {
        const lesson = mod.lessons[li];
        const lessonNum = li + 1;

        const subResult = await client.query(
          `INSERT INTO sub_side_menus (side_menu_id, label_en, label_bn, sort_order, is_active)
           VALUES ($1, $2, $3, $4, true) RETURNING id`,
           [sideMenuId, sanitize(lesson.title), sanitize(lesson.titleBn), lessonNum],
        );
        const subMenuId = subResult.rows[0].id;
        totalSubMenus++;

        await client.query(
          `INSERT INTO lessons (sub_side_menu_id, lesson_number, title_en, title_bn, content_en, content_bn, code_en, code_bn, takeaways_en, takeaways_bn, level, is_published)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, true)`,
          [
            subMenuId,
            lessonNum,
            sanitize(lesson.title),
            sanitize(lesson.titleBn),
            sanitize(lesson.content) || "",
            sanitize(lesson.contentBn),
            sanitize(lesson.code),
            sanitize(lesson.codeBn),
            (lesson.takeaways || []).map((t: string) => sanitize(t)),
            (lesson.takeawaysBn || []).map((t: string) => sanitize(t)),
            lesson.level || mod.level,
          ],
        );
        totalLessons++;
      }
      console.log(`  ✔ ${mod.title}: ${mod.lessons.length} lessons`);
    }

    await client.query("COMMIT");
    console.log(`\n✔ ${totalSubMenus} sub-side-menus created`);
    console.log(`✔ ${totalLessons} lessons created`);
    console.log("\n✅ Comprehensive seed complete!");
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("Seed failed:", err);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

seed();
