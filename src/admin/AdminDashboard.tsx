import { useEffect, useState } from 'react'
import { useApp, useAppDispatch } from '../context/AppContext'
import { useAuth } from '../context/AuthContext'
import { translations } from '../data/translations'
import type { Translations } from '../types'
import { navigate, useRoute } from '../router'
import AdminOverview from './AdminOverview'
import AdminChapters from './AdminChapters'
import AdminLessons from './AdminLessons'
import AdminCandidates from './AdminCandidates'
import AdminAnnouncements from './AdminAnnouncements'
import AdminMedia from './AdminMedia'
import LessonEditor from './LessonEditor'
import { canLeave } from './navGuard'
import { CONTENT_MANAGEMENT } from '../features'
import { FeedbackProvider, Icon, type IconName } from './ui'
import './admin.css'
import './admin-content.css'

interface AdminDashboardProps {
  onBack: () => void
}

type AdminView = 'dashboard' | 'chapters' | 'lessons' | 'announcements' | 'media' | 'candidates'

interface NavItem { key: AdminView; label: keyof Translations; subtitle: keyof Translations; icon: IconName }

const navGroups: { label?: keyof Translations; items: NavItem[] }[] = [
  { items: [{ key: 'dashboard', label: 'adminDashboard', subtitle: 'adminWelcomeSub', icon: 'dashboard' }] },
  {
    label: 'adminNavContent',
    items: [
      { key: 'chapters', label: 'adminChapters', subtitle: 'adminSubChapters', icon: 'chapters' },
      { key: 'lessons', label: 'adminLessons', subtitle: 'adminSubLessons', icon: 'lessons' },
      ...(CONTENT_MANAGEMENT ? [
        { key: 'announcements', label: 'adminAnnouncements', subtitle: 'adminSubAnnouncements', icon: 'megaphone' } as NavItem,
        { key: 'media', label: 'adminMedia', subtitle: 'adminSubMedia', icon: 'image' } as NavItem,
      ] : []),
    ],
  },
  { label: 'adminNavPeople', items: [{ key: 'candidates', label: 'adminCandidates', subtitle: 'adminSubCandidates', icon: 'candidates' }] },
]
const navItems = navGroups.flatMap(g => g.items)

/** Candidate accounts hold personal data: only admins and super admins manage them (editors handle content). */
const ROLE_VIEWS: Partial<Record<AdminView, string[]>> = { candidates: ['super_admin', 'admin'] }
const ROLE_LABELS: Record<string, keyof Translations> = { super_admin: 'adminRoleSuperAdmin', admin: 'adminRoleAdmin', editor: 'adminRoleEditor' }

