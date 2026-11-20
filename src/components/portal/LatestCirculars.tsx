import { useEffect, useState } from 'react'
import { fetchResources, type PublicResource } from '../../public/publicApi'
import type { Language, Translations } from '../../types'
import Icon from './icons'
import { fill, num } from './portalData'

const todayIso = () => {
  const d = new Date()
  return new Date(d.getTime() - d.getTimezoneOffset() * 60_000).toISOString().slice(0, 10)
}

/** Dashboard rail: up to five circulars still open for applications, nearest last date first. Hidden when there are none. */
export default function LatestCirculars({ lang, t }: { lang: Language; t: Translations }) {
  const [items, setItems] = useState<PublicResource[]>([])

  useEffect(() => {
    let live = true
    fetchResources(fresh => { if (live) setItems(fresh) })
      .then(list => { if (live) setItems(list) })
      .catch(() => { /* the panel just stays hidden */ })
    return () => { live = false }
  }, [])

  const today = todayIso()
  const open = items
    .filter(r => r.category === 'circular' && (!r.ends_on || r.ends_on >= today))
    .sort((a, b) => Number(b.is_pinned) - Number(a.is_pinned) || (a.ends_on ?? '9999').localeCompare(b.ends_on ?? '9999'))
    .slice(0, 5)
  if (open.length === 0) return null

  const date = (d: string) => new Date(`${d}T00:00:00`).toLocaleDateString(lang === 'bn' ? 'bn-BD' : 'en-GB', { day: 'numeric', month: 'short' })
  const title = (r: PublicResource) => (lang === 'bn' && r.title_bn ? r.title_bn : r.title_en)
  const posts = (r: PublicResource) => (lang === 'bn' && r.details_bn ? r.details_bn : r.details_en)

  return (
    <section className="pd-panel" aria-labelledby="pd-circulars-title">
      <h2 id="pd-circulars-title"><Icon name="folder" />{t.rsLatestCirculars}</h2>
      <ul className="pd-list">
        {open.map(r => (
          <li key={r.id}>
            <a href={r.file_url ?? r.apply_url ?? '#/resources'} target={r.file_url || r.apply_url ? '_blank' : undefined} rel="noreferrer">
              <span className="pd-list-title">{title(r)}</span>
              <span className="pd-list-sub">
                {posts(r) ?? ''}
                {r.ends_on && <>{posts(r) ? ' · ' : ''}{t.rsEndCircular}: {date(r.ends_on)}</>}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <a className="pd-more" href="#/resources">{fill(t.rsAllCirculars, { n: num(open.length, lang) })}<Icon name="arrow" /></a>
    </section>
  )
}
