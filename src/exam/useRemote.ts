import { useCallback, useEffect, useState } from 'react'

interface Loaded<T> { fetcher: () => Promise<T>; run: number; data: T | null; error: unknown }

/**
 * Loads `fetcher()` (memoise it with useCallback) and reloads whenever it changes or `retry()` is called. A result
 * counts only for the fetcher and run that produced it, so changing a filter shows the loading state again instead
 * of the previous list, and a late reply to an old request is ignored.
 */
export function useRemote<T>(fetcher: () => Promise<T>) {
  const [run, setRun] = useState(0)
  const [loaded, setLoaded] = useState<Loaded<T> | null>(null)

  useEffect(() => {
    let live = true
    fetcher()
      .then(data => { if (live) setLoaded({ fetcher, run, data, error: null }) })
      .catch(error => { if (live) setLoaded({ fetcher, run, data: null, error }) })
    return () => { live = false }
  }, [fetcher, run])

  const current = loaded && loaded.fetcher === fetcher && loaded.run === run ? loaded : null
  const retry = useCallback(() => setRun(r => r + 1), [])
  /** Replace the loaded value in place (e.g. after "show more"). */
  const update = useCallback((fn: (data: T) => T) => setLoaded(l => (l && l.data !== null ? { ...l, data: fn(l.data) } : l)), [])
  return { data: current?.data ?? null, error: current?.error ?? null, loading: !current, retry, update }
}
