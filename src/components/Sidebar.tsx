import { useMemo } from 'react'
import { useApp, useAppDispatch, type OrderedLesson } from '../context/AppContext'
import { useProgress } from '../context/progress'
import { translations } from '../data/translations'
import type { ExamRoute, ExamTab, PublicView } from '../router'
import type { Translations } from '../types'
import Icon, { type IconName } from './portal/icons'
import { chapterTitle, lessonTitle, noteSetOf, noteSets, num } from './portal/portalData'
import './portal/portal.css'

/** What a lesson is: a regular lesson, a revision note set (notes:apply `add` mode) or a solved-past-questions set. */
type LessonKind = 'lesson' | 'revision' | 'pyq'

interface GroupedMenu {
  kind: LessonKind
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

function kindOf(o: OrderedLesson): LessonKind {
  if (noteSetOf(o, 'en')?.isPyq) return 'pyq'
  if (o.lesson.content_en.includes('data-notes-kind="revision"')) return 'revision'
  return 'lesson'
}

const KIND_ORDER: LessonKind[] = ['lesson', 'revision', 'pyq']

/** Groups each chapter's lessons by section; revision notes and solved past questions get their own groups after the lessons. */
function groupByChapter(orderedLessons: OrderedLesson[]): GroupedChapter[] {
  const map = new Map<string, GroupedChapter>()

  for (const o of orderedLessons) {
    let chapter = map.get(o.chapterId)
    if (!chapter) {
      chapter = { chapterId: o.chapterId, first: o, menus: [], total: 0 }
      map.set(o.chapterId, chapter)
    }
    const kind = kindOf(o)
    let menu = chapter.menus.find(m => m.kind === kind && (kind !== 'lesson' || m.menuLabelEn === o.menuLabelEn))
    if (!menu) {
      menu = { kind, menuLabelEn: o.menuLabelEn, menuLabelBn: o.menuLabelBn, lessons: [] }
      chapter.menus.push(menu)
    }
    menu.lessons.push(o)
    chapter.total++
  }

  const chapters = Array.from(map.values())
  for (const c of chapters) c.menus.sort((a, b) => KIND_ORDER.indexOf(a.kind) - KIND_ORDER.indexOf(b.kind))
  return chapters
}

const KIND_LABEL: Record<Exclude<LessonKind, 'lesson'>, keyof Translations> = {
  revision: 'navGroupRevision',
  pyq: 'navGroupPyq',
}

/** Each exam tab is its own side-menu entry: the question bank, practice sets, timed tests and results. */
const EXAM_LINKS: { tab: ExamTab; label: keyof Translations; icon: IconName }[] = [
  { tab: 'bank', label: 'qbTab', icon: 'book' },
  { tab: 'practice', label: 'exTabPractice', icon: 'target' },
  { tab: 'mock', label: 'exTabMock', icon: 'clock' },
  { tab: 'model', label: 'exTabModel', icon: 'exam' },
  { tab: 'results', label: 'exTabResults', icon: 'chart' },
]

interface PageLink {
  key: string
  active: boolean
  href: string
  label: string
  icon: IconName
  count?: number
}

const lessonHref = (o: OrderedLesson) => `#/chapter/${o.chapterId}/lesson/${o.lesson.id}`

/** The portal's side menu: study pages, practice & exam pages, then the subject → lesson tree. */
export default function Sidebar({ view, exam }: { view: PublicView; exam?: ExamRoute }) {
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
  // A chapter's only section of lessons is just "Lessons"; several keep their own names.
  const menuLabel = (chapter: GroupedChapter, menu: GroupedMenu): string => {
    if (menu.kind !== 'lesson') return t[KIND_LABEL[menu.kind]] as string
    if (chapter.menus.filter(m => m.kind === 'lesson').length === 1) return t.navGroupLessons
    return lang === 'bn' && menu.menuLabelBn ? menu.menuLabelBn : menu.menuLabelEn
  }
  const currentLesson = view === 'lesson' ? state.orderedLessons[state.currentIndex] : undefined
  const pyqCount = sets.filter(s => s.isPyq).length

  const studyPages: PageLink[] = [
    { key: 'dashboard', active: view === 'dashboard', href: '#/', label: t.navDashboard, icon: 'dashboard' },
    { key: 'notes', active: view === 'notes', href: '#/notes', label: t.navNotes, icon: 'notes', count: sets.length - pyqCount },
    { key: 'pyq', active: view === 'pyq', href: '#/pyq', label: t.navPyq, icon: 'pyq', count: pyqCount },
  ]
  // A test's instructions, attempt and result pages belong to no tab, so none is highlighted there.
  const examTab = view === 'exams' && exam?.page === 'home' ? (exam.tab ?? 'bank') : undefined
  const examPages: PageLink[] = EXAM_LINKS.map(x => ({
    key: x.tab,
    active: examTab === x.tab,
    href: x.tab === 'bank' ? '#/exams' : `#/exams?tab=${x.tab}`,
    label: t[x.label] as string,
    icon: x.icon,
  }))
  const groups = [
    { key: 'study', label: t.navStudy, pages: studyPages },
    { key: 'practice', label: t.navPractice, pages: examPages },
  ]

  return (
    <>
      {/* Outside the aside: the open sidebar is transformed, which would pin a fixed child to the sidebar
          itself and lay the overlay over the menu items, swallowing every tap. */}
      {state.sidebarOpen && <div className="sidebar-overlay" onClick={close} />}
      <aside className={`sidebar portal-sidebar ${state.sidebarOpen ? 'open' : ''}`}>
        {groups.map(g => (
          <nav key={g.key} aria-label={g.label} className="ps-group">
            <div className="ps-label">{g.label}</div>
            {g.pages.map(p => (
              <a key={p.key} href={p.href} onClick={close}
                className={`ps-link ${p.active ? 'active' : ''}`}
                aria-current={p.active ? 'page' : undefined}>
                <Icon name={p.icon} />
                <span className="ps-link-text">{p.label}</span>
                {p.count !== undefined && p.count > 0 && <span className="ps-count">{num(p.count, lang)}</span>}
              </a>
            ))}
          </nav>
        ))}

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
                          <div className={`ps-menu-label ps-kind-${menu.kind}`}>{menuLabel(chapter, menu)}</div>
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
