import { apiFetch } from './api'

/** A candidate as the admin panel sees it (`/api/candidates`); never includes the password hash. */
export interface AdminCandidate {
  id: string
  fullName: string
  email: string
  phone: string | null
  targetPostId: string | null
  targetPostTitle: string | null
  preferredLanguage: 'bn' | 'en'
  isActive: boolean
  lastLogin: string | null
  createdAt: string
  attemptCount: number
}

/** A job post a candidate can target (the admin list includes unpublished posts). */
export interface JobPostOption { id: string; organization: string; title_en: string; title_bn: string | null }

export interface CandidateList { items: AdminCandidate[]; total: number; page: number; pageSize: number }
export interface CandidateStats { total: number; active: number; inactive: number; newLast7Days: number; activeLast7Days: number }
export interface CandidateListParams { q?: string; status?: '' | 'active' | 'inactive'; sort?: 'created' | 'last_login' | 'name'; page?: number; pageSize?: number }
export type CandidateUpdate = Partial<Pick<AdminCandidate, 'fullName' | 'email' | 'phone' | 'targetPostId' | 'preferredLanguage' | 'isActive'>>

const json = (method: string, body: unknown): RequestInit => ({ method, body: JSON.stringify(body) })

export const candidatesApi = {
  list: (params: CandidateListParams) => {
    const query = new URLSearchParams()
    for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== '') query.set(k, String(v))
    return apiFetch<CandidateList>(`/candidates?${query}`)
  },
  stats: () => apiFetch<CandidateStats>('/candidates/stats'),
  get: (id: string) => apiFetch<AdminCandidate>(`/candidates/${id}`),
  update: (id: string, changes: CandidateUpdate) => apiFetch<AdminCandidate>(`/candidates/${id}`, json('PATCH', changes)),
  setPassword: (id: string, password: string) => apiFetch<{ updated: boolean }>(`/candidates/${id}/password`, json('POST', { password })),
  delete: (id: string) => apiFetch<{ deleted: boolean }>(`/candidates/${id}`, { method: 'DELETE' }),
  jobPosts: () => apiFetch<JobPostOption[]>('/job-posts'),
}
