import type { Migration } from "./types.js";

// Content management in the admin panel: every saved version of a lesson (so an edit can be undone),
// and notices shown on the candidate dashboard.
export const migration006: Migration = {
  version: 6,
  name: "content_management",
  sql: `
CREATE TABLE lesson_revisions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
    title_en VARCHAR(255) NOT NULL,
    title_bn VARCHAR(255),
    content_en TEXT NOT NULL,
    content_bn TEXT,
    code_en TEXT,
    code_bn TEXT,
    takeaways_en TEXT[],
    takeaways_bn TEXT[],
    -- 'original' = the lesson as it was before its first edit in the panel; 'restored' = a restore.
    note VARCHAR(20),
    edited_by UUID REFERENCES admin_users(id) ON DELETE SET NULL,
    edited_by_name VARCHAR(50),
    created_at TIMESTAMPTZ NOT NULL DEFAULT clock_timestamp()
);
CREATE INDEX idx_lesson_revisions_lesson ON lesson_revisions(lesson_id, created_at DESC);

CREATE TABLE announcements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title_en VARCHAR(200) NOT NULL,
    title_bn VARCHAR(200),
    body_en TEXT,
    body_bn TEXT,
    tone VARCHAR(20) NOT NULL DEFAULT 'info' CHECK (tone IN ('info', 'exam', 'important')),
    link_url VARCHAR(500),
    link_label_en VARCHAR(80),
    link_label_bn VARCHAR(80),
    starts_at TIMESTAMPTZ,
    ends_at TIMESTAMPTZ,
    is_pinned BOOLEAN NOT NULL DEFAULT false,
    is_published BOOLEAN NOT NULL DEFAULT false,
    created_by UUID REFERENCES admin_users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    CHECK (ends_at IS NULL OR starts_at IS NULL OR ends_at > starts_at)
);
CREATE INDEX idx_announcements_live ON announcements(is_published, starts_at, ends_at);
`,
};
