import type { Migration } from "./types.js";

// Examination module: candidates take practice sessions, mock tests and model tests (spec
// docs/superpowers/specs/2026-10-06-govt-it-exam-prep-design.md §6). Adds what the admin configures per test
// (description, attempt limit, when answers are released, archiving, topic-wise sections) and what an attempt
// freezes when it starts (each question's marks and negative mark, the pass mark), so editing a test later
// never changes a score already given.
export const migration008: Migration = {
  version: 8,
  name: "exam_module",
  sql: `
ALTER TABLE mock_tests
  ADD COLUMN description_en  TEXT,
  ADD COLUMN description_bn  TEXT,
  ADD COLUMN max_attempts    SMALLINT CHECK (max_attempts BETWEEN 1 AND 50),
  -- immediate = answers and explanations right after submitting; after_close = once available_until has passed;
  -- never = score and breakdown only
  ADD COLUMN result_release  VARCHAR(12) NOT NULL DEFAULT 'immediate'
    CHECK (result_release IN ('immediate','after_close','never')),
  ADD COLUMN is_archived     BOOLEAN NOT NULL DEFAULT false,
  ADD CONSTRAINT mock_tests_archived_unpublished CHECK (NOT (is_archived AND is_published));

ALTER TABLE mock_test_sections
  ADD COLUMN topic_id   UUID REFERENCES topics(id) ON DELETE SET NULL,
  ADD COLUMN sort_order SMALLINT NOT NULL DEFAULT 0;

ALTER TABLE attempts
  ADD COLUMN max_score         NUMERIC(7,2),
  ADD COLUMN pass_mark         NUMERIC(7,2),
  ADD COLUMN current_position  SMALLINT NOT NULL DEFAULT 1 CHECK (current_position >= 1),
  -- practice filters, so history can say what a session covered
  ADD COLUMN settings          JSONB NOT NULL DEFAULT '{}';

ALTER TABLE attempt_questions
  ADD COLUMN marks          NUMERIC(5,2) NOT NULL DEFAULT 1 CHECK (marks > 0),
  ADD COLUMN negative_mark  NUMERIC(5,2) NOT NULL DEFAULT 0 CHECK (negative_mark >= 0),
  ADD COLUMN awarded        NUMERIC(6,2);

-- attempt limits and "my attempts on this test"
CREATE INDEX idx_attempts_candidate_test ON attempts(candidate_id, mock_test_id) WHERE mock_test_id IS NOT NULL;
-- lazy expiry sweeps a candidate's overdue attempts
CREATE INDEX idx_attempts_open ON attempts(candidate_id, deadline_at) WHERE status = 'in_progress';
CREATE INDEX idx_mock_tests_live ON mock_tests(kind) WHERE is_published;
`,
};
