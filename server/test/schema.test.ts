import { describe, it, expect, beforeEach } from "vitest";
import { pool } from "../src/db/pool";
import { resetDb, insertSubject, insertMcq, insertCandidate, insertMockTest, insertJobPost } from "./helpers/db";

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

describe("002_exam_prep schema", () => {
  it("is recorded after 001_core (and 003 follows)", async () => {
    const { rows } = await pool.query("SELECT version FROM schema_migrations ORDER BY version");
    expect(rows.map((r) => r.version)).toEqual([1, 2, 3, 4]);
  });

  it("allows only one correct option per question", async () => {
    const q = await insertMcq(await insertSubject(), 1);
    const code = await pgErrorCode(
      pool.query("UPDATE question_options SET is_correct = true WHERE question_id = $1 AND position = 2", [q]),
    );
    expect(code).toBe("23505");
  });

  it("rejects duplicate question content", async () => {
    const subjectId = await insertSubject();
    const insert = () =>
      pool.query("INSERT INTO questions (subject_id, type, stem_en, content_hash) VALUES ($1, 'mcq', 'Q', $2)", [
        subjectId,
        "a".repeat(64),
      ]);
    await insert();
    expect(await pgErrorCode(insert())).toBe("23505");
  });

  it("treats candidate emails case-insensitively", async () => {
    await insertCandidate("Rahim@Example.com");
    expect(await pgErrorCode(insertCandidate("rahim@example.COM"))).toBe("23505");
  });

  it("requires a mock test and a deadline for mock attempts", async () => {
    const c = await insertCandidate();
    const code = await pgErrorCode(
      pool.query("INSERT INTO attempts (candidate_id, mode, deadline_at) VALUES ($1, 'mock', now())", [c]),
    );
    expect(code).toBe("23514");
  });

  it("forbids a mock test on practice attempts", async () => {
    const [c, m] = [await insertCandidate(), await insertMockTest()];
    const code = await pgErrorCode(
      pool.query("INSERT INTO attempts (candidate_id, mode, mock_test_id) VALUES ($1, 'practice', $2)", [c, m]),
    );
    expect(code).toBe("23514");
  });

  it("allows one open attempt per candidate per mock test", async () => {
    const [c, m] = [await insertCandidate(), await insertMockTest()];
    const open = () =>
      pool.query(
        "INSERT INTO attempts (candidate_id, mode, mock_test_id, deadline_at) VALUES ($1, 'mock', $2, now() + interval '50 minutes')",
        [c, m],
      );
    await open();
    expect(await pgErrorCode(open())).toBe("23505");
  });

  it("blocks deleting a mock test that has attempts", async () => {
    const [c, m] = [await insertCandidate(), await insertMockTest()];
    await pool.query(
      "INSERT INTO attempts (candidate_id, mode, mock_test_id, deadline_at) VALUES ($1, 'mock', $2, now())",
      [c, m],
    );
    // PostgreSQL 18 reports RESTRICT as 23001 (restrict_violation); older versions use 23503.
    expect(["23001", "23503"]).toContain(await pgErrorCode(pool.query("DELETE FROM mock_tests WHERE id = $1", [m])));
  });

  it("rejects a zero syllabus weight", async () => {
    const [post, subject] = [await insertJobPost(), await insertSubject()];
    const code = await pgErrorCode(
      pool.query("INSERT INTO job_post_subjects (job_post_id, subject_id, weight) VALUES ($1, $2, 0)", [post, subject]),
    );
    expect(code).toBe("23514");
  });

  it("bumps updated_at on update", async () => {
    const id = await insertSubject();
    await pool.query("SELECT pg_sleep(0.02)");
    await pool.query("UPDATE subjects SET name_en = 'Database Systems' WHERE id = $1", [id]);
    const { rows } = await pool.query("SELECT updated_at > created_at AS bumped FROM subjects WHERE id = $1", [id]);
    expect(rows[0].bumped).toBe(true);
  });
});
