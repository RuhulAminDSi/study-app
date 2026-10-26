import { useCallback, useState } from 'react'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'
import { navigate } from '../router'
import Icon from '../components/portal/icons'
import { examApi } from './examApi'
import { dateTime, DIFFICULTY_LABEL, examError, fill, mark, negativeText, num, pick } from './format'
import { KindBadge, LoadError } from './ExamUi'
import { useRemote } from './useRemote'
import './exam.css'

/** `#/exams/test/<id>`: the rules of a test, its paper layout, and the explicit start. */
export default function ExamInstructions({ id }: { id: string }) {
  const state = useApp()
  const t = translations[state.language]
  const lang = state.language
  const { data: test, error, retry } = useRemote(useCallback(() => examApi.get(id), [id]))
  const [agreed, setAgreed] = useState(false)
  const [starting, setStarting] = useState(false)
  const [startError, setStartError] = useState('')

  async function start() {
    setStarting(true); setStartError('')
    try {
      const { attemptId } = await examApi.start(id)
      navigate(`exams/attempt/${attemptId}`)
    } catch (e) {
      setStartError(examError(t, e))
      setStarting(false)
    }
  }

  const back = <a className="ex-back" href={`#/exams?tab=${test?.kind === 'quiz' || !test ? 'practice' : test.kind}`}><Icon name="back" />{t.exBackToExams}</a>

  if (error) return <main className="main-content portal-main"><div className="pd ex-page">{back}<LoadError text={examError(t, error)} onRetry={retry} t={t} /></div></main>
  if (!test) return <main className="main-content portal-main" aria-busy="true"><div className="pd ex-page"><div className="sp-skel ex-skel-question" /></div></main>

  const limitReached = test.maxAttempts !== null && test.attemptsUsed >= test.maxAttempts
  const upcoming = test.availability === 'upcoming'
  const negatives = test.negativeMarks.filter(n => n > 0)
  const description = pick(lang, test.descriptionEn, test.descriptionBn)

  const rules = [
    fill(t.exRuleTimer, { n: num(test.durationMinutes, lang) }),
    t.exRuleAutoSubmit,
    t.exRuleSaving,
    t.exRuleChange,
    negatives.length ? fill(t.exRuleNegative, { n: negatives.map(n => mark(n, lang)).join(' / ') }) : t.exRuleNoNegative,
    t.exRuleFinal,
    test.resultRelease === 'immediate' ? t.exRuleReleaseNow
      : test.resultRelease === 'after_close' && test.availableUntil ? fill(t.exRuleReleaseLater, { date: dateTime(test.availableUntil, lang) })
      : test.resultRelease === 'never' ? t.exRuleReleaseNever : t.exRuleReleaseNow,
  ]
  if (test.availableUntil) rules.push(fill(t.exRuleWindow, { date: dateTime(test.availableUntil, lang) }))

  return (
    <main className="main-content portal-main">
      <div className="pd ex-page ex-instructions">
        {back}
        <header className="pd-head">
          <p className="pd-eyebrow"><KindBadge kind={test.kind} t={t} /></p>
          <h1>{pick(lang, test.titleEn, test.titleBn)}</h1>
          {description && <p className="pd-sub ex-description">{description}</p>}
        </header>

        <dl className="ex-fact-grid">
          <div><dt>{t.exQuestions}</dt><dd>{num(test.questionCount, lang)}</dd></div>
          <div><dt>{t.exDuration}</dt><dd>{fill(t.exMinutes, { n: num(test.durationMinutes, lang) })}</dd></div>
          <div><dt>{t.exTotalMarks}</dt><dd>{mark(test.totalMarks, lang)}</dd></div>
          <div><dt>{t.exPassMark}</dt><dd>{test.passMark === null ? t.exNone : mark(test.passMark, lang)}</dd></div>
          <div><dt>{t.exNegative}</dt><dd>{negativeText(test.negativeMarks, t, lang)}</dd></div>
          <div><dt>{t.exAttempts}</dt><dd>{test.maxAttempts === null ? fill(t.exAttemptsUnlimited, { used: num(test.attemptsUsed, lang) }) : fill(t.exAttemptsUsed, { used: num(test.attemptsUsed, lang), max: num(test.maxAttempts, lang) })}</dd></div>
          <div><dt>{t.exDifficulty}</dt><dd>{t[DIFFICULTY_LABEL[test.difficulty]]}</dd></div>
          {(test.availableFrom || test.availableUntil) && (
            <div><dt>{t.exWindow}</dt><dd>{[test.availableFrom && fill(t.exFrom, { date: dateTime(test.availableFrom, lang) }), test.availableUntil && fill(t.exUntil, { date: dateTime(test.availableUntil, lang) })].filter(Boolean).join(' · ')}</dd></div>
          )}
        </dl>

        <div className="ex-instr-grid">
          <section className="ex-card ex-rules" aria-labelledby="ex-rules-title">
            <h2 id="ex-rules-title"><Icon name="info" />{t.exInstructions}</h2>
            <ol>{rules.map((r, i) => <li key={i}>{r}</li>)}</ol>
          </section>

          {test.outline.length > 0 && (
            <section className="ex-card" aria-labelledby="ex-outline-title">
              <h2 id="ex-outline-title"><Icon name="layers" />{t.exPaperLayout}</h2>
              <table className="ex-table compact">
                <thead>
                  <tr><th scope="col">{t.exSection}</th><th scope="col">{t.exQuestions}</th><th scope="col">{t.exMarksEach}</th></tr>
                </thead>
                <tbody>
                  {test.outline.map((s, i) => (
                    <tr key={i}>
                      <td>
                        {pick(lang, s.subject.nameEn, s.subject.nameBn)}
                        {s.topic && <span className="ex-cell-sub">{pick(lang, s.topic.nameEn, s.topic.nameBn)}</span>}
                      </td>
                      <td>{num(s.questionCount, lang)}</td>
                      <td>+{mark(s.marksPerQuestion, lang)}{s.negativeMark > 0 && <> / −{mark(s.negativeMark, lang)}</>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}
        </div>

        <section className="ex-start" aria-label={t.exStartExam}>
          {startError && <p className="ex-alert bad" role="alert"><Icon name="alert" /><span>{startError}</span></p>}
          {test.openAttemptId ? (
            <>
              <p className="pd-muted">{t.exResumeNote}</p>
              <a className="ex-btn primary lg" href={`#/exams/attempt/${test.openAttemptId}`}>{t.exContinueExam}<Icon name="arrow" /></a>
            </>
          ) : upcoming ? (
            <p className="ex-alert info"><Icon name="calendar" /><span>{fill(t.exOpensOn, { date: dateTime(test.availableFrom, lang) })}</span></p>
          ) : limitReached ? (
            <p className="ex-alert info"><Icon name="info" /><span>{t.exErrAttemptLimit}</span></p>
          ) : (
            <>
              <label className="ex-agree">
                <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
                <span>{t.exAgree}</span>
              </label>
              <button type="button" className="ex-btn primary lg" disabled={!agreed || starting} onClick={start}>
                {starting ? t.exStarting : t.exStartExam}<Icon name="arrow" />
              </button>
            </>
          )}
          {test.lastAttemptId && <a className="ex-btn" href={`#/exams/result/${test.lastAttemptId}`}>{t.exViewLastResult}</a>}
        </section>
      </div>
    </main>
  )
}
