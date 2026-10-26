/*
 * Study Hub landing page: renders the page in Bangla or English from
 * landing.config.js, wires every Study Hub link to the single STUDY_HUB_URL,
 * and runs the menu, theme, language and back-to-top controls. No dependencies.
 */
import C from './landing.config.js'

const $ = (sel) => document.querySelector(sel)
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch])
const store = {
  get: (k) => {
    try {
      return localStorage.getItem(k)
    } catch {
      return null
    }
  },
  set: (k, v) => {
    try {
      localStorage.setItem(k, v)
    } catch {
      /* private mode: the choice just won't persist */
    }
  },
}

/* ---- Session ---------------------------------------------------------- */
// Study Hub needs an account (a candidate, or an admin previewing it). The tokens sit in localStorage
// (same origin); one that is missing, malformed or past its expiry counts as signed out. Study Hub
// re-checks it with the server.
function validToken(key, kind) {
  const token = store.get(key)
  if (!token) return false
  try {
    const part = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')
    const claims = JSON.parse(atob(part))
    return claims.kind === kind && (!claims.exp || claims.exp * 1000 > Date.now())
  } catch {
    return false
  }
}
const isSignedIn = validToken('candidate_token', 'candidate') || validToken('admin_token', 'admin')

/* ---- Study Hub links ------------------------------------------------- */
// Signed out, every "start studying" link opens the login screen (which comes back to Study Hub).
const hubHref = isSignedIn ? C.STUDY_HUB_URL : C.STUDY_HUB_URL + C.LOGIN_HASH
const targetAttrs = C.OPEN_IN_NEW_TAB ? ' target="_blank" rel="noopener"' : ''
// A subject card opens that subject; signed out, it goes through the login screen and back (?next=).
const subjectUrl = (slug) => {
  if (!C.DEEP_LINKS_ENABLED) return hubHref
  const link = C.deepLink(slug)
  return isSignedIn ? link : `${C.STUDY_HUB_URL}${C.LOGIN_HASH}?next=${link.split('#/')[1]}`
}
const subjectByNo = new Map(C.subjects.map((s) => [s.no, s]))

const openInTab = (a) => {
  if (C.OPEN_IN_NEW_TAB) {
    a.target = '_blank'
    a.rel = 'noopener'
  }
}
document.querySelectorAll('[data-hub]').forEach((a) => {
  a.href = hubHref
  openInTab(a)
})
// Navbar account buttons: Sign in / Sign up while signed out, "Open Study Hub" once signed in.
const AUTH_HREF = {
  signin: C.STUDY_HUB_URL + C.LOGIN_HASH,
  signup: C.STUDY_HUB_URL + C.SIGNUP_HASH,
  hub: C.STUDY_HUB_URL,
}
document.querySelectorAll('[data-auth]').forEach((a) => {
  const kind = a.dataset.auth
  a.href = AUTH_HREF[kind]
  a.hidden = kind === 'hub' ? !isSignedIn : isSignedIn
  openInTab(a)
})

