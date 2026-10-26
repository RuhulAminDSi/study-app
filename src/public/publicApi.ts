import { ADMIN_UNAUTHORIZED_EVENT } from '../admin/api'
import { CANDIDATE_TOKEN_KEY, CANDIDATE_UNAUTHORIZED_EVENT } from '../candidate/candidateApi'

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

/** Study content needs a signed-in reader: a candidate, or an admin previewing the portal. */
async function publicFetch<T>(path: string): Promise<T> {
  const candidateToken = localStorage.getItem(CANDIDATE_TOKEN_KEY)
  const token = candidateToken || localStorage.getItem('admin_token')
  const res = await fetch(`/api/public${path}`, { headers: token ? { Authorization: `Bearer ${token}` } : {} })
  if (res.status === 401 && token) {
    // Expired or revoked session: sign out whoever sent the token (an admin previewing the portal too),
    // which sends the reader back to the login screen instead of a dashboard that keeps failing.
    window.dispatchEvent(new Event(candidateToken ? CANDIDATE_UNAUTHORIZED_EVENT : ADMIN_UNAUTHORIZED_EVENT))
  }
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

/** Every published lesson in one request; callers group them by side menu. */
export function fetchPublishedLessons(): Promise<PublicLesson[]> {
  return publicFetch<PublicLesson[]>('/lessons/published')
}

export function fetchLessonsByMenu(menuId: string): Promise<PublicLesson[]> {
  return publicFetch<PublicLesson[]>(`/lessons/by-menu/${menuId}`)
}

export function fetchLessonById(id: string): Promise<PublicLesson> {
  return publicFetch<PublicLesson>(`/lessons/${id}`)
}

/** A dashboard notice that is published and inside its schedule (see LIVE_ANNOUNCEMENTS_SQL on the server). */
export interface PublicAnnouncement {
  id: string
  title_en: string
  title_bn: string | null
  body_en: string | null
  body_bn: string | null
  tone: 'info' | 'exam' | 'important'
  link_url: string | null
  link_label_en: string | null
  link_label_bn: string | null
  starts_at: string | null
  ends_at: string | null
  is_pinned: boolean
}

export function fetchAnnouncements(): Promise<PublicAnnouncement[]> {
  return publicFetch<PublicAnnouncement[]>('/announcements')
}

/** Text in both languages. */
export interface Bi {
  en: string
  bn: string
}

/** One lesson's Exam Kit (server/src/services/examKitShape.ts). */
export interface ExamKitData {
  slug: string
  chapter: number
  subject: string
  lessonTitleEn: string
  status: 'draft' | 'published'
  updatedOn: string
  heat?: { asked: number; recent: number; repeats: number; byBody: Record<string, number>; topClusters: { name: string; asked: number }[] }
  asked?: { group: string; cluster: string; question: string; kind: string; askedIn: string[]; sources: string[]; repeat: boolean }[]
  mustKnow: Bi[]
  formulas: { title: Bi; formula: string; example: { question: Bi; working: Bi; answer: string } }[]
  traps: Bi[]
  writtenPlan: { question: Bi; askedIn: string[]; skeleton: { en: string[]; bn: string[] }; marks: Partial<Record<'5' | '10' | '20', Bi>> }[]
  viva: { q: Bi; a: Bi }[]
  facts: string[]
  factsResolved?: { id: string; en: string; bn: string; asOf: string; status: string; sources: string[] }[]
  sources: { url: string; title: string; accessed: string }[]
}

export interface ExamKitResponse {
  slug: string
  chapter_number: number
  lesson_title_en: string
  data: ExamKitData
  is_published: boolean
}

export interface ExamKitIndexEntry {
  slug: string
  chapter_number: number
  lesson_title_en: string
  asked: number | null
}

/** Published kits; the reader shows the Exam Kit tab only for lessons listed here. */
export function fetchExamKitIndex(): Promise<ExamKitIndexEntry[]> {
  return publicFetch<ExamKitIndexEntry[]>('/exam-kits')
}

export function fetchExamKit(slug: string): Promise<ExamKitResponse> {
  return publicFetch<ExamKitResponse>(`/exam-kits/${encodeURIComponent(slug)}`)
}
