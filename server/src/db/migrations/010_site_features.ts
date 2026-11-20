import type { Migration } from "./types.js";

// Site features modelled on other Bangladesh IT-exam sites:
// - resources: a "notice" type (syllabus, written-test notices, seat plans);
// - site_settings: contact details, payment numbers and the paywall switch, edited in the admin panel;
// - articles: job guidelines, exam news, written study notes and solved job papers, readable without an account;
// - free sets: a test an admin marks free can be browsed and taken by visitors, who appear on a merit list;
// - plans and payments: candidates pay by bKash / Nagad / Rocket, an admin checks the transaction and the plan's
//   months are added to the candidate's subscription.
export const migration010: Migration = {
  version: 10,
  name: "site_features",
  sql: `
ALTER TABLE resources DROP CONSTRAINT resources_category_check;
ALTER TABLE resources ADD CONSTRAINT resources_category_check
  CHECK (category IN ('circular', 'notice', 'suggestion', 'question', 'other'));

CREATE TABLE site_settings (
    key VARCHAR(40) PRIMARY KEY,
    value JSONB NOT NULL,
    updated_by UUID REFERENCES admin_users(id) ON DELETE SET NULL,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE articles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(120) NOT NULL UNIQUE CHECK (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
    category VARCHAR(20) NOT NULL CHECK (category IN ('guideline', 'news', 'written', 'solution')),
    title_en VARCHAR(200) NOT NULL,
    title_bn VARCHAR(200),
    summary_en TEXT,
    summary_bn TEXT,
    body_en TEXT NOT NULL DEFAULT '',
    body_bn TEXT,
    cover_file_id UUID REFERENCES uploaded_files(id) ON DELETE SET NULL,
    tags TEXT[] NOT NULL DEFAULT '{}',
    is_pinned BOOLEAN NOT NULL DEFAULT false,
    is_published BOOLEAN NOT NULL DEFAULT false,
    published_at TIMESTAMPTZ,
    views INTEGER NOT NULL DEFAULT 0,
    created_by UUID REFERENCES admin_users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_articles_live ON articles(category, is_published, published_at DESC);

ALTER TABLE mock_tests ADD COLUMN is_free BOOLEAN NOT NULL DEFAULT false;

CREATE TABLE free_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    mock_test_id UUID NOT NULL REFERENCES mock_tests(id) ON DELETE CASCADE,
    display_name VARCHAR(40) NOT NULL,
    -- hash of the visitor's address: with the name, it groups one person's tries for "best score per participant"
    visitor_key CHAR(64) NOT NULL,
    correct SMALLINT NOT NULL,
    wrong SMALLINT NOT NULL,
    total SMALLINT NOT NULL,
    score NUMERIC(7,2) NOT NULL,
    max_score NUMERIC(7,2) NOT NULL,
    seconds INTEGER NOT NULL CHECK (seconds >= 0),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_free_attempts_test ON free_attempts(mock_test_id, score DESC, seconds);

CREATE TABLE plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name_en VARCHAR(100) NOT NULL,
    name_bn VARCHAR(100),
    description_en TEXT,
    description_bn TEXT,
    features_en TEXT[] NOT NULL DEFAULT '{}',
    features_bn TEXT[] NOT NULL DEFAULT '{}',
    months SMALLINT NOT NULL CHECK (months BETWEEN 1 AND 36),
    price_bdt INTEGER NOT NULL CHECK (price_bdt >= 0),
    is_featured BOOLEAN NOT NULL DEFAULT false,
    is_active BOOLEAN NOT NULL DEFAULT true,
    sort_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE candidates ADD COLUMN subscription_until TIMESTAMPTZ;

CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    candidate_id UUID NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,
    plan_id UUID REFERENCES plans(id) ON DELETE SET NULL,
    -- what was bought, frozen when the request is made
    plan_name VARCHAR(100) NOT NULL,
    months SMALLINT NOT NULL CHECK (months BETWEEN 1 AND 36),
    amount_bdt INTEGER NOT NULL CHECK (amount_bdt >= 0),
    method VARCHAR(10) NOT NULL CHECK (method IN ('bkash', 'nagad', 'rocket')),
    sender_number VARCHAR(20) NOT NULL,
    trx_id VARCHAR(40) NOT NULL,
    status VARCHAR(10) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    admin_note TEXT,
    reviewed_by UUID REFERENCES admin_users(id) ON DELETE SET NULL,
    reviewed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
-- one transaction ID can pay for one request (a rejected one may be corrected and sent again)
CREATE UNIQUE INDEX idx_payments_trx ON payments(method, upper(trx_id)) WHERE status <> 'rejected';
CREATE INDEX idx_payments_status ON payments(status, created_at DESC);
CREATE INDEX idx_payments_candidate ON payments(candidate_id, created_at DESC);
`,
};
