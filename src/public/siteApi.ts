/** Open endpoints under /api/site (server/src/routes/site.ts): no sign-in needed. */
import type { ArticleCategory } from '../router'
import type { PublicResource } from './publicApi'
import type { Translations } from '../types'

export type { PublicResource as ResourceCard }

export type { ArticleCategory }
export interface SiteContact { email: string; phone: string; whatsapp: string | null; address: string; hours: string; facebook: string; youtube: string }
export interface SiteInfo {
  stats: { mcq: number; written: number; subjects: number; lessons: number; tests: number; openCirculars: number; resources: number; articles: number; freeSets: number }
  contact: SiteContact
  payment: { bkash: string; nagad: string; rocket: string }
  paywall: { enabled: boolean }
}

export interface ArticleCard {
  id: string
  slug: string
  category: ArticleCategory
  title_en: string
  title_bn: string | null
  summary_en: string | null
  summary_bn: string | null
  tags: string[]
  is_pinned: boolean
  published_at: string | null
  views: number
  cover_url: string | null
}
export interface Article extends ArticleCard { body_en: string; body_bn: string | null; updated_at: string; related: ArticleCard[] }
export interface ArticlePage { items: ArticleCard[]; total: number; page: number; pageSize: number }

export interface Plan {
  id: string
  name_en: string
  name_bn: string | null
  description_en: string | null
  description_bn: string | null
  features_en: string[]
  features_bn: string[]
  months: number
  price_bdt: number
  is_featured: boolean
  is_active: boolean
  sort_order: number
}

export interface FreeSetCard {
  id: string
  titleEn: string
  titleBn: string | null
  descriptionEn: string | null
  descriptionBn: string | null
  durationMinutes: number
  questionCount: number
  participants: number
  marksPerQuestion: number
  negativeMark: number
}
export interface FreeSetQuestion extends Omit<FreeQuestion, 'subject' | 'options'> {
  subject: { nameEn: string; nameBn: string | null }
  options: (FreeOption & { isCorrect?: boolean })[]
  explanationEn?: string | null
  explanationBn?: string | null
}
export interface FreeSetPaper extends FreeSetCard { ticket?: string; questions: FreeSetQuestion[] }
export interface FreeSetResult {
  score: number; maxScore: number; correct: number; wrong: number; skipped: number; total: number; seconds: number
  rank: number; participants: number
  results: { questionId: string; correctOptionId: string | null; isCorrect: boolean | null }[]
  explanations: Record<string, { en: string | null; bn: string | null }>
}
export interface MeritEntry { rank: number; name: string; score: number; maxScore: number; correct: number; total: number; seconds: number }

/** An error from /api/site with the server's code and field codes. */
export class SiteError extends Error {
  status: number
  code?: string
  fields: Record<string, string>
  constructor(status: number, body: { error?: string; code?: string; fields?: Record<string, string> }) {
    super(body.error || `Request failed (${status})`)
    this.status = status
    this.code = body.code
    this.fields = body.fields ?? {}
  }
}

export interface FreeOption { id: string; textEn: string; textBn: string | null }
export interface FreeQuestion {
  id: string
  stemEn: string
  stemBn: string | null
  code: string | null
  subject: { code: string; nameEn: string; nameBn: string | null }
  options: FreeOption[]
}
export interface FreeSet { durationMinutes: number; questions: FreeQuestion[] }
export interface FreeSubject { code: string; nameEn: string; nameBn: string | null; questionCount: number }
export interface FreeResult {
  total: number
  correct: number
  wrong: number
  skipped: number
  results: { questionId: string; correctOptionId: string | null; isCorrect: boolean | null; explanationEn: string | null; explanationBn: string | null }[]
}

async function siteFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`/api/site${path}`, { ...init, headers: { 'Content-Type': 'application/json', ...init?.headers } })
  if (!res.ok) throw new SiteError(res.status, await res.json().catch(() => ({})))
  return res.json() as Promise<T>
}

let info: Promise<SiteInfo> | null = null
/** Fetched once per page load; a failure is retried on the next call. */
export function fetchSiteInfo(): Promise<SiteInfo> {
  info ??= siteFetch<SiteInfo>('/site-info').catch(e => { info = null; throw e })
  return info
}

export const freeTestApi = {
  subjects: () => siteFetch<FreeSubject[]>('/free-test/subjects'),
  start: (subject: string | null, count = 20) =>
    siteFetch<FreeSet>(`/free-test?count=${count}${subject ? `&subject=${encodeURIComponent(subject)}` : ''}`),
  check: (answers: { questionId: string; optionId: string | null }[]) =>
    siteFetch<FreeResult>('/free-test/check', { method: 'POST', body: JSON.stringify({ answers }) }),
}

const post = (body: unknown): RequestInit => ({ method: 'POST', body: JSON.stringify(body) })

export const articlesApi = {
  list: (params: { category?: ArticleCategory; tag?: string; q?: string; page?: number }) => {
    const s = new URLSearchParams()
    if (params.category) s.set('category', params.category)
    if (params.tag) s.set('tag', params.tag)
    if (params.q) s.set('q', params.q)
    if (params.page && params.page > 1) s.set('page', String(params.page))
    const qs = s.toString()
    return siteFetch<ArticlePage>(`/articles${qs ? `?${qs}` : ''}`)
  },
  get: (slug: string) => siteFetch<Article>(`/articles/${encodeURIComponent(slug)}`),
}

export const resourcesApi = { list: () => siteFetch<PublicResource[]>('/resources') }

export const plansApi = { list: () => siteFetch<Plan[]>('/plans') }

export const freeSetsApi = {
  list: () => siteFetch<FreeSetCard[]>('/free-sets'),
  get: (id: string) => siteFetch<FreeSetCard>(`/free-sets/${id}`),
  answers: (id: string) => siteFetch<FreeSetPaper>(`/free-sets/${id}/answers`),
  start: (id: string) => siteFetch<FreeSetPaper>(`/free-sets/${id}/start`, { method: 'POST' }),
  submit: (id: string, body: { name: string; ticket: string; answers: { questionId: string; optionId: string }[] }) =>
    siteFetch<FreeSetResult>(`/free-sets/${id}/submit`, post(body)),
  merit: (id: string) => siteFetch<FreeSetCard & { entries: MeritEntry[] }>(`/free-sets/${id}/merit`),
}

export const ARTICLE_LABELS: Record<ArticleCategory, keyof Translations> = {
  guideline: 'arCatGuideline', news: 'arCatNews', written: 'arCatWritten', solution: 'arCatSolution',
}
