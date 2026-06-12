const API_BASE = 'http://localhost:3001/api'

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
  sub_menus?: ApiSubSideMenu[]
}

export interface ApiSubSideMenu {
  id: string
  side_menu_id: string
  label_en: string
  label_bn: string | null
  sort_order: number
  is_active: boolean
}

export interface ApiLesson {
  id: string
  sub_side_menu_id: string
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
    listWithSub: () => apiFetch<ApiSideMenu[]>('/menus/with-sub'),
    create: (data: Partial<ApiSideMenu>) =>
      apiFetch<ApiSideMenu>('/menus', { method: 'POST', body: JSON.stringify(data) }),
    update: (id: string, data: Partial<ApiSideMenu>) =>
      apiFetch<ApiSideMenu>(`/menus/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id: string) =>
      apiFetch<{ deleted: boolean }>(`/menus/${id}`, { method: 'DELETE' }),
    toggle: (id: string) =>
      apiFetch<ApiSideMenu>(`/menus/${id}/toggle`, { method: 'PATCH' }),
  },
  submenus: {
    list: () => apiFetch<ApiSubSideMenu[]>('/submenus'),
    create: (data: Partial<ApiSubSideMenu>) =>
      apiFetch<ApiSubSideMenu>('/submenus', { method: 'POST', body: JSON.stringify(data) }),
    update: (id: string, data: Partial<ApiSubSideMenu>) =>
      apiFetch<ApiSubSideMenu>(`/submenus/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id: string) =>
      apiFetch<{ deleted: boolean }>(`/submenus/${id}`, { method: 'DELETE' }),
    toggle: (id: string) =>
      apiFetch<ApiSubSideMenu>(`/submenus/${id}/toggle`, { method: 'PATCH' }),
  },
  lessons: {
    list: () => apiFetch<ApiLesson[]>('/lessons'),
    get: (id: string) => apiFetch<ApiLesson>(`/lessons/${id}`),
    getBySubMenu: (subMenuId: string) => apiFetch<ApiLesson[]>(`/lessons/sub-menu/${subMenuId}`),
    create: (data: Partial<ApiLesson>) =>
      apiFetch<ApiLesson>('/lessons', { method: 'POST', body: JSON.stringify(data) }),
    update: (id: string, data: Partial<ApiLesson>) =>
      apiFetch<ApiLesson>(`/lessons/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id: string) =>
      apiFetch<{ deleted: boolean }>(`/lessons/${id}`, { method: 'DELETE' }),
  },
}
