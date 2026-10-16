import { useRef, useState, type DragEvent } from 'react'
import type { Language } from '../types'
import { translations } from '../data/translations'
import type { ApiUploadedFile } from './api'
import { fill, useFeedback } from './feedback'
import { formatBytes, isImage, useMediaLibrary } from './useMediaLibrary'
import { EmptyState, Icon, IconButton, SearchBox, SkeletonRows } from './ui'

/** Admin → Media library: upload images and PDFs for lessons, copy their links, delete unused ones. */
export default function AdminMedia({ language }: { language: Language }) {
  const t = translations[language]
  const { toast, confirm } = useFeedback()
  const { files, uploading, upload, remove } = useMediaLibrary(t)
  const [q, setQ] = useState('')
  const [dragging, setDragging] = useState(false)
  const input = useRef<HTMLInputElement>(null)

  const onDrop = (e: DragEvent) => { e.preventDefault(); setDragging(false); if (e.dataTransfer.files.length) upload(e.dataTransfer.files) }
  const copy = (f: ApiUploadedFile) => {
    navigator.clipboard.writeText(new URL(f.url, window.location.origin).href).then(() => toast(t.mdCopied), () => toast(f.url))
  }
  const askRemove = async (f: ApiUploadedFile) => {
    if (await confirm({ title: t.adminConfirmDelete, body: `${f.original_name}: ${t.mdDeleteBody}`, confirmLabel: t.adminDelete, danger: true })) remove(f)
  }

  if (!files) return <SkeletonRows />
  const shown = files.filter(f => f.original_name.toLowerCase().includes(q.trim().toLowerCase()))

  return (
    <div className="adm-screen">
      <div className="adm-toolbar">
        <SearchBox value={q} onChange={setQ} placeholder={t.adminSearch} />
        <span className="adm-toolbar-note">{fill(t.mdFiles, { n: files.length })}</span>
        <button className="adm-btn primary adm-toolbar-end" onClick={() => input.current?.click()} disabled={uploading}>
          <Icon name="upload" size={15} />{uploading ? t.mdUploading : t.mdUpload}
        </button>
        <input ref={input} type="file" multiple hidden accept="image/png,image/jpeg,image/gif,image/webp,application/pdf"
          onChange={e => { if (e.target.files?.length) upload(e.target.files); e.target.value = '' }} />
      </div>

      <div className={`adm-dropzone${dragging ? ' active' : ''}`}
        onDragOver={e => { e.preventDefault(); setDragging(true) }} onDragLeave={() => setDragging(false)} onDrop={onDrop}>
        <Icon name="upload" size={18} /><span>{t.mdDrop}</span>
      </div>

      {shown.length === 0 ? (
        <div className="adm-table-card"><EmptyState icon="image" text={files.length ? t.adminNoResults : t.mdEmpty} /></div>
      ) : (
        <div className="adm-media-grid">
          {shown.map(f => (
            <figure key={f.id} className="adm-media-item">
              <a className="adm-media-thumb" href={f.url} target="_blank" rel="noreferrer" title={t.mdOpen}>
                {isImage(f) ? <img src={f.url} alt="" loading="lazy" /> : <Icon name="file" size={32} />}
              </a>
              <figcaption>
                <span className="adm-media-name" title={f.original_name}>{f.original_name}</span>
                <span className="adm-media-meta">{formatBytes(f.file_size)} · {new Date(f.created_at).toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-GB')}</span>
              </figcaption>
              <div className="adm-media-actions">
                <IconButton icon="copy" label={t.mdCopy} onClick={() => copy(f)} />
                <IconButton icon="trash" label={t.adminDelete} tone="danger" onClick={() => askRemove(f)} />
              </div>
            </figure>
          ))}
        </div>
      )}
    </div>
  )
}
