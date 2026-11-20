import { useEffect, useMemo, useState } from 'react'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'
import Icon from '../components/portal/icons'
import { fill, num, pick } from '../exam/format'
import { ARTICLE_CATEGORIES, type ArticleCategory } from '../router'
import { sanitizeHtml } from '../utils/sanitizeHtml'
import { ARTICLE_LABELS, articlesApi, type Article, type ArticleCard, type ArticlePage } from '../public/siteApi'
import type { Language, Translations } from '../types'

const date = (iso: string | null, lang: Language) =>
  iso ? new Date(iso).toLocaleDateString(lang === 'bn' ? 'bn-BD' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : ''

function Card({ a, lang, t }: { a: ArticleCard; lang: Language; t: Translations }) {
  const summary = pick(lang, a.summary_en, a.summary_bn)
  return (
    <li className="ex-card ar-card">
      <a href={`#/articles/${a.slug}`} className="ar-card-link">
        {a.cover_url && <img className="ar-card-cover" src={a.cover_url} alt="" loading="lazy" />}
        <span className={`ar-badge ar-cat-${a.category}`}>{t[ARTICLE_LABELS[a.category]]}</span>
        <h2>{a.is_pinned && <Icon name="pin" className="pi ar-pin" />}{pick(lang, a.title_en, a.title_bn)}</h2>
        {summary && <p className="pd-muted">{summary}</p>}
        <span className="ar-meta">{date(a.published_at, lang)} · {fill(t.arViewsN, { n: num(a.views, lang) })}</span>
      </a>
    </li>
  )
}

/** `#/articles[?cat=&tag=]`: preparation guides, job news, written-exam tips and solutions. */
export function ArticlesPage({ category, tag }: { category?: ArticleCategory; tag?: string }) {
  const { language: lang } = useApp()
  const t = translations[lang]
  const [q, setQ] = useState('')
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [data, setData] = useState<ArticlePage | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => { document.title = `${t.siteNavArticles} | StudyPath` }, [t])
  useEffect(() => {
    const timer = setTimeout(() => { setQuery(q.trim()); setPage(1) }, 300)
    return () => clearTimeout(timer)
  }, [q])
  const filterKey = `${category ?? ''}|${tag ?? ''}|${query}`
  const [lastKey, setLastKey] = useState(filterKey)
  if (lastKey !== filterKey) { setLastKey(filterKey); setPage(1) }
  useEffect(() => {
    let live = true
    articlesApi.list({ category, tag, q: query, page })
      .then(d => { if (live) { setData(d); setFailed(false) } })
      .catch(() => { if (live) setFailed(true) })
    return () => { live = false }
  }, [category, tag, query, page])

  const pages = data ? Math.max(1, Math.ceil(data.total / data.pageSize)) : 1
  const href = (c?: ArticleCategory) => (c ? `#/articles?cat=${c}` : '#/articles')

  return (
    <main className="ft-main site-wide">
      <header>
        <p className="pd-eyebrow">{t.arEyebrow}</p>
        <h1 className="site-h1">{t.siteNavArticles}</h1>
        <p className="pd-sub">{t.arIntro}</p>
      </header>
      <div className="ar-toolbar">
        <nav className="fs-tabs ar-cats" aria-label={t.rsCategory}>
          <a href={href()} className={!category ? 'active' : ''} aria-current={!category ? 'page' : undefined}>{t.rsAll}</a>
          {ARTICLE_CATEGORIES.map(c => (
            <a key={c} href={href(c)} className={category === c ? 'active' : ''} aria-current={category === c ? 'page' : undefined}>{t[ARTICLE_LABELS[c]]}</a>
          ))}
        </nav>
        <label className="site-search">
          <Icon name="search" />
          <input type="search" value={q} onChange={e => setQ(e.target.value)} placeholder={t.arSearch} aria-label={t.arSearch} />
        </label>
      </div>
      {tag && (
        <p className="ar-tag-filter">{fill(t.arTaggedWith, { tag })} <a href={href(category)}>{t.arClearTag}</a></p>
      )}
      {failed && <p className="ex-alert bad"><Icon name="alert" /><span>{t.ftLoadFailed}</span></p>}
      {!data && !failed && <ul className="ar-grid" aria-busy="true">{[0, 1, 2, 3].map(i => <li key={i} className="ex-card sp-skel ar-skel" />)}</ul>}
      {data && data.items.length === 0 && <p className="ex-alert info"><Icon name="info" /><span>{t.arNone}</span></p>}
      {data && data.items.length > 0 && (
        <ul className="ar-grid">{data.items.map(a => <Card key={a.id} a={a} lang={lang} t={t} />)}</ul>
      )}
      {pages > 1 && (
        <nav className="ar-pager" aria-label={t.arPages}>
          <button type="button" className="ex-btn" disabled={page <= 1} onClick={() => setPage(p => p - 1)}><Icon name="chevronLeft" />{t.previous}</button>
          <span className="pd-muted">{num(page, lang)} / {num(pages, lang)}</span>
          <button type="button" className="ex-btn" disabled={page >= pages} onClick={() => setPage(p => p + 1)}>{t.next}<Icon name="chevron" /></button>
        </nav>
      )}
    </main>
  )
}

