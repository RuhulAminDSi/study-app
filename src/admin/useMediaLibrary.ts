import { useCallback, useEffect, useState } from 'react'
import type { Translations } from '../types'
import { api, type ApiUploadedFile } from './api'
import { errorText } from './adminErrors'
import { useFeedback } from './feedback'

export const isImage = (f: ApiUploadedFile) => f.mime_type.startsWith('image/')

/** The uploaded-file list with upload and delete, shared by the Media screen and the editor's image picker. */
export function useMediaLibrary(t: Translations) {
  const { toast } = useFeedback()
  const [files, setFiles] = useState<ApiUploadedFile[] | null>(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    api.files.list().then(setFiles).catch(e => { toast(errorText(t, e), 'error'); setFiles([]) })
  }, [t, toast])

  /** Uploads each file in turn; returns the ones that made it. */
  const upload = useCallback(async (list: FileList | File[]) => {
    setUploading(true)
    const done: ApiUploadedFile[] = []
    try {
      for (const file of Array.from(list)) {
        try { done.push(await api.files.upload(file)) }
        catch (e) { toast(`${file.name}: ${errorText(t, e)}`, 'error') }
      }
      if (done.length) { setFiles(prev => [...done.reverse(), ...(prev ?? [])]); toast(t.mdUploaded) }
      return done
    } finally { setUploading(false) }
  }, [t, toast])

  const remove = useCallback(async (file: ApiUploadedFile) => {
    try { await api.files.delete(file.id); setFiles(prev => (prev ?? []).filter(f => f.id !== file.id)); toast(t.adminDeleted) }
    catch (e) { toast(errorText(t, e), 'error') }
  }, [t, toast])

  return { files, uploading, upload, remove }
}

export function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`
  return `${(n / 1024 / 1024).toFixed(1)} MB`
}
