import fs from "fs";
import os from "os";
import path from "path";
import { describe, it, expect, beforeEach } from "vitest";
import { pool } from "../src/db/pool";
import { apportion, seedExamPrep, SUBJECTS } from "../src/db/seedExamPrep";
import { resetDb } from "./helpers/db";

let dir: string;

beforeEach(async () => {
  await resetDb();
  dir = fs.mkdtempSync(path.join(os.tmpdir(), "questions-"));
  fs.writeFileSync(path.join(dir, "DBMS.json"), JSON.stringify([
    { subject_code: "DBMS", topic: "Database Concepts & Data Models (ER, Relational)", type: "mcq", difficulty: 1,
      stem_en: "What does DBMS stand for?", stem_bn: "DBMS এর পূর্ণরূপ কী?", option_a_en: "Database Management System", option_a_bn: "ডেটাবেস ম্যানেজমেন্ট সিস্টেম",
      option_b_en: "Data Backup Management Service", option_b_bn: "ডেটা ব্যাকআপ ম্যানেজমেন্ট সার্ভিস", correct: "A",
      explanation_en: "DBMS = Database Management System.", explanation_bn: "DBMS = Database Management System।" },
  ]));
});

describe("apportion", () => {
  it("splits a total by weight with largest remainders and never loses a question", () => {
    expect(apportion([0.5, 0.3, 0.2], 50)).toEqual([25, 15, 10]);
    expect(apportion([1 / 3, 1 / 3, 1 / 3], 10)).toEqual([4, 3, 3]);
    expect(apportion([0.12, 0.12, 0.1, 0.08, 0.1, 0.08, 0.08, 0.06, 0.06, 0.04, 0.04, 0.03, 0.03, 0.03, 0.03], 50).reduce((a, b) => a + b)).toBe(50);
  });
});

describe("seedExamPrep", () => {
  it("creates subjects, job posts with weights, mock tests and starter questions", async () => {
    const summary = await seedExamPrep(pool, dir);
    expect(summary).toMatchObject({ subjects: SUBJECTS.length, jobPosts: 3, mockTests: 3, questions: 1 });
    const weights = await pool.query("SELECT job_post_id, sum(weight)::float AS total FROM job_post_subjects GROUP BY job_post_id");
    expect(weights.rows.map((r) => Math.round(r.total * 1000) / 1000)).toEqual([1, 1, 1]);
    const sections = await pool.query(
      "SELECT m.total_questions, sum(s.question_count)::int AS drawn, bool_or(m.is_published) AS published FROM mock_tests m JOIN mock_test_sections s ON s.mock_test_id = m.id GROUP BY m.id, m.total_questions",
    );
    expect(sections.rows).toEqual(Array(3).fill({ total_questions: 50, drawn: 50, published: false }));
    const q = await pool.query("SELECT source, is_published FROM questions");
    expect(q.rows).toEqual([{ source: "original", is_published: true }]);
  });

  it("links technical subjects to chapters and creates topics from their lessons", async () => {
    const ch = await pool.query("INSERT INTO chapters (chapter_number, title_en, level, is_published) VALUES (16, 'DB', 'Beginner', true) RETURNING id");
    const menu = await pool.query("INSERT INTO side_menus (chapter_id, label_en) VALUES ($1, 'DB') RETURNING id", [ch.rows[0].id]);
    await pool.query(
      "INSERT INTO lessons (side_menu_id, lesson_number, title_en, content_en, level) VALUES ($1, 1, 'Database Concepts & Data Models (ER, Relational)', 'x', 'Beginner')",
      [menu.rows[0].id],
    );
    await seedExamPrep(pool, dir);
    const subject = await pool.query("SELECT chapter_id FROM subjects WHERE code = 'DBMS'");
    expect(subject.rows[0].chapter_id).toBe(ch.rows[0].id);
    const topic = await pool.query("SELECT t.lesson_id, (SELECT count(*)::int FROM questions q WHERE q.topic_id = t.id) AS n FROM topics t");
    expect(topic.rows).toEqual([{ lesson_id: expect.any(String), n: 1 }]);
  });

  it("is safe to re-run and never overwrites admin edits", async () => {
    await seedExamPrep(pool, dir);
    await pool.query("UPDATE subjects SET name_en = 'Edited' WHERE code = 'NET'");
    await pool.query("UPDATE questions SET stem_bn = 'সম্পাদিত'");
    await pool.query("UPDATE job_posts SET exam_pattern_en = 'Edited pattern'");
    const second = await seedExamPrep(pool, dir);
    expect(second).toEqual({ subjects: 0, topics: 0, jobPosts: 0, mockTests: 0, questions: 0 });
    expect((await pool.query("SELECT name_en FROM subjects WHERE code = 'NET'")).rows[0].name_en).toBe("Edited");
    expect((await pool.query("SELECT stem_bn FROM questions")).rows[0].stem_bn).toBe("সম্পাদিত");
    expect((await pool.query("SELECT count(*)::int AS n FROM job_posts WHERE exam_pattern_en = 'Edited pattern'")).rows[0].n).toBe(3);
  });

  it("refuses to seed a content file with invalid rows and names the file and row", async () => {
    fs.writeFileSync(path.join(dir, "NET.json"), JSON.stringify([{ subject_code: "NET", type: "mcq", stem_en: "Bad", option_a_en: "A", option_b_en: "B", correct: "Q" }]));
    await expect(seedExamPrep(pool, dir)).rejects.toThrow(/NET\.json row 1: correct correct_invalid/);
  });
});
