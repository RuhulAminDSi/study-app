import { useApp, useAppDispatch } from '../context/AppContext'
import { modules } from '../data/modules/index'
import { translations } from '../data/translations'
import { renderContent } from './ContentRenderer'

export default function MainContent() {
  const state = useApp()
  const dispatch = useAppDispatch()
  const t = translations[state.language]

  const module = modules[state.currentModule]
  const lesson = module?.lessons[state.currentLesson]
  const lessonTitle = state.language === 'bn' && lesson?.titleBn ? lesson.titleBn : lesson?.title

  if (!module || !lesson) return null

  const handlePrev = () => {
    if (state.currentLesson > 0) {
      dispatch({ type: 'SET_LESSON', lessonIndex: state.currentLesson - 1 })
    } else if (state.currentModule > 0) {
      dispatch({ type: 'SET_MODULE', moduleIndex: state.currentModule - 1 })
      dispatch({ type: 'SET_LESSON', lessonIndex: modules[state.currentModule - 1].lessons.length - 1 })
    }
  }

  const handleNext = () => {
    if (state.currentLesson < module.lessons.length - 1) {
      dispatch({ type: 'SET_LESSON', lessonIndex: state.currentLesson + 1 })
    } else if (state.currentModule < modules.length - 1) {
      dispatch({ type: 'SET_MODULE', moduleIndex: state.currentModule + 1 })
      dispatch({ type: 'SET_LESSON', lessonIndex: 0 })
    }
  }

  const isFirst = state.currentModule === 0 && state.currentLesson === 0
  const isLast = state.currentModule === modules.length - 1 && state.currentLesson === module.lessons.length - 1

  return (
    <main className="main-content">
      <>
        <div className="lesson-header">
          <div className="lesson-meta">
            <span className={`level-tag ${lesson.level === 'Beginner' ? 'bg-green-500' : lesson.level === 'Intermediate' ? 'bg-amber-500' : 'bg-red-500'} text-black`}>
              {lesson.level === 'Beginner' ? (state.language === 'bn' ? 'শুরু' : 'Beginner') :
               lesson.level === 'Intermediate' ? (state.language === 'bn' ? 'মধ্যম' : 'Intermediate') :
               (state.language === 'bn' ? 'উন্নত' : 'Advanced')}
            </span>
            <span className="lesson-subtitle">{t.lesson} {state.currentLesson + 1} / {module.lessons.length}</span>
          </div>
          <h1 className="lesson-title">{lessonTitle}</h1>
        </div>

        <div className="content-rendered">
          {renderContent(state.language === 'bn' && lesson.contentBn ? lesson.contentBn : lesson.content)}
        </div>

        <div className="takeaways-card">
          <h3 className="takeaways-title">{t.keyTakeaways}</h3>
          <ul className="bullet-list">
            {(state.language === 'bn' && lesson.takeawaysBn ? lesson.takeawaysBn : lesson.takeaways).map((takeaway, i) => (
              <li key={i}>{takeaway}</li>
            ))}
          </ul>
        </div>

        {lesson.code && (
          <div className="code-block">
            <div className="code-header">
              <span className="code-label">{t.keyFormula}</span>
              <button className="code-copy" onClick={() => navigator.clipboard.writeText(lesson.code || '')}>{t.copy}</button>
            </div>
            <pre className="code-content">{lesson.code}</pre>
          </div>
        )}
      </>

      <div className="nav-buttons">
        <button className="nav-btn nav-btn-secondary" onClick={handlePrev} disabled={isFirst}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t.previous}
        </button>

        <button className="nav-btn nav-btn-primary" onClick={handleNext} disabled={isLast}>
          {t.next}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="scroll-buttons">
        <button className="scroll-btn scroll-btn-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} title={t.goToTop}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <button className="scroll-btn scroll-btn-bottom" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} title={t.goToBottom}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </main>
  )
}
