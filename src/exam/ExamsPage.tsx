import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react'
import { useApp } from '../context/AppContext'
import { useCandidateAuth } from '../candidate/CandidateAuthContext'
import { translations } from '../data/translations'
import type { Language, Translations } from '../types'
import { navigate, type ExamTab } from '../router'
import Icon, { type IconName } from '../components/portal/icons'
import { examApi, type ExamCard, type ExamOverview, type HistoryItem, type TestKind } from './examApi'
import {
  attemptHref, attemptTitle, dateTime, duration, examError, fill, mark, num, pick, STATUS_LABEL,
} from './format'
import { CardSkeleton, EmptyPanel, KindBadge, LoadError } from './ExamUi'
import PracticeTab from './PracticeTab'
import QuestionBankTab from './QuestionBankTab'
import TestCard from './TestCard'
import { useRemote } from './useRemote'
import './exam.css'

const TABS: { key: ExamTab; label: keyof Translations; icon: IconName }[] = [
  { key: 'bank', label: 'qbTab', icon: 'book' },
  { key: 'practice', label: 'exTabPractice', icon: 'target' },
  { key: 'mock', label: 'exTabMock', icon: 'clock' },
  { key: 'model', label: 'exTabModel', icon: 'exam' },
  { key: 'results', label: 'exTabResults', icon: 'chart' },
]

type HistoryKind = HistoryItem['kind']

/** Each section's own heading and the open attempts it offers to resume. */
const SECTION: Record<ExamTab, { title: keyof Translations; intro: keyof Translations; resumes: HistoryKind[] }> = {
  bank: { title: 'qbTab', intro: 'qbIntro', resumes: [] },
  practice: { title: 'exTabPractice', intro: 'exIntroPractice', resumes: ['practice', 'revision', 'quiz'] },
  mock: { title: 'exTabMock', intro: 'exIntroMock', resumes: ['mock'] },
  model: { title: 'exTabModel', intro: 'exIntroModel', resumes: ['model'] },
  results: { title: 'exTabResults', intro: 'exIntroResults', resumes: ['practice', 'revision', 'quiz', 'mock', 'model'] },
}

interface Tile { label: string; value: string; sub?: string; icon: IconName }

/** The stat tiles for one section, so a section never shows another one's numbers. */
function sectionTiles(tab: ExamTab, o: ExamOverview | null, t: Translations, lang: Language): Tile[] {
  const count = (n: number | undefined) => (o && n !== undefined ? num(n, lang) : '–')
  const pct = (n: number | null | undefined) => (n != null ? `${mark(n, lang)}%` : '–')
  const answered: Tile = {
    label: t.exStatAnswered, icon: 'target', value: count(o?.questionsAnswered),
    sub: o?.accuracy != null ? fill(t.exStatAccuracy, { n: num(Math.round(o.accuracy * 100), lang) }) : undefined,
  }
  const due: Tile = { label: t.exRevisionDue, icon: 'refresh', value: count(o?.dueCount) }
  const wrong: Tile = { label: t.exSourceWrong, icon: 'alert', value: count(o?.wrongCount) }

  if (tab === 'bank') return [answered, due, wrong]
  if (tab === 'practice') {
    return [
      { label: t.exStatPracticeSets, icon: 'grid', value: count(o?.available.quiz) },
      answered, due, wrong,
    ]
  }
  if (tab === 'mock' || tab === 'model') {
    const k = o?.byKind[tab]
    return [
      { label: tab === 'mock' ? t.exStatMockAvailable : t.exStatModelAvailable, icon: 'exam', value: count(o?.available[tab]) },
      { label: t.exStatCompleted, icon: 'check', value: count(k?.completed) },
      { label: t.exStatAverage, icon: 'chart', value: pct(k?.averagePercent) },
      { label: t.exStatBestScore, icon: 'flag', value: pct(k?.bestPercent) },
    ]
  }
  return [
    { label: t.exStatCompleted, icon: 'check', value: count(o?.testsCompleted) },
    {
      label: t.exStatAverage, icon: 'chart', value: pct(o?.averagePercent),
      sub: o?.bestPercent != null ? fill(t.exStatBest, { n: mark(o.bestPercent, lang) }) : undefined,
    },
    answered,
  ]
}

