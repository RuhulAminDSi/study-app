import { createContext, useContext, useReducer, type Dispatch, type ReactNode } from 'react'
import type { Language, Theme } from '../types'

interface AppState {
  currentModule: number
  currentLesson: number
  expandedModules: Set<number>
  sidebarOpen: boolean
  language: Language
  theme: Theme
  searchQuery: string
}

type AppAction =
  | { type: 'SET_MODULE'; moduleIndex: number }
  | { type: 'SET_LESSON'; lessonIndex: number }
  | { type: 'GO_TO'; moduleIndex: number; lessonIndex: number }
  | { type: 'TOGGLE_MODULE'; moduleIndex: number }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'SET_LANGUAGE'; language: Language }
  | { type: 'SET_THEME'; theme: Theme }
  | { type: 'SET_SEARCH_QUERY'; query: string }
  | { type: 'PREV_LESSON'; totalModules: number }
  | { type: 'NEXT_LESSON'; totalModules: number }

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_MODULE':
      return { ...state, currentModule: action.moduleIndex }
    case 'SET_LESSON':
      return { ...state, currentLesson: action.lessonIndex }
    case 'GO_TO':
      return { ...state, currentModule: action.moduleIndex, currentLesson: action.lessonIndex }
    case 'TOGGLE_MODULE': {
      const next = new Set(state.expandedModules)
      if (next.has(action.moduleIndex)) {
        next.delete(action.moduleIndex)
      } else {
        next.add(action.moduleIndex)
      }
      return { ...state, expandedModules: next }
    }
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarOpen: !state.sidebarOpen }
    case 'SET_LANGUAGE':
      return { ...state, language: action.language }
    case 'SET_THEME':
      return { ...state, theme: action.theme }
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.query }
    case 'PREV_LESSON': {
      if (state.currentLesson > 0) {
        return { ...state, currentLesson: state.currentLesson - 1 }
      }
      if (state.currentModule > 0) {
        return { ...state, currentModule: state.currentModule - 1 }
      }
      return state
    }
    case 'NEXT_LESSON': {
      const { totalModules } = action
      if (state.currentModule >= totalModules - 1 && state.currentLesson >= 0) {
        return state
      }
      return { ...state, currentModule: state.currentModule + 1, currentLesson: 0 }
    }
    default:
      return state
  }
}

const totalModules = 19

function createInitialState(): AppState {
  const allModules = new Set<number>()
  for (let i = 0; i < totalModules; i++) allModules.add(i)
  return {
    currentModule: 0,
    currentLesson: 0,
    expandedModules: allModules,
    sidebarOpen: false,
    language: 'bn',
    theme: 'dark',
    searchQuery: '',
  }
}

const AppContext = createContext<AppState | null>(null)
const AppDispatchContext = createContext<Dispatch<AppAction> | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, undefined, createInitialState)

  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}

export function useAppDispatch() {
  const ctx = useContext(AppDispatchContext)
  if (!ctx) throw new Error('useAppDispatch must be used within AppProvider')
  return ctx
}
