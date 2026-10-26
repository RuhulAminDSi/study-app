import { createContext, useContext, useReducer, useEffect, useRef, type Dispatch, type ReactNode } from 'react'
import type { Language, Theme } from '../types'
import type { PublicChapter, PublicSideMenu, PublicLesson } from '../public/publicApi'
import { fetchPublishedChapters, fetchActiveMenus, fetchPublishedLessons } from '../public/publicApi'
import { parseHash, navigateToLesson, type RouteInfo } from '../router'

export interface OrderedLesson {
  lesson: PublicLesson
  chapterId: string
  chapterTitleEn: string
  chapterTitleBn: string | null
  menuLabelEn: string
  menuLabelBn: string | null
}

interface AppState {
  chapters: PublicChapter[]
  menus: PublicSideMenu[]
  orderedLessons: OrderedLesson[]
  currentIndex: number
  expandedChapterId: string | null
  sidebarOpen: boolean
  language: Language
  theme: Theme
  searchQuery: string
  loading: boolean
  /** True when the last attempt to load public content failed (server unreachable or erroring). */
  loadFailed: boolean
  /** Incremented by RETRY_LOAD to re-run the initial content fetch. */
  loadAttempt: number
}

type AppAction =
  | { type: 'INIT'; chapters: PublicChapter[]; menus: PublicSideMenu[]; orderedLessons: OrderedLesson[]; currentIndex: number; loadFailed: boolean }
  | { type: 'REFRESH'; chapters: PublicChapter[]; menus: PublicSideMenu[]; orderedLessons: OrderedLesson[] }
  | { type: 'RETRY_LOAD' }
  | { type: 'GO_TO'; index: number }
  | { type: 'TOGGLE_CHAPTER'; chapterId: string }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'CLOSE_SIDEBAR' }
  | { type: 'SET_LANGUAGE'; language: Language }
  | { type: 'SET_THEME'; theme: Theme }
  | { type: 'SET_SEARCH_QUERY'; query: string }
  | { type: 'PREV_LESSON' }
  | { type: 'NEXT_LESSON' }

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'INIT':
      return { ...state, ...action, loading: false }
    case 'REFRESH': {
      // Newer content arrived after the device copy was shown: stay on the lesson being read.
      const currentId = state.orderedLessons[state.currentIndex]?.lesson.id
      const index = action.orderedLessons.findIndex(o => o.lesson.id === currentId)
      const currentIndex = index >= 0 ? index : Math.min(state.currentIndex, Math.max(0, action.orderedLessons.length - 1))
      return { ...state, chapters: action.chapters, menus: action.menus, orderedLessons: action.orderedLessons, currentIndex }
    }
    case 'RETRY_LOAD':
      return { ...state, loading: true, loadFailed: false, loadAttempt: state.loadAttempt + 1 }
    case 'GO_TO':
      // Opening a lesson from anywhere (dashboard, libraries, search) unfolds its chapter in the side menu.
      return { ...state, currentIndex: action.index, expandedChapterId: state.orderedLessons[action.index]?.chapterId ?? state.expandedChapterId }
    case 'TOGGLE_CHAPTER':
      return { ...state, expandedChapterId: state.expandedChapterId === action.chapterId ? null : action.chapterId }
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarOpen: !state.sidebarOpen }
    case 'CLOSE_SIDEBAR':
      return { ...state, sidebarOpen: false }
    case 'SET_LANGUAGE':
      return { ...state, language: action.language }
    case 'SET_THEME':
      return { ...state, theme: action.theme }
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.query }
    case 'PREV_LESSON':
      return { ...state, currentIndex: Math.max(0, state.currentIndex - 1) }
    case 'NEXT_LESSON':
      return { ...state, currentIndex: Math.min(state.orderedLessons.length - 1, state.currentIndex + 1) }
    default:
      return state
  }
}

/**
 * Shared with the landing page (landing/landing.js), so both open in the language last picked.
 * Written only when the reader presses the language toggle; until then the default is English.
 */
