import { useEffect, useState, type ReactNode } from 'react'
import { useApp, useAppDispatch } from '../context/AppContext'
import { useAuth } from '../context/AuthContext'
import { useCandidateAuth } from '../candidate/CandidateAuthContext'
import { translations } from '../data/translations'
import Icon from '../components/portal/icons'
import type { SitePage } from '../router'
import { useSiteInfo } from './useSiteInfo'
import '../exam/exam.css'
import '../exam/free-test.css'
import './site.css'

type Section = 'free' | 'articles' | 'resources' | 'plans' | 'contact'
const sectionOf = (p: SitePage): Section =>
  p.page === 'free-set' ? 'free' : p.page === 'article' ? 'articles' : p.page

/**
 * The frame of the open pages (free tests, articles, plans, contact): a light header with the site sections,
 * the content, and a footer with the contact details from Admin → Settings. Signed-in readers get a link back to their portal.
 */
export default function SiteShell({ page, children }: { page: SitePage; children: ReactNode }) {
  const { language: lang, theme } = useApp()
  const dispatch = useAppDispatch()
  const candidate = useCandidateAuth()
  const admin = useAuth()
  const info = useSiteInfo()
  const t = translations[lang]
  const signedIn = !!candidate.token || admin.isAuthenticated
  const isDark = theme !== 'light'
  const active = sectionOf(page)
  const links: { key: Section; href: string; label: string }[] = [
    { key: 'free', href: '#/free-test', label: t.siteNavFree },
    { key: 'articles', href: '#/articles', label: t.siteNavArticles },
    { key: 'resources', href: '#/resources', label: t.navResources },
    { key: 'plans', href: '#/plans', label: t.siteNavPlans },
    { key: 'contact', href: '#/contact', label: t.siteNavContact },
  ]
  const pageKey = JSON.stringify(page)
  // The mobile menu belongs to the page it was opened on: it closes when the page changes.
  const [menu, setMenu] = useState<string | null>(null)
  const menuOpen = menu === pageKey
  const setMenuOpen = (open: boolean) => setMenu(open ? pageKey : null)
  useEffect(() => { window.scrollTo(0, 0) }, [pageKey])
  const c = info?.contact

  return (
    <div className={`app-bg ${theme} ft-root site-root`}>
      <header className="ft-top site-top">
        <a className="ft-brand" href="/">
          <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true"><rect width="32" height="32" rx="8" fill="var(--accent)" /><path d="M7.5 23.5H17.5a3.5 3.5 0 0 0 0-7H13.5a3.5 3.5 0 0 1 0-7H19.5" fill="none" stroke="var(--on-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><circle cx="23.5" cy="9.5" r="2.6" fill="var(--on-accent)" /></svg>
          <span>StudyPath</span>
        </a>
        <button type="button" className="ft-tool site-menu-btn" aria-expanded={menuOpen} aria-controls="site-nav" aria-label={t.siteMenu} onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
        <nav id="site-nav" className={`site-nav${menuOpen ? ' open' : ''}`} aria-label={t.siteMenu}>
          {links.map(l => (
            <a key={l.key} href={l.href} className={active === l.key ? 'active' : ''} aria-current={active === l.key ? 'page' : undefined}>{l.label}</a>
          ))}
        </nav>
        <div className="ft-tools">
          <button type="button" className="ft-tool" onClick={() => dispatch({ type: 'SET_LANGUAGE', language: lang === 'en' ? 'bn' : 'en' })}>
            {lang === 'en' ? 'বাং' : 'EN'}
          </button>
          <button type="button" className="ft-tool" aria-label={isDark ? t.lightMode : t.darkMode} title={isDark ? t.lightMode : t.darkMode}
            onClick={() => dispatch({ type: 'SET_THEME', theme: isDark ? 'light' : 'dark' })}>
            {isDark ? '☀' : '☾'}
          </button>
          {signedIn
            ? <a className="ex-btn sm primary" href="#/">{t.siteMyPortal}</a>
            : <>
                <a className="ex-btn sm site-signin" href="#/login">{t.siteSignIn}</a>
                <a className="ex-btn sm primary" href="#/signup">{t.ftSignUp}</a>
              </>}
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div>
            <strong>StudyPath</strong>
            <p className="pd-muted">{t.siteFooterTag}</p>
          </div>
          <nav aria-label={t.siteMenu} className="site-footer-links">
            {links.map(l => <a key={l.key} href={l.href}>{l.label}</a>)}
          </nav>
          {c && (c.email || c.phone || c.address) && (
            <address className="site-footer-contact">
              {c.phone && <a href={`tel:${c.phone.replace(/[^\d+]/g, '')}`}>{c.phone}</a>}
              {c.email && <a href={`mailto:${c.email}`}>{c.email}</a>}
              {c.address && <span>{c.address}</span>}
            </address>
          )}
        </div>
        <p className="site-footer-copy pd-muted">© {new Date().getFullYear()} StudyPath</p>
      </footer>
    </div>
  )
}
