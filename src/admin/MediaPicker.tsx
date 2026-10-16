import { useRef, useState } from 'react'
import type { Translations } from '../types'
import type { ApiUploadedFile } from './api'
import Modal from './Modal'
import { isImage, useMediaLibrary } from './useMediaLibrary'
import { EmptyState, Icon, SkeletonRows } from './ui'

/** The editor's "Insert image" dialog: pick an uploaded image (or upload one) and give it alt text. */
export default function MediaPicker({ t, onClose, onPick }: { t: Translations; onClose: () => void; onPick: (src: string, alt: string) => void }) {
  const { files, uploading, upload } = useMediaLibrary(t)
  const [selected, setSelected] = useState<ApiUploadedFile | null>(null)
  const [alt, setAlt] = useState('')
  const input = useRef<HTMLInputElement>(null)
  const images = (files ?? []).filter(isImage)

  const choose = (f: ApiUploadedFile) => { setSelected(f); setAlt(a => a || f.original_name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ')) }

  return (
    <Modal open onClose={onClose} title={t.mdChoose} size="lg">
      <div className="adm-picker-bar">
        <button className="adm-btn" onClick={() => input.current?.click()} disabled={uploading}>
          <Icon name="upload" size={15} />{uploading ? t.mdUploading : t.mdUpload}
        </button>
        <input ref={input} type="file" hidden accept="image/png,image/jpeg,image/gif,image/webp"
          onChange={async e => {
            const list = e.target.files
            e.target.value = ''
            if (list?.length) { const [first] = await upload(list); if (first) choose(first) }
          }} />
      </div>
      {!files ? <SkeletonRows rows={3} /> : images.length === 0 ? <EmptyState icon="image" text={t.mdEmpty} /> : (
        <div className="adm-picker-grid" role="listbox" aria-label={t.mdChoose}>
          {images.map(f => (
            <button key={f.id} type="button" role="option" aria-selected={selected?.id === f.id}
              className={`adm-picker-item${selected?.id === f.id ? ' selected' : ''}`} onClick={() => choose(f)} onDoubleClick={() => onPick(f.url, alt)}>
              <img src={f.url} alt="" loading="lazy" />
              <span>{f.original_name}</span>
            </button>
          ))}
        </div>
      )}
      <div className="form-grid adm-picker-alt">
        <label className="full-width">{t.mdAlt}<input value={alt} onChange={e => setAlt(e.target.value)} disabled={!selected} /></label>
      </div>
      <div className="form-actions">
        <button className="adm-btn" onClick={onClose}>{t.adminCancel}</button>
        <button className="adm-btn primary" disabled={!selected} onClick={() => selected && onPick(selected.url, alt.trim())}>{t.mdInsert}</button>
      </div>
    </Modal>
  )
}
