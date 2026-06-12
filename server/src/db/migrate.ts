import { pool } from "./pool.js";

const sql = `
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Admin users
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'editor'
        CHECK (role IN ('super_admin', 'admin', 'editor')),
    is_active BOOLEAN NOT NULL DEFAULT true,
    last_login TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Chapters
CREATE TABLE IF NOT EXISTS chapters (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chapter_number INTEGER UNIQUE NOT NULL CHECK (chapter_number > 0),
    title_en VARCHAR(255) NOT NULL,
    title_bn VARCHAR(255),
    level VARCHAR(20) NOT NULL
        CHECK (level IN ('Beginner', 'Intermediate', 'Advanced')),
    description TEXT,
    cover_image_url VARCHAR(500),
    is_published BOOLEAN NOT NULL DEFAULT false,
    sort_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Side menus
CREATE TABLE IF NOT EXISTS side_menus (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chapter_id UUID NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
    label_en VARCHAR(255) NOT NULL,
    label_bn VARCHAR(255),
    icon VARCHAR(100),
    sort_order INTEGER NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Drop legacy tables and recreate with new schema
DROP TABLE IF EXISTS lessons CASCADE;
DROP TABLE IF EXISTS sub_side_menus CASCADE;

-- Lessons (linked directly to side_menus)
CREATE TABLE IF NOT EXISTS lessons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    side_menu_id UUID NOT NULL REFERENCES side_menus(id) ON DELETE CASCADE,
    lesson_number INTEGER NOT NULL CHECK (lesson_number > 0),
    title_en VARCHAR(255) NOT NULL,
    title_bn VARCHAR(255),
    content_en TEXT NOT NULL,
    content_bn TEXT,
    code_en TEXT,
    code_bn TEXT,
    takeaways_en TEXT[],
    takeaways_bn TEXT[],
    level VARCHAR(20) NOT NULL
        CHECK (level IN ('Beginner', 'Intermediate', 'Advanced')),
    is_published BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (side_menu_id, lesson_number)
);

-- Uploaded files metadata
CREATE TABLE IF NOT EXISTS uploaded_files (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    original_name VARCHAR(255) NOT NULL,
    storage_path VARCHAR(500) NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    file_size BIGINT NOT NULL,
    uploaded_by UUID REFERENCES admin_users(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_chapters_published ON chapters(is_published) WHERE is_published = true;
CREATE INDEX IF NOT EXISTS idx_chapters_sort ON chapters(sort_order);
CREATE INDEX IF NOT EXISTS idx_side_menus_chapter ON side_menus(chapter_id);
CREATE INDEX IF NOT EXISTS idx_side_menus_active ON side_menus(is_active) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_lessons_side_menu ON lessons(side_menu_id);
CREATE INDEX IF NOT EXISTS idx_lessons_published ON lessons(is_published) WHERE is_published = true;
`;

async function migrate() {
  console.log("Running migration...");
  try {
    await pool.query(sql);
    console.log("Migration complete.");
  } catch (err) {
    console.error("Migration failed:", err);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

migrate();
