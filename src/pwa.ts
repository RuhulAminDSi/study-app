/**
 * Registers the device cache (pwa/sw.js, emitted as /sw.js by the build). In dev there is no worker, and
 * any left over from a production preview on the same origin is removed so it can't serve stale files.
 */
export function registerServiceWorker(): void {
  if (!('serviceWorker' in navigator)) return
  if (!import.meta.env.PROD) {
    navigator.serviceWorker.getRegistrations()
      .then(regs => regs.forEach(r => r.unregister()))
      .catch(() => {})
    return
  }
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(err => console.warn('Service worker not registered:', err))
  })
}
