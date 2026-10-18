import { useSyncExternalStore } from 'react'

/**
 * Reading progress for the public portal, kept in this browser only (no account needed).
 * `opened` holds every lesson id the reader has shown; `recent` the last few, newest first.
 */
export interface Progress {
  opened: string[]
  recent: { chapterId: string; lessonId: string }[]
}

const KEY = 'studyhub_progress'
const RECENT_MAX = 6
const EMPTY: Progress = { opened: [], recent: [] }
const listeners = new Set<() => void>()

let cache: Progress = read()

function read(): Progress {
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) ?? 'null')
    if (parsed && Array.isArray(parsed.opened) && Array.isArray(parsed.recent)) return parsed
  } catch {
    /* blocked or corrupt storage: start empty */
  }
  return EMPTY
}

export function recordLessonOpened(chapterId: string, lessonId: string) {
  const opened = cache.opened.includes(lessonId) ? cache.opened : [...cache.opened, lessonId]
  const recent = [{ chapterId, lessonId }, ...cache.recent.filter(r => r.lessonId !== lessonId)].slice(0, RECENT_MAX)
  if (opened === cache.opened && cache.recent[0]?.lessonId === lessonId) return
  cache = { opened, recent }
  try {
    localStorage.setItem(KEY, JSON.stringify(cache))
  } catch {
    /* private mode: progress lasts for this visit only */
  }
  listeners.forEach(l => l())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function useProgress(): Progress {
  return useSyncExternalStore(subscribe, () => cache)
}
