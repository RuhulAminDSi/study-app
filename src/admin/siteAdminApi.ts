import { apiFetch } from './api'
import type { ArticleCategory } from '../router'
import type { Plan } from '../public/siteApi'

/** Server: services/siteSettings.ts. */
export interface ContactSettings { email: string; phone: string; whatsapp: string; address: string; hours: string; facebook: string; youtube: string }
export interface PaymentSettings { bkash: string; nagad: string; rocket: string; instructions_en: string; instructions_bn: string }
export interface PaywallSettings { enabled: boolean; tests: boolean; practice: boolean }
export interface SiteSettings { contact: ContactSettings; payment: PaymentSettings; paywall: PaywallSettings }

export interface AdminArticleRow {
  id: string
  slug: string
  category: ArticleCategory
  title_en: string
  title_bn: string | null
  tags: string[]
  is_pinned: boolean
  is_published: boolean
  published_at: string | null
  views: number
  updated_at: string
}
export interface ArticleInput {
  slug: string
  category: ArticleCategory
  title_en: string
  title_bn: string | null
  summary_en: string | null
  summary_bn: string | null
  body_en: string
  body_bn: string | null
  cover_file_id: string | null
  tags: string[]
  is_pinned: boolean
  is_published: boolean
}
export interface AdminArticle extends ArticleInput { id: string; published_at: string | null; views: number; cover_url: string | null; updated_at: string }

export type PlanInput = Omit<Plan, 'id'>

export type PaymentStatus = 'pending' | 'approved' | 'rejected'
export interface AdminPayment {
  id: string
  candidate_id: string
  full_name: string
  email: string
  phone: string | null
  subscription_until: string | null
  plan_name: string
  months: number
  amount_bdt: number
  method: 'bkash' | 'nagad' | 'rocket'
  sender_number: string
  trx_id: string
  status: PaymentStatus
  admin_note: string | null
  reviewed_at: string | null
  reviewed_by_name: string | null
  created_at: string
}

const json = (method: string, body?: unknown): RequestInit => ({ method, body: body === undefined ? undefined : JSON.stringify(body) })

/** Admin → Articles, Plans & payments, Settings (server/src/routes/adminSite.ts). */
export const siteAdminApi = {
  settings: () => apiFetch<SiteSettings>('/admin-settings'),
  saveSetting: <K extends keyof SiteSettings>(key: K, value: SiteSettings[K]) => apiFetch<SiteSettings>(`/admin-settings/${key}`, json('PUT', value)),

  articles: () => apiFetch<AdminArticleRow[]>('/articles'),
  article: (id: string) => apiFetch<AdminArticle>(`/articles/${id}`),
  createArticle: (input: ArticleInput) => apiFetch<AdminArticle>('/articles', json('POST', input)),
  updateArticle: (id: string, input: ArticleInput) => apiFetch<AdminArticle>(`/articles/${id}`, json('PUT', input)),
  deleteArticle: (id: string) => apiFetch<{ deleted: true }>(`/articles/${id}`, json('DELETE')),

  plans: () => apiFetch<Plan[]>('/plans'),
  createPlan: (input: PlanInput) => apiFetch<Plan>('/plans', json('POST', input)),
  updatePlan: (id: string, input: PlanInput) => apiFetch<Plan>(`/plans/${id}`, json('PUT', input)),
  deletePlan: (id: string) => apiFetch<{ deleted: true }>(`/plans/${id}`, json('DELETE')),

  payments: (status: PaymentStatus | 'all', q: string) => {
    const s = new URLSearchParams()
    if (status !== 'all') s.set('status', status)
    if (q.trim()) s.set('q', q.trim())
    const qs = s.toString()
    return apiFetch<{ items: AdminPayment[]; counts: Partial<Record<PaymentStatus, number>> }>(`/payments${qs ? `?${qs}` : ''}`)
  },
  approve: (id: string, note: string) => apiFetch<AdminPayment>(`/payments/${id}/approve`, json('POST', { note })),
  reject: (id: string, note: string) => apiFetch<AdminPayment>(`/payments/${id}/reject`, json('POST', { note })),
}