/* ---- Inline icons (stroke = currentColor) ---------------------------- */
const ICONS = {
  door: '<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8"/><path d="M10 12h11M17 8l4 4-4 4"/>',
  sidebar: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M5.5 8h1.5M5.5 11h1.5M5.5 14h1.5"/>',
  lang: '<path d="M4 5h8M8 3v2M6 5c0 4 2.5 7 6 8M10 5c0 3-2 6.5-6 8"/><path d="m13 21 4-9 4 9M14.5 18h5"/>',
  note: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 12h7M9 16h5"/>',
  history: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
  phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
}
const icon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ''}</svg>`

/* ---- Language -------------------------------------------------------- */
const root = document.documentElement
const LANG_KEY = 'studyhub_language'
const savedLang = store.get(LANG_KEY)
let lang = savedLang === 'en' || savedLang === 'bn' ? savedLang : C.DEFAULT_LANG
let T = C.text[lang]

const digits = (n) => (lang === 'bn' ? String(n).replace(/\d/g, (d) => '০১২৩৪৫৬৭৮৯'[d]) : String(n))

/** Renders every piece of text on the page in the current language. */
function render() {
  T = C.text[lang]
  const ui = T.ui
  root.lang = lang
  document.title = ui.metaTitle
  document.querySelector('meta[name="description"]').setAttribute('content', ui.metaDesc)

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = ui[el.dataset.i18n]
    if (v !== undefined) el.textContent = v
  })
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const v = ui[el.dataset.i18nAria]
    if (v !== undefined) el.setAttribute('aria-label', v)
  })

  $('#hero-points').innerHTML = T.heroPoints
    .map((p) => `<li>${icon('check')}${esc(p)}</li>`)
    .join('')

  // Model answer for the hero's past question; the terms stay in English as exams print them.
  $('#slip-answer').innerHTML = T.acid
    .map((a, i) => `<div style="--i:${i}"><dt lang="en">${esc(a.term)}</dt><dd>${esc(a.desc)}</dd></div>`)
    .join('')

  $('#stats-list').innerHTML = T.stats
    .map((s) => `<li><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></li>`)
    .join('')

  $('#exams-list').innerHTML = T.exams
    .map(
      (e, i) => `<li class="exam" style="--i:${i}">
        <h3>${esc(e.title)}</h3>
        <p class="exam-posts">${esc(e.tag)}</p>
        <p class="exam-desc">${esc(e.desc)}</p>
      </li>`,
    )
    .join('')

  // In English the subject name is the heading; in Bangla the English name stays as a subtitle.
  $('#subjects-list').innerHTML = C.subjects
    .map(
      (s, i) => `<li style="--i:${i}"><a class="subject" href="${esc(subjectUrl(s.slug))}"${targetAttrs}>
        <span class="subject-no">${digits(s.no)}</span>
        <span class="subject-text">
          <span class="subject-bn"${lang === 'en' ? ' lang="en"' : ''}>${esc(lang === 'en' ? s.en : s.bn)}</span>
          ${lang === 'bn' ? `<span class="subject-en" lang="en">${esc(s.en)}</span>` : ''}
          ${s.pyq ? `<span class="badge">${esc(ui.pyqBadge)}</span>` : ''}
        </span>
      </a></li>`,
    )
    .join('')

  $('#tour-tabs').innerHTML = T.tour
    .map(
      (t, i) => `<button class="tour-tab" type="button" role="tab" id="tour-tab-${i}" aria-controls="tour-panel">${esc(t.tab)}</button>`,
    )
    .join('')
  showTour(tourIdx, false)

  $('#features-list').innerHTML = T.features
    .map(
      (f, i) => `<li class="extra" style="--i:${i}">
        <span class="extra-icon">${icon(f.icon)}</span>
        <div><h3>${esc(f.title)}</h3><p>${esc(f.desc)}</p></div>
      </li>`,
    )
    .join('')

  $('#steps-list').innerHTML = T.steps
    .map(
      (s, i) => `<li class="step">
        <span class="step-no" aria-hidden="true">${digits(i + 1)}</span>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.desc)}</p>
      </li>`,
    )
    .join('')

  $('#roadmap-list').innerHTML = T.roadmap
    .map((r, i) => {
      const chips = r.subjects
        .map((no) => subjectByNo.get(no))
        .filter(Boolean)
        .map((s) => `<a class="chip" href="${esc(subjectUrl(s.slug))}"${targetAttrs} lang="en">${esc(s.en)}</a>`)
        .join('')
      return `<li class="road-step" style="--i:${i}">
        <span class="road-dot" aria-hidden="true">${digits(i + 1)}</span>
        <div class="road-body">
          <h3>${esc(r.title)}</h3>
          <p>${esc(r.desc)}</p>
          ${chips ? `<div class="chips">${chips}</div>` : ''}
        </div>
      </li>`
    })
    .join('')

  // Native <details> gives an accessible, keyboard-friendly accordion.
  $('#faq-list').innerHTML = T.faq
    .map((f) => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`)
    .join('')

  // The button is labelled in the language it switches to.
  $('#lang-toggle').lang = lang === 'bn' ? 'en' : 'bn'
  $('#year').textContent = digits(new Date().getFullYear())
  syncThemeBtn()
  syncMenuBtn()
}

/* ---- Tour: one screen of StudyPath per tab --------------------------- */
let tourIdx = 0
const tourImg = $('#tour-img')
const shot = (name, size) => `/landing/tour-${name}${size ? '-' + size : ''}.webp`
function showTour(i, focus) {
  const n = T.tour.length
  tourIdx = (i + n) % n
  const t = T.tour[tourIdx]
  document.querySelectorAll('.tour-tab').forEach((b, j) => {
    const on = j === tourIdx
    b.setAttribute('aria-selected', String(on))
    b.tabIndex = on ? 0 : -1
    if (on && focus) b.focus()
  })
  $('#tour-panel').setAttribute('aria-labelledby', `tour-tab-${tourIdx}`)
  $('#tour-copy').innerHTML = `<h3>${esc(t.title)}</h3><p>${esc(t.desc)}</p>
    <ul>${t.points.map((p) => `<li>${icon('check')}${esc(p)}</li>`).join('')}</ul>`
  $('#tour-url').textContent = t.url
  const src = shot(t.img)
  if (!tourImg.src.endsWith(src)) {
    tourImg.classList.remove('swap')
    void tourImg.offsetWidth // restart the fade
    tourImg.classList.add('swap')
    tourImg.srcset = `${shot(t.img, 800)} 800w, ${src} 1280w`
    tourImg.src = src
  }
  tourImg.alt = t.alt
}
$('#tour-tabs').addEventListener('click', (e) => {
  const b = e.target.closest('.tour-tab')
  if (b) showTour([...b.parentNode.children].indexOf(b), false)
})
// Arrow keys move between tabs (the WAI-ARIA tabs pattern); Home/End jump to the ends.
$('#tour-tabs').addEventListener('keydown', (e) => {
  const step = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 1, ArrowUp: -1 }[e.key]
  if (step) showTour(tourIdx + step, true)
  else if (e.key === 'Home') showTour(0, true)
  else if (e.key === 'End') showTour(T.tour.length - 1, true)
  else return
  e.preventDefault()
})
// Fetch the other screens once the page is idle, so switching tabs is instant.
addEventListener('load', () =>
  setTimeout(() => {
    const big = matchMedia('(min-width: 960px)').matches
    C.text.en.tour.forEach((t) => {
      new Image().src = shot(t.img, big ? '' : 800)
    })
  }, 1500),
)