/** `#/exams`: the examination dashboard — question bank, practice, mock tests, model tests and the candidate's results. */
export default function ExamsPage({ tab, lesson }: { tab?: ExamTab; lesson?: string }) {
  const state = useApp()
  const { candidate } = useCandidateAuth()
  const t = translations[state.language]
  const lang = state.language
  const [overview, setOverview] = useState<ExamOverview | null>(null)
  const [overviewError, setOverviewError] = useState('')
  const active: ExamTab = tab ?? 'bank'
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    let live = true
    examApi.overview().then(o => { if (live) setOverview(o) }).catch(e => { if (live) setOverviewError(examError(t, e)) })
    return () => { live = false }
  }, [t])

  // On a phone the tab strip scrolls sideways: keep the chosen tab in view.
  useEffect(() => {
    tabRefs.current[TABS.findIndex(x => x.key === active)]?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
  }, [active])

  const selectTab = (key: ExamTab) => navigate(key === 'bank' ? 'exams' : `exams?tab=${key}`, { replace: true })
  const onTabKey = (e: KeyboardEvent, i: number) => {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!step) return
    e.preventDefault()
    const next = (i + step + TABS.length) % TABS.length
    tabRefs.current[next]?.focus()
    selectTab(TABS[next].key)
  }

  const tiles = sectionTiles(active, overview, t, lang)
  const section = SECTION[active]
  // Only the attempts that belong to this section; My results lists every open one.
  const inProgress = (overview?.inProgress ?? []).filter(a => section.resumes.includes(a.kind))

  return (
    <main className="main-content portal-main">
      <div className="pd ex-page">
        <header className="pd-head">
          <p className="pd-eyebrow">{t.navPractice}</p>
          <h1>{t[section.title]}</h1>
          <p className="pd-sub">{t[section.intro]}</p>
        </header>

        {!candidate && (
          <div className="ex-notice" role="note">
            <Icon name="info" />
            <p>{t.exAdminNotice}</p>
          </div>
        )}
        {overviewError && <p className="ex-alert bad" role="alert">{overviewError}</p>}

        <ul className="pd-stats ex-stats">
          {tiles.map((s, i) => (
            <li key={s.label} style={{ '--i': i } as CSSProperties}>
              <div className="pd-stat">
                <span className="pd-stat-icon"><Icon name={s.icon} /></span>
                <span className="pd-stat-text">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                  {s.sub && <span className="ex-stat-sub">{s.sub}</span>}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {inProgress.length > 0 && (
          <section className="ex-resume" aria-labelledby="ex-resume-title">
            <h2 id="ex-resume-title"><Icon name="clock" />{t.exInProgress}</h2>
            <ul>
              {inProgress.map(a => <ResumeRow key={a.id} a={a} t={t} lang={lang} />)}
            </ul>
          </section>
        )}

        <div className="ex-tabs" role="tablist" aria-label={t.exTitle}>
          {TABS.map((x, i) => (
            <button key={x.key} ref={el => { tabRefs.current[i] = el }} type="button" role="tab" id={`ex-tab-${x.key}`}
              aria-selected={active === x.key} aria-controls={`ex-panel-${x.key}`} tabIndex={active === x.key ? 0 : -1}
              className={`ex-tab${active === x.key ? ' active' : ''}`} onClick={() => selectTab(x.key)} onKeyDown={e => onTabKey(e, i)}>
              <Icon name={x.icon} />
              <span>{t[x.label]}</span>
              {overview && (x.key === 'mock' || x.key === 'model') && overview.available[x.key] > 0 && (
                <span className="ps-count">{num(overview.available[x.key], lang)}</span>
              )}
            </button>
          ))}
        </div>

        <section className="ex-panel" role="tabpanel" id={`ex-panel-${active}`} aria-labelledby={`ex-tab-${active}`}>
          {active === 'bank' && <QuestionBankTab />}
          {active === 'practice' && <PracticeTab key={lesson ?? ''} lesson={lesson} overview={overview} />}
          {(active === 'mock' || active === 'model') && <TestList key={active} kind={active} />}
          {active === 'results' && <ResultsTab />}
        </section>
      </div>
    </main>
  )
}

function ResumeRow({ a, t, lang }: { a: HistoryItem; t: Translations; lang: Language }) {
  const title = attemptTitle(a, t, lang)
  const [now] = useState(() => Date.now())
  const left = a.deadlineAt ? Math.max(0, (new Date(a.deadlineAt).getTime() - now) / 1000) : null
  return (
    <li>
      <div>
        <KindBadge kind={a.kind} t={t} />
        <strong>{title}</strong>
        <span className="pd-muted">
          {fill(t.exAnsweredOf, { n: num(a.answeredCount, lang), total: num(a.questionCount, lang) })}
          {left !== null && <> · {fill(t.exTimeLeft, { time: duration(left, t, lang) })}</>}
        </span>
      </div>
      <a className="ex-btn primary" href={attemptHref(a)}>{t.exContinue}<Icon name="arrow" /></a>
    </li>
  )
}

type SortKey = 'newest' | 'title' | 'short' | 'long'
type StatusFilter = 'all' | 'new' | 'progress' | 'done'

/** Mock or model tests: search, filter and sort, then one card per test. */
function TestList({ kind }: { kind: TestKind }) {
  const state = useApp()
  const t = translations[state.language]
  const lang = state.language
  const { data: tests, error, retry } = useRemote(useCallback(() => examApi.list(kind), [kind]))
  const [query, setQuery] = useState('')
  const [subject, setSubject] = useState('')
  const [status, setStatus] = useState<StatusFilter>('all')
  const [sort, setSort] = useState<SortKey>('newest')

  const subjects = useMemo(() => {
    const map = new Map<string, string>()
    for (const x of tests ?? []) for (const s of x.subjects) map.set(s.code, pick(lang, s.nameEn, s.nameBn))
    return [...map].sort((a, b) => a[1].localeCompare(b[1]))
  }, [tests, lang])

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    const list = (tests ?? []).filter(x => {
      if (q && !`${x.titleEn} ${x.titleBn ?? ''} ${x.subjects.map(s => `${s.code} ${s.nameEn} ${s.nameBn ?? ''}`).join(' ')}`.toLowerCase().includes(q)) return false
      if (subject && !x.subjects.some(s => s.code === subject)) return false
      if (status === 'new' && x.attemptsUsed > 0) return false
      if (status === 'progress' && !x.openAttemptId) return false
      if (status === 'done' && !x.lastAttemptId) return false
      return true
    })
    const title = (x: ExamCard) => pick(lang, x.titleEn, x.titleBn)
    if (sort === 'title') list.sort((a, b) => title(a).localeCompare(title(b)))
    if (sort === 'short') list.sort((a, b) => a.durationMinutes - b.durationMinutes)
    if (sort === 'long') list.sort((a, b) => b.durationMinutes - a.durationMinutes)
    return list
  }, [tests, query, subject, status, sort, lang])

  if (error) return <LoadError text={examError(t, error)} onRetry={retry} t={t} />
  if (!tests) return <CardSkeleton />
  if (tests.length === 0) {
    return <EmptyPanel icon={kind === 'mock' ? 'clock' : 'exam'} title={t.exNoTests} text={kind === 'mock' ? t.exNoMockHint : t.exNoModelHint} />
  }

  return (
    <>
      <div className="ex-toolbar">
        <label className="pl-search ex-search">
          <Icon name="search" />
          <input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder={t.exSearch} aria-label={t.exSearch} />
        </label>
        <select className="ex-select" value={subject} onChange={e => setSubject(e.target.value)} aria-label={t.exFilterSubject}>
          <option value="">{t.exAllSubjects}</option>
          {subjects.map(([code, name]) => <option key={code} value={code}>{name}</option>)}
        </select>
        <select className="ex-select" value={status} onChange={e => setStatus(e.target.value as StatusFilter)} aria-label={t.exFilterStatus}>
          <option value="all">{t.exFilterAll}</option>
          <option value="new">{t.exFilterNew}</option>
          <option value="progress">{t.exStatusInProgress}</option>
          <option value="done">{t.exFilterDone}</option>
        </select>
        <select className="ex-select" value={sort} onChange={e => setSort(e.target.value as SortKey)} aria-label={t.exSort}>
          <option value="newest">{t.exSortNewest}</option>
          <option value="title">{t.exSortTitle}</option>
          <option value="short">{t.exSortShort}</option>
          <option value="long">{t.exSortLong}</option>
        </select>
      </div>
      {shown.length === 0
        ? <p className="pd-muted pd-empty">{t.exNoMatch}</p>
        : <ul className="ex-grid">{shown.map((x, i) => <TestCard key={x.id} test={x} t={t} lang={lang} index={i} />)}</ul>}
    </>
  )
}

