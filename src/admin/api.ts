const API_BASE = '/api'

/** Fired when the server rejects the admin token (expired, or issued before token kinds existed). */
export const ADMIN_UNAUTHORIZED_EVENT = 'admin:unauthorized'

function notifyIfUnauthorized(res: Response) {
  if (res.status === 401) window.dispatchEvent(new Event(ADMIN_UNAUTHORIZED_EVENT))
}

/** An admin API failure with the server's machine-readable code and per-field codes. */
export class AdminApiError extends Error {
  status: number
  code?: string
  fields: Record<string, string>
  /** The whole error body, for routes that add details (e.g. a test's readiness `problems`). */
  body: Record<string, unknown>

  constructor(status: number, body: { error?: string; code?: string; fields?: Record<string, string> }) {
    super(body.error || 'API request failed')
    this.status = status
    this.code = body.code ?? (status >= 500 ? 'internal_error' : undefined)
    this.fields = body.fields ?? {}
    this.body = body
  }
}

function getToken(): string {
  return localStorage.getItem('admin_token') || ''
}

export async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
      ...options?.headers,
    },
  })
  if (!res.ok) {
    notifyIfUnauthorized(res)
    const err = await res.json().catch(() => ({ error: res.statusText }))
    throw new AdminApiError(res.status, err)
  }
  return res.json()
}

export interface ApiChapter {
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

export interface ApiSideMenu {
  id: string
  chapter_id: string
  label_en: string
  label_bn: string | null
  icon: string | null
  sort_order: number
  is_active: boolean
}

export interface ApiUploadedFile {
  id: string
  original_name: string
  storage_path: string
  mime_type: string
  file_size: number
  uploaded_by: string | null
  created_at: string
  /** Where the file is served, e.g. `/uploads/<uuid>.png`. */
  url: string
}

export interface ApiLesson {
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

/** One saved version of a lesson's text (see lesson_revisions). `note` is 'original' or 'restored'. */
export interface ApiLessonRevision {
  id: string
  lesson_id: string
  title_en: string
  title_bn: string | null
  content_en: string
  content_bn: string | null
  code_en: string | null
  code_bn: string | null
  takeaways_en: string[] | null
  takeaways_bn: string[] | null
  note: 'original' | 'restored' | null
  edited_by_name: string | null
  created_at: string
}

export type AnnouncementTone = 'info' | 'exam' | 'important'

export interface ApiAnnouncement {
  id: string
  title_en: string
  title_bn: string | null
  body_en: string | null
  body_bn: string | null
  tone: AnnouncementTone
  link_url: string | null
  link_label_en: string | null
  link_label_bn: string | null
  starts_at: string | null
  ends_at: string | null
  is_pinned: boolean
  is_published: boolean
  created_at: string
  updated_at: string
}

export type AnnouncementInput = Omit<ApiAnnouncement, 'id' | 'created_at' | 'updated_at'>

const json = (method: string, body: unknown): RequestInit => ({ method, body: JSON.stringify(body) })

export const api = {
  chapters: {
    list: () => apiFetch<ApiChapter[]>('/chapters'),
    create: (data: Partial<ApiChapter>) =>
      apiFetch<ApiChapter>('/chapters', { method: 'POST', body: JSON.stringify(data) }),
    update: (id: string, data: Partial<ApiChapter>) =>
      apiFetch<ApiChapter>(`/chapters/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id: string) =>
      apiFetch<{ deleted: boolean }>(`/chapters/${id}`, { method: 'DELETE' }),
    togglePublish: (id: string) =>
      apiFetch<ApiChapter>(`/chapters/${id}/toggle-publish`, { method: 'PATCH' }),
  },
  menus: {
    list: () => apiFetch<ApiSideMenu[]>('/menus'),

    create: (data: Partial<ApiSideMenu>) =>
      apiFetch<ApiSideMenu>('/menus', { method: 'POST', body: JSON.stringify(data) }),
    update: (id: string, data: Partial<ApiSideMenu>) =>
      apiFetch<ApiSideMenu>(`/menus/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id: string) =>
      apiFetch<{ deleted: boolean }>(`/menus/${id}`, { method: 'DELETE' }),
    toggle: (id: string) =>
      apiFetch<ApiSideMenu>(`/menus/${id}/toggle`, { method: 'PATCH' }),
  },

  lessons: {
    list: () => apiFetch<ApiLesson[]>('/lessons'),
    get: (id: string) => apiFetch<ApiLesson>(`/lessons/${id}`),
    create: (data: Partial<ApiLesson>) =>
      apiFetch<ApiLesson>('/lessons', { method: 'POST', body: JSON.stringify(data) }),
    update: (id: string, data: Partial<ApiLesson>) =>
      apiFetch<ApiLesson>(`/lessons/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id: string) =>
      apiFetch<{ deleted: boolean }>(`/lessons/${id}`, { method: 'DELETE' }),
    togglePublish: (id: string) =>
      apiFetch<ApiLesson>(`/lessons/${id}/toggle-publish`, { method: 'PATCH' }),
    swapOrder: (id1: string, id2: string) =>
      apiFetch<ApiLesson[]>('/lessons/swap-order', { method: 'POST', body: JSON.stringify({ id1, id2 }) }),
    revisions: (id: string) => apiFetch<ApiLessonRevision[]>(`/lessons/${id}/revisions`),
    restore: (id: string, revisionId: string) =>
      apiFetch<ApiLesson>(`/lessons/${id}/revisions/${revisionId}/restore`, { method: 'POST' }),
  },
  announcements: {
    list: () => apiFetch<ApiAnnouncement[]>('/announcements'),
    create: (data: AnnouncementInput) => apiFetch<ApiAnnouncement>('/announcements', json('POST', data)),
    update: (id: string, data: AnnouncementInput) => apiFetch<ApiAnnouncement>(`/announcements/${id}`, json('PUT', data)),
    delete: (id: string) => apiFetch<{ deleted: boolean }>(`/announcements/${id}`, { method: 'DELETE' }),
  },
  files: {
    list: () => apiFetch<ApiUploadedFile[]>('/files'),
    upload: async (file: File) => {
      const form = new FormData()
      form.append('file', file)
      const res = await fetch(`${API_BASE}/files/upload`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${getToken()}` },
        body: form,
      })
      if (!res.ok) {
        notifyIfUnauthorized(res)
        throw new AdminApiError(res.status, await res.json().catch(() => ({ error: res.statusText })))
      }
      return res.json() as Promise<ApiUploadedFile>
    },
    delete: (id: string) => apiFetch<{ deleted: boolean }>(`/files/${id}`, { method: 'DELETE' }),
  },
}
