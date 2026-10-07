import { useState, useEffect } from 'react'

type RouteType = 'public' | 'admin' | 'login' | 'candidate-login' | 'candidate-signup'

export interface RouteInfo {
  type: RouteType
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
    return {
      type: path === 'login' ? 'candidate-login' : 'candidate-signup',
      next: next && SAFE_NEXT.test(next) ? next : undefined,
    }
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
    return { type: 'public', chapterId: lessonMatch[1], lessonId: lessonMatch[2] }
  }

  const chapterMatch = hash.match(new RegExp(`^chapter/(${UUID_PATTERN.source})`))
  if (chapterMatch) {
    return { type: 'public', chapterId: chapterMatch[1] }
  }

  return { type: 'public' }
}

export function useRoute(): RouteInfo {
  const [route, setRoute] = useState<RouteInfo>(() => parseHash())

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash())
    window.addEventListener('hashchange', onHashChange)
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
