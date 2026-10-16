import { describe, it, expect, beforeEach } from "vitest";
import { pool } from "../src/db/pool";
import { resetDb, insertSubject, insertMcq, insertMockTest, insertExamTag } from "./helpers/db";

/** Runs a query that must fail and returns the PostgreSQL error code. */
async function pgErrorCode(query: Promise<unknown>): Promise<string> {
  try {
    await query;
  } catch (err) {
    return (err as { code: string }).code;
  }
  throw new Error("expected the query to fail");
}

beforeEach(resetDb);

describe("007_exam_edge schema", () => {
  it("tags questions with a lesson, styles and a source licence", async () => {
    const q = await insertMcq(await insertSubject());
    await pool.query(
      "UPDATE questions SET lesson_slug = 'net-ip-firewalls', styles = ARRAY['numerical','short_answer'], source_licence = 'official', source_url = 'https://example.org', as_of = '2026-10-16' WHERE id = $1",
      [q],
    );
    const { rows } = await pool.query("SELECT lesson_slug, styles, repeat_count FROM questions WHERE id = $1", [q]);
    expect(rows[0]).toEqual({ lesson_slug: "net-ip-firewalls", styles: ["numerical", "short_answer"], repeat_count: 0 });
  });

  it("defaults styles to an empty list", async () => {
    const q = await insertMcq(await insertSubject());
    const { rows } = await pool.query("SELECT styles FROM questions WHERE id = $1", [q]);
    expect(rows[0].styles).toEqual([]);
  });

  it("rejects an unknown style or licence class", async () => {
    const q = await insertMcq(await insertSubject());
    expect(await pgErrorCode(pool.query("UPDATE questions SET styles = ARRAY['essay'] WHERE id = $1", [q]))).toBe("23514");
    expect(await pgErrorCode(pool.query("UPDATE questions SET source_licence = 'scraped' WHERE id = $1", [q]))).toBe("23514");
  });

  it("records who conducted an exam, from a fixed list", async () => {
    const t = await insertExamTag();
    await pool.query("UPDATE exam_tags SET conducted_by = 'bibm' WHERE id = $1", [t]);
    expect(await pgErrorCode(pool.query("UPDATE exam_tags SET conducted_by = 'somebody' WHERE id = $1", [t]))).toBe("23514");
  });

  it("stores one exam kit per lesson slug", async () => {
    const insert = () =>
      pool.query("INSERT INTO exam_kits (slug, chapter_number, lesson_title_en, data) VALUES ('db2', 16, 'Query Languages', '{}')");
    await insert();
    const { rows } = await pool.query("SELECT is_published FROM exam_kits WHERE slug = 'db2'");
    expect(rows[0].is_published).toBe(false);
    expect(await pgErrorCode(insert())).toBe("23505");
  });

  it("gives mock tests a kind (default mock) and an optional blueprint", async () => {
    const m = await insertMockTest();
    const { rows } = await pool.query("SELECT kind, blueprint_id FROM mock_tests WHERE id = $1", [m]);
    expect(rows[0]).toEqual({ kind: "mock", blueprint_id: null });
    expect(await pgErrorCode(pool.query("UPDATE mock_tests SET kind = 'exam' WHERE id = $1", [m]))).toBe("23514");
  });

  it("allows MCQ and written sections for the same subject in one paper", async () => {
    const [m, s] = [await insertMockTest(), await insertSubject()];
    await pool.query(
      "INSERT INTO mock_test_sections (mock_test_id, subject_id, question_count, type, marks_per_question, negative_mark) VALUES ($1, $2, 40, 'mcq', 1, 0.5)",
      [m, s],
    );
    await pool.query(
      "INSERT INTO mock_test_sections (mock_test_id, subject_id, question_count, type, marks_per_question, lesson_slug) VALUES ($1, $2, 8, 'written', 10, 'db2')",
      [m, s],
    );
    const { rows } = await pool.query("SELECT type, negative_mark FROM mock_test_sections WHERE mock_test_id = $1 ORDER BY type", [m]);
    expect(rows.map((r) => r.type)).toEqual(["mcq", "written"]);
    expect(Number(rows[1].negative_mark)).toBe(0);
  });

  it("accepts exam kits and blueprints in the seed ledger", async () => {
    await pool.query("INSERT INTO seed_ledger (kind, key) VALUES ('exam_kit', 'db2'), ('blueprint', 'bpsc-nc-written')");
    expect(await pgErrorCode(pool.query("INSERT INTO seed_ledger (kind, key) VALUES ('kit', 'x')"))).toBe("23514");
  });
});
