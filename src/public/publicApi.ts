export interface PublicChapter {
  id: string
  chapter_number: number
  title_en: string
  title_bn: string | null
  level: string
  description: string | null
  cover_image_url: string | null
  is_published: boolean
  sort_order: number
}

export interface PublicSideMenu {
  id: string
  chapter_id: string
  label_en: string
  label_bn: string | null
  icon: string | null
  sort_order: number
  is_active: boolean
}

export interface PublicLesson {
  id: string
  side_menu_id: string
  lesson_number: number
  title_en: string
  title_bn: string | null
  content_en: string
  content_bn: string | null
  code_en: string | null
  code_bn: string | null
  takeaways_en: string[]
  takeaways_bn: string[]
  level: string
  is_published: boolean
}

async function publicFetch<T>(path: string): Promise<T> {
  const res = await fetch(`/api/public${path}`)
  if (!res.ok) throw new Error(`Public API error: ${res.statusText}`)
  return res.json()
}

export function fetchPublishedChapters(): Promise<PublicChapter[]> {
  return publicFetch<PublicChapter[]>('/chapters/published')
}

export function fetchChapterById(id: string): Promise<PublicChapter> {
  return publicFetch<PublicChapter>(`/chapters/${id}`)
}

export function fetchActiveMenus(): Promise<PublicSideMenu[]> {
  return publicFetch<PublicSideMenu[]>('/menus')
}

export function fetchLessonsByMenu(menuId: string): Promise<PublicLesson[]> {
  return publicFetch<PublicLesson[]>(`/lessons/by-menu/${menuId}`)
}

export function fetchLessonById(id: string): Promise<PublicLesson> {
  return publicFetch<PublicLesson>(`/lessons/${id}`)
}
