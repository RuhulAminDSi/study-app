import { useRef, useEffect } from 'react'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'
import { renderContent } from './ContentRenderer'
import { navigateToLesson } from '../router'

export default function MainContent() {
  const state = useApp()
  const t = translations[state.language]
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    el.querySelectorAll<HTMLElement>('pre').forEach(pre => {
      const code = pre.querySelector('code')
      if (!code) return
      const match = Array.from(code.classList).find(c => c.startsWith('language-'))
      if (match && !pre.hasAttribute('data-lang')) {
        pre.setAttribute('data-lang', match.replace('language-', ''))
      }
      if (!pre.querySelector('.pub-copy-btn')) {
        const btn = document.createElement('button')
        btn.className = 'pub-copy-btn'
        btn.textContent = 'Copy'
        btn.addEventListener('click', e => {
          e.stopPropagation()
          navigator.clipboard.writeText(code.textContent || '')
          btn.textContent = 'Copied!'
          btn.classList.add('copied')
          setTimeout(() => {
            btn.textContent = 'Copy'
            btn.classList.remove('copied')
          }, 2000)
        })
        pre.appendChild(btn)
      }
    })
  })

  if (state.loading || state.orderedLessons.length === 0) return null

  const current = state.orderedLessons[state.currentIndex]
  if (!current) return null

  const lesson = current.lesson
  const lessonTitle = state.language === 'bn' && lesson.title_bn ? lesson.title_bn : lesson.title_en
  const isFirst = state.currentIndex === 0
  const isLast = state.currentIndex === state.orderedLessons.length - 1

  const handlePrev = () => {
    if (state.currentIndex > 0) {
      const prev = state.orderedLessons[state.currentIndex - 1]
      if (prev) navigateToLesson(prev.chapterId, prev.lesson.id)
    }
  }

  const handleNext = () => {
    if (state.currentIndex < state.orderedLessons.length - 1) {
      const next = state.orderedLessons[state.currentIndex + 1]
      if (next) navigateToLesson(next.chapterId, next.lesson.id)
    }
  }

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
            <span className="lesson-subtitle">{t.lesson} {lesson.lesson_number} / {state.orderedLessons.length}</span>
          </div>
          <h1 className="lesson-title">{lessonTitle}</h1>
        </div>

        <div className="content-rendered" ref={contentRef}>
          {renderContent(state.language === 'bn' && lesson.content_bn ? lesson.content_bn : lesson.content_en)}
        </div>

        <div className="takeaways-card">
          <h3 className="takeaways-title">{t.keyTakeaways}</h3>
          <ul className="bullet-list">
            {(state.language === 'bn' && lesson.takeaways_bn ? lesson.takeaways_bn : lesson.takeaways_en || []).map((takeaway, i) => (
              <li key={i}>{takeaway}</li>
            ))}
          </ul>
        </div>

        {lesson.code_en && (
          <div className="code-block">
            <div className="code-header">
              <span className="code-label">{t.keyFormula}</span>
              <button className="code-copy" onClick={() => navigator.clipboard.writeText(lesson.code_en || '')}>{t.copy}</button>
            </div>
            <pre className="code-content">{lesson.code_en}</pre>
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
