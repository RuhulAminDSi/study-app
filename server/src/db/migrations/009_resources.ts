import type { Migration } from "./types.js";

// Resources: job circulars, suggestions, past exam questions and other downloads that admins post for
// candidates. Each item may carry an uploaded file (a PDF from the media library), an external link, and,
// for circulars, an "Apply now" link with the application window.
export const migration009: Migration = {
  version: 9,
  name: "resources",
  sql: `
CREATE TABLE resources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category VARCHAR(20) NOT NULL CHECK (category IN ('circular', 'suggestion', 'question', 'other')),
    -- free-text group shown as a filter chip, e.g. "Govt job", "Teacher", "M.Sc admission"
    tag VARCHAR(60),
    title_en VARCHAR(200) NOT NULL,
    title_bn VARCHAR(200),
    -- circulars: the posts and vacancies (e.g. "Assistant Programmer-01"); others: a short description
    details_en TEXT,
    details_bn TEXT,
    file_id UUID REFERENCES uploaded_files(id) ON DELETE SET NULL,
    link_url VARCHAR(500),
    apply_url VARCHAR(500),
    starts_on DATE,
    ends_on DATE,
    is_pinned BOOLEAN NOT NULL DEFAULT false,
    is_published BOOLEAN NOT NULL DEFAULT false,
    created_by UUID REFERENCES admin_users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    CHECK (ends_on IS NULL OR starts_on IS NULL OR ends_on >= starts_on)
);
CREATE INDEX idx_resources_category ON resources(category, is_published);
`,
};
