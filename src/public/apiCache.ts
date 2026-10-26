/**
 * Study data (chapters, menus, lessons, exam kits) kept on the reader's device in the Cache API, so the
 * portal opens at once from the last copy and refreshes it in the background (stale-while-revalidate).
 * Entries are keyed by the signed-in account, and every sign-out clears them, so a shared device never shows
 * one reader's copy to the next. Where the Cache API is missing (old browsers, http) this is a no-op.
 */
const CACHE_NAME = 'sp-api-v1'

/** "<kind>-<id>" from a JWT's payload (not verified: the server does that); null if it can't be read. */
export function readerKeyOf(token: string): string | null {
  try {
    const payload = JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')))
    return payload.kind && payload.id ? `${payload.kind}-${payload.id}` : null
  } catch {
    return null
  }
}

async function openCache(): Promise<Cache | null> {
  if (typeof caches === 'undefined') return null
  try {
    return await caches.open(CACHE_NAME)
  } catch {
    return null
  }
}

/** A same-origin URL that is never requested, only used as the cache key. */
function keyUrl(reader: string, path: string): string {
  return `/__sp-api-cache/${encodeURIComponent(reader)}${path}`
}

export async function readCached(reader: string, path: string): Promise<string | null> {
  const cache = await openCache()
  if (!cache) return null
  try {
    const res = await cache.match(keyUrl(reader, path))
    return res ? await res.text() : null
  } catch {
    return null
  }
}

export async function writeCached(reader: string, path: string, body: string): Promise<void> {
  const cache = await openCache()
  if (!cache) return
  try {
    await cache.put(keyUrl(reader, path), new Response(body, { headers: { 'Content-Type': 'application/json' } }))
  } catch {
    /* quota exceeded or storage blocked: the next visit loads from the network */
  }
}

export function clearApiCache(): void {
  if (typeof caches === 'undefined') return
  caches.delete(CACHE_NAME).catch(() => {})
}