const LANG_KEY = 'studyhub_language'

function savedLanguage(): Language {
  try {
    const v = localStorage.getItem(LANG_KEY)
    if (v === 'en' || v === 'bn') return v
  } catch {
    /* storage blocked: use the default */
  }
  return 'en'
}

const THEME_KEY = 'studyhub_theme'

function savedTheme(): Theme {
  try {
    const v = localStorage.getItem(THEME_KEY)
    if (v === 'light' || v === 'dark') return v
  } catch {
    /* storage blocked: use the default */
  }
  return 'dark'
}

function createInitialState(): AppState {
  const route = parseHash()
  return {
    chapters: [],
    menus: [],
    orderedLessons: [],
    currentIndex: 0,
    expandedChapterId: route.chapterId ?? null,
    sidebarOpen: false,
    language: savedLanguage(),
    theme: savedTheme(),
    searchQuery: '',
    loading: true,
    loadFailed: false,
    loadAttempt: 0,
  }
}

function buildOrderedLessons(
  chapters: PublicChapter[],
  menus: PublicSideMenu[],
  allLessons: PublicLesson[],
): OrderedLesson[] {
  const ordered: OrderedLesson[] = []
  const lessonsByMenu = new Map<string, PublicLesson[]>()
  for (const l of allLessons) {
    const arr = lessonsByMenu.get(l.side_menu_id)
    if (arr) arr.push(l)
    else lessonsByMenu.set(l.side_menu_id, [l])
  }

  for (const ch of chapters) {
    const chMenus = menus.filter(m => m.chapter_id === ch.id).sort((a, b) => a.sort_order - b.sort_order)
    for (const menu of chMenus) {
      const lessons = (lessonsByMenu.get(menu.id) || []).sort((a, b) => a.lesson_number - b.lesson_number)
      for (const l of lessons) {
        ordered.push({
          lesson: l,
          chapterId: ch.id,
          chapterTitleEn: ch.title_en,
          chapterTitleBn: ch.title_bn,
          menuLabelEn: menu.label_en,
          menuLabelBn: menu.label_bn,
        })
      }
    }
  }

  return ordered
}

/** Index of the lesson a route points at: the exact lesson, or a chapter's first lesson; -1 if none. */
function lessonIndexFor(orderedLessons: OrderedLesson[], route: RouteInfo, chapters: PublicChapter[]): number {
  if (route.chapterNumber) {
    const chapter = chapters.find(c => c.chapter_number === route.chapterNumber)
    return chapter ? orderedLessons.findIndex(o => o.chapterId === chapter.id) : -1
  }
  if (!route.chapterId) return -1
  if (route.lessonId) {
    return orderedLessons.findIndex(o => o.chapterId === route.chapterId && o.lesson.id === route.lessonId)
  }
  return orderedLessons.findIndex(o => o.chapterId === route.chapterId)
}

const AppContext = createContext<AppState | null>(null)
const AppDispatchContext = createContext<Dispatch<AppAction> | null>(null)

