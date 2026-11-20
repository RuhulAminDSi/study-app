import { useState, useEffect } from 'react'

type RouteType = 'public' | 'admin' | 'login' | 'candidate-login' | 'candidate-signup' | 'site'
/** Which page of the public portal: `#/` dashboard, `#/notes`, `#/pyq`, `#/exams...`, `#/resources`, or a lesson under `#/chapter/...`. */
export type PublicView = 'dashboard' | 'notes' | 'pyq' | 'lesson' | 'exams' | 'resources' | 'account'

/** The tabs of `#/resources[?tab=]`: job circulars (default), suggestions, past exam questions, other files. */
export type ResourceTab = 'circular' | 'notice' | 'suggestion' | 'question' | 'other'
const RESOURCE_TABS: ResourceTab[] = ['circular', 'notice', 'suggestion', 'question', 'other']

export type ArticleCategory = 'guideline' | 'news' | 'written' | 'solution'
export const ARTICLE_CATEGORIES: ArticleCategory[] = ['guideline', 'news', 'written', 'solution']

/**
 * Pages open to visitors without an account (shown inside the portal for a signed-in reader): the free tests
 * (`#/free-test`, `#/free-test/<id>[/answers|/take|/merit]`), articles (`#/articles[?cat=]`, `#/articles/<slug>`),
 * plans and contact.
 */
export type SitePage =
  | { page: 'free' }
  | { page: 'free-set'; id: string; mode: 'home' | 'answers' | 'take' | 'merit' }
  | { page: 'articles'; category?: ArticleCategory; tag?: string }
  | { page: 'article'; slug: string }
  | { page: 'plans' }
  | { page: 'contact' }

export type ExamTab = 'bank' | 'practice' | 'mock' | 'model' | 'results'

/**
 * The examination pages: `#/exams[?tab=]` (dashboard; the question bank by default), `#/exams/practice[?lesson=<slug>]`, `#/exams/test/<id>`
 * (instructions), `#/exams/attempt/<id>` (taking it), `#/exams/result/<id>[/review]`.
 */
export interface ExamRoute {
  page: 'home' | 'test' | 'attempt' | 'result' | 'review'
  id?: string
  tab?: ExamTab
  lesson?: string
}

export interface RouteInfo {
  type: RouteType
  view?: PublicView
  chapterId?: string
  /** From `#/subject/<NN-slug>` (the landing page's subject links): the chapter with this number. */
  chapterNumber?: number
  lessonId?: string
  adminView?: string
  next?: string
  exam?: ExamRoute
  resourceTab?: ResourceTab
  site?: SitePage
}

const UUID_PATTERN = /[a-fA-F0-9-]{36}/
/** `next` may only name an in-app hash path (letters, digits, / _ -). */
const SAFE_NEXT = /^[a-z0-9/_-]*$/i

