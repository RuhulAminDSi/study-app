import { useState, useEffect } from 'react'

type RouteType = 'public' | 'admin' | 'login' | 'candidate-login' | 'candidate-signup'
/** Which page of the public portal: `#/` dashboard, `#/notes`, `#/pyq`, or a lesson under `#/chapter/...`. */
export type PublicView = 'dashboard' | 'notes' | 'pyq' | 'lesson'

export interface RouteInfo {
  type: RouteType
  view?: PublicView
  chapterId?: string
  lessonId?: string
  adminView?: string
  next?: string
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

  if (path === 'notes' || path === 'pyq') return { type: 'public', view: path }
  return { type: 'public', view: 'dashboard' }
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

export function navigate(path: string) {
  window.location.hash = `#/${path}`
}

export function navigateToLesson(chapterId: string, lessonId: string) {
  window.location.hash = `#/chapter/${chapterId}/lesson/${lessonId}`
}
