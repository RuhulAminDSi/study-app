import { useState, useEffect } from 'react'

type RouteType = 'public' | 'admin' | 'login'

export interface RouteInfo {
  type: RouteType
  moduleIndex?: number
  lessonIndex?: number
}

export function parseHash(): RouteInfo {
  const hash = window.location.hash.replace(/^#\//, '')
  if (hash.startsWith('admin/login')) return { type: 'login' }
  if (hash.startsWith('admin')) return { type: 'admin' }

  const lessonMatch = hash.match(/^module\/(\d+)\/lesson\/(\d+)/)
  if (lessonMatch) {
    return { type: 'public', moduleIndex: Number(lessonMatch[1]), lessonIndex: Number(lessonMatch[2]) }
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

export function navigateToLesson(moduleIndex: number, lessonIndex: number) {
  window.location.hash = `#/module/${moduleIndex}/lesson/${lessonIndex}`
}