const PAGE = 15

/** My results: every attempt, newest first, filterable by tests or practice. */
function ResultsTab() {
  const state = useApp()
  const t = translations[state.language]
  const lang = state.language
  const [type, setType] = useState<'all' | 'test' | 'practice'>('all')
  const { data, error, retry, update } = useRemote(useCallback(() => examApi.history({ type, limit: PAGE }), [type]))
  const [loadingMore, setLoadingMore] = useState(false)
  const [moreError, setMoreError] = useState('')
  const items: HistoryItem[] | null = data?.items ?? null
  const total = data?.total ?? 0

  const more = () => {
    if (!items) return
    setLoadingMore(true); setMoreError('')
    examApi.history({ type, limit: PAGE, offset: items.length })
      .then(r => update(d => ({ items: [...d.items, ...r.items], total: r.total })))
      .catch(e => setMoreError(examError(t, e)))
      .finally(() => setLoadingMore(false))
  }

  return (
    <>
      <div className="ex-seg" role="group" aria-label={t.exFilterType}>
        {(['all', 'test', 'practice'] as const).map(k => (
          <button key={k} type="button" aria-pressed={type === k} className={type === k ? 'active' : ''} onClick={() => setType(k)}>
            {k === 'all' ? t.exFilterAll : k === 'test' ? t.exFilterTests : t.exTabPractice}
          </button>
        ))}
      </div>
      {error !== null && <LoadError text={examError(t, error)} onRetry={retry} t={t} />}
      {moreError && <LoadError text={moreError} t={t} />}
      {error === null && !items && <CardSkeleton rows />}
      {items && items.length === 0 && <EmptyPanel icon="chart" title={t.exNoResults} text={t.exNoResultsHint} />}
      {items && items.length > 0 && (
        <div className="ex-table-wrap">
          <table className="ex-table">
            <thead>
              <tr>
                <th scope="col">{t.exColExam}</th>
                <th scope="col">{t.exColDate}</th>
                <th scope="col">{t.exColScore}</th>
                <th scope="col">{t.exColTime}</th>
                <th scope="col">{t.exColStatus}</th>
                <th scope="col"><span className="sr-only">{t.exColOpen}</span></th>
              </tr>
            </thead>
            <tbody>
              {items.map(a => (
                <tr key={a.id}>
                  <td data-label={t.exColExam}>
                    <KindBadge kind={a.kind} t={t} />
                    <span className="ex-row-title">{attemptTitle(a, t, lang)}</span>
                  </td>
                  <td data-label={t.exColDate} className="ex-nowrap">{dateTime(a.startedAt, lang)}</td>
                  <td data-label={t.exColScore}>
                    {a.score === null ? <span className="pd-muted">{fill(t.exAnsweredOf, { n: num(a.answeredCount, lang), total: num(a.questionCount, lang) })}</span> : (
                      <>
                        <strong>{mark(a.score, lang)}</strong>/{mark(a.maxScore ?? 0, lang)}
                        {a.percentage !== null && <span className="pd-muted"> ({mark(a.percentage, lang)}%)</span>}
                        {a.passed !== null && <span className={`ex-pass ${a.passed ? 'yes' : 'no'}`}>{a.passed ? t.exPassed : t.exFailed}</span>}
                      </>
                    )}
                  </td>
                  <td data-label={t.exColTime} className="ex-nowrap">{a.timeTakenSec === null ? '–' : duration(a.timeTakenSec, t, lang)}</td>
                  <td data-label={t.exColStatus}><span className={`ex-status ex-status-${a.status}`}>{t[STATUS_LABEL[a.status]]}</span></td>
                  <td className="ex-row-action">
                    <a className="ex-btn sm" href={attemptHref(a)}>{a.status === 'in_progress' ? t.exContinue : t.exViewResult}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {items.length < total && (
            <button type="button" className="ex-btn ex-more" onClick={more} disabled={loadingMore}>
              {loadingMore ? t.exLoading : fill(t.exShowMore, { n: num(total - items.length, lang) })}
            </button>
          )}
        </div>
      )}
    </>
  )
}
