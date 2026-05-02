import type { Module } from '../types'

interface SidebarProps {
  modules: Module[]
  currentModule: number
  currentLesson: number
  expandedModule: number | null
  sidebarOpen: boolean
  language: 'en' | 'bn'
  onModuleSelect: (idx: number) => void
  onLessonSelect: (modIdx: number, lesIdx: number) => void
  onExpandedToggle: (idx: number) => void
  onSidebarClose: () => void
}

export function Sidebar({
  modules,
  currentModule,
  currentLesson,
  expandedModule,
  sidebarOpen,
  language,
  onModuleSelect,
  onLessonSelect,
  onExpandedToggle,
  onSidebarClose,
}: SidebarProps) {
  return (
    <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-section">
        {modules.map((m, idx) => (
          <div key={idx} className="sidebar-module">
            <div
              onClick={() => { 
                onModuleSelect(idx); 
                onSidebarClose(); 
              }}
              className={`sidebar-item ${currentModule === idx ? 'active' : ''}`}
            >
              <span>{language === 'bn' && m.titleBn ? m.titleBn : m.title}</span>
              <button 
                className="sidebar-expand-btn"
                onClick={(e) => { e.stopPropagation(); onExpandedToggle(idx); }}
              >
                <svg className={`w-4 h-4 transform ${expandedModule === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {expandedModule === idx && (
              <div className="sidebar-submenu">
                {m.lessons.map((l, lIdx) => (
                  <div
                    key={lIdx}
                    className={`sidebar-subitem ${currentModule === idx && currentLesson === lIdx ? 'active' : ''}`}
                    onClick={() => { 
                      onModuleSelect(idx); 
                      onLessonSelect(idx, lIdx);
                      onExpandedToggle(idx);
                      onSidebarClose(); 
                    }}
                  >
                    <span>{language === 'bn' && l.titleBn ? l.titleBn : l.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  )
}