/** `#/articles/<slug>`: one article, its tags and related reading. */
export function ArticleView({ slug }: { slug: string }) {
  const { language: lang } = useApp()
  const t = translations[lang]
  const [a, setA] = useState<Article | null>(null)
  const [missing, setMissing] = useState(false)

  useEffect(() => {
    let live = true
    articlesApi.get(slug).then(x => { if (live) setA(x) }).catch(() => { if (live) setMissing(true) })
    return () => { live = false }
  }, [slug])
  useEffect(() => { if (a) document.title = `${pick(lang, a.title_en, a.title_bn)} | StudyPath` }, [a, lang])
  const body = useMemo(() => (a ? sanitizeHtml(lang === 'bn' && a.body_bn ? a.body_bn : a.body_en) : ''), [a, lang])

  if (missing) {
    return (
      <main className="ft-main">
        <section className="ex-card">
          <p className="ex-alert bad"><Icon name="alert" /><span>{t.arMissing}</span></p>
          <a className="ex-btn" href="#/articles"><Icon name="back" />{t.arBack}</a>
        </section>
      </main>
    )
  }
  if (!a) return <main className="ft-main"><div className="ex-card sp-skel ar-skel" aria-busy="true" /></main>

  return (
    <main className="ft-main">
      <a className="site-back" href={`#/articles?cat=${a.category}`}><Icon name="back" />{t[ARTICLE_LABELS[a.category]]}</a>
      <article className="ex-card ar-article">
        <span className={`ar-badge ar-cat-${a.category}`}>{t[ARTICLE_LABELS[a.category]]}</span>
        <h1 className="site-h1">{pick(lang, a.title_en, a.title_bn)}</h1>
        <p className="ar-meta">{date(a.published_at, lang)} · {fill(t.arViewsN, { n: num(a.views, lang) })}</p>
        {a.cover_url && <img className="ar-cover" src={a.cover_url} alt="" />}
        <div className="ar-body lesson-content" dangerouslySetInnerHTML={{ __html: body }} />
        {a.tags.length > 0 && (
          <p className="ar-tags">{a.tags.map(x => <a key={x} href={`#/articles?tag=${encodeURIComponent(x)}`}>#{x}</a>)}</p>
        )}
      </article>
      {a.related.length > 0 && (
        <section aria-labelledby="ar-related">
          <h2 id="ar-related" className="site-h2">{t.arRelated}</h2>
          <ul className="ar-grid">{a.related.map(r => <Card key={r.id} a={r} lang={lang} t={t} />)}</ul>
        </section>
      )}
    </main>
  )
}
