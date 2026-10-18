import fs from "fs";
import path from "path";
import { describe, it, expect, beforeEach } from "vitest";
import { pool } from "../src/db/pool";
import { LESSON_TEXT_FIXES, migration004 } from "../src/db/migrations/004_fix_lesson_text";
import { resetDb } from "./helpers/db";

beforeEach(resetDb);

async function insertLesson(fields: { content_en: string; content_bn?: string; takeaways_bn?: string[] }) {
  const ch = await pool.query("INSERT INTO chapters (chapter_number, title_en, level, is_published) VALUES (1, 'Ch', 'Beginner', true) RETURNING id");
  const menu = await pool.query("INSERT INTO side_menus (chapter_id, label_en) VALUES ($1, 'Menu') RETURNING id", [ch.rows[0].id]);
  const { rows } = await pool.query(
    `INSERT INTO lessons (side_menu_id, lesson_number, title_en, content_en, content_bn, takeaways_en, takeaways_bn, level)
     VALUES ($1, 1, 'Lesson', $2, $3, $4, $5, 'Beginner') RETURNING id`,
    [menu.rows[0].id, fields.content_en, fields.content_bn ?? null, ["keep me"], fields.takeaways_bn ?? []],
  );
  return rows[0].id as string;
}

const byLang = (lang: "en" | "bn") => LESSON_TEXT_FIXES.filter((f) => /[ঀ-৿]/.test(f.bad) === (lang === "bn"));

describe("migration 004: fix lesson text", () => {
  it("repairs every broken string in content and takeaways, and leaves the rest alone", async () => {
    const bn = byLang("bn");
    const en = byLang("en");
    const id = await insertLesson({
      content_en: `Intro. ${en.map((f) => f.bad).join(" | ")} end.`,
      content_bn: `শুরু ${bn.map((f) => f.bad).join(" | ")} শেষ ${en.map((f) => f.bad).join(" ")}`,
      takeaways_bn: ["প্রথম", ...bn.map((f) => `x ${f.bad} y`)],
    });

    await pool.query(migration004.sql);

    const { rows } = await pool.query("SELECT content_en, content_bn, takeaways_en, takeaways_bn FROM lessons WHERE id = $1", [id]);
    const row = rows[0];
    expect(row.content_en).toBe(`Intro. ${en.map((f) => f.good).join(" | ")} end.`);
    expect(row.content_bn).toBe(`শুরু ${bn.map((f) => f.good).join(" | ")} শেষ ${en.map((f) => f.good).join(" ")}`);
    expect(row.takeaways_bn).toEqual(["প্রথম", ...bn.map((f) => `x ${f.good} y`)]); // order kept
    expect(row.takeaways_en).toEqual(["keep me"]);
    expect(JSON.stringify(row)).not.toContain("�");
  });

  it("is a no-op on clean or admin-edited lessons and when re-run", async () => {
    const id = await insertLesson({ content_en: "Clean text", content_bn: "পরিষ্কার লেখা" });
    const before = (await pool.query("SELECT updated_at FROM lessons WHERE id = $1", [id])).rows[0].updated_at;
    await pool.query(migration004.sql);
    await pool.query(migration004.sql);
    const after = (await pool.query("SELECT content_en, content_bn, updated_at FROM lessons WHERE id = $1", [id])).rows[0];
    expect(after).toEqual({ content_en: "Clean text", content_bn: "পরিষ্কার লেখা", updated_at: before });
  });

  it("the seed modules themselves are clean, so fresh databases never get the broken text", () => {
    const dir = path.resolve(__dirname, "../data/modules");
    for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".js"))) {
      const text = fs.readFileSync(path.join(dir, file), "utf8");
      expect(text, file).not.toContain("�");
      expect(text, file).not.toContain("dp/dm");
    }
  });
});
