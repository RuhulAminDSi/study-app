import { useState, useEffect } from 'react'
import { api, type ApiChapter, type ApiSideMenu } from './api'
import type { Language } from '../types'

interface AdminChaptersProps {
  language: Language
}

export default function AdminChapters({ language }: AdminChaptersProps) {
  const [chapters, setChapters] = useState<ApiChapter[]>([])
  const [menus, setMenus] = useState<ApiSideMenu[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    Promise.all([api.chapters.list(), api.menus.listWithSub()])
      .then(([ch, me]) => { setChapters(ch); setMenus(me) })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="admin-loading">Loading...</div>
  if (error) return <div className="admin-error">{error}</div>

  return (
    <div className="admin-data-table-container">
      <table className="admin-data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>{language === 'bn' ? 'শিরোনাম (EN)' : 'Title (EN)'}</th>
            <th>{language === 'bn' ? 'শিরোনাম (BN)' : 'Title (BN)'}</th>
            <th>{language === 'bn' ? 'লেভেল' : 'Level'}</th>
            <th>{language === 'bn' ? 'সাইড মেনু' : 'Side Menus'}</th>
            <th>{language === 'bn' ? 'প্রকাশিত' : 'Published'}</th>
            <th>{language === 'bn' ? 'সাজানো' : 'Sort'}</th>
            <th>{language === 'bn' ? 'অ্যাকশন' : 'Actions'}</th>
          </tr>
        </thead>
        <tbody>
          {chapters.map((ch) => {
            const chMenus = menus.filter(m => m.chapter_id === ch.id)
            return (
              <tr key={ch.id}>
                <td className="td-num">{ch.chapter_number}</td>
                <td>{ch.title_en}</td>
                <td className="td-bn">{ch.title_bn || '—'}</td>
                <td><span className={`level-badge level-${ch.level.toLowerCase()}`}>{ch.level}</span></td>
                <td>
                  <div className="menu-list">
                    {chMenus.map(m => (
                      <div key={m.id} className={`menu-tag ${m.is_active ? '' : 'inactive'}`}>
                        {m.label_en}
                        {m.sub_menus && m.sub_menus.length > 0 && (
                          <span className="sub-count">+{m.sub_menus.length}</span>
                        )}
                      </div>
                    ))}
                    {chMenus.length === 0 && <span className="text-muted">—</span>}
                  </div>
                </td>
                <td>
                  <span className={`status-dot ${ch.is_published ? 'active' : ''}`} />
                  {ch.is_published ? (language === 'bn' ? 'হ্যাঁ' : 'Yes') : (language === 'bn' ? 'না' : 'No')}
                </td>
                <td className="td-num">{ch.sort_order}</td>
                <td>
                  <button
                    className="admin-action-btn"
                    onClick={() => api.chapters.togglePublish(ch.id).then(() =>
                      setChapters(prev => prev.map(c => c.id === ch.id ? { ...c, is_published: !c.is_published } : c))
                    )}
                  >
                    {ch.is_published ? (language === 'bn' ? 'আনপাবলিশ' : 'Unpublish') : (language === 'bn' ? 'পাবলিশ' : 'Publish')}
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
