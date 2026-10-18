import { describe, it, expect, beforeEach } from "vitest";
import { pool } from "../src/db/pool";
import { seedModules, type SeedModule } from "../src/db/seed";
import { resetDb } from "./helpers/db";

beforeEach(resetDb);

const modules: SeedModule[] = [
  {
    title: "1. Basic Physics",
    titleBn: "১. পদার্থবিদ্যা",
    level: "Beginner",
    lessons: [
      { title: "Electromagnetism", titleBn: "তড়িৎচুম্বকত্ব", content: "Intro\u0000 text", takeaways: ["a"] },
      { title: "Waves", content: "Waves text", takeaways: [] },
    ],
  },
];

async function counts() {
  const { rows } = await pool.query(
    "SELECT (SELECT count(*)::int FROM chapters) AS chapters, (SELECT count(*)::int FROM side_menus) AS menus, (SELECT count(*)::int FROM lessons) AS lessons",
  );
  return rows[0];
}

describe("seedModules", () => {
  it("creates one chapter, one side menu and every lesson", async () => {
    await seedModules(pool, modules);
    expect(await counts()).toEqual({ chapters: 1, menus: 1, lessons: 2 });
    const { rows } = await pool.query("SELECT content_en FROM lessons WHERE lesson_number = 1");
    expect(rows[0].content_en).toBe("Intro text"); // NUL bytes stripped
  });

  it("is safe to run twice: no duplicate side menus or lessons", async () => {
    await seedModules(pool, modules);
    await seedModules(pool, modules);
    expect(await counts()).toEqual({ chapters: 1, menus: 1, lessons: 2 });
  });

  it("reuses a chapter's existing side menu instead of adding another", async () => {
    const ch = await pool.query(
      "INSERT INTO chapters (chapter_number, title_en, level, is_published) VALUES (1, 'Old title', 'Beginner', true) RETURNING id",
    );
    const menu = await pool.query(
      "INSERT INTO side_menus (chapter_id, label_en) VALUES ($1, 'Existing menu') RETURNING id",
      [ch.rows[0].id],
    );
    await seedModules(pool, modules);
    expect(await counts()).toEqual({ chapters: 1, menus: 1, lessons: 2 });
    const { rows } = await pool.query("SELECT DISTINCT side_menu_id FROM lessons");
    expect(rows).toEqual([{ side_menu_id: menu.rows[0].id }]);
  });

  it("never overwrites a chapter an admin has already edited", async () => {
    await pool.query(
      "INSERT INTO chapters (chapter_number, title_en, title_bn, level, is_published) VALUES (1, 'Edited by admin', 'সম্পাদিত', 'Advanced', false)",
    );
    await seedModules(pool, modules);
    const { rows } = await pool.query("SELECT title_en, title_bn, level, is_published FROM chapters WHERE chapter_number = 1");
    expect(rows[0]).toEqual({ title_en: "Edited by admin", title_bn: "সম্পাদিত", level: "Advanced", is_published: false });
  });
});
