import { useApp, useAppDispatch } from '../context/AppContext'
import { translations } from '../data/translations'

/** Shown in the main area instead of a lesson while content is loading, missing, or failed to load. */
export default function ContentStatus() {
  const state = useApp()
  const dispatch = useAppDispatch()
  const t = translations[state.language]

  if (state.loading) {
    return (
      <main className="main-content">
        <div className="content-status" role="status" aria-live="polite">
          <span className="content-status-spinner" aria-hidden="true" />
          <p className="content-status-desc">{t.loadingLessons}</p>
        </div>
      </main>
    )
  }

  if (state.loadFailed) {
    return (
      <main className="main-content">
        <div className="content-status" role="alert">
          <h2 className="content-status-title">{t.loadFailedTitle}</h2>
          <p className="content-status-desc">{t.loadFailedDesc}</p>
          <button className="content-status-action" onClick={() => dispatch({ type: 'RETRY_LOAD' })}>
            {t.retry}
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="main-content">
      <div className="content-status">
        <h2 className="content-status-title">{t.noLessonsTitle}</h2>
        <p className="content-status-desc">{t.noLessonsDesc}</p>
      </div>
    </main>
  )
}
