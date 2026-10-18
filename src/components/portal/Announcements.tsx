import { useEffect, useState } from 'react'
import type { Language, Translations } from '../../types'
import { fetchAnnouncements, type PublicAnnouncement } from '../../public/publicApi'
import Icon, { type IconName } from './icons'
import './portal.css'

const DISMISSED_KEY = 'studyhub_dismissed_notices'
const TONE_ICON: Record<PublicAnnouncement['tone'], IconName> = { info: 'info', exam: 'calendar', important: 'alert' }

function readDismissed(): string[] {
  try { return JSON.parse(localStorage.getItem(DISMISSED_KEY) || '[]') as string[] } catch { return [] }
}

type Notice = Pick<PublicAnnouncement, 'tone' | 'title_en' | 'title_bn' | 'body_en' | 'body_bn' | 'link_url' | 'link_label_en' | 'link_label_bn' | 'is_pinned'>

/** One notice. Also used by the admin panel to preview a notice exactly as candidates see it. */
export function AnnouncementCard({ notice, lang, t, onDismiss }: { notice: Notice; lang: Language; t: Translations; onDismiss?: () => void }) {
  const pick = (en: string | null, bn: string | null) => (lang === 'bn' && bn) || en
  const external = !!notice.link_url && /^https?:/i.test(notice.link_url)
  return (
    <div className={`pd-notice tone-${notice.tone}`} role="note">
      <span className="pd-notice-icon"><Icon name={TONE_ICON[notice.tone]} /></span>
      <div className="pd-notice-body">
        <p className="pd-notice-title">{pick(notice.title_en, notice.title_bn)}</p>
        {pick(notice.body_en, notice.body_bn) && <p className="pd-notice-text">{pick(notice.body_en, notice.body_bn)}</p>}
        {notice.link_url && (
          <a className="pd-notice-link" href={notice.link_url} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
            {pick(notice.link_label_en, notice.link_label_bn) || notice.link_url}
            <Icon name="arrow" className="pi pi-sm" />
          </a>
        )}
      </div>
      {onDismiss && (
        <button type="button" className="pd-notice-close" onClick={onDismiss} aria-label={t.dashDismiss} title={t.dashDismiss}>
          <Icon name="close" className="pi pi-sm" />
        </button>
      )}
    </div>
  )
}

/** Dashboard notices from the admin panel. Pinned ones stay; others can be dismissed (remembered in this browser). */
export default function Announcements({ lang, t }: { lang: Language; t: Translations }) {
  const [notices, setNotices] = useState<PublicAnnouncement[]>([])
  const [dismissed, setDismissed] = useState<string[]>(readDismissed)

  useEffect(() => { fetchAnnouncements().then(setNotices).catch(() => setNotices([])) }, [])

  const dismiss = (id: string) => {
    // Keep only ids that are still live, so the list cannot grow without bound.
    const next = [...dismissed, id].filter(x => notices.some(n => n.id === x))
    setDismissed(next)
    try { localStorage.setItem(DISMISSED_KEY, JSON.stringify(next)) } catch { /* private mode: dismissal lasts this visit */ }
  }

  const shown = notices.filter(n => n.is_pinned || !dismissed.includes(n.id))
  if (!shown.length) return null
  return (
    <section className="pd-notices" aria-label={t.dashNotices}>
      {shown.map(n => (
        <AnnouncementCard key={n.id} notice={n} lang={lang} t={t} onDismiss={n.is_pinned ? undefined : () => dismiss(n.id)} />
      ))}
    </section>
  )
}
