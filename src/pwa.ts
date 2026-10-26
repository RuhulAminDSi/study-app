/**
 * Registers the device cache, /sw.js (pwa/sw.js; emitted by the build, served by the dev server). In dev it
 * runs in dev mode and keeps only notes, PDFs, uploads and fonts, so Vite's modules and HMR are untouched.
 */
export function registerServiceWorker(): void {
  if (!('serviceWorker' in navigator)) return
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(err => console.warn('Service worker not registered:', err))
  })
}
