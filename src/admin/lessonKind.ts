import type { ApiLesson } from './api'

export type LessonKind = 'note' | 'pyq' | 'lesson'

/** A lesson whose body is a notes-viewer marker (see viewerHtml() in server/src/db/applyNotes.ts) is a note set; `pyq-*` slugs are solved past questions. */
export function lessonKind(l: ApiLesson): LessonKind {
  if (!l.content_en.includes('class="hn-viewer"')) return 'lesson'
  const slug = /data-notes="([^"]+)"/.exec(l.content_en)?.[1]
  return slug?.startsWith('pyq-') ? 'pyq' : slug ? 'note' : 'lesson'
}
