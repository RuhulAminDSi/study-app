import { useRef, useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'
import { recordLessonOpened } from '../context/progress'
import { translations } from '../data/translations'
import { renderContent } from './ContentRenderer'
import { navigateToLesson } from '../router'
import ContentStatus from './ContentStatus'
import ExamKit from './ExamKit'
import Icon from './portal/icons'
import { fetchExamKitIndex } from '../public/publicApi'

type LessonTab = 'note' | 'kit'
const TAB_KEY = 'studyhub_lesson_tab'

/** Lesson slugs that have a published Exam Kit; fetched once per page load. */
let kitIndex: Promise<Set<string>> | null = null
function loadKitIndex(): Promise<Set<string>> {
  kitIndex ??= fetchExamKitIndex()
    .then(list => new Set(list.map(k => k.slug)))
    .catch(() => { kitIndex = null; return new Set<string>() })
  return kitIndex
}

function savedTab(): LessonTab {
  try { return localStorage.getItem(TAB_KEY) === 'kit' ? 'kit' : 'note' } catch { return 'note' }
}

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

  const current = state.orderedLessons[state.currentIndex]
  useEffect(() => {
    if (!state.loading && current) recordLessonOpened(current.chapterId, current.lesson.id)
  }, [state.loading, current])

  // The note marker names the lesson's slug (data-notes="…"); that slug keys its Exam Kit.
  const slug = current?.lesson.content_en.match(/data-notes="([a-z0-9-]+)"/)?.[1] ?? null
  const [kitSlugs, setKitSlugs] = useState<Set<string>>(new Set())
  const [tab, setTab] = useState<LessonTab>(savedTab)
  useEffect(() => {
    let live = true
    loadKitIndex().then(s => { if (live) setKitSlugs(s) })
    return () => { live = false }
  }, [])
  const hasKit = !!slug && kitSlugs.has(slug)
  const showKit = hasKit && tab === 'kit'
  const chooseTab = (next: LessonTab) => {
    setTab(next)
    try { localStorage.setItem(TAB_KEY, next) } catch { /* private window: keep it for this page only */ }
  }

  if (state.loading || state.loadFailed || !current) return <ContentStatus />

  const lesson = current.lesson
  const lessonTitle = state.language === 'bn' && lesson.title_bn ? lesson.title_bn : lesson.title_en
  const lessonContent = state.language === 'bn' && lesson.content_bn ? lesson.content_bn : lesson.content_en
  // Notes lessons (handwritten/typed note viewer) carry everything in the notes; no takeaways card.
  const isNotesLesson = lessonContent.includes('class="hn-viewer"')
  const takeaways = (state.language === 'bn' && lesson.takeaways_bn ? lesson.takeaways_bn : lesson.takeaways_en) || []
  const isFirst = state.currentIndex === 0
  const isLast = state.currentIndex === state.orderedLessons.length - 1
  const prev = isFirst ? undefined : state.orderedLessons[state.currentIndex - 1]
  const next = isLast ? undefined : state.orderedLessons[state.currentIndex + 1]
  const titleOf = (l: typeof lesson) => (state.language === 'bn' && l.title_bn ? l.title_bn : l.title_en)

  const handlePrev = () => {
    if (prev) navigateToLesson(prev.chapterId, prev.lesson.id)
  }

  const handleNext = () => {
    if (next) navigateToLesson(next.chapterId, next.lesson.id)
  }

  return (
    // Keyed on the lesson so its entrance (motion.css) plays again on every lesson change.
    <main key={lesson.id} className="main-content has-reader-bar">
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

        {hasKit && (
          <div className="lesson-tabs" role="tablist" aria-label={lessonTitle}>
            <button type="button" role="tab" aria-selected={!showKit} className={`lesson-tab${!showKit ? ' active' : ''}`} onClick={() => chooseTab('note')}>{t.tabNote}</button>
            <button type="button" role="tab" aria-selected={showKit} className={`lesson-tab${showKit ? ' active' : ''}`} onClick={() => chooseTab('kit')}>{t.tabExamKit}</button>
          </div>
        )}

        {showKit && slug ? (
          <ExamKit key={slug} slug={slug} language={state.language} t={t} />
        ) : (
        <div className="content-rendered" ref={contentRef}>
          {renderContent(lessonContent)}
        </div>
        )}

        {!showKit && !isNotesLesson && takeaways.length > 0 && (
          <div className="takeaways-card">
            <h3 className="takeaways-title">{t.keyTakeaways}</h3>
            <ul className="bullet-list">
              {takeaways.map((takeaway, i) => (
                <li key={i}>{takeaway}</li>
              ))}
            </ul>
          </div>
        )}

        {!showKit && lesson.code_en && (
          <div className="code-block">
            <div className="code-header">
              <span className="code-label">{t.keyFormula}</span>
              <button className="code-copy" onClick={() => navigator.clipboard.writeText(lesson.code_en || '')}>{t.copy}</button>
            </div>
            <pre className="code-content">{lesson.code_en}</pre>
          </div>
        )}
      </>

      {/* Sticky lesson bar: previous / next, pinned to the bottom of the screen. */}
      <nav className="reader-bar" aria-label={t.readerNav}>
        <button type="button" className="reader-btn reader-prev" onClick={handlePrev} disabled={isFirst}>
          <Icon name="chevronLeft" />
          <span className="reader-btn-text">
            <span className="reader-btn-label">{t.previous}</span>
            {prev && <span className="reader-btn-title">{titleOf(prev.lesson)}</span>}
          </span>
        </button>
        <button type="button" className="reader-btn reader-next" onClick={handleNext} disabled={isLast}>
          <span className="reader-btn-text">
            <span className="reader-btn-label">{t.next}</span>
            {next && <span className="reader-btn-title">{titleOf(next.lesson)}</span>}
          </span>
          <Icon name="chevron" />
        </button>
      </nav>

      <div className="scroll-buttons with-reader-bar">
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
