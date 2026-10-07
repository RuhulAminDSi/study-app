import { randomUUID } from "crypto";
import { pool } from "../../src/db/pool";

/** Empties every application table (keeps schema_migrations). */
export async function resetDb(): Promise<void> {
  const { rows } = await pool.query<{ tablename: string }>(
    "SELECT tablename FROM pg_tables WHERE schemaname = 'public' AND tablename <> 'schema_migrations'",
  );
  if (rows.length) {
    await pool.query(`TRUNCATE ${rows.map((r) => `"${r.tablename}"`).join(", ")} RESTART IDENTITY CASCADE`);
  }
}

export async function insertSubject(code = "DBMS"): Promise<string> {
  const { rows } = await pool.query(
    "INSERT INTO subjects (code, name_en, category) VALUES ($1, $2, 'technical') RETURNING id",
    [code, `${code} subject`],
  );
  return rows[0].id;
}

export async function insertMcq(subjectId: string, correctPosition = 1): Promise<string> {
  const hash = randomUUID().replace(/-/g, "").padEnd(64, "0");
  const { rows } = await pool.query(
    "INSERT INTO questions (subject_id, type, stem_en, content_hash) VALUES ($1, 'mcq', 'Which normal form removes transitive dependencies?', $2) RETURNING id",
    [subjectId, hash],
  );
  for (let position = 1; position <= 4; position++) {
    await pool.query(
      "INSERT INTO question_options (question_id, position, text_en, is_correct) VALUES ($1, $2, $3, $4)",
      [rows[0].id, position, `Option ${position}`, position === correctPosition],
    );
  }
  return rows[0].id;
}

export async function insertCandidate(email = "rahim@example.com"): Promise<string> {
  const { rows } = await pool.query(
    "INSERT INTO candidates (full_name, email, password_hash) VALUES ('Rahim Uddin', $1, 'x') RETURNING id",
    [email],
  );
  return rows[0].id;
}

export async function insertMockTest(): Promise<string> {
  const { rows } = await pool.query(
    "INSERT INTO mock_tests (title_en, mode, duration_minutes, total_questions) VALUES ('Model Test 1', 'random', 50, 50) RETURNING id",
  );
  return rows[0].id;
}

export async function insertJobPost(title = "Assistant Programmer"): Promise<string> {
  const { rows } = await pool.query(
    "INSERT INTO job_posts (organization, title_en) VALUES ('BPSC', $1) RETURNING id",
    [title],
  );
  return rows[0].id;
}
