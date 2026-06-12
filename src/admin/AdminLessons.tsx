import { useState, useEffect } from 'react'
import { api, type ApiLesson, type ApiSideMenu, type ApiSubSideMenu, type ApiChapter } from './api'
import type { Language } from '../types'

interface AdminLessonsProps {
  language: Language
}

export default function AdminLessons({ language }: AdminLessonsProps) {
  const [chapters, setChapters] = useState<ApiChapter[]>([])
  const [menus, setMenus] = useState<ApiSideMenu[]>([])
  const [subMenus, setSubMenus] = useState<ApiSubSideMenu[]>([])
  const [lessons, setLessons] = useState<ApiLesson[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [expandedCh, setExpandedCh] = useState<Set<string>>(new Set())
  const [expandedSm, setExpandedSm] = useState<Set<string>>(new Set())

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

  const getLessonsForSubMenu = (subMenuId: string) =>
    lessons.filter(l => l.sub_side_menu_id === subMenuId)

  if (loading) return <div className="admin-loading">Loading...</div>
  if (error) return <div className="admin-error">{error}</div>

  return (
    <div className="admin-data-table-container">
      <table className="admin-data-table admin-lessons-table">
        <thead>
          <tr>
            <th>{language === 'bn' ? 'চ্যাপ্টার / মেনু / পাঠ' : 'Chapter / Menu / Lesson'}</th>
            <th>{language === 'bn' ? 'ইংরেজি শিরোনাম' : 'English Title'}</th>
            <th>{language === 'bn' ? 'বাংলা শিরোনাম' : 'Bangla Title'}</th>
            <th>{language === 'bn' ? 'লেভেল' : 'Level'}</th>
            <th>{language === 'bn' ? 'প্রকাশিত' : 'Published'}</th>
            <th>{language === 'bn' ? 'অ্যাকশন' : 'Actions'}</th>
          </tr>
        </thead>
        <tbody>
          {chapters.map(ch => {
            const chMenus = menus.filter(m => m.chapter_id === ch.id)
            const isChOpen = expandedCh.has(ch.id)
            return (
              <tr key={ch.id} className="tr-chapter">
                <td colSpan={6}>
                  <div className="ch-row" onClick={() => toggleCh(ch.id)}>
                    <span className={`expand-icon ${isChOpen ? 'open' : ''}`}>▶</span>
                    <span className="ch-badge">{ch.chapter_number}</span>
                    <strong>{language === 'bn' && ch.title_bn ? ch.title_bn : ch.title_en}</strong>
                    <span className="count-badge">{chMenus.length} menus</span>
                  </div>
                  {isChOpen && chMenus.map(sm => {
                    const isSmOpen = expandedSm.has(sm.id)
                    const smSubMenus = subMenus.filter(s => s.side_menu_id === sm.id)
                    return (
                      <div key={sm.id} className="sm-section">
                        <div className="sm-row" onClick={() => toggleSm(sm.id)}>
                          <span className={`expand-icon-small ${isSmOpen ? 'open' : ''}`}>▶</span>
                          <span className={`sm-indicator ${sm.is_active ? '' : 'inactive'}`} />
                          {sm.label_en}
                          <span className="count-badge sm-count">{smSubMenus.length} sub</span>
                        </div>
                        {isSmOpen && (
                          <table className="lesson-sub-table">
                            <tbody>
                              {smSubMenus.map(sub => {
                                const subLessons = getLessonsForSubMenu(sub.id)
                                return (
                                  <tr key={sub.id} className="tr-submenu">
                                    <td className="td-indent">
                                      <span className={`sub-indicator ${sub.is_active ? '' : 'inactive'}`} />
                                      {sub.label_en}
                                    </td>
                                    <td>{sub.label_bn || '—'}</td>
                                    <td colSpan={2}>
                                      <div className="lesson-mini-list">
                                        {subLessons.map(l => (
                                          <div key={l.id} className="lesson-mini-item">
                                            <span className="lesson-num">{l.lesson_number}.</span>
                                            <span>{l.title_en}</span>
                                            <span className={`level-badge level-${l.level.toLowerCase()}`}>{l.level}</span>
                                            <span className={`status-dot ${l.is_published ? 'active' : ''}`} />
                                          </div>
                                        ))}
                                        {subLessons.length === 0 && (
                                          <span className="text-muted">{language === 'bn' ? 'কোনো পাঠ নেই' : 'No lessons'}</span>
                                        )}
                                      </div>
                                    </td>
                                    <td>
                                      <button
                                        className="admin-action-btn sm"
                                        onClick={() => {
                                          const l = subLessons[0]
                                          if (l) api.lessons.update(l.id, { is_published: !l.is_published } as any)
                                        }}
                                      >
                                        {subLessons.some(l => l.is_published) ? 'Unpub' : 'Pub'}
                                      </button>
                                    </td>
                                  </tr>
                                )
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
