import { useState, useEffect } from 'react'
import { api, type ApiLesson, type ApiChapter } from './api'
import type { Language } from '../types'

interface AdminFilesProps {
  language: Language
}

export default function AdminFiles({ language }: AdminFilesProps) {
  const [chapters, setChapters] = useState<ApiChapter[]>([])
  const [lessons, setLessons] = useState<ApiLesson[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    Promise.all([api.chapters.list(), api.lessons.list()])
      .then(([ch, le]) => { setChapters(ch); setLessons(le) })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="admin-loading">Loading...</div>
  if (error) return <div className="admin-error">{error}</div>

  const totalBn = lessons.filter(l => l.content_bn).length
  const totalCode = lessons.filter(l => l.code_en).length

  return (
    <div>
      <div style={{ marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
        {lessons.length} lessons — {totalBn} bilingual, {totalCode} with code
      </div>
      <div className="admin-grid">
        {chapters.map(ch => (
          <div key={ch.id} className="admin-stat-card">
            <h3 style={{ marginBottom: '0.75rem' }}>
              {ch.chapter_number}. {language === 'bn' && ch.title_bn ? ch.title_bn : ch.title_en}
            </h3>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>
              {lessons.length} lessons
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
