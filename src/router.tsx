import { useState, useEffect } from 'react'

type RouteType = 'public' | 'admin' | 'login'

export interface RouteInfo {
  type: RouteType
  chapterId?: string
  lessonId?: string
  adminView?: string
}

const UUID_PATTERN = /[a-fA-F0-9-]{36}/

export function parseHash(): RouteInfo {
  const hash = window.location.hash.replace(/^#\//, '')
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
