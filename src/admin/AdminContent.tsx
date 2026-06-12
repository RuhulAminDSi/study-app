import { useState, useEffect } from 'react'
import { api, type ApiChapter, type ApiLesson, type ApiSideMenu, type ApiSubSideMenu } from './api'
import type { Language } from '../types'

interface AdminContentProps {
  language: Language
}

export default function AdminContent({ language }: AdminContentProps) {
  const [chapters, setChapters] = useState<ApiChapter[]>([])
  const [menus, setMenus] = useState<ApiSideMenu[]>([])
  const [subMenus, setSubMenus] = useState<ApiSubSideMenu[]>([])
  const [lessons, setLessons] = useState<ApiLesson[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [expandedCh, setExpandedCh] = useState<Set<string>>(new Set())
  const [expandedSm, setExpandedSm] = useState<Set<string>>(new Set())
  const [selectedLesson, setSelectedLesson] = useState<ApiLesson | null>(null)

  useEffect(() => {
    Promise.all([
      api.chapters.list(),
      api.menus.listWithSub(),
      api.submenus.list(),
      api.lessons.list(),
    ])
      .then(([ch, me, sm, le]) => {
        setChapters(ch)
        setMenus(me)
        setSubMenus(sm)
        setLessons(le)
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  const toggleCh = (id: string) => {
    setExpandedCh(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id); else next.add(id)
      return next
    })
  }

  const toggleSm = (id: string) => {
    setExpandedSm(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id); else next.add(id)
      return next
    })
  }

  if (loading) return <div className="admin-loading">Loading...</div>
  if (error) return <div className="admin-error">{error}</div>

  if (selectedLesson) {
    return (
      <div className="admin-content-preview">
        <button className="admin-action-btn" onClick={() => setSelectedLesson(null)} style={{ marginBottom: '1rem' }}>
          ← {language === 'bn' ? 'ফিরে যান' : 'Back'}
        </button>
        <div className="admin-preview-card">
          <h3 style={{ marginBottom: '0.5rem' }}>
            {language === 'bn' && selectedLesson.title_bn ? selectedLesson.title_bn : selectedLesson.title_en}
          </h3>
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
            <span className={`level-badge level-${selectedLesson.level.toLowerCase()}`}>
              {selectedLesson.level}
            </span>
            <span className={`status-dot ${selectedLesson.is_published ? 'active' : ''}`} />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              {language === 'bn' ? 'পাঠ' : 'Lesson'} #{selectedLesson.lesson_number}
            </span>
          </div>
          <div className="admin-preview-content">
            <h4>{language === 'bn' ? 'বিষয়বস্তু (EN)' : 'Content (EN)'}</h4>
            <pre>{selectedLesson.content_en}</pre>
            {selectedLesson.content_bn && (
              <>
                <h4>{language === 'bn' ? 'বিষয়বস্তু (BN)' : 'Content (BN)'}</h4>
                <pre>{selectedLesson.content_bn}</pre>
              </>
            )}
            {selectedLesson.code_en && (
              <>
                <h4>{language === 'bn' ? 'কোড' : 'Code'}</h4>
                <pre className="admin-code-block">{selectedLesson.code_en}</pre>
              </>
            )}
            <h4>{language === 'bn' ? 'গুরুত্বপূর্ণ বিষয়' : 'Takeaways'}</h4>
            <ul>
              {selectedLesson.takeaways_en.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            {selectedLesson.takeaways_bn && selectedLesson.takeaways_bn.length > 0 && (
              <>
                <h4>{language === 'bn' ? 'গুরুত্বপূর্ণ বিষয় (BN)' : 'Takeaways (BN)'}</h4>
                <ul>
                  {selectedLesson.takeaways_bn.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-data-table-container">
      <div style={{ marginBottom: '1rem', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
        {language === 'bn' ? `মোট ${lessons.length}টি পাঠ — বাংলায় ${lessons.filter(l => l.content_bn).length}টি, কোড সহ ${lessons.filter(l => l.code_en).length}টি` : `${lessons.length} lessons — ${lessons.filter(l => l.content_bn).length} bilingual, ${lessons.filter(l => l.code_en).length} with code`}
      </div>
      <table className="admin-data-table">
        <thead>
          <tr>
            <th>{language === 'bn' ? 'চ্যাপ্টার / মেনু' : 'Chapter / Menu'}</th>
            <th>{language === 'bn' ? 'পাঠ' : 'Lesson'}</th>
            <th>{language === 'bn' ? 'বাংলা' : 'Bn'}</th>
            <th>{language === 'bn' ? 'কোড' : 'Code'}</th>
            <th>{language === 'bn' ? 'লেভেল' : 'Level'}</th>
            <th>{language === 'bn' ? 'প্রকাশিত' : 'Pub'}</th>
            <th>{language === 'bn' ? 'প্রিভিউ' : 'Preview'}</th>
          </tr>
        </thead>
        <tbody>
          {chapters.map(ch => {
            const chMenus = menus.filter(m => m.chapter_id === ch.id)
            const isChOpen = expandedCh.has(ch.id)
            return (
              <tr key={ch.id} className="tr-chapter">
                <td colSpan={7}>
                  <div className="ch-row" onClick={() => toggleCh(ch.id)}>
                    <span className={`expand-icon ${isChOpen ? 'open' : ''}`}>▶</span>
                    <span className="ch-badge">{ch.chapter_number}</span>
                    <strong>{ch.title_en}</strong>
                    <span className="count-badge">{chMenus.length}</span>
                  </div>
                  {isChOpen && chMenus.map(sm => {
                    const isSmOpen = expandedSm.has(sm.id)
                    const smSubMenus = subMenus.filter(s => s.side_menu_id === sm.id)
                    return (
                      <div key={sm.id} className="sm-section">
                        <div className="sm-row" onClick={() => toggleSm(sm.id)}>
                          <span className={`expand-icon-small ${isSmOpen ? 'open' : ''}`}>▶</span>
                          {sm.label_en}
                          <span className="count-badge sm-count">{smSubMenus.length}</span>
                        </div>
                        {isSmOpen && (
                          <table className="lesson-sub-table">
                            <tbody>
                              {smSubMenus.map(sub => {
                                const subLessons = lessons.filter(l => l.sub_side_menu_id === sub.id)
                                return subLessons.map(l => (
                                  <tr key={l.id}>
                                    <td className="td-indent">{sub.label_en}</td>
                                    <td><strong>{l.title_en}</strong></td>
                                    <td>{l.content_bn ? '✓' : '—'}</td>
                                    <td>{l.code_en ? '✓' : '—'}</td>
                                    <td>
                                      <span className={`level-badge level-${l.level.toLowerCase()}`}>
                                        {l.level}
                                      </span>
                                    </td>
                                    <td><span className={`status-dot ${l.is_published ? 'active' : ''}`} /></td>
                                    <td>
                                      <button className="admin-action-btn sm" onClick={() => setSelectedLesson(l)}>
                                        {language === 'bn' ? 'দেখুন' : 'View'}
                                      </button>
                                    </td>
                                  </tr>
                                ))
                              })}
                            </tbody>
                          </table>
                        )}
                      </div>
                    )
                  })}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
