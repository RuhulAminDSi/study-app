import { useEffect, useMemo, useState } from 'react'
import { useApp } from '../../context/AppContext'
import { translations } from '../../data/translations'
import { resourcesApi, type ResourceCard as PublicResource } from '../../public/siteApi'
import { navigate, type ResourceTab } from '../../router'
import type { Language, Translations } from '../../types'
import Icon from './icons'
import { fill, num } from './portalData'
import ResourcePreview, { type PreviewFile } from './ResourcePreview'
import './resources.css'

const TABS: { key: ResourceTab; label: keyof Translations; intro: keyof Translations }[] = [
  { key: 'circular', label: 'rsCatCircular', intro: 'rsIntroCircular' },
  { key: 'notice', label: 'rsCatNotice', intro: 'rsIntroNotice' },
  { key: 'suggestion', label: 'rsCatSuggestion', intro: 'rsIntroSuggestion' },
  { key: 'question', label: 'rsCatQuestion', intro: 'rsIntroQuestion' },
  { key: 'other', label: 'rsCatOther', intro: 'rsIntroOther' },
]

/** Circulars by application window: open now (default), opening later, closed. */
type Status = 'active' | 'upcoming' | 'expired' | 'all'
const STATUSES: { key: Status; label: keyof Translations }[] = [
  { key: 'active', label: 'rsStatusActive' },
  { key: 'upcoming', label: 'rsStatusUpcoming' },
  { key: 'expired', label: 'rsStatusExpired' },
  { key: 'all', label: 'rsAll' },
]
/** Other resources by what they carry. */
type Kind = 'all' | 'pdf' | 'image' | 'link'
const KINDS: { key: Kind; label: keyof Translations }[] = [
  { key: 'all', label: 'rsAll' },
  { key: 'pdf', label: 'rsKindPdf' },
  { key: 'image', label: 'rsKindImage' },
  { key: 'link', label: 'rsKindLink' },
]

const DAY = 86_400_000
const todayIso = () => {
  const d = new Date()
  return new Date(d.getTime() - d.getTimezoneOffset() * 60_000).toISOString().slice(0, 10)
}
const daysBetween = (from: string, to: string) => Math.round((Date.parse(to) - Date.parse(from)) / DAY)
const pick = (en: string | null, bn: string | null, lang: Language) => (lang === 'bn' && bn ? bn : en)
const isPdf = (r: PublicResource) => r.file_type === 'application/pdf' || (!!r.file_url && /\.pdf$/i.test(r.file_url))
const isImage = (r: PublicResource) => !!r.file_type?.startsWith('image/')

function bytes(n: number | null, lang: Language): string | null {
  if (n == null) return null
  const text = n < 1024 ? `${n} B` : n < 1024 * 1024 ? `${Math.round(n / 1024)} KB` : `${(n / 1024 / 1024).toFixed(1)} MB`
  return lang === 'bn' ? text.replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[Number(d)]) : text
}