export function parseHash(): RouteInfo {
  const hash = window.location.hash.replace(/^#\//, '')
  const [path, query = ''] = hash.split('?')
  if (path === 'login' || path === 'signup') {
    const next = new URLSearchParams(query).get('next') ?? undefined
    // The auth screens themselves are never a destination after signing in.
    const safe = next && SAFE_NEXT.test(next) && !/^(login|signup)(\/|$)/.test(next) ? next : undefined
    return { type: path === 'login' ? 'candidate-login' : 'candidate-signup', next: safe }
  }
  // The free sample test is open to visitors: no sign-in.
  const site = parseSitePath(path, query)
  if (site) return { type: 'site', site }
  const adminMatch = hash.match(/^admin\/(.+)/)
  if (adminMatch) {
    const sub = adminMatch[1]
    if (sub === 'login') return { type: 'login' }
    return { type: 'admin', adminView: sub }
  }
  if (hash.startsWith('admin')) return { type: 'admin', adminView: '' }

  const lessonMatch = hash.match(new RegExp(`^chapter/(${UUID_PATTERN.source})/lesson/(${UUID_PATTERN.source})`))
  if (lessonMatch) {
    return { type: 'public', view: 'lesson', chapterId: lessonMatch[1], lessonId: lessonMatch[2] }
  }

  const chapterMatch = hash.match(new RegExp(`^chapter/(${UUID_PATTERN.source})`))
  if (chapterMatch) {
    return { type: 'public', view: 'lesson', chapterId: chapterMatch[1] }
  }

  // `#/subject/02-introduction-to-computer-systems`: the slug's leading number is the chapter number.
  const subjectMatch = path.match(/^subject\/0*(\d+)(?:-[a-z0-9-]*)?$/i)
  if (subjectMatch) {
    return { type: 'public', view: 'lesson', chapterNumber: Number(subjectMatch[1]) }
  }

  if (path === 'notes' || path === 'pyq') return { type: 'public', view: path }
  if (path === 'account') return { type: 'public', view: 'account' }
  if (path === 'resources') {
    const tab = new URLSearchParams(query).get('tab') as ResourceTab | null
    return { type: 'public', view: 'resources', resourceTab: tab && RESOURCE_TABS.includes(tab) ? tab : 'circular' }
  }
  if (path === 'exams' || path.startsWith('exams/')) return { type: 'public', view: 'exams', exam: parseExamPath(path, query) }
  return { type: 'public', view: 'dashboard' }
}

function parseSitePath(path: string, query: string): SitePage | null {
  if (path === 'free-test') return { page: 'free' }
  const set = path.match(new RegExp(`^free-test/(${UUID_PATTERN.source})(?:/(answers|take|merit))?$`))
  if (set) return { page: 'free-set', id: set[1], mode: (set[2] as 'answers' | 'take' | 'merit' | undefined) ?? 'home' }
  if (path === 'articles') {
    const params = new URLSearchParams(query)
    const cat = params.get('cat') as ArticleCategory | null
    const tag = params.get('tag')?.slice(0, 40) || undefined
    return { page: 'articles', category: cat && ARTICLE_CATEGORIES.includes(cat) ? cat : undefined, tag }
  }
  const article = path.match(/^articles\/([a-z0-9-]{1,120})$/)
  if (article) return { page: 'article', slug: article[1] }
  if (path === 'plans') return { page: 'plans' }
  if (path === 'contact') return { page: 'contact' }
  return null
}

const EXAM_TABS: ExamTab[] = ['bank', 'practice', 'mock', 'model', 'results']

function parseExamPath(path: string, query: string): ExamRoute {
  const params = new URLSearchParams(query)
  const page = path.match(new RegExp(`^exams/(test|attempt|result)/(${UUID_PATTERN.source})(/review)?$`))
  if (page) return { page: page[3] ? 'review' : (page[1] as ExamRoute['page']), id: page[2] }
  const lesson = params.get('lesson') ?? undefined
  if (path === 'exams/practice') return { page: 'home', tab: 'practice', lesson: lesson && /^[a-z0-9-]{1,80}$/.test(lesson) ? lesson : undefined }
  const tab = params.get('tab') as ExamTab | null
  return { page: 'home', tab: tab && EXAM_TABS.includes(tab) ? tab : undefined }
}

export function useRoute(): RouteInfo {
  const [route, setRoute] = useState<RouteInfo>(() => parseHash())

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash())
    window.addEventListener('hashchange', onHashChange)
    // Catch a redirect that happened before this listener existed (e.g. during the first render).
    onHashChange()
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return route
}

/**
 * `replace` swaps the current history entry instead of adding one. Use it for redirects (a subject or
 * chapter-only link resolving to a lesson, the sign-in gate), so Back skips the page that redirected
 * instead of landing on it and being sent forward again.
 */
function setHash(hash: string, replace: boolean) {
  if (!replace) {
    window.location.hash = hash
    return
  }
  if (window.location.hash === hash) return
  history.replaceState(history.state, '', hash)
  // replaceState fires no hashchange; the router and the reader listen for it.
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}

export function navigate(path: string, { replace = false } = {}) {
  setHash(`#/${path}`, replace)
}

export function navigateToLesson(chapterId: string, lessonId: string, { replace = false } = {}) {
  setHash(`#/chapter/${chapterId}/lesson/${lessonId}`, replace)
}
