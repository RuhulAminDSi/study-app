import { useState, useMemo } from 'react'

type SortDir = 'asc' | 'desc'

export interface SortState {
  key: string
  dir: SortDir
}

export function useDataTable<T extends Record<string, any>>(
  data: T[],
  { defaultSort, pageSize = 10 }: { defaultSort?: string; pageSize?: number } = {},
) {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<SortState>({ key: defaultSort || '', dir: 'asc' })
  const [page, setPage] = useState(0)

  const searched = useMemo(() => {
    if (!search.trim()) return data
    const q = search.toLowerCase()
    return data.filter(item =>
      Object.values(item).some(v =>
        v != null && String(v).toLowerCase().includes(q),
      ),
    )
  }, [data, search])

  const sorted = useMemo(() => {
    if (!sort.key) return searched
    return [...searched].sort((a, b) => {
      const av = a[sort.key]
      const bv = b[sort.key]
      if (av == null) return 1
      if (bv == null) return -1
      const cmp = typeof av === 'number'
        ? av - bv
        : String(av).localeCompare(String(bv))
      return sort.dir === 'asc' ? cmp : -cmp
    })
  }, [searched, sort])

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize))
  const safePage = Math.min(page, totalPages - 1)
  const paged = sorted.slice(safePage * pageSize, (safePage + 1) * pageSize)

  function toggleSort(key: string) {
    setSort(prev => ({
      key,
      dir: prev.key === key && prev.dir === 'asc' ? 'desc' : 'asc',
    }))
    setPage(0)
  }

  function goPage(p: number) { setPage(Math.max(0, Math.min(p, totalPages - 1))) }

  return {
    search,
    setSearch: (s: string) => { setSearch(s); setPage(0) },
    sort,
    toggleSort,
    page: safePage,
    totalPages,
    goPage,
    paged,
    total: sorted.length,
  }
}
