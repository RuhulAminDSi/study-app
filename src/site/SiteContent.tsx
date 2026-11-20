import type { SitePage } from '../router'
import FreeTest from '../exam/FreeTest'
import FreeSets from './FreeSets'
import FreeSetPage from './FreeSetPage'
import { ArticlesPage, ArticleView } from './ArticlesPage'
import ResourcesPage from '../components/portal/ResourcesPage'
import PlansPage from './PlansPage'
import ContactPage from './ContactPage'
import '../exam/exam.css'
import '../exam/free-test.css'
import './site.css'

/** The body of an open page (see `SitePage` in router.tsx), framed by SiteShell for visitors or the portal for readers. */
export default function SiteContent({ page }: { page: SitePage }) {
  return (
    <>
      {page.page === 'free' && <FreeTest><FreeSets /></FreeTest>}
      {page.page === 'free-set' && <FreeSetPage key={page.id} id={page.id} mode={page.mode} />}
      {page.page === 'articles' && <ArticlesPage category={page.category} tag={page.tag} />}
      {page.page === 'article' && <ArticleView key={page.slug} slug={page.slug} />}
      {page.page === 'resources' && <ResourcesPage tab={page.tab} />}
      {page.page === 'plans' && <PlansPage />}
      {page.page === 'contact' && <ContactPage />}
    </>
  )
}
