import { createElement, Fragment } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { isHtmlContent, renderContent } from '../components/ContentRenderer'

/**
 * Lesson bodies from the seed may use the old line format (emoji headings, • bullets, box-drawing tables).
 * The rich-text editor works on HTML, so such a body is converted by rendering it exactly as readers see it.
 * Returns null when the body is already HTML (or empty).
 */
export function legacyToHtml(content: string | null): string | null {
  if (!content || !content.trim() || isHtmlContent(content)) return null
  return renderToStaticMarkup(createElement(Fragment, null, ...renderContent(content)))
}
