import { useState, useEffect } from 'react'
import { useApp } from '../context/AppContext'
import { useAdmin } from '../context/AdminContext'
import { useAuth } from '../context/AuthContext'
import { api, type ApiChapter, type ApiLesson, type ApiSideMenu } from './api'
import { translations } from '../data/translations'
import { navigate } from '../router'
import AdminChapters from './AdminChapters'
import AdminLessons from './AdminLessons'
import AdminContent from './AdminContent'
import AdminFiles from './AdminFiles'
import './admin.css'

interface AdminDashboardProps {
  onBack: () => void
}

const navItems = [
  { key: 'dashboard' as const, icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { key: 'chapters' as const, icon: 'M4 6h16M4 12h16M4 18h16' },
  { key: 'lessons' as const, icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { key: 'content' as const, icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { key: 'files' as const, icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
]

const headerTitle: Record<string, 'adminDashboard' | 'adminChapters' | 'adminLessons' | 'adminContent' | 'adminFiles'> = {
  dashboard: 'adminDashboard', chapters: 'adminChapters', lessons: 'adminLessons', content: 'adminContent', files: 'adminFiles',
}
const labelKey: Record<string, 'adminDashboard' | 'adminChapters' | 'adminLessons' | 'adminContent' | 'adminFiles'> = {
  dashboard: 'adminDashboard', chapters: 'adminChapters', lessons: 'adminLessons', content: 'adminContent', files: 'adminFiles',
}

export default function AdminDashboard({ onBack }: AdminDashboardProps) {
  const appState = useApp()
  const admin = useAdmin()
  const auth = useAuth()
  const t = translations[appState.language]
  const [chapters, setChapters] = useState<ApiChapter[]>([])
  const [lessons, setLessons] = useState<ApiLesson[]>([])
  const [menus, setMenus] = useState<ApiSideMenu[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([api.chapters.list(), api.lessons.list(), api.menus.list()])
      .then(([ch, le, me]) => { setChapters(ch); setLessons(le); setMenus(me) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const publishedCh = chapters.filter(c => c.is_published).length
  const publishedLe = lessons.filter(l => l.is_published).length
  const beginner = lessons.filter(l => l.level === 'Beginner').length
  const intermediate = lessons.filter(l => l.level === 'Intermediate').length
  const advanced = lessons.filter(l => l.level === 'Advanced').length

  return (
    <div className="admin-layout">
      <div className="admin-sidebar">
        <div className="admin-logo">{t.studyHub}</div>
        {navItems.map(item => (
          <div
            key={item.key}
            className={`admin-nav-item ${admin.state.view === item.key ? 'active' : ''}`}
            onClick={() => admin.setView(item.key)}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
            </svg>
            {t[labelKey[item.key]]}
          </div>
        ))}
        <div style={{ flex: 1 }} />
        <div
          className="admin-nav-item"
          onClick={() => { auth.logout(); navigate(''); }}
          style={{ color: '#ef4444', borderTop: '1px solid var(--border)', marginTop: '0.5rem', paddingTop: '1rem' }}
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          {appState.language === 'bn' ? 'লগআউট' : 'Logout'}
        </div>
      </div>

      <div className="admin-main">
        <div className="admin-header">
          <h2>{t[headerTitle[admin.state.view]]}</h2>
          <button className="admin-back-btn" onClick={onBack}>{t.adminBack}</button>
        </div>

        {admin.state.view === 'dashboard' && (
          <div>
            {loading ? (
              <div className="admin-loading">Loading...</div>
            ) : (
              <>
                <h3 style={{ marginBottom: '1rem', color: 'var(--text-dim)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {appState.language === 'bn' ? 'পরিসংখ্যান' : 'Statistics'}
                </h3>
                <div className="admin-grid">
                  <div className="admin-stat-card">
                    <h3>{appState.language === 'bn' ? 'মোট চ্যাপ্টার' : 'Total Chapters'}</h3>
                    <div className="stat-value">{chapters.length}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.25rem' }}>
                      {publishedCh} {appState.language === 'bn' ? 'প্রকাশিত' : 'published'}
                    </div>
                  </div>
                  <div className="admin-stat-card">
                    <h3>{appState.language === 'bn' ? 'সাইড মেনু' : 'Side Menus'}</h3>
                    <div className="stat-value">{menus.length}</div>
                  </div>
                  <div className="admin-stat-card">
                    <h3>{appState.language === 'bn' ? 'মোট পাঠ' : 'Total Lessons'}</h3>
                    <div className="stat-value">{lessons.length}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.25rem' }}>
                      {publishedLe} {appState.language === 'bn' ? 'প্রকাশিত' : 'published'}
                    </div>
                  </div>
                  <div className="admin-stat-card">
                    <h3>Beginner</h3>
                    <div className="stat-value" style={{ fontSize: '1.5rem', color: '#22c55e' }}>{beginner}</div>
                  </div>
                  <div className="admin-stat-card">
                    <h3>Intermediate</h3>
                    <div className="stat-value" style={{ fontSize: '1.5rem', color: '#f59e0b' }}>{intermediate}</div>
                  </div>
                  <div className="admin-stat-card">
                    <h3>Advanced</h3>
                    <div className="stat-value" style={{ fontSize: '1.5rem', color: '#ef4444' }}>{advanced}</div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {admin.state.view === 'chapters' && <AdminChapters language={appState.language} />}
        {admin.state.view === 'lessons' && <AdminLessons language={appState.language} />}
        {admin.state.view === 'content' && <AdminContent language={appState.language} />}
        {admin.state.view === 'files' && <AdminFiles language={appState.language} />}
      </div>
    </div>
  )
}
