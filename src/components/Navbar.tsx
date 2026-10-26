import { useApp, useAppDispatch } from '../context/AppContext'
import { translations } from '../data/translations'
import { navigate, navigateToLesson } from '../router'
import { useCandidateAuth } from '../candidate/CandidateAuthContext'
import { useAuth } from '../context/AuthContext'
import '../candidate/candidate.css'

interface NavbarProps {
  onAdminClick: () => void
}

export default function Navbar({ onAdminClick }: NavbarProps) {
  const state = useApp()
  const dispatch = useAppDispatch()
  const t = translations[state.language]
  const candidateAuth = useCandidateAuth()
  const adminAuth = useAuth()

  // End every session and show the login page. Navigating first (in the same batch) keeps the sign-in
  // gate from sending the reader to the login page with a `next` back to where they were.
  const signOut = () => {
    navigate('login', { replace: true })
    candidateAuth.signOut()
    adminAuth.logout()
  }

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <button className="mobile-menu-btn" onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <a className="navbar-brand" href="#/">
          <svg className="navbar-brand-mark" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="var(--accent)" /><path d="M7.5 23.5H17.5a3.5 3.5 0 0 0 0-7H13.5a3.5 3.5 0 0 1 0-7H19.5" fill="none" stroke="var(--on-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><circle cx="23.5" cy="9.5" r="2.6" fill="var(--on-accent)" /></svg>
          <span className="navbar-brand-text">{t.studyHub}</span>
        </a>

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
        {candidateAuth.candidate ? (
          <>
            <span className="navbar-user" title={candidateAuth.candidate.email}>{candidateAuth.candidate.fullName}</span>
            <button className="language-toggle" onClick={signOut} title={t.signOut} aria-label={t.signOut}><SignOutIcon /><span className="navbar-signout-text">{t.signOut}</span></button>
          </>
        ) : adminAuth.user ? (
          // An admin previewing the portal (Study Hub needs an account, so nobody else gets here).
          <>
            <span className="navbar-user" title={adminAuth.user.email}>{adminAuth.user.username}</span>
            <button className="language-toggle" onClick={signOut} title={t.signOut} aria-label={t.signOut}><SignOutIcon /><span className="navbar-signout-text">{t.signOut}</span></button>
          </>
        ) : null}
        {/* Only a signed-in admin sees the way into the admin panel. */}
        {adminAuth.isAuthenticated && (
          <button className="language-toggle navbar-admin-btn" onClick={onAdminClick} title="Admin">
            Admin
          </button>
        )}
      </div>
    </nav>
  )
}

/** Shown instead of the "Sign out" label on narrow screens (motion.css). */
function SignOutIcon() {
  return (
    <svg className="navbar-signout-icon" width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
    </svg>
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