/** `#/resources[?tab=]`: job circulars (PDF + apply link + application window), suggestions, past exam questions and other files. */
export default function ResourcesPage({ tab }: { tab: ResourceTab }) {
  const state = useApp()
  const lang = state.language
  const t = translations[lang]
  const [items, setItems] = useState<PublicResource[] | null>(null)
  const [failed, setFailed] = useState(false)
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState<string | null>(null)
  const [status, setStatus] = useState<Status>('active')
  const [kind, setKind] = useState<Kind>('all')
  const [preview, setPreview] = useState<PreviewFile | null>(null)

  useEffect(() => {
    let live = true
    resourcesApi.list().then(list => { if (live) setItems(list) }).catch(() => { if (live) setFailed(true) })
    return () => { live = false }
  }, [])

  const today = todayIso()
  const statusOf = (r: PublicResource): Exclude<Status, 'all'> =>
    r.starts_on && r.starts_on > today ? 'upcoming' : r.ends_on && r.ends_on < today ? 'expired' : 'active'
  const kindOf = (r: PublicResource): Exclude<Kind, 'all'> => (isPdf(r) ? 'pdf' : isImage(r) ? 'image' : 'link')

  const ofTab = useMemo(() => (items ?? []).filter(r => r.category === tab), [items, tab])
  const tags = useMemo(() => [...new Set(ofTab.map(r => r.tag).filter((x): x is string => !!x))], [ofTab])
  // A tag picked on one tab means nothing on another.
  const activeTag = tag && tags.includes(tag) ? tag : null
  const q = query.trim().toLowerCase()
  const matches = ofTab.filter(r => (!activeTag || r.tag === activeTag)
    && (!q || `${r.title_en} ${r.title_bn ?? ''} ${r.details_en ?? ''} ${r.details_bn ?? ''}`.toLowerCase().includes(q)))
  const shown = tab === 'circular'
    ? matches.filter(r => status === 'all' || statusOf(r) === status)
    : matches.filter(r => kind === 'all' || kindOf(r) === kind)
  // Expired circulars last, newest closing first; the server already put pinned and open ones first.
  if (tab === 'circular' && status === 'all') shown.sort((a, b) => Number(statusOf(a) === 'expired') - Number(statusOf(b) === 'expired'))
  const statusCount = (s: Status) => matches.filter(r => s === 'all' || statusOf(r) === s).length
  const kindCount = (k: Kind) => matches.filter(r => k === 'all' || kindOf(r) === k).length
  const tabCount = (k: ResourceTab) => (items ?? []).filter(r => r.category === k && !(k === 'circular' && statusOf(r) === 'expired')).length

  const date = (d: string) => new Date(`${d}T00:00:00`).toLocaleDateString(lang === 'bn' ? 'bn-BD' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  const current = TABS.find(x => x.key === tab)!

  /** "Closes today", "N days left", "Opens on…" or "Closed". */
  function deadline(r: PublicResource) {
    if (r.starts_on && r.starts_on > today) return <span className="rs-badge upcoming">{fill(t.rsOpensOn, { date: date(r.starts_on) })}</span>
    if (!r.ends_on) return null
    const left = daysBetween(today, r.ends_on)
    if (left < 0) return <span className="rs-badge closed">{t.rsClosed}</span>
    if (left === 0) return <span className="rs-badge urgent">{t.rsClosesToday}</span>
    return <span className={`rs-badge${left <= 3 ? ' urgent' : ''}`}>{left === 1 ? t.rsOneDayLeft : fill(t.rsDaysLeft, { n: num(left, lang) })}</span>
  }

  const open = (r: PublicResource) => r.file_url && setPreview({
    url: r.file_url, name: r.file_name ?? 'file', type: r.file_type, title: pick(r.title_en, r.title_bn, lang) ?? '', size: bytes(r.file_size, lang),
  })
  const fileButtons = (r: PublicResource) => r.file_url && (
    <>
      {(isPdf(r) || isImage(r)) && (
        <button type="button" className="rs-action" onClick={() => open(r)}><Icon name="search" />{t.rsPreview}</button>
      )}
      <a className="rs-action" href={r.file_url} download={r.file_name ?? true} title={r.file_name ?? ''}>
        <Icon name="download" />{t.rsDownload}{r.file_size != null && <span className="rs-size">{bytes(r.file_size, lang)}</span>}
      </a>
    </>
  )
  const linkButton = (r: PublicResource) => r.link_url && (
    <a className="rs-action" href={r.link_url} target={r.link_url.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      <Icon name="link" />{t.rsOpenLink}
    </a>
  )
  const applyButton = (r: PublicResource) => r.apply_url && (
    statusOf(r) === 'expired'
      ? <span className="rs-action primary disabled" aria-disabled="true">{t.rsApplyClosed}</span>
      : <a className="rs-action primary" href={r.apply_url} target="_blank" rel="noreferrer"><Icon name="external" />{t.rsApplyNow}</a>
  )

  const segment = <K extends string>(options: { key: K; label: keyof Translations }[], value: K, set: (k: K) => void, count: (k: K) => number, label: string) => (
    <div className="rs-seg" role="group" aria-label={label}>
      {options.map(o => (
        <button key={o.key} type="button" aria-pressed={value === o.key} className={value === o.key ? 'active' : ''} onClick={() => set(o.key)}>
          {t[o.label]}<span className="rs-seg-count">{num(count(o.key), lang)}</span>
        </button>
      ))}
    </div>
  )

  return (
    <main className="ft-main site-wide">
      <div className="pd rs-page">
        <header className="pd-head">
          <p className="pd-eyebrow">{t.navResources}</p>
          <h1>{t[current.label]}</h1>
          <p className="pd-sub">{t[current.intro]}</p>
        </header>

        <div className="rs-tabs" role="tablist" aria-label={t.navResources}>
          {TABS.map(x => (
            <button key={x.key} type="button" role="tab" aria-selected={tab === x.key} className={`rs-tab${tab === x.key ? ' active' : ''}`}
              onClick={() => navigate(x.key === 'circular' ? 'resources' : `resources?tab=${x.key}`, { replace: true })}>
              {t[x.label]}
              {items && tabCount(x.key) > 0 && <span className="rs-tab-count">{num(tabCount(x.key), lang)}</span>}
            </button>
          ))}
        </div>

        <div className="rs-filters">
          <label className="pl-search rs-search">
            <Icon name="search" />
            <input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder={t.libFilter} aria-label={t.libFilter} />
          </label>
          {items && (tab === 'circular'
            ? segment(STATUSES, status, setStatus, statusCount, t.rsStatusLabel)
            : segment(KINDS, kind, setKind, kindCount, t.rsKindLabel))}
        </div>
        {tags.length > 0 && (
          <div className="rs-chips" role="group" aria-label={t.rsTag}>
            <button type="button" className={`rs-chip${activeTag === null ? ' active' : ''}`} onClick={() => setTag(null)}>{t.rsAll}</button>
            {tags.map(x => <button key={x} type="button" className={`rs-chip${activeTag === x ? ' active' : ''}`} onClick={() => setTag(x)}>{x}</button>)}
          </div>
        )}

        {failed && !items && <p className="pd-muted pd-empty">{t.rsLoadFailed}</p>}
        {!items && !failed && <div className="rs-skeleton" aria-busy="true" />}
        {items && shown.length === 0 && (
          <p className="pd-muted pd-empty">{!ofTab.length ? t.rsNothingYet : tab === 'circular' && status === 'active' && !q && !activeTag ? t.rsOnlyClosed : t.libEmpty}</p>
        )}

        {items && shown.length > 0 && (
          <ul className="rs-grid">
            {shown.map(r => {
              const isCircular = tab === 'circular'
              const k = kindOf(r)
              return (
                <li key={r.id} className={`rs-card${isCircular && statusOf(r) === 'expired' ? ' is-closed' : ''}`}>
                  <div className="rs-card-top">
                    <span className={`rs-card-icon kind-${isCircular ? 'circular' : k}`}>
                      {isCircular ? <Icon name="flag" /> : k === 'pdf' ? <span className="rs-ext">PDF</span> : <Icon name={k === 'image' ? 'grid' : 'link'} />}
                    </span>
                    <div className="rs-card-head">
                      <h2 className="rs-card-title">
                        {r.is_pinned && <span className="rs-pin" title={t.anPinnedBadge}><Icon name="pin" /></span>}
                        {r.file_url && (isPdf(r) || isImage(r))
                          ? <button type="button" className="rs-card-title-link" onClick={() => open(r)}>{pick(r.title_en, r.title_bn, lang)}</button>
                          : pick(r.title_en, r.title_bn, lang)}
                      </h2>
                      <div className="rs-card-meta">
                        {r.tag && <span className="rs-tag">{r.tag}</span>}
                        {isCircular
                          ? (r.starts_on || r.ends_on) && <span>{r.starts_on ? date(r.starts_on) : '—'} → {r.ends_on ? date(r.ends_on) : '—'}</span>
                          : <span>{date(r.starts_on ?? r.created_at.slice(0, 10))}</span>}
                        {!isCircular && r.file_size != null && <span>{bytes(r.file_size, lang)}</span>}
                        {deadline(r)}
                      </div>
                    </div>
                  </div>
                  {pick(r.details_en, r.details_bn, lang) && <p className="rs-card-text">{pick(r.details_en, r.details_bn, lang)}</p>}
                  <div className="rs-card-actions">
                    {fileButtons(r)}
                    {linkButton(r)}
                    {applyButton(r)}
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>
      {preview && <ResourcePreview file={preview} t={t} onClose={() => setPreview(null)} />}
    </main>
  )
}
