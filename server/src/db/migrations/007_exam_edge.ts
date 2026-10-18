import type { Migration } from "./types.js";

// Exam Edge (spec docs/superpowers/specs/2026-10-16-exam-edge-lesson-upgrade-design.md §4.4): per-lesson exam kits,
// question tags for lesson / style / source licence, who conducted an exam, and mock tests built from exam
// blueprints with mixed MCQ + written sections.
export const migration007: Migration = {
  version: 7,
  name: "exam_edge",
  sql: `
ALTER TABLE exam_tags ADD COLUMN conducted_by VARCHAR(20)
  CHECK (conducted_by IN ('bpsc','buet','duet','kuet','mist','bibm','cti','bcc','bscs_bank','bb','iba','aust','du','ntrca','self','other'));

ALTER TABLE questions
  ADD COLUMN lesson_slug    VARCHAR(80),
  ADD COLUMN styles         TEXT[] NOT NULL DEFAULT '{}'
    CHECK (styles <@ ARRAY['definition','difference','numerical','output_trace','code_write','sql_write','diagram',
                           'short_note','short_answer','scenario','fact']::TEXT[]),
  ADD COLUMN source_url     TEXT,
  -- own = written by us; official = a published paper; fact_only = a question reused as a fact of what was asked;
  -- cc_by / cc_nc = adapted from a Creative Commons source (cc_nc only while the app is non-commercial)
  ADD COLUMN source_licence VARCHAR(10) CHECK (source_licence IN ('own','official','fact_only','cc_by','cc_nc')),
  -- current-affairs items are reviewed when this date gets old
  ADD COLUMN as_of          DATE,
  -- exams that asked this question (set by the seed from exam tags); drives the "repeat" badge
  ADD COLUMN repeat_count   SMALLINT NOT NULL DEFAULT 0 CHECK (repeat_count >= 0);
CREATE INDEX idx_questions_lesson ON questions(lesson_slug) WHERE lesson_slug IS NOT NULL;

CREATE TABLE exam_kits (
  slug             VARCHAR(80) PRIMARY KEY,
  chapter_number   SMALLINT NOT NULL,
  lesson_title_en  VARCHAR(255) NOT NULL,
  data             JSONB NOT NULL,
  is_published     BOOLEAN NOT NULL DEFAULT false,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE mock_tests
  ADD COLUMN kind         VARCHAR(10) NOT NULL DEFAULT 'mock' CHECK (kind IN ('quiz','mock','model')),
  ADD COLUMN blueprint_id VARCHAR(40);

-- A paper may have an MCQ and a written section for the same subject, so sections get their own id.
ALTER TABLE mock_test_sections DROP CONSTRAINT mock_test_sections_pkey;
ALTER TABLE mock_test_sections
  ADD COLUMN id                 UUID NOT NULL DEFAULT gen_random_uuid(),
  ADD COLUMN type               VARCHAR(8) NOT NULL DEFAULT 'mcq' CHECK (type IN ('mcq','written')),
  ADD COLUMN marks_per_question NUMERIC(5,2) CHECK (marks_per_question > 0),
  ADD COLUMN negative_mark      NUMERIC(5,2) NOT NULL DEFAULT 0 CHECK (negative_mark >= 0),
  ADD COLUMN lesson_slug        VARCHAR(80),
  ADD PRIMARY KEY (id);
CREATE INDEX idx_mock_test_sections_test ON mock_test_sections(mock_test_id);

ALTER TABLE seed_ledger DROP CONSTRAINT seed_ledger_kind_check;
ALTER TABLE seed_ledger ADD CONSTRAINT seed_ledger_kind_check
  CHECK (kind IN ('subject','topic','job_post','question','exam_kit','blueprint'));
`,
};
