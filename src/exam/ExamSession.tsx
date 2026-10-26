import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'
import type { Language, Translations } from '../types'
import { navigate } from '../router'
import { ApiError } from '../candidate/candidateApi'
import Icon from '../components/portal/icons'
import { examApi, type AttemptPaper, type AttemptQuestion, type PracticeFeedback } from './examApi'
import { attemptTitle, clock, examError, fill, mark, num, pick } from './format'
import { KindBadge, LoadError } from './ExamUi'
import ConfirmDialog from './ConfirmDialog'
import './exam.css'

const LETTERS = ['A', 'B', 'C', 'D', 'E']
const RETRY_MS = 4000
/** Time on a question shorter than this is not worth a request of its own (it rides along with the next answer). */
const MIN_TIME_REPORT_MS = 5000

type SaveState = 'idle' | 'saving' | 'saved' | 'error'
type Body = { optionId?: string | null; flagged?: boolean; timeSpentMs?: number }

/**
 * `#/exams/attempt/<id>`: taking a timed test or a practice session. The server holds the paper, the answers and
 * the deadline, so a reload or another device picks up where the candidate left off. Timed tests save each change
 * as it happens and submit themselves when time runs out; practice answers come back with instant feedback.
 */
export default function ExamSession({ id }: { id: string }) {
  const state = useApp()
  const t = translations[state.language]
  const lang = state.language
  const [paper, setPaper] = useState<AttemptPaper | null>(null)
  const [questions, setQuestions] = useState<AttemptQuestion[]>([])
  const [error, setError] = useState('')
  const [index, setIndex] = useState(0)
  const [saveState, setSaveState] = useState<SaveState>('idle')
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [confirming, setConfirming] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [answerError, setAnswerError] = useState('')
  const [now, setNow] = useState(() => Date.now())
  const [announce, setAnnounce] = useState('')

  const offset = useRef(0) // server clock − device clock
  const pending = useRef(new Map<string, Body>()) // latest unsent change per question
  const inflight = useRef(new Set<string>())
  const enteredAt = useRef(Date.now())
  const finished = useRef(false)
  const announced = useRef(new Set<number>())
  const questionRef = useRef<HTMLHeadingElement>(null)

  const load = useCallback(() => {
    examApi.attempt(id).then(p => {
      if (p.attempt.status !== 'in_progress') {
        navigate(`exams/result/${id}`, { replace: true })
        return
      }
      offset.current = new Date(p.serverNow).getTime() - Date.now()
      setPaper(p)
      setQuestions(p.questions)
      const timed = p.attempt.mode === 'mock'
      // Practice resumes at the first question not answered yet; a test at the question the candidate was on.
      const firstOpen = p.questions.findIndex(q => !q.selectedOptionId)
      setIndex(timed ? Math.min(p.questions.length, Math.max(1, p.attempt.currentPosition)) - 1 : Math.max(0, firstOpen))
    }).catch(e => setError(examError(t, e)))
  }, [id, t])
  useEffect(load, [load])

  const timed = paper?.attempt.mode === 'mock'
  const deadline = paper?.attempt.deadlineAt ? new Date(paper.attempt.deadlineAt).getTime() : null
  const remainingSec = deadline === null ? null : Math.max(0, Math.floor((deadline - (now + offset.current)) / 1000))
  const totalSec = deadline && paper ? (deadline - new Date(paper.attempt.startedAt).getTime()) / 1000 : 0

  // ── Saving ────────────────────────────────────────────────────────────────

  const goToResult = useCallback(() => {
    finished.current = true
    navigate(`exams/result/${id}`, { replace: true })
  }, [id])

  const flush = useCallback(async () => {
    const jobs = [...pending.current.entries()].filter(([qid]) => !inflight.current.has(qid))
    if (!jobs.length) return
    setSaveState('saving')
    await Promise.all(jobs.map(async ([qid, body]) => {
      pending.current.delete(qid)
      inflight.current.add(qid)
      try {
        await examApi.answer(id, qid, body)
      } catch (e) {
        if (e instanceof ApiError && (e.code === 'deadline_passed' || e.code === 'attempt_closed')) { goToResult(); return }
        if (e instanceof ApiError && e.status < 500 && e.status !== 408) return // a rejected change will not succeed on retry
        // Keep the change (merged under anything newer) for the next try.
        pending.current.set(qid, { ...body, ...pending.current.get(qid), timeSpentMs: (body.timeSpentMs ?? 0) + (pending.current.get(qid)?.timeSpentMs ?? 0) })
      } finally {
        inflight.current.delete(qid)
      }
    }))
    setSaveState(pending.current.size ? 'error' : 'saved')
  }, [id, goToResult])

  const queue = useCallback((qid: string, change: Body) => {
    const prev = pending.current.get(qid) ?? {}
    pending.current.set(qid, { ...prev, ...change, timeSpentMs: (prev.timeSpentMs ?? 0) + (change.timeSpentMs ?? 0) })
    void flush()
  }, [flush])

  // Retry failed saves, and save again when the connection comes back.
  useEffect(() => {
    if (!timed) return
    const timer = setInterval(() => { if (pending.current.size) void flush() }, RETRY_MS)
    const online = () => void flush()
    window.addEventListener('online', online)
    return () => { clearInterval(timer); window.removeEventListener('online', online) }
  }, [timed, flush])

  // Unsaved answers: ask before the tab closes.
  useEffect(() => {
    const warn = (e: BeforeUnloadEvent) => {
      if (finished.current || (!pending.current.size && !inflight.current.size)) return
      e.preventDefault()
    }
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [])

  const takeTime = () => {
    const spent = Date.now() - enteredAt.current
    enteredAt.current = Date.now()
    return spent
  }

  // ── Navigation ────────────────────────────────────────────────────────────

  const positionTimer = useRef<ReturnType<typeof setTimeout>>(undefined)
  const go = (next: number) => {
    if (!paper || next < 0 || next >= questions.length || next === index) return
    const q = questions[index]
    const spent = takeTime()
    if (timed && spent >= MIN_TIME_REPORT_MS) queue(q.questionId, { timeSpentMs: spent })
    setIndex(next)
    setAnswerError('')
    setPaletteOpen(false)
    if (timed) {
      clearTimeout(positionTimer.current)
      positionTimer.current = setTimeout(() => { examApi.position(id, next + 1).catch(() => {}) }, 600)
    }
  }
  // Move focus to the new question so keyboard and screen-reader users land on it.
  useEffect(() => { questionRef.current?.focus({ preventScroll: true }) }, [index])

  // ── Answering ─────────────────────────────────────────────────────────────

  const update = (qid: string, change: Partial<AttemptQuestion>) =>
    setQuestions(list => list.map(q => (q.questionId === qid ? { ...q, ...change } : q)))

  async function choose(q: AttemptQuestion, optionId: string) {
    if (timed) {
      update(q.questionId, { selectedOptionId: optionId })
      queue(q.questionId, { optionId, timeSpentMs: takeTime() })
      return
    }
    if (q.selectedOptionId) return
    update(q.questionId, { selectedOptionId: optionId })
    setAnswerError('')
    try {
      const fb = await examApi.answer(id, q.questionId, { optionId, timeSpentMs: takeTime() }) as PracticeFeedback
      update(q.questionId, {
        selectedOptionId: fb.selectedOptionId, isCorrect: fb.isCorrect, correctOptionId: fb.correctOptionId,
        explanationEn: fb.explanationEn, explanationBn: fb.explanationBn, lesson: fb.lesson,
      })
    } catch (e) {
      update(q.questionId, { selectedOptionId: null })
      setAnswerError(examError(t, e))
    }
  }

  const toggleFlag = (q: AttemptQuestion) => {
    update(q.questionId, { flagged: !q.flagged })
    if (timed) queue(q.questionId, { flagged: !q.flagged })
    else examApi.answer(id, q.questionId, { flagged: !q.flagged }).catch(() => {})
  }

  const clear = (q: AttemptQuestion) => {
    update(q.questionId, { selectedOptionId: null })
    queue(q.questionId, { optionId: null })
  }

  // ── Submitting ────────────────────────────────────────────────────────────

  const submit = useCallback(async (auto = false) => {
    if (finished.current) return
    setSubmitting(true); setSubmitError('')
    // Last answers first; the server accepts them for a few seconds past the deadline.
    for (let i = 0; i < 3 && (pending.current.size || inflight.current.size); i++) {
      await flush()
      if (inflight.current.size) await new Promise(r => setTimeout(r, 300))
    }
    try {
      await examApi.submit(id)
      goToResult()
    } catch (e) {
      if (auto && e instanceof ApiError && e.status === 404) return
      setSubmitError(examError(t, e))
      setSubmitting(false)
    }
  }, [flush, goToResult, id, t])

  // Clock: tick every second; announce 5 and 1 minutes left; submit at zero.
  useEffect(() => {
    if (!timed) return
    const timer = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(timer)
  }, [timed])
  useEffect(() => {
    if (remainingSec === null || finished.current) return
    for (const mins of [5, 1]) {
      if (remainingSec <= mins * 60 && remainingSec > 0 && totalSec > mins * 60 * 2 && !announced.current.has(mins)) {
        announced.current.add(mins)
        setAnnounce(fill(mins === 1 ? t.exOneMinuteLeft : t.exMinutesLeft, { n: num(mins, lang) }))
      }
    }
    if (remainingSec === 0 && !submitting) {
      setAnnounce(t.exTimeUp)
      void submit(true)
    }
  }, [remainingSec, submitting, submit, t, lang, totalSec])

  // ── Render ────────────────────────────────────────────────────────────────

  const counts = useMemo(() => ({
    answered: questions.filter(q => q.selectedOptionId).length,
    flagged: questions.filter(q => q.flagged).length,
    correct: questions.filter(q => q.isCorrect === true).length,
  }), [questions])

  if (error) {
    return (
      <main className="main-content portal-main ex-session-main">
        <div className="ex-session"><LoadError text={error} onRetry={() => { setError(''); load() }} t={t} /><a className="ex-btn" href="#/exams">{t.exBackToExams}</a></div>
      </main>
    )
  }
  if (!paper || !questions.length) {
    return (
      <main className="main-content portal-main ex-session-main" aria-busy="true">
        <div className="ex-session"><div className="sp-skel ex-skel-question" /></div>
      </main>
    )
  }

  const q = questions[index]
  const unanswered = questions.length - counts.answered
  const title = attemptTitle({ mode: paper.attempt.mode, settings: paper.attempt.settings, titleEn: paper.attempt.titleEn, titleBn: paper.attempt.titleBn }, t, lang)
  const revealed = !timed && q.correctOptionId !== undefined
  const timerTone = remainingSec === null ? '' : remainingSec <= 60 ? ' urgent' : remainingSec <= Math.min(300, totalSec * 0.1) ? ' warn' : ''
  const kind = paper.attempt.mode === 'mock' ? (paper.attempt.kind ?? 'mock') : paper.attempt.mode

  return (
    <main className="main-content portal-main ex-session-main">
      <div className="ex-session">
        <header className="ex-bar">
          <div className="ex-bar-title">
            <KindBadge kind={kind} t={t} />
            <h1>{title}</h1>
          </div>
          <div className="ex-bar-tools">
            {timed && (
              <span className={`ex-save ex-save-${saveState}`} role="status">
                {saveState === 'saving' ? t.exSaving : saveState === 'error' ? t.exSaveRetry : saveState === 'saved' ? t.exSaved : ''}
              </span>
            )}
            {remainingSec !== null ? (
              <span className={`ex-timer${timerTone}`} aria-label={fill(t.exTimeLeft, { time: clock(remainingSec, lang) })}>
                <Icon name="clock" /><span aria-hidden="true">{clock(remainingSec, lang)}</span>
              </span>
            ) : (
              <span className="ex-progress-pill">{fill(t.exCorrectSoFar, { n: num(counts.correct, lang), total: num(counts.answered, lang) })}</span>
            )}
            <button type="button" className="ex-btn ex-palette-toggle" aria-expanded={paletteOpen} aria-controls="ex-palette"
              aria-label={`${t.exPalette}: ${fill(t.exAnsweredOf, { n: num(counts.answered, lang), total: num(questions.length, lang) })}`}
              onClick={() => setPaletteOpen(o => !o)}>
              <Icon name="grid" /><span aria-hidden="true">{num(counts.answered, lang)}/{num(questions.length, lang)}</span>
            </button>
            <button type="button" className="ex-btn primary" onClick={() => setConfirming(true)} disabled={submitting}>
              {timed ? t.exSubmit : t.exFinish}
            </button>
          </div>
        </header>
        <p className="sr-only" aria-live="assertive">{announce}</p>
        {submitError && <LoadError text={submitError} t={t} />}

        <div className="ex-body">
          <section className="ex-qpanel" aria-label={fill(t.exQuestionOf, { n: num(index + 1, lang), total: num(questions.length, lang) })}>
            <article className="ex-q">
              <div className="ex-q-head">
                <h2 ref={questionRef} tabIndex={-1}>{fill(t.exQuestionOf, { n: num(index + 1, lang), total: num(questions.length, lang) })}</h2>
                <span className="ex-q-marks" title={t.exMarksHint}>
                  +{mark(q.marks, lang)}{q.negativeMark > 0 && <> / −{mark(q.negativeMark, lang)}</>}
                </span>
              </div>
              <p className="ex-q-meta">
                {pick(lang, q.subject.nameEn, q.subject.nameBn)}
                {q.topic && <> · {pick(lang, q.topic.nameEn, q.topic.nameBn)}</>}
                {q.flagged && <span className="ex-flag-tag"><Icon name="flag" />{t.exMarked}</span>}
              </p>
              <p className="ex-q-stem">{pick(lang, q.stemEn, q.stemBn)}</p>
              {q.code && <pre className="ex-q-code"><code>{q.code}</code></pre>}

              <fieldset className="ex-options" disabled={revealed}>
                <legend className="sr-only">{t.exChooseOne}</legend>
                {q.options.map((o, i) => {
                  const chosen = q.selectedOptionId === o.id
                  const tone = revealed ? (o.id === q.correctOptionId ? ' correct' : chosen ? ' wrong' : '') : ''
                  return (
                    <label key={o.id} className={`ex-option${chosen ? ' selected' : ''}${tone}`}>
                      <input type="radio" name={`q-${q.questionId}`} checked={chosen} onChange={() => choose(q, o.id)} />
                      <span className="ex-option-letter" aria-hidden="true">{LETTERS[i]}</span>
                      <span className="ex-option-text">{pick(lang, o.textEn, o.textBn)}</span>
                      {revealed && o.id === q.correctOptionId && <Icon name="check" className="pi ex-option-mark" />}
                      {revealed && chosen && o.id !== q.correctOptionId && <Icon name="close" className="pi ex-option-mark" />}
                    </label>
                  )
                })}
              </fieldset>
              {answerError && <p className="ex-alert bad" role="alert"><Icon name="alert" /><span>{answerError}</span></p>}
              {revealed && <Feedback q={q} t={t} lang={lang} />}
            </article>

            <div className="ex-controls">
              <button type="button" className="ex-btn" onClick={() => go(index - 1)} disabled={index === 0}>
                <Icon name="back" /><span>{t.previous}</span>
              </button>
              <div className="ex-controls-mid">
                <button type="button" className={`ex-btn${q.flagged ? ' flagged' : ''}`} aria-pressed={q.flagged} onClick={() => toggleFlag(q)}>
                  <Icon name="flag" /><span>{q.flagged ? t.exUnmark : t.exMarkReview}</span>
                </button>
                {timed && (
                  <button type="button" className="ex-btn" onClick={() => clear(q)} disabled={!q.selectedOptionId}>
                    <Icon name="eraser" /><span>{t.exClear}</span>
                  </button>
                )}
              </div>
              {index < questions.length - 1 ? (
                <button type="button" className="ex-btn primary" onClick={() => go(index + 1)}>
                  <span>{timed && q.selectedOptionId ? t.exSaveNext : t.next}</span><Icon name="arrow" />
                </button>
              ) : (
                <button type="button" className="ex-btn primary" onClick={() => setConfirming(true)} disabled={submitting}>
                  {timed ? t.exSubmit : t.exFinish}
                </button>
              )}
            </div>
          </section>

          {paletteOpen && <div className="ex-palette-scrim" onClick={() => setPaletteOpen(false)} aria-hidden="true" />}
          <aside id="ex-palette" className={`ex-palette${paletteOpen ? ' open' : ''}`} aria-label={t.exPalette}>
            <div className="ex-palette-head">
              <h2>{t.exPalette}</h2>
              <button type="button" className="ex-icon-btn ex-palette-close" onClick={() => setPaletteOpen(false)} aria-label={t.exClose}>
                <Icon name="close" />
              </button>
            </div>
            <ol className="ex-palette-grid">
              {questions.map((x, i) => {
                const state = !timed && x.isCorrect != null ? (x.isCorrect ? 'correct' : 'wrong') : x.selectedOptionId ? 'answered' : 'open'
                const label = [
                  fill(t.exQuestionN, { n: num(i + 1, lang) }),
                  state === 'correct' ? t.exCorrect : state === 'wrong' ? t.exWrong : state === 'answered' ? t.exAnswered : t.exNotAnswered,
                  x.flagged ? t.exMarked : '',
                ].filter(Boolean).join(', ')
                return (
                  <li key={x.questionId}>
                    <button type="button" className={`ex-pal ex-pal-${state}${x.flagged ? ' flagged' : ''}${i === index ? ' current' : ''}`}
                      aria-label={label} aria-current={i === index ? 'step' : undefined} onClick={() => go(i)}>
                      {num(i + 1, lang)}
                    </button>
                  </li>
                )
              })}
            </ol>
            <ul className="ex-legend">
              {timed ? (
                <>
                  <li><span className="ex-pal ex-pal-answered" aria-hidden="true" />{t.exAnswered} ({num(counts.answered, lang)})</li>
                  <li><span className="ex-pal ex-pal-open" aria-hidden="true" />{t.exNotAnswered} ({num(unanswered, lang)})</li>
                </>
              ) : (
                <>
                  <li><span className="ex-pal ex-pal-correct" aria-hidden="true" />{t.exCorrect} ({num(counts.correct, lang)})</li>
                  <li><span className="ex-pal ex-pal-wrong" aria-hidden="true" />{t.exWrong} ({num(counts.answered - counts.correct, lang)})</li>
                  <li><span className="ex-pal ex-pal-open" aria-hidden="true" />{t.exNotAnswered} ({num(unanswered, lang)})</li>
                </>
              )}
              <li><span className="ex-pal ex-pal-open flagged" aria-hidden="true" />{t.exMarked} ({num(counts.flagged, lang)})</li>
            </ul>
            {timed && <p className="pd-fine">{t.exAutoSaveNote}</p>}
          </aside>
        </div>
      </div>

      <ConfirmDialog
        open={confirming}
        title={timed ? t.exConfirmSubmitTitle : t.exConfirmFinishTitle}
        confirmLabel={submitting ? t.exSubmitting : timed ? t.exSubmitFinal : t.exFinish}
        cancelLabel={t.exKeepGoing}
        busy={submitting}
        onCancel={() => setConfirming(false)}
        onConfirm={async () => { await submit(); setConfirming(false) }}>
        <dl className="ex-confirm-stats">
          <div><dt>{t.exAnswered}</dt><dd>{num(counts.answered, lang)}</dd></div>
          <div><dt>{t.exNotAnswered}</dt><dd>{num(unanswered, lang)}</dd></div>
          <div><dt>{t.exMarked}</dt><dd>{num(counts.flagged, lang)}</dd></div>
          {remainingSec !== null && <div><dt>{t.exTimeLeftLabel}</dt><dd>{clock(remainingSec, lang)}</dd></div>}
        </dl>
        <p>{timed ? t.exConfirmSubmitBody : t.exConfirmFinishBody}</p>
        {unanswered > 0 && <p className="ex-warn-text">{fill(t.exUnansweredWarn, { n: num(unanswered, lang) })}</p>}
      </ConfirmDialog>
    </main>
  )
}

/** Practice: right or wrong, the explanation, and the lesson that teaches it. */
function Feedback({ q, t, lang }: { q: AttemptQuestion; t: Translations; lang: Language }) {
  const explanation = pick(lang, q.explanationEn, q.explanationBn)
  const correctIndex = q.options.findIndex(o => o.id === q.correctOptionId)
  return (
    <div className={`ex-feedback ${q.isCorrect ? 'good' : 'bad'}`} role="status">
      <p className="ex-feedback-head">
        <Icon name={q.isCorrect ? 'check' : 'close'} />
        <strong>{q.isCorrect ? t.exFeedbackRight : t.exFeedbackWrong}</strong>
        {!q.isCorrect && correctIndex >= 0 && <span>{fill(t.exCorrectAnswerIs, { letter: LETTERS[correctIndex] })}</span>}
      </p>
      {explanation && <p className="ex-feedback-text">{explanation}</p>}
      {q.lesson && (
        <a className="ex-link" href={`#/chapter/${q.lesson.chapterId}/lesson/${q.lesson.lessonId}`}>
          <Icon name="book" />{t.exReadLesson}
        </a>
      )}
    </div>
  )
}
