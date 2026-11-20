import { useEffect, useState } from 'react'
import { fetchSiteInfo, type SiteInfo } from '../public/siteApi'

/** Site stats, contact details and payment numbers (fetched once per page load and shared). Null until loaded. */
export function useSiteInfo(): SiteInfo | null {
  const [info, setInfo] = useState<SiteInfo | null>(null)
  useEffect(() => {
    let live = true
    fetchSiteInfo().then(i => { if (live) setInfo(i) }).catch(() => {})
    return () => { live = false }
  }, [])
  return info
}
