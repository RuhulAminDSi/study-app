import type { Migration } from "./types.js";

export const migration002: Migration = {
  version: 2,
  name: "exam_prep",
  sql: `
-- ── Shared trigger ─────────────────────────────────────────────
CREATE OR REPLACE FUNCTION set_updated_at() RETURNS trigger AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$ LANGUAGE plpgsql;

-- ── Taxonomy ───────────────────────────────────────────────────
CREATE TABLE subjects (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code        VARCHAR(20)  NOT NULL UNIQUE,
  name_en     VARCHAR(150) NOT NULL,
  name_bn     VARCHAR(150),
  category    VARCHAR(10)  NOT NULL CHECK (category IN ('technical','general')),
  chapter_id  UUID REFERENCES chapters(id) ON DELETE SET NULL,
  sort_order  INTEGER NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE topics (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id  UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  name_en     VARCHAR(200) NOT NULL,
  name_bn     VARCHAR(200),
  lesson_id   UUID REFERENCES lessons(id) ON DELETE SET NULL,
  sort_order  INTEGER NOT NULL DEFAULT 0,
  UNIQUE (subject_id, name_en)
);

CREATE TABLE job_posts (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization     VARCHAR(100) NOT NULL,
  title_en         VARCHAR(200) NOT NULL,
  title_bn         VARCHAR(200),
  syllabus_en      TEXT,
  syllabus_bn      TEXT,
  exam_pattern_en  TEXT,
  exam_pattern_bn  TEXT,
  is_published     BOOLEAN NOT NULL DEFAULT false,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (organization, title_en)
);

CREATE TABLE job_post_subjects (
  job_post_id  UUID NOT NULL REFERENCES job_posts(id) ON DELETE CASCADE,
  subject_id   UUID NOT NULL REFERENCES subjects(id)  ON DELETE CASCADE,
  weight       NUMERIC(5,4) NOT NULL CHECK (weight > 0 AND weight <= 1),
  PRIMARY KEY (job_post_id, subject_id)
);

-- ── Question bank ──────────────────────────────────────────────
CREATE TABLE questions (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id       UUID NOT NULL REFERENCES subjects(id) ON DELETE RESTRICT,
  topic_id         UUID REFERENCES topics(id) ON DELETE SET NULL,
  type             VARCHAR(12) NOT NULL CHECK (type IN ('mcq','written','programming')),
  difficulty       SMALLINT NOT NULL DEFAULT 2 CHECK (difficulty BETWEEN 1 AND 3),
  stem_en          TEXT NOT NULL,
  stem_bn          TEXT,
  code_snippet     TEXT,
  code_language    VARCHAR(20),
  explanation_en   TEXT,
  explanation_bn   TEXT,
  model_answer_en  TEXT,
  model_answer_bn  TEXT,
  marks            NUMERIC(5,2) NOT NULL DEFAULT 1 CHECK (marks > 0),
  source           VARCHAR(12) NOT NULL DEFAULT 'original'
                     CHECK (source IN ('original','past_paper','imported')),
  content_hash     CHAR(64) NOT NULL UNIQUE,
  is_published     BOOLEAN NOT NULL DEFAULT false,
  created_by       UUID REFERENCES admin_users(id) ON DELETE SET NULL,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE question_options (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id  UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  position     SMALLINT NOT NULL CHECK (position BETWEEN 1 AND 5),
  text_en      TEXT NOT NULL,
  text_bn      TEXT,
  is_correct   BOOLEAN NOT NULL DEFAULT false,
  UNIQUE (question_id, position)
);
CREATE UNIQUE INDEX uq_one_correct_option ON question_options(question_id) WHERE is_correct;

CREATE TABLE exam_tags (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization  VARCHAR(100) NOT NULL,
  post_en       VARCHAR(200) NOT NULL,
  post_bn       VARCHAR(200),
  year          SMALLINT NOT NULL CHECK (year BETWEEN 1990 AND 2100),
  exam_date     DATE,
  UNIQUE (organization, post_en, year)
);

CREATE TABLE question_exam_tags (
  question_id  UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  exam_tag_id  UUID NOT NULL REFERENCES exam_tags(id) ON DELETE CASCADE,
  PRIMARY KEY (question_id, exam_tag_id)
);

-- ── Mock tests ─────────────────────────────────────────────────
CREATE TABLE mock_tests (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title_en            VARCHAR(200) NOT NULL,
  title_bn            VARCHAR(200),
  job_post_id         UUID REFERENCES job_posts(id) ON DELETE SET NULL,
  mode                VARCHAR(8) NOT NULL CHECK (mode IN ('fixed','random')),
  duration_minutes    SMALLINT NOT NULL CHECK (duration_minutes BETWEEN 1 AND 300),
  total_questions     SMALLINT NOT NULL CHECK (total_questions BETWEEN 1 AND 300),
  marks_per_question  NUMERIC(5,2) NOT NULL DEFAULT 1 CHECK (marks_per_question > 0),
  negative_mark       NUMERIC(5,2) NOT NULL DEFAULT 0.25 CHECK (negative_mark >= 0),
  pass_mark           NUMERIC(7,2),
  shuffle_options     BOOLEAN NOT NULL DEFAULT true,
  available_from      TIMESTAMPTZ,
  available_until     TIMESTAMPTZ,
  is_published        BOOLEAN NOT NULL DEFAULT false,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT now(),
  CHECK (available_until IS NULL OR available_from IS NULL OR available_until > available_from)
);

CREATE TABLE mock_test_sections (
  mock_test_id    UUID NOT NULL REFERENCES mock_tests(id) ON DELETE CASCADE,
  subject_id      UUID NOT NULL REFERENCES subjects(id)  ON DELETE RESTRICT,
  question_count  SMALLINT NOT NULL CHECK (question_count > 0),
  difficulty      SMALLINT CHECK (difficulty BETWEEN 1 AND 3),
  PRIMARY KEY (mock_test_id, subject_id)
);

CREATE TABLE mock_test_questions (
  mock_test_id  UUID NOT NULL REFERENCES mock_tests(id) ON DELETE CASCADE,
  question_id   UUID NOT NULL REFERENCES questions(id)  ON DELETE RESTRICT,
  position      SMALLINT NOT NULL,
  PRIMARY KEY (mock_test_id, question_id),
  UNIQUE (mock_test_id, position)
);

-- ── Candidates ─────────────────────────────────────────────────
CREATE TABLE candidates (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name           VARCHAR(150) NOT NULL,
  email               VARCHAR(255) NOT NULL,
  phone               VARCHAR(20),
  password_hash       VARCHAR(255) NOT NULL,
  target_post_id      UUID REFERENCES job_posts(id) ON DELETE SET NULL,
  preferred_language  CHAR(2) NOT NULL DEFAULT 'bn' CHECK (preferred_language IN ('bn','en')),
  is_active           BOOLEAN NOT NULL DEFAULT true,
  last_login          TIMESTAMPTZ,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX uq_candidates_email ON candidates (lower(email));

-- ── Attempts ───────────────────────────────────────────────────
CREATE TABLE attempts (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  candidate_id   UUID NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,
  mode           VARCHAR(10) NOT NULL CHECK (mode IN ('practice','mock','revision')),
  mock_test_id   UUID REFERENCES mock_tests(id) ON DELETE RESTRICT,
  status         VARCHAR(12) NOT NULL DEFAULT 'in_progress'
                   CHECK (status IN ('in_progress','submitted','expired')),
  started_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  deadline_at    TIMESTAMPTZ,
  submitted_at   TIMESTAMPTZ,
  score          NUMERIC(7,2),
  correct_count  SMALLINT NOT NULL DEFAULT 0,
  wrong_count    SMALLINT NOT NULL DEFAULT 0,
  skipped_count  SMALLINT NOT NULL DEFAULT 0,
  CHECK (mode <> 'mock' OR (mock_test_id IS NOT NULL AND deadline_at IS NOT NULL)),
  CHECK (mode =  'mock' OR mock_test_id IS NULL)
);
CREATE UNIQUE INDEX uq_open_mock_attempt ON attempts (candidate_id, mock_test_id)
  WHERE status = 'in_progress' AND mode = 'mock';

CREATE TABLE attempt_questions (
  attempt_id          UUID NOT NULL REFERENCES attempts(id) ON DELETE CASCADE,
  question_id         UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  position            SMALLINT NOT NULL,
  option_order        SMALLINT[] NOT NULL,
  selected_option_id  UUID REFERENCES question_options(id) ON DELETE SET NULL,
  is_correct          BOOLEAN,
  flagged             BOOLEAN NOT NULL DEFAULT false,
  time_spent_ms       INTEGER NOT NULL DEFAULT 0 CHECK (time_spent_ms >= 0),
  answered_at         TIMESTAMPTZ,
  PRIMARY KEY (attempt_id, question_id),
  UNIQUE (attempt_id, position)
);

CREATE TABLE candidate_question_stats (
  candidate_id    UUID NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,
  question_id     UUID NOT NULL REFERENCES questions(id)  ON DELETE CASCADE,
  times_seen      INTEGER NOT NULL DEFAULT 0,
  times_correct   INTEGER NOT NULL DEFAULT 0,
  last_correct    BOOLEAN,
  box             SMALLINT NOT NULL DEFAULT 0 CHECK (box BETWEEN 0 AND 4),
  next_review_at  TIMESTAMPTZ,
  last_seen_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (candidate_id, question_id),
  CHECK (times_correct <= times_seen)
);

-- ── Personal ───────────────────────────────────────────────────
CREATE TABLE bookmarks (
  candidate_id  UUID NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,
  question_id   UUID NOT NULL REFERENCES questions(id)  ON DELETE CASCADE,
  note          TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (candidate_id, question_id)
);

CREATE TABLE lesson_progress (
  candidate_id  UUID NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,
  lesson_id     UUID NOT NULL REFERENCES lessons(id)    ON DELETE CASCADE,
  completed_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (candidate_id, lesson_id)
);

CREATE TABLE written_responses (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  candidate_id  UUID NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,
  question_id   UUID NOT NULL REFERENCES questions(id)  ON DELETE CASCADE,
  answer_text   TEXT NOT NULL,
  self_score    NUMERIC(5,2) CHECK (self_score >= 0),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── Indexes ────────────────────────────────────────────────────
CREATE INDEX idx_topics_subject           ON topics(subject_id);
CREATE INDEX idx_questions_lookup         ON questions(subject_id, type, difficulty) WHERE is_published;
CREATE INDEX idx_questions_topic          ON questions(topic_id);
CREATE INDEX idx_qet_tag                  ON question_exam_tags(exam_tag_id);
CREATE INDEX idx_attempts_candidate       ON attempts(candidate_id, started_at DESC);
CREATE INDEX idx_attempts_mock_submitted  ON attempts(mock_test_id, score DESC) WHERE status IN ('submitted','expired');
CREATE INDEX idx_aq_question              ON attempt_questions(question_id) WHERE is_correct IS NOT NULL;
CREATE INDEX idx_cqs_review               ON candidate_question_stats(candidate_id, next_review_at);
CREATE INDEX idx_written_candidate        ON written_responses(candidate_id, created_at DESC);

-- ── updated_at triggers ────────────────────────────────────────
CREATE TRIGGER trg_subjects_updated   BEFORE UPDATE ON subjects   FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER trg_job_posts_updated  BEFORE UPDATE ON job_posts  FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER trg_questions_updated  BEFORE UPDATE ON questions  FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER trg_mock_tests_updated BEFORE UPDATE ON mock_tests FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER trg_candidates_updated BEFORE UPDATE ON candidates FOR EACH ROW EXECUTE FUNCTION set_updated_at();
`,
};
