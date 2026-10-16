import { useMemo } from 'react'
import { useApp, useAppDispatch, type OrderedLesson } from '../context/AppContext'
import { useProgress } from '../context/progress'
import { translations } from '../data/translations'
import type { PublicView } from '../router'
import Icon from './portal/icons'
import { chapterTitle, lessonTitle, noteSets, num } from './portal/portalData'
import './portal/portal.css'

interface GroupedMenu {
  menuLabelEn: string
  menuLabelBn: string | null
  lessons: OrderedLesson[]
}

interface GroupedChapter {
  chapterId: string
  first: OrderedLesson
  menus: GroupedMenu[]
  total: number
}

function groupByChapter(orderedLessons: OrderedLesson[]): GroupedChapter[] {
  const map = new Map<string, GroupedChapter>()

  for (const o of orderedLessons) {
    let chapter = map.get(o.chapterId)
    if (!chapter) {
      chapter = { chapterId: o.chapterId, first: o, menus: [], total: 0 }
      map.set(o.chapterId, chapter)
    }
    let menu = chapter.menus.find(m => m.menuLabelEn === o.menuLabelEn)
    if (!menu) {
      menu = { menuLabelEn: o.menuLabelEn, menuLabelBn: o.menuLabelBn, lessons: [] }
      chapter.menus.push(menu)
    }
    menu.lessons.push(o)
    chapter.total++
  }

  return Array.from(map.values())
}

const lessonHref = (o: OrderedLesson) => `#/chapter/${o.chapterId}/lesson/${o.lesson.id}`

/** The portal's side menu: page links (dashboard, notes, past questions), then the subject → lesson tree. */
export default function Sidebar({ view }: { view: PublicView }) {
  const state = useApp()
  const dispatch = useAppDispatch()
  const progress = useProgress()
  const t = translations[state.language]
  const lang = state.language

  const grouped = useMemo(() => groupByChapter(state.orderedLessons), [state.orderedLessons])
  const sets = useMemo(() => noteSets(state.orderedLessons, lang), [state.orderedLessons, lang])
  const numberOf = useMemo(() => new Map(state.chapters.map(c => [c.id, c.chapter_number])), [state.chapters])
  const opened = useMemo(() => new Set(progress.opened), [progress.opened])

  if (state.loading) return <aside className="sidebar portal-sidebar" />

  const close = () => dispatch({ type: 'CLOSE_SIDEBAR' })
  const currentLesson = view === 'lesson' ? state.orderedLessons[state.currentIndex] : undefined
  const pyqCount = sets.filter(s => s.isPyq).length

  const pages: { view: PublicView; href: string; label: string; icon: 'dashboard' | 'notes' | 'pyq'; count?: number }[] = [
    { view: 'dashboard', href: '#/', label: t.navDashboard, icon: 'dashboard' },
    { view: 'notes', href: '#/notes', label: t.navNotes, icon: 'notes', count: sets.length - pyqCount },
    { view: 'pyq', href: '#/pyq', label: t.navPyq, icon: 'pyq', count: pyqCount },
  ]

  return (
    <>
      {/* Outside the aside: the open sidebar is transformed, which would pin a fixed child to the sidebar
          itself and lay the overlay over the menu items, swallowing every tap. */}
      {state.sidebarOpen && <div className="sidebar-overlay" onClick={close} />}
      <aside className={`sidebar portal-sidebar ${state.sidebarOpen ? 'open' : ''}`}>
        <nav aria-label={t.navMenu}>
          <div className="ps-label">{t.navMenu}</div>
          {pages.map(p => (
            <a key={p.view} href={p.href} onClick={close}
              className={`ps-link ${view === p.view ? 'active' : ''}`}
              aria-current={view === p.view ? 'page' : undefined}>
              <Icon name={p.icon} />
              <span className="ps-link-text">{p.label}</span>
              {p.count !== undefined && p.count > 0 && <span className="ps-count">{num(p.count, lang)}</span>}
            </a>
          ))}
        </nav>

        <nav aria-label={t.navSubjects} className="ps-subjects">
          <div className="ps-label">{t.navSubjects}</div>
          {grouped.map((chapter) => {
            const isActive = currentLesson?.chapterId === chapter.chapterId
            const isExpanded = state.expandedChapterId === chapter.chapterId
            const done = chapter.menus.reduce((n, m) => n + m.lessons.filter(o => opened.has(o.lesson.id)).length, 0)
            const panelId = `ps-panel-${chapter.chapterId}`

            return (
              <div key={chapter.chapterId} className="ps-chapter-wrap">
                <button type="button"
                  className={`ps-chapter ${isActive ? 'active' : ''}`}
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  onClick={() => dispatch({ type: 'TOGGLE_CHAPTER', chapterId: chapter.chapterId })}>
                  <span className="ps-num">{num(numberOf.get(chapter.chapterId) ?? 0, lang)}</span>
                  <span className="ps-chapter-text">{chapterTitle(chapter.first, lang)}</span>
                  {done > 0 && <span className="ps-done" title={`${done}/${chapter.total}`}>{num(done, lang)}/{num(chapter.total, lang)}</span>}
                  <Icon name="chevron" className={`pi ps-chevron ${isExpanded ? 'open' : ''}`} />
                </button>
                {isExpanded && (
                  <div className="ps-lessons" id={panelId}>
                    {chapter.menus.map((menu, mi) => (
                      <div key={mi}>
                        {chapter.menus.length > 1 && (
                          <div className="ps-menu-label">{lang === 'bn' && menu.menuLabelBn ? menu.menuLabelBn : menu.menuLabelEn}</div>
                        )}
                        {menu.lessons.map((o) => {
                          const active = currentLesson?.lesson.id === o.lesson.id
                          return (
                            <a key={o.lesson.id} href={lessonHref(o)} onClick={close}
                              className={`ps-lesson ${active ? 'active' : ''}`}
                              aria-current={active ? 'page' : undefined}>
                              <span className={`ps-dot ${opened.has(o.lesson.id) ? 'seen' : ''}`} aria-hidden="true" />
                              <span>{lessonTitle(o, lang)}</span>
                            </a>
                          )
                        })}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Pinned to the bottom of the side menu, so it stays in reach however long the subject list is. */}
        <div className="ps-home-wrap">
          <a className="ps-home" href="/">
            <Icon name="home" />
            <span>{t.readerHome}</span>
          </a>
        </div>
      </aside>
    </>
  )
}
