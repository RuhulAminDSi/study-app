import { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'
import { fetchSiteInfo } from '../public/siteApi'
import './whatsapp.css'

/** Floating "Chat on WhatsApp" button; shown only when the server has a number (WHATSAPP_NUMBER). */
export default function WhatsAppButton() {
  const { language } = useApp()
  const t = translations[language]
  const [number, setNumber] = useState<string | null>(null)

  useEffect(() => {
    let live = true
    fetchSiteInfo().then(i => { if (live) setNumber(i.contact.whatsapp) }).catch(() => {})
    return () => { live = false }
  }, [])

  if (!number) return null
  return (
    <a className="wa-float" href={`https://wa.me/${encodeURIComponent(number)}`} target="_blank" rel="noopener noreferrer"
      aria-label={t.waChat} title={t.waChat}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
        <path d="M8.6 8.2c.2-.4.5-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.1.1-.1.3 0 .5a6 6 0 0 0 2.9 2.6c.2.1.4.1.5-.1l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.2.3.4 0 .5-.2 1.2-.8 1.5-.6.4-1.5.5-2.6.1a9.4 9.4 0 0 1-5-4.6c-.6-1.2-.5-2.3-.2-2.8Z" fill="currentColor" stroke="none" />
      </svg>
    </a>
  )
}
