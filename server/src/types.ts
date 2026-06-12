export interface AdminUser {
  id: string;
  username: string;
  email: string;
  role: "super_admin" | "admin" | "editor";
  is_active: boolean;
}

export interface Chapter {
  id: string;
  chapter_number: number;
  title_en: string;
  title_bn: string | null;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string | null;
  cover_image_url: string | null;
  is_published: boolean;
  sort_order: number;
}

export interface SideMenu {
  id: string;
  chapter_id: string;
  label_en: string;
  label_bn: string | null;
  icon: string | null;
  sort_order: number;
  is_active: boolean;
}

export interface SubSideMenu {
  id: string;
  side_menu_id: string;
  label_en: string;
  label_bn: string | null;
  sort_order: number;
  is_active: boolean;
}

export interface Lesson {
  id: string;
  sub_side_menu_id: string;
  lesson_number: number;
  title_en: string;
  title_bn: string | null;
  content_en: string;
  content_bn: string | null;
  code_en: string | null;
  code_bn: string | null;
  takeaways_en: string[];
  takeaways_bn: string[];
  level: "Beginner" | "Intermediate" | "Advanced";
  is_published: boolean;
}

export interface DashboardStats {
  total_chapters: number;
  published_chapters: number;
  total_lessons: number;
  published_lessons: number;
  total_side_menus: number;
  total_sub_menus: number;
}
