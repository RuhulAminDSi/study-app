import { useApp, useAppDispatch } from '../context/AppContext'
import { modules } from '../data/modules/index'
import { navigateToLesson } from '../router'

export default function Sidebar() {
  const state = useApp()
  const dispatch = useAppDispatch()

  return (
    <aside className={`sidebar ${state.sidebarOpen ? 'open' : ''}`}>
      {state.sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })} />
      )}
      <div className="sidebar-section">
        {modules.map((m, moduleIndex) => (
          <div key={moduleIndex} className="sidebar-module">
            <div
              className={`sidebar-item ${state.currentModule === moduleIndex ? 'active' : ''}`}
              onClick={() => {
                navigateToLesson(moduleIndex, 0)
                dispatch({ type: 'TOGGLE_MODULE', moduleIndex })
              }}
            >
              <span>{state.language === 'bn' && m.titleBn ? m.titleBn : m.title}</span>
              {state.expandedModules === moduleIndex && (
                <button className="sidebar-expand-btn">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}
            </div>
            {state.expandedModules === moduleIndex && (
              <div className="sidebar-submenu">
                {m.lessons.map((l, lessonIndex) => (
                  <div
                    key={lessonIndex}
                    className={`sidebar-subitem ${state.currentModule === moduleIndex && state.currentLesson === lessonIndex ? 'active' : ''}`}
                    onClick={() => {
                      navigateToLesson(moduleIndex, lessonIndex)
                      dispatch({ type: 'TOGGLE_SIDEBAR' })
                    }}
                  >
                    <span>{state.language === 'bn' && l.titleBn ? l.titleBn : l.title}</span>
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
