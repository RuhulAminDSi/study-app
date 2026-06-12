import { useApp, useAppDispatch } from '../context/AppContext'
import { translations } from '../data/translations'
import { navigateToLesson } from '../router'
import { useEffect } from 'react'

interface NavbarProps {
  onAdminClick: () => void
}

export default function Navbar({ onAdminClick }: NavbarProps) {
  const state = useApp()
  const dispatch = useAppDispatch()
  const t = translations[state.language]

  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', state.theme === 'light')
  }, [state.theme])

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <button className="mobile-menu-btn" onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="navbar-brand">{t.studyHub}</h1>

        <div className="navbar-search-mobile">
          <input
            type="text"
            className="search-input-mobile"
            placeholder={t.search}
            value={state.searchQuery}
            onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', query: e.target.value })}
          />
          {state.searchQuery.length >= 2 && (
            <SearchDropdown />
          )}
        </div>
      </div>

      <div className="navbar-actions">
        <button className="theme-toggle" onClick={() => dispatch({ type: 'SET_THEME', theme: state.theme === 'dark' ? 'light' : 'dark' })}>
          {state.theme === 'dark' ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
        <button className="language-toggle" onClick={() => dispatch({ type: 'SET_LANGUAGE', language: state.language === 'en' ? 'bn' : 'en' })}>
          {state.language === 'en' ? 'বাং' : 'EN'}
        </button>
        <button className="language-toggle" onClick={onAdminClick} title="Admin">
          Admin
        </button>
      </div>
    </nav>
  )
}

function SearchDropdown() {
  const state = useApp()
  const dispatch = useAppDispatch()

  const results = state.orderedLessons
    .filter(o => {
      const title = state.language === 'bn' && o.lesson.title_bn ? o.lesson.title_bn : o.lesson.title_en
      return title.toLowerCase().includes(state.searchQuery.toLowerCase())
    })
    .slice(0, 10)

  if (results.length === 0) return null

  return (
    <div className="search-results-dropdown">
      {results.slice(0, 5).map((result, i) => {
        const title = state.language === 'bn' && result.lesson.title_bn ? result.lesson.title_bn : result.lesson.title_en
        return (
          <div key={i} className="search-result-item" onClick={() => {
            navigateToLesson(result.chapterId, result.lesson.id)
            dispatch({ type: 'SET_SEARCH_QUERY', query: '' })
          }}>
            <div className="search-result-title">{title}</div>
          </div>
        )
      })}
    </div>
  )
}
