import './QuestionCard.css'

export interface QuestionCardData {
  type: 'mcq' | 'written' | 'programming'
  stem: string
  code: string | null
  options: { text: string; isCorrect: boolean }[]
  explanation: string | null
  modelAnswer: string | null
  meta: string[]
  pastPaper: boolean
}

export interface QuestionCardLabels {
  correctAnswer: string
  explanation: string
  modelAnswer: string
  empty: string
}

const LETTERS = ['A', 'B', 'C', 'D', 'E']

interface BilingualQuestion {
  type: QuestionCardData['type']
  stem_en: string; stem_bn: string | null
  code_snippet: string | null
  options: { text_en: string; text_bn: string | null; is_correct: boolean }[]
  explanation_en: string | null; explanation_bn: string | null
  model_answer_en: string | null; model_answer_bn: string | null
}

/** Picks the requested language, falling back to English when the Bangla text is missing. */
export function toCardData(q: BilingualQuestion, lang: 'en' | 'bn', meta: string[] = [], pastPaper = false): QuestionCardData { // eslint-disable-line react-refresh/only-export-components
  const pick = (en: string | null, bn: string | null) => (lang === 'bn' && bn ? bn : en)
  return {
    type: q.type,
    stem: pick(q.stem_en, q.stem_bn) ?? '',
    code: q.code_snippet,
    options: q.options.map(o => ({ text: pick(o.text_en, o.text_bn) ?? '', isCorrect: o.is_correct })),
    explanation: pick(q.explanation_en, q.explanation_bn),
    modelAnswer: pick(q.model_answer_en, q.model_answer_bn),
    meta,
    pastPaper,
  }
}

/** Read-only question view used by the admin preview (and by practice/review in later phases). */
export default function QuestionCard({ data, labels, revealAnswer }: { data: QuestionCardData; labels: QuestionCardLabels; revealAnswer: boolean }) {
  const correctIndex = data.options.findIndex(o => o.isCorrect)
  return (
    <article className="qcard">
      {data.meta.length > 0 && (
        <div className="qcard-meta">
          {data.meta.map((m, i) => <span key={i} className={`qcard-chip${data.pastPaper && i === 0 ? ' past' : ''}`}>{m}</span>)}
        </div>
      )}
      <p className={`qcard-stem${data.stem ? '' : ' qcard-empty'}`}>{data.stem || labels.empty}</p>
      {data.code && <pre className="qcard-code"><code>{data.code}</code></pre>}
      {data.type === 'mcq' && (
        <ol className="qcard-options">
          {data.options.map((o, i) => (
            <li key={i} className={`qcard-option${revealAnswer && o.isCorrect ? ' correct' : ''}`}>
              <span className="qcard-letter">{LETTERS[i]}</span>
              <span className="qcard-option-text">{o.text}</span>
            </li>
          ))}
        </ol>
      )}
      {revealAnswer && data.type === 'mcq' && correctIndex >= 0 && (
        <div className="qcard-answer">
          <h4>{labels.correctAnswer}: {LETTERS[correctIndex]}</h4>
          {data.explanation && <p>{data.explanation}</p>}
        </div>
      )}
      {revealAnswer && data.type !== 'mcq' && data.modelAnswer && (
        <div className="qcard-answer">
          <h4>{labels.modelAnswer}</h4>
          <pre>{data.modelAnswer}</pre>
          {data.explanation && <><h4>{labels.explanation}</h4><p>{data.explanation}</p></>}
        </div>
      )}
    </article>
  )
}
