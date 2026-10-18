import DOMPurify from 'dompurify'

// Links that open a new tab must not hand the lesson page to the opened site (window.opener).
DOMPurify.addHook('afterSanitizeAttributes', node => {
  if (node instanceof HTMLAnchorElement && node.target === '_blank') node.setAttribute('rel', 'noopener noreferrer')
})

/**
 * Cleans lesson HTML before it is injected into the page: removes scripts, event handlers, `javascript:`
 * URLs, forms and embeds, and keeps the markup, classes and data attributes lessons use for styling.
 * Admins write lesson bodies, so anything they paste reaches every reader; this is the last line of defence.
 */
export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ADD_ATTR: ['target'],
    FORBID_TAGS: ['style', 'form', 'input', 'button', 'textarea', 'select', 'iframe', 'object', 'embed'],
  })
}
