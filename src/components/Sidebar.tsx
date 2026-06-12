import { useApp, useAppDispatch, type OrderedLesson } from '../context/AppContext'
import { navigateToLesson } from '../router'

interface GroupedMenu {
  menuLabelEn: string
  menuLabelBn: string | null
  lessons: OrderedLesson[]
}

interface GroupedChapter {
  chapterId: string
  titleEn: string
  titleBn: string | null
  menus: GroupedMenu[]
}

function groupByChapter(orderedLessons: OrderedLesson[]): GroupedChapter[] {
  const map = new Map<string, GroupedChapter>()

  for (const o of orderedLessons) {
    if (!map.has(o.chapterId)) {
      map.set(o.chapterId, {
        chapterId: o.chapterId,
        titleEn: o.chapterTitleEn,
        titleBn: o.chapterTitleBn,
        menus: [],
      })
    }
    const chapter = map.get(o.chapterId)!
    const menuKey = o.menuLabelEn
    let menu = chapter.menus.find(m => m.menuLabelEn === menuKey)
    if (!menu) {
      menu = { menuLabelEn: o.menuLabelEn, menuLabelBn: o.menuLabelBn, lessons: [] }
      chapter.menus.push(menu)
    }
    menu.lessons.push(o)
  }

  return Array.from(map.values())
}

export default function Sidebar() {
  const state = useApp()
  const dispatch = useAppDispatch()

  if (state.loading) return <aside className="sidebar" />

  const grouped = groupByChapter(state.orderedLessons)

  return (
    <aside className={`sidebar ${state.sidebarOpen ? 'open' : ''}`}>
      {state.sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })} />
      )}
      <div className="sidebar-section">
        {grouped.map((chapter) => {
          const currentLesson = state.orderedLessons[state.currentIndex]
          const isChapterActive = currentLesson?.chapterId === chapter.chapterId
          const isExpanded = state.expandedChapterId === chapter.chapterId

          return (
            <div key={chapter.chapterId} className="sidebar-module">
              <div
                className={`sidebar-item ${isChapterActive ? 'active' : ''}`}
                onClick={() => dispatch({ type: 'TOGGLE_CHAPTER', chapterId: chapter.chapterId })}
              >
                <span>{state.language === 'bn' && chapter.titleBn ? chapter.titleBn : chapter.titleEn}</span>
                {isExpanded && (
                  <button className="sidebar-expand-btn">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
              {isExpanded && chapter.menus.map((menu, mi) => (
                <div key={mi} className="sidebar-submenu">
                  {chapter.menus.length > 1 && (
                    <div className="sidebar-submenu-label">
                      {state.language === 'bn' && menu.menuLabelBn ? menu.menuLabelBn : menu.menuLabelEn}
                    </div>
                  )}
                  {menu.lessons.map((o) => {
                    const isActive = currentLesson?.lesson.id === o.lesson.id
                    const title = state.language === 'bn' && o.lesson.title_bn ? o.lesson.title_bn : o.lesson.title_en
                    return (
                      <div
                        key={o.lesson.id}
                        className={`sidebar-subitem ${isActive ? 'active' : ''}`}
                        onClick={() => {
                          navigateToLesson(o.chapterId, o.lesson.id)
                          dispatch({ type: 'TOGGLE_SIDEBAR' })
                        }}
                      >
                        <span>{title}</span>
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </aside>
  )
}
