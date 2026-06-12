import { createContext, useContext, useReducer, useEffect, type Dispatch, type ReactNode } from 'react'
import type { Language, Theme } from '../types'
import type { PublicChapter, PublicSideMenu, PublicLesson } from '../public/publicApi'
import { fetchPublishedChapters, fetchActiveMenus, fetchLessonsByMenu } from '../public/publicApi'
import { parseHash, navigateToLesson } from '../router'

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
}

type AppAction =
  | { type: 'INIT'; chapters: PublicChapter[]; menus: PublicSideMenu[]; orderedLessons: OrderedLesson[]; currentIndex: number }
  | { type: 'GO_TO'; index: number }
  | { type: 'TOGGLE_CHAPTER'; chapterId: string }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'SET_LANGUAGE'; language: Language }
  | { type: 'SET_THEME'; theme: Theme }
  | { type: 'SET_SEARCH_QUERY'; query: string }
  | { type: 'PREV_LESSON' }
  | { type: 'NEXT_LESSON' }

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'INIT':
      return { ...state, ...action, loading: false }
    case 'GO_TO':
      return { ...state, currentIndex: action.index }
    case 'TOGGLE_CHAPTER':
      return { ...state, expandedChapterId: state.expandedChapterId === action.chapterId ? null : action.chapterId }
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarOpen: !state.sidebarOpen }
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

function createInitialState(): AppState {
  const route = parseHash()
  return {
    chapters: [],
    menus: [],
    orderedLessons: [],
    currentIndex: 0,
    expandedChapterId: route.chapterId ?? null,
    sidebarOpen: false,
    language: 'bn',
    theme: 'dark',
    searchQuery: '',
    loading: true,
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

const AppContext = createContext<AppState | null>(null)
const AppDispatchContext = createContext<Dispatch<AppAction> | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, undefined, createInitialState)

  useEffect(() => {
    async function loadData() {
      try {
        const [chapters, menus] = await Promise.all([
          fetchPublishedChapters(),
          fetchActiveMenus(),
        ])

        const allLessons: PublicLesson[] = []
        for (const menu of menus) {
          const lessons = await fetchLessonsByMenu(menu.id)
          allLessons.push(...lessons)
        }

        const orderedLessons = buildOrderedLessons(chapters, menus, allLessons)

        const route = parseHash()
        let currentIndex = 0
        if (route.chapterId && route.lessonId) {
          const idx = orderedLessons.findIndex(
            o => o.chapterId === route.chapterId && o.lesson.id === route.lessonId,
          )
          if (idx >= 0) currentIndex = idx
        }

        dispatch({ type: 'INIT', chapters, menus, orderedLessons, currentIndex })
      } catch (err) {
        console.error('Failed to load public data:', err)
        dispatch({ type: 'INIT', chapters: [], menus: [], orderedLessons: [], currentIndex: 0 })
      }
    }

    loadData()
  }, [])

  useEffect(() => {
    if (!state.loading && state.orderedLessons.length > 0) {
      const current = state.orderedLessons[state.currentIndex]
      if (current) {
        navigateToLesson(current.chapterId, current.lesson.id)
      }
    }
  }, [state.currentIndex, state.loading, state.orderedLessons])

  useEffect(() => {
    const onHashChange = () => {
      const route = parseHash()
      if (route.type === 'public' && route.chapterId && route.lessonId) {
        const idx = state.orderedLessons.findIndex(
          o => o.chapterId === route.chapterId && o.lesson.id === route.lessonId,
        )
        if (idx >= 0) {
          dispatch({ type: 'GO_TO', index: idx })
        }
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [state.orderedLessons])

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
