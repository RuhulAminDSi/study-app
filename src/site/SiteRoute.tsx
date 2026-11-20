import type { SitePage } from '../router'
import SiteShell from './SiteShell'
import SiteContent from './SiteContent'

/** An open page for a visitor: inside the site header and footer. Signed-in readers get it inside the portal (App.tsx). */
export default function SiteRoute({ page }: { page: SitePage }) {
  return (
    <SiteShell page={page}>
      <SiteContent page={page} />
    </SiteShell>
  )
}