$('#lang-toggle').addEventListener('click', () => {
  lang = lang === 'bn' ? 'en' : 'bn'
  store.set(LANG_KEY, lang)
  render()
})

/* ---- Footer contacts (language-neutral) ------------------------------ */
const contacts = [
  C.contact.email && { href: `mailto:${C.contact.email}`, label: C.contact.email },
  C.contact.facebook && { href: C.contact.facebook, label: 'Facebook', ext: true },
  C.contact.youtube && { href: C.contact.youtube, label: 'YouTube', ext: true },
].filter(Boolean)
if (contacts.length) {
  $('#contact-list').innerHTML = contacts
    .map((c) => `<li><a href="${esc(c.href)}"${c.ext ? ' target="_blank" rel="noopener"' : ''}>${esc(c.label)}</a></li>`)
    .join('')
  $('#contact-block').hidden = false
}
$('#copyright-name').textContent = C.copyrightName

/* ---- Mobile menu ----------------------------------------------------- */
const menuBtn = $('#menu-toggle')
const links = $('#nav-links')
function syncMenuBtn() {
  const open = links.classList.contains('open')
  menuBtn.setAttribute('aria-expanded', String(open))
  menuBtn.setAttribute('aria-label', open ? T.ui.menuClose : T.ui.menuOpen)
}
const setMenu = (open) => {
  links.classList.toggle('open', open)
  syncMenuBtn()
}
menuBtn.addEventListener('click', () => setMenu(!links.classList.contains('open')))
links.addEventListener('click', (e) => {
  if (e.target.closest('a')) setMenu(false)
})
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && links.classList.contains('open')) {
    setMenu(false)
    menuBtn.focus()
  }
})

/* ---- Theme toggle ---------------------------------------------------- */
const themeBtn = $('#theme-toggle')
function syncThemeBtn() {
  const dark = root.getAttribute('data-theme') !== 'light'
  themeBtn.setAttribute('aria-label', dark ? T.ui.themeToLight : T.ui.themeToDark)
  document.querySelector('meta[name="theme-color"]').setAttribute('content', dark ? '#0f1522' : '#f4f6fa')
}
themeBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
  root.setAttribute('data-theme', next)
  store.set('studyhub_theme', next) // shared with Study Hub
  syncThemeBtn()
})

/* ---- Back to top ----------------------------------------------------- */
// "#top" links would aim at the sticky navbar, which is always on screen, so the browser wouldn't
// scroll. Scroll explicitly instead, keep the URL clean, and move focus to the top for keyboard users.
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)')
function toTop(e) {
  e.preventDefault()
  setMenu(false)
  if (location.hash) history.replaceState(null, '', location.pathname + location.search)
  window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' })
  // Moving focus cancels a smooth scroll in Chrome, so wait until it has finished
  // (scrollend where supported, otherwise a timer).
  const focusTop = () => $('.brand').focus({ preventScroll: true })
  if (window.scrollY === 0) focusTop()
  else if ('onscrollend' in window) window.addEventListener('scrollend', focusTop, { once: true })
  else setTimeout(focusTop, 1500)
}
document.querySelectorAll('[data-to-top]').forEach((a) => a.addEventListener('click', toTop))

const toTopBtn = $('#to-top')
toTopBtn.addEventListener('click', toTop)
let ticking = false
const syncToTop = () => {
  toTopBtn.hidden = window.scrollY < 600
  // The ring around the button shows how far down the page the reader is.
  const max = document.documentElement.scrollHeight - window.innerHeight
  toTopBtn.style.setProperty('--progress', `${max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0}%`)
  ticking = false
}
window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(syncToTop)
    }
  },
  { passive: true },
)

render()
syncToTop()
root.classList.remove('lang-pending')

/* ---- Scroll reveal --------------------------------------------------- */
// Sections ease in once as they reach the viewport. Skipped for reduced motion and old browsers,
// so the page is never left with hidden content.
if (!reduceMotion.matches && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        e.target.classList.add('in')
        io.unobserve(e.target)
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  )
  const watch = (sel, cls) =>
    document.querySelectorAll(sel).forEach((el) => {
      // Already on screen at load (e.g. a deep link): leave it visible.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return
      el.classList.add(cls)
      io.observe(el)
    })
  watch('.section-head, .tour-tabs, .tour-stage, #exams-note, .final-inner, .faq', 'reveal')
  watch('#exams-list, #subjects-list, #features-list, #roadmap-list', 'reveal-list')
}

/* ---- Device cache ------------------------------------------------------ */
// The same worker as Study Hub (pwa/sw.js, see src/pwa.ts): a returning visitor gets this page and the app
// from the device. Production builds only; dev has no /sw.js.
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {})
  })
}
