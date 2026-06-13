import { useState, useEffect, useRef } from 'react'
import { api, type ApiUploadedFile } from './api'
import type { Language } from '../types'
import { translations } from '../data/translations'

const UPLOADS_BASE = 'http://localhost:3001'

const FILE_ICONS: Record<string, string> = {
  'image/png': '🖼',
  'image/jpeg': '🖼',
  'image/gif': '🖼',
  'image/webp': '🖼',
  'image/svg+xml': '🖼',
  'application/pdf': '📄',
  'application/msword': '📝',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '📝',
  'text/plain': '📃',
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

function isImage(mime: string): boolean {
  return mime.startsWith('image/')
}

interface AdminFilesProps {
  language: Language
}

export default function AdminFiles({ language }: AdminFilesProps) {
  const t = translations[language]
  const [files, setFiles] = useState<ApiUploadedFile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [copiedId, setCopiedId] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)

  function loadFiles() {
    setLoading(true)
    api.files.list()
      .then(setFiles)
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  useEffect(() => { loadFiles() }, [])

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    try {
      await api.files.upload(file)
      loadFiles()
    } catch (err: any) {
      setError(err.message)
    }
    setUploading(false)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  async function handleDelete(id: string) {
    if (!confirm(language === 'bn' ? 'মুছবেন?' : 'Delete?')) return
    try {
      await api.files.delete(id)
      setFiles(prev => prev.filter(f => f.id !== id))
    } catch (err: any) {
      setError(err.message)
    }
  }

  async function copyUrl(file: ApiUploadedFile) {
    const url = `${UPLOADS_BASE}/uploads/${file.storage_path}`
    try {
      await navigator.clipboard.writeText(url)
      setCopiedId(file.id)
      setTimeout(() => setCopiedId(''), 2000)
    } catch {
      // fallback
    }
  }

  const filtered = search
    ? files.filter(f => f.original_name.toLowerCase().includes(search.toLowerCase()))
    : files

  if (loading) return <div className="admin-loading">{t.adminLoading}</div>

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        <h2 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 600, minWidth: 0 }}>
          {language === 'bn' ? 'ফাইলসমূহ' : 'Files'}
          <span style={{ marginLeft: '0.5rem', fontSize: '0.8rem', fontWeight: 400, color: 'var(--text-dim)' }}>
            ({files.length})
          </span>
        </h2>

        <div style={{ flex: 1, minWidth: 180, maxWidth: 320 }}>
          <input
            type="text"
            placeholder={language === 'bn' ? 'ফাইল খুঁজুন...' : 'Search files...'}
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%', padding: '0.45rem 0.65rem', borderRadius: 6, border: '1px solid var(--border)',
              background: 'var(--bg)', color: 'var(--text)', fontSize: '0.82rem', outline: 'none', boxSizing: 'border-box',
            }}
          />
        </div>

        <label
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.45rem 1rem',
            borderRadius: 6, background: 'var(--accent)', color: '#fff', fontSize: '0.82rem',
            cursor: uploading ? 'not-allowed' : 'pointer', fontWeight: 500, whiteSpace: 'nowrap',
            opacity: uploading ? 0.6 : 1,
          }}
        >
          {uploading ? (language === 'bn' ? 'আপলোড হচ্ছে...' : 'Uploading...') : (language === 'bn' ? 'ফাইল আপলোড' : 'Upload File')}
          <input ref={fileInputRef} type="file" onChange={handleUpload} style={{ display: 'none' }} accept="image/*,.pdf,.doc,.docx,.txt" />
        </label>
      </div>

      {error && (
        <div style={{ padding: '0.5rem 0.75rem', background: '#fef2f2', color: '#b91c1c', borderRadius: 6, marginBottom: '1rem', fontSize: '0.82rem' }}>
          {error}
          <button onClick={() => setError('')} style={{ marginLeft: '0.75rem', background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontWeight: 600 }}>✕</button>
        </div>
      )}

      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-dim)', fontSize: '0.88rem' }}>
          {language === 'bn' ? 'কোনো ফাইল নেই' : 'No files found'}
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))', gap: '0.75rem' }}>
          {filtered.map(file => (
            <div
              key={file.id}
              style={{
                background: 'var(--bg-card)', borderRadius: 8, border: '1px solid var(--border)',
                overflow: 'hidden', display: 'flex', flexDirection: 'column',
              }}
            >
              {isImage(file.mime_type) ? (
                <div
                  style={{
                    height: 160, background: '#f5f5f5', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', overflow: 'hidden', cursor: 'pointer',
                  }}
                  onClick={() => window.open(`${UPLOADS_BASE}/uploads/${file.storage_path}`, '_blank')}
                >
                  <img
                    src={`${UPLOADS_BASE}/uploads/${file.storage_path}`}
                    alt={file.original_name}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    height: 90, background: '#f9f9f9', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '2.2rem',
                  }}
                >
                  {FILE_ICONS[file.mime_type] || '📎'}
                </div>
              )}

              <div style={{ padding: '0.65rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', flex: 1 }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={file.original_name}>
                  {file.original_name}
                </div>
                <div style={{ display: 'flex', gap: '0.65rem', fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                  <span>{formatSize(file.file_size)}</span>
                  <span>•</span>
                  <span>{formatDate(file.created_at)}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.3rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => copyUrl(file)}
                    style={{
                      padding: '0.25rem 0.55rem', fontSize: '0.72rem', borderRadius: 4, border: '1px solid var(--border)',
                      background: 'var(--bg)', color: 'var(--text)', cursor: 'pointer',
                    }}
                  >
                    {copiedId === file.id ? (language === 'bn' ? 'কপি করা হয়েছে' : 'Copied!') : (language === 'bn' ? 'URL কপি' : 'Copy URL')}
                  </button>
                  <button
                    onClick={() => window.open(`${UPLOADS_BASE}/uploads/${file.storage_path}`, '_blank')}
                    style={{
                      padding: '0.25rem 0.55rem', fontSize: '0.72rem', borderRadius: 4, border: '1px solid var(--border)',
                      background: 'var(--bg)', color: 'var(--text)', cursor: 'pointer',
                    }}
                  >
                    {language === 'bn' ? 'খুলুন' : 'Open'}
                  </button>
                  <button
                    onClick={() => handleDelete(file.id)}
                    style={{
                      padding: '0.25rem 0.55rem', fontSize: '0.72rem', borderRadius: 4, border: '1px solid #fca5a5',
                      background: '#fef2f2', color: '#b91c1c', cursor: 'pointer', marginLeft: 'auto',
                    }}
                  >
                    {language === 'bn' ? 'মুছুন' : 'Delete'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
