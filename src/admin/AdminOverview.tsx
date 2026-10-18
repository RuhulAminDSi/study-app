import { useEffect, useMemo, useState } from 'react'
import type { Language } from '../types'
import { translations } from '../data/translations'
import { api, type ApiChapter, type ApiLesson, type ApiSideMenu } from './api'
import { candidatesApi, type CandidateStats } from './candidatesApi'
import { errorText } from './adminErrors'
import { lessonKind } from './lessonKind'
import { EmptyState, Icon, SkeletonRows, StatusPill, type IconName } from './ui'
import { fill, useFeedback } from './feedback'

type Target = 'chapters' | 'lessons' | 'candidates'

interface Kpi { label: string; value: number; icon: IconName; published?: number; sub?: string; target?: Target }

const pct = (part: number, whole: number) => (whole ? Math.round((part / whole) * 100) : 0)

/** Admin → Dashboard: content and account totals, per-chapter publishing progress and lessons still in draft. */
export default function AdminOverview({ language, userName, showCandidates, go }: {
  language: Language; userName: string; showCandidates: boolean; go: (view: Target) => void
}) {
  const t = translations[language]
  const { toast } = useFeedback()
  const [data, setData] = useState<{ chapters: ApiChapter[]; menus: ApiSideMenu[]; lessons: ApiLesson[]; candidates: CandidateStats | null } | null>(null)

  useEffect(() => {
    Promise.all([api.chapters.list(), api.menus.list(), api.lessons.list(), showCandidates ? candidatesApi.stats() : Promise.resolve(null)])
      .then(([chapters, menus, lessons, candidates]) => setData({ chapters, menus, lessons, candidates }))
      .catch(e => { toast(errorText(t, e), 'error'); setData({ chapters: [], menus: [], lessons: [], candidates: null }) })
  }, [showCandidates, t, toast])

  const derived = useMemo(() => {
    if (!data) return null
    const chapterOfMenu = new Map(data.menus.map(m => [m.id, m.chapter_id]))
    const byChapter = new Map<string, ApiLesson[]>()
    for (const l of data.lessons) {
      const ch = chapterOfMenu.get(l.side_menu_id)
      if (ch) byChapter.set(ch, [...(byChapter.get(ch) ?? []), l])
    }
    const chapterTitle = new Map(data.chapters.map(c => [c.id, (language === 'bn' && c.title_bn) || c.title_en]))
    const kinds = data.lessons.map(l => ({ l, kind: lessonKind(l) }))
    const ofKind = (k: string) => kinds.filter(x => x.kind === k).map(x => x.l)
    const drafts = data.lessons
      .filter(l => !l.is_published)
      .map(l => ({ l, chapter: chapterTitle.get(chapterOfMenu.get(l.side_menu_id) ?? '') ?? '—' }))
    return { byChapter, notes: ofKind('note'), pyqs: ofKind('pyq'), drafts }
  }, [data, language])

  if (!data || !derived) return <SkeletonRows rows={8} />

  const published = (list: { is_published: boolean }[]) => list.filter(x => x.is_published).length
  const kpis: Kpi[] = [
    { label: t.adminTotalChapters, value: data.chapters.length, published: published(data.chapters), icon: 'chapters', target: 'chapters' },
    { label: t.adminTotalLessons, value: data.lessons.length, published: published(data.lessons), icon: 'lessons', target: 'lessons' },
    { label: t.dashStatNotes, value: derived.notes.length, published: published(derived.notes), icon: 'notes', target: 'lessons' },
    { label: t.dashStatPyq, value: derived.pyqs.length, published: published(derived.pyqs), icon: 'pyq', target: 'lessons' },
    ...(data.candidates
      ? [{ label: t.candTotal, value: data.candidates.total, sub: `+${data.candidates.newLast7Days} ${t.candNew7}`, icon: 'candidates' as const, target: 'candidates' as const }]
      : []),
  ]
  const chaptersSorted = [...data.chapters].sort((a, b) => a.chapter_number - b.chapter_number)

  return (
    <div className="adm-overview">
      <div className="adm-greeting">
        <h1>{fill(t.adminWelcome, { name: userName })}</h1>
      </div>

      <div className="adm-kpis">
        {kpis.map(k => {
          const p = k.published !== undefined ? pct(k.published, k.value) : null
          return (
            <button key={k.label} type="button" className="adm-kpi" onClick={() => k.target && go(k.target)}>
              <div className="adm-kpi-head">
                <span className="adm-kpi-label">{k.label}</span>
                <span className="adm-kpi-icon"><Icon name={k.icon} size={18} /></span>
              </div>
              <div className="adm-kpi-value">{k.value.toLocaleString(language === 'bn' ? 'bn-BD' : 'en-US')}</div>
              {p !== null ? (
                <>
                  <div className="adm-progress" aria-hidden="true"><span style={{ width: `${p}%` }} /></div>
                  <div className="adm-kpi-sub">{fill(t.adminPublishedPct, { p })}</div>
                </>
              ) : (
                <div className="adm-kpi-sub">{k.sub}</div>
              )}
            </button>
          )
        })}
      </div>

      <div className="adm-overview-grid">
        <section className="adm-card">
          <header className="adm-card-head">
            <h2>{t.adminContentByChapter}</h2>
            <button type="button" className="adm-link" onClick={() => go('chapters')}>{t.adminViewAll}<Icon name="arrowRight" size={14} /></button>
          </header>
          {chaptersSorted.length === 0 ? <EmptyState text={t.adminEmpty} /> : (
            <ul className="adm-chapter-list">
              {chaptersSorted.map(c => {
                const ls = derived.byChapter.get(c.id) ?? []
                const p = pct(published(ls), ls.length)
                return (
                  <li key={c.id}>
                    <span className="adm-num-badge">{c.chapter_number}</span>
                    <div className="adm-chapter-main">
                      <span className="adm-chapter-title">{(language === 'bn' && c.title_bn) || c.title_en}</span>
                      <div className="adm-chapter-meta">
                        <div className="adm-progress sm" aria-hidden="true"><span style={{ width: `${p}%` }} /></div>
                        <span>{published(ls)}/{ls.length} {t.lessons.toLowerCase()}</span>
                      </div>
                    </div>
                    <StatusPill published={c.is_published} t={t} />
                  </li>
                )
              })}
            </ul>
          )}
        </section>

        <div className="adm-side-stack">
          <section className="adm-card">
            <header className="adm-card-head">
              <h2>{t.adminDraftLessons} <span className="adm-count">{derived.drafts.length}</span></h2>
              {derived.drafts.length > 0 && (
                <button type="button" className="adm-link" onClick={() => go('lessons')}>{t.adminViewAll}<Icon name="arrowRight" size={14} /></button>
              )}
            </header>
            {derived.drafts.length === 0 ? <EmptyState icon="check" text={t.adminAllPublished} /> : (
              <ul className="adm-draft-list">
                {derived.drafts.slice(0, 7).map(({ l, chapter }) => (
                  <li key={l.id}>
                    <span className="adm-draft-title">{(language === 'bn' && l.title_bn) || l.title_en}</span>
                    <span className="adm-draft-sub">{chapter}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {data.candidates && (
            <section className="adm-card">
              <header className="adm-card-head">
                <h2>{t.adminCandidates}</h2>
                <button type="button" className="adm-link" onClick={() => go('candidates')}>{t.adminViewAll}<Icon name="arrowRight" size={14} /></button>
              </header>
              <dl className="adm-mini-stats">
                <div><dt>{t.candActive}</dt><dd className="tone-good">{data.candidates.active}</dd></div>
                <div><dt>{t.candInactive}</dt><dd className="tone-bad">{data.candidates.inactive}</dd></div>
                <div><dt>{t.candNew7}</dt><dd className="tone-warn">{data.candidates.newLast7Days}</dd></div>
                <div><dt>{t.candSignedIn7}</dt><dd>{data.candidates.activeLast7Days}</dd></div>
              </dl>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
