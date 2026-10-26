import { useEffect, useState } from 'react'
import type { Language } from '../types'
import { translations } from '../data/translations'
import QuestionCard, { toCardData } from '../components/QuestionCard'
import Modal from './Modal'
import { examsApi, type PreviewQuestion, type ReadinessProblem } from './examsApi'
import { errorText } from './adminErrors'
import { fill } from './feedback'
import { DIFFICULTY_KEYS, marks, problemText } from './examLabels'
import { Icon } from './ui'

/** A sample paper with answers, built by the server the way a candidate's paper is built. */
export function ExamPreviewModal({ testId, title, random, unsaved, language, onClose }: {
  testId: string; title: string; random: boolean; unsaved?: boolean; language: Language; onClose: () => void
}) {
  const t = translations[language]
  const [questions, setQuestions] = useState<PreviewQuestion[] | null>(null)
  const [error, setError] = useState('')

  const [draw, setDraw] = useState(0)

  useEffect(() => {
    let live = true
    examsApi.preview(testId)
      .then(r => { if (live) setQuestions(r.questions) })
      .catch(e => { if (live) setError(errorText(t, e)) })
    return () => { live = false }
  }, [testId, t, draw])
  const redraw = () => { setQuestions(null); setError(''); setDraw(n => n + 1) }

  const labels = { correctAnswer: t.axCorrectAnswer, explanation: t.axExplanation, modelAnswer: t.axModelAnswer, empty: '—' }

  return (
    <Modal open onClose={onClose} title={fill(t.axPreviewTitle, { title })} wide>
      <div className="ax-preview">
        <div className="ed-note info">
          <Icon name="eye" size={16} />
          <span>{t.axPreviewNote}{unsaved ? ` ${t.axPreviewSaveFirst}` : ''}</span>
          {random && <button type="button" className="adm-btn sm" onClick={redraw} disabled={!questions && !error}>{t.axRedraw}</button>}
        </div>
        {error && <div className="cm-alert bad" role="alert">{error}</div>}
        {!questions && !error && <div className="admin-loading">{t.adminLoading}</div>}
        {questions && (
          <ol className="ax-preview-list">
            {questions.map(p => {
              const meta = [p.question.subject_code, p.question.topic_name, t[DIFFICULTY_KEYS[String(p.question.difficulty)] ?? 'axMixed']]
                .filter((m): m is string => !!m)
              return (
                <li key={`${p.position}-${p.question.id}`}>
                  <div className="ax-preview-head">
                    <span className="ax-qnum">{p.position}</span>
                    <span className="adm-cell-sub">{fill(t.axPreviewMarks, { marks: marks(p.marks), neg: marks(p.negativeMark) })}</span>
                  </div>
                  <QuestionCard data={toCardData(p.question, language, meta)} labels={labels} revealAnswer />
                </li>
              )
            })}
          </ol>
        )}
      </div>
    </Modal>
  )
}

/** Shown when publishing is refused: what still has to be fixed. */
export function NotReadyModal({ problems, sectionIds, questionIds, language, onClose, onEdit }: {
  problems: ReadinessProblem[]; sectionIds: string[]; questionIds: string[]; language: Language; onClose: () => void; onEdit?: () => void
}) {
  const t = translations[language]
  return (
    <Modal open onClose={onClose} title={t.axNotReadyTitle} size="sm">
      <p className="adm-confirm-body">{t.axNotReadyBody}</p>
      <ul className="ax-problems">
        {problems.map((p, i) => (
          <li key={i}><Icon name="alert" size={15} /><span>{problemText(t, p, sectionIds, questionIds)}</span></li>
        ))}
      </ul>
      <div className="form-actions">
        <button type="button" className="adm-btn" onClick={onClose}>{t.axOk}</button>
        {onEdit && <button type="button" className="adm-btn primary" onClick={onEdit}>{t.axEdit}</button>}
      </div>
    </Modal>
  )
}
