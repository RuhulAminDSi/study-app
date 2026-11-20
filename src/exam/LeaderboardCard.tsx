import { useCallback } from 'react'
import type { Language, Translations } from '../types'
import Icon from '../components/portal/icons'
import { examApi, type LeaderboardEntry } from './examApi'
import { duration, fill, mark, num } from './format'
import { useRemote } from './useRemote'

/**
 * Top scores on a timed test (each candidate's first finished attempt), with the reader's own place even when
 * outside the top. Hidden until someone has finished the test.
 */
export default function LeaderboardCard({ testId, t, lang }: { testId: string; t: Translations; lang: Language }) {
  const { data } = useRemote(useCallback(() => examApi.leaderboard(testId), [testId]))
  if (!data || data.total === 0) return null
  const meOutside = data.me && !data.top.some(e => e.isMe)

  const row = (e: LeaderboardEntry) => (
    <tr key={`${e.rank}-${e.name}-${e.isMe}`} className={e.isMe ? 'lb-me' : undefined}>
      <td className="lb-rank">{e.rank <= 3 ? <span className={`lb-medal m${e.rank}`}>{num(e.rank, lang)}</span> : num(e.rank, lang)}</td>
      <td>{e.name}{e.isMe && <span className="lb-you">{t.lbYou}</span>}</td>
      <td className="lb-num">{mark(e.score, lang)}<span className="pd-muted">/{mark(e.maxScore, lang)}</span></td>
      <td className="lb-num pd-muted">{duration(e.seconds, t, lang)}</td>
    </tr>
  )

  return (
    <section className="ex-card lb" aria-labelledby={`lb-${testId}`}>
      <h2 id={`lb-${testId}`}><Icon name="chart" />{t.lbTitle}</h2>
      <p className="pd-fine">{fill(t.lbNote, { n: num(data.total, lang) })}</p>
      <div className="ex-table-wrap">
        <table className="ex-table compact lb-table">
          <thead>
            <tr><th scope="col">#</th><th scope="col">{t.lbName}</th><th scope="col">{t.lbScore}</th><th scope="col">{t.lbTime}</th></tr>
          </thead>
          <tbody>
            {data.top.map(row)}
            {meOutside && data.me && (
              <>
                <tr className="lb-gap" aria-hidden="true"><td colSpan={4}>⋯</td></tr>
                {row(data.me)}
              </>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}
