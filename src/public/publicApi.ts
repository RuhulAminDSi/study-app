import { ADMIN_UNAUTHORIZED_EVENT } from '../admin/api'
import { CANDIDATE_TOKEN_KEY, CANDIDATE_UNAUTHORIZED_EVENT } from '../candidate/candidateApi'
import { readCached, readerKeyOf, writeCached } from './apiCache'

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

function readerToken(): { token: string | null; isCandidate: boolean } {
  const candidateToken = localStorage.getItem(CANDIDATE_TOKEN_KEY)
  return { token: candidateToken || localStorage.getItem('admin_token'), isCandidate: !!candidateToken }
}

/** Study content needs a signed-in reader: a candidate, or an admin previewing the portal. */
async function publicFetchText(path: string): Promise<string> {
  const { token, isCandidate } = readerToken()
  const res = await fetch(`/api/public${path}`, { headers: token ? { Authorization: `Bearer ${token}` } : {} })
  if (res.status === 401 && token) {
    // Expired or revoked session: sign out whoever sent the token (an admin previewing the portal too),
    // which sends the reader back to the login screen instead of a dashboard that keeps failing.
    window.dispatchEvent(new Event(isCandidate ? CANDIDATE_UNAUTHORIZED_EVENT : ADMIN_UNAUTHORIZED_EVENT))
  }
  if (!res.ok) throw new Error(`Public API error: ${res.statusText}`)
  return res.text()
}

async function publicFetch<T>(path: string): Promise<T> {
  return JSON.parse(await publicFetchText(path)) as T
}

/**
 * Stale-while-revalidate over apiCache.ts: answers from the device copy when there is one and refreshes it
 * in the background, calling `onFresh` only if the server's answer differs. Without a copy it waits for the
 * network. A 401 during the refresh still signs the reader out (which clears the copy).
 */
async function cachedPublicFetch<T>(path: string, onFresh?: (data: T) => void): Promise<T> {
  const { token } = readerToken()
  const reader = token ? readerKeyOf(token) : null
  const network = publicFetchText(path)
  network.catch(() => {}) // handled below; stops an early failure being reported as unhandled
  const cached = reader ? await readCached(reader, path) : null
  if (!reader || cached === null) {
    const text = await network
    if (reader) void writeCached(reader, path, text)
    return JSON.parse(text) as T
  }
  network
    .then(text => {
      if (text === cached) return
      void writeCached(reader, path, text)
      onFresh?.(JSON.parse(text) as T)
    })
    .catch(() => { /* offline or server down: keep showing the device copy */ })
  return JSON.parse(cached) as T
}

export function fetchPublishedChapters(onFresh?: (data: PublicChapter[]) => void): Promise<PublicChapter[]> {
  return cachedPublicFetch<PublicChapter[]>('/chapters/published', onFresh)
}

export function fetchChapterById(id: string): Promise<PublicChapter> {
  return publicFetch<PublicChapter>(`/chapters/${id}`)
}

export function fetchActiveMenus(onFresh?: (data: PublicSideMenu[]) => void): Promise<PublicSideMenu[]> {
  return cachedPublicFetch<PublicSideMenu[]>('/menus', onFresh)
}

/** Every published lesson in one request; callers group them by side menu. */
export function fetchPublishedLessons(onFresh?: (data: PublicLesson[]) => void): Promise<PublicLesson[]> {
  return cachedPublicFetch<PublicLesson[]>('/lessons/published', onFresh)
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
  topics?: { name: string; overview: Bi; points: Bi[]; examples: { question: Bi; working: Bi; answer: Bi }[] }[]
  solutions?: Record<string, { answer: Bi; example?: Bi }>
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
  return cachedPublicFetch<ExamKitIndexEntry[]>('/exam-kits')
}

export function fetchExamKit(slug: string): Promise<ExamKitResponse> {
  return cachedPublicFetch<ExamKitResponse>(`/exam-kits/${encodeURIComponent(slug)}`)
}