export default function AdminDashboard({ onBack }: AdminDashboardProps) {
  const appState = useApp()
  const dispatch = useAppDispatch()
  const auth = useAuth()
  const t = translations[appState.language]
  const route = useRoute()
  const role = auth.user?.role ?? ''
  const canSee = (v: AdminView) => !ROLE_VIEWS[v] || ROLE_VIEWS[v]!.includes(role)
  const validViews = navItems.filter(item => canSee(item.key)).map(item => item.key)
  // The URL is the source of truth (#/admin/<view>[/<id>]), so back/forward and reloads land on the same screen.
  const [viewPart, itemId] = (route.adminView ?? '').split('/')
  const view: AdminView = validViews.includes(viewPart as AdminView) ? (viewPart as AdminView) : 'dashboard'
  const editingLesson = CONTENT_MANAGEMENT && view === 'lessons' && itemId ? itemId : null
  const current = navItems.find(item => item.key === view)!
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  // Same as the portal's "Sign out": end the session and go back to the landing page.
  const signOut = async () => {
    if (!await canLeave()) return
    auth.logout()
    window.location.href = '/'
  }
  const go = async (key: AdminView) => {
    setMobileOpen(false)
    if (!await canLeave()) return // e.g. the lesson editor has unsaved changes
    navigate(`admin/${key === 'dashboard' ? '' : key}`)
  }

  const userName = auth.user?.username ?? ''
  const initials = userName.slice(0, 2).toUpperCase() || 'AD'
  const isDark = appState.theme === 'dark'

  return (
    <FeedbackProvider t={t}>
      <div className="admin-layout">
        <aside className={`adm-sidebar${mobileOpen ? ' open' : ''}`} aria-label="Admin">
          <div className="adm-brand">
            <span className="adm-brand-mark" aria-hidden="true">SH</span>
            <div className="adm-brand-text">
              <strong>{t.studyHub}</strong>
              <span>{t.adminConsole}</span>
            </div>
            <button type="button" className="adm-icon-btn adm-sidebar-close" onClick={() => setMobileOpen(false)} aria-label={t.adminClose}>
              <Icon name="close" />
            </button>
          </div>

          <nav className="adm-nav">
            {navGroups.map((group, i) => {
              const items = group.items.filter(item => canSee(item.key))
              if (items.length === 0) return null
              return (
                <div key={i} className="adm-nav-group">
                  {group.label && <div className="adm-nav-heading">{t[group.label]}</div>}
                  {items.map(item => (
                    <button key={item.key} type="button" className={`adm-nav-item${view === item.key ? ' active' : ''}`}
                      aria-current={view === item.key ? 'page' : undefined} onClick={() => go(item.key)}>
                      <Icon name={item.icon} size={18} />
                      <span>{t[item.label]}</span>
                    </button>
                  ))}
                </div>
              )
            })}
          </nav>

          <div className="adm-user">
            <span className="adm-avatar" aria-hidden="true">{initials}</span>
            <div className="adm-user-text">
              <strong>{userName}</strong>
              <span>{ROLE_LABELS[role] ? t[ROLE_LABELS[role]] : role}</span>
            </div>
            <button type="button" className="adm-icon-btn" onClick={signOut} title={t.signOut} aria-label={t.signOut}>
              <Icon name="signOut" />
            </button>
          </div>
        </aside>

        <div className={`adm-scrim${mobileOpen ? ' open' : ''}`} onClick={() => setMobileOpen(false)} aria-hidden="true" />

        <div className="admin-main">
          <header className="adm-topbar">
            <button type="button" className="adm-icon-btn adm-hamburger" onClick={() => setMobileOpen(true)} aria-label={t.adminOpenMenu} aria-expanded={mobileOpen}>
              <Icon name="menu" size={18} />
            </button>
            <div className="adm-topbar-title">
              <h2>{editingLesson ? t.edEditLesson : t[current.label]}</h2>
              <p>{editingLesson ? t.adminSubEditor : t[current.subtitle]}</p>
            </div>
            <div className="adm-topbar-actions">
              <button type="button" className="adm-icon-btn" title={isDark ? t.lightMode : t.darkMode} aria-label={isDark ? t.lightMode : t.darkMode}
                onClick={() => dispatch({ type: 'SET_THEME', theme: isDark ? 'light' : 'dark' })}>
                <Icon name={isDark ? 'sun' : 'moon'} />
              </button>
              <button type="button" className="adm-icon-btn adm-lang-btn" title="Language"
                onClick={() => dispatch({ type: 'SET_LANGUAGE', language: appState.language === 'en' ? 'bn' : 'en' })}>
                {appState.language === 'en' ? 'বাং' : 'EN'}
              </button>
              <button type="button" className="adm-btn primary adm-open-hub" onClick={async () => { if (await canLeave()) onBack() }}>
                <Icon name="external" size={15} /><span>{t.adminBack}</span>
              </button>
            </div>
          </header>

          <main className="adm-content">
            {view === 'dashboard' && <AdminOverview language={appState.language} userName={userName} showCandidates={canSee('candidates')} go={go} />}
            {view === 'chapters' && <AdminChapters language={appState.language} />}
            {view === 'lessons' && (editingLesson
              ? <LessonEditor key={editingLesson} id={editingLesson} language={appState.language} onExit={() => go('lessons')} />
              : <AdminLessons language={appState.language} />)}
            {view === 'announcements' && <AdminAnnouncements language={appState.language} />}
            {view === 'media' && <AdminMedia language={appState.language} />}
            {view === 'candidates' && <AdminCandidates language={appState.language} />}
          </main>
        </div>
      </div>
    </FeedbackProvider>
  )
}
