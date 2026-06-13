const API_BASE = '/api'

function getToken(): string {
  return localStorage.getItem('admin_token') || ''
}

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
      ...options?.headers,
    },
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }))
    throw new Error(err.error || 'API request failed')
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
      if (!res.ok) throw new Error((await res.json()).error || 'Upload failed')
      return res.json() as Promise<ApiUploadedFile>
    },
    delete: (id: string) => apiFetch<{ deleted: boolean }>(`/files/${id}`, { method: 'DELETE' }),
  },
}