/** `enabled` is false while nobody is signed in: study content is only served to signed-in readers. */
export function AppProvider({ children, enabled = true }: { children: ReactNode; enabled?: boolean }) {
  const [state, dispatch] = useReducer(appReducer, undefined, createInitialState)

  useEffect(() => {
    if (!enabled) return
    let alive = true
    // Each request answers from the device copy first (publicApi.ts cachedPublicFetch) and reports a newer
    // server answer later; `latest` collects those so the portal is rebuilt from current data.
    const latest: { chapters?: PublicChapter[]; menus?: PublicSideMenu[]; lessons?: PublicLesson[] } = {}
    let ready = false
    const refresh = () => {
      if (!ready || !alive || !latest.chapters || !latest.menus || !latest.lessons) return
      dispatch({
        type: 'REFRESH',
        chapters: latest.chapters,
        menus: latest.menus,
        orderedLessons: buildOrderedLessons(latest.chapters, latest.menus, latest.lessons),
      })
    }

    async function loadData() {
      try {
        // Three requests in parallel; buildOrderedLessons keeps only lessons whose menu is active
        // and whose chapter is published.
        const [chapters, menus, allLessons] = await Promise.all([
          fetchPublishedChapters(d => { latest.chapters = d; refresh() }),
          fetchActiveMenus(d => { latest.menus = d; refresh() }),
          fetchPublishedLessons(d => { latest.lessons = d; refresh() }),
        ])
        if (!alive) return
        // A refresh that beat the slowest request is newer than the copy it returned.
        latest.chapters ??= chapters
        latest.menus ??= menus
        latest.lessons ??= allLessons

        const orderedLessons = buildOrderedLessons(latest.chapters, latest.menus, latest.lessons)

        const route = parseHash()
        const currentIndex = Math.max(0, lessonIndexFor(orderedLessons, route, latest.chapters))

        dispatch({ type: 'INIT', chapters: latest.chapters, menus: latest.menus, orderedLessons, currentIndex, loadFailed: false })
        ready = true
        // A subject link names no chapter id up front, so open its chapter in the side menu now.
        if (route.chapterNumber) dispatch({ type: 'GO_TO', index: currentIndex })
      } catch (err) {
        if (!alive) return
        console.error('Failed to load public data:', err)
        dispatch({ type: 'INIT', chapters: [], menus: [], orderedLessons: [], currentIndex: 0, loadFailed: true })
      }
    }

    loadData()
    return () => { alive = false }
  }, [state.loadAttempt, enabled])

  // The theme applies to every screen (portal, admin panel, sign-in pages) and is remembered.
  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', state.theme === 'light')
    try {
      localStorage.setItem(THEME_KEY, state.theme)
    } catch {
      /* private mode: the choice lasts for this visit */
    }
  }, [state.theme])

  // Save only a real change, so a visitor who never touches the toggle keeps following the default.
  const initialLanguage = useRef(state.language)
  useEffect(() => {
    if (state.language === initialLanguage.current) return
    initialLanguage.current = state.language
    try {
      localStorage.setItem(LANG_KEY, state.language)
    } catch {
      /* private mode: the choice lasts for this visit */
    }
  }, [state.language])

  // Keeps the URL on the current lesson while reading (prev/next, chapter-only links). The dashboard and
  // the notes/past-question libraries have their own URLs, so they are left alone.
  useEffect(() => {
    const route = parseHash()
    if (route.type !== 'public' || route.view !== 'lesson') return
    if (!state.loading && state.orderedLessons.length > 0) {
      const current = state.orderedLessons[state.currentIndex]
      if (current) {
        // A subject or chapter-only link is a redirect: replace it, so Back leaves the reader.
        navigateToLesson(current.chapterId, current.lesson.id, { replace: !route.lessonId })
      }
    }
  }, [state.currentIndex, state.loading, state.orderedLessons])

  useEffect(() => {
    const onHashChange = () => {
      const route = parseHash()
      if (route.type !== 'public') return
      const idx = lessonIndexFor(state.orderedLessons, route, state.chapters)
      if (idx >= 0) {
        dispatch({ type: 'GO_TO', index: idx })
        // A chapter-only or subject link has no lesson in the URL yet; the sync effect won't fire if the index is unchanged.
        const target = state.orderedLessons[idx]
        if (!route.lessonId) navigateToLesson(target.chapterId, target.lesson.id, { replace: true })
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [state.orderedLessons, state.chapters])

  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  )
}

export function useApp() { // eslint-disable-line react-refresh/only-export-components
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}

export function useAppDispatch() { // eslint-disable-line react-refresh/only-export-components
  const ctx = useContext(AppDispatchContext)
  if (!ctx) throw new Error('useAppDispatch must be used within AppProvider')
  return ctx
}
