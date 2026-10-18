import type { OrderedLesson } from '../../context/AppContext'
import type { PublicChapter } from '../../public/publicApi'
import type { Language } from '../../types'

/** A lesson whose body is a notes-viewer marker (see viewerHtml() in server/src/db/applyNotes.ts). */
export interface NoteSet {
  item: OrderedLesson
  slug: string
  coverUrl: string | null
  isPyq: boolean
}

export interface SubjectSummary {
  chapterId: string
  number: number
  lessons: OrderedLesson[]
  noteCount: number
  hasPyq: boolean
}

const BN_DIGITS = '০১২৩৪৫৬৭৮৯'

/** Digits in the reader's language. */
export function num(n: number, lang: Language): string {
  const s = String(n)
  return lang === 'bn' ? s.replace(/\d/g, d => BN_DIGITS[Number(d)]) : s
}

/** Fills `{key}` placeholders in a translation string. */
export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => values[k] ?? '')
}

export function lessonTitle(o: OrderedLesson, lang: Language): string {
  return lang === 'bn' && o.lesson.title_bn ? o.lesson.title_bn : o.lesson.title_en
}

/** Chapter titles are stored as "16. Database Systems"; the number is shown separately. */
export function chapterTitle(o: { chapterTitleEn: string; chapterTitleBn: string | null }, lang: Language): string {
  const raw = lang === 'bn' && o.chapterTitleBn ? o.chapterTitleBn : o.chapterTitleEn
  return raw.replace(/^[\d০-৯]+\.\s*/, '')
}

function attr(html: string, name: string): string | null {
  return new RegExp(`${name}="([^"]+)"`).exec(html)?.[1] ?? null
}

export function noteSetOf(o: OrderedLesson, lang: Language): NoteSet | null {
  const content = (lang === 'bn' && o.lesson.content_bn) || o.lesson.content_en
  if (!content.includes('class="hn-viewer"')) return null
  const slug = attr(content, 'data-notes')
  if (!slug) return null
  const dir = attr(content, 'data-notes-dir')
  const noteLang = attr(content, 'data-lang') ?? lang
  return {
    item: o,
    slug,
    coverUrl: dir ? `/notes/${dir}/${slug}/${slug}.${noteLang}.note.cover.jpg` : null,
    isPyq: slug.startsWith('pyq-'),
  }
}

export function noteSets(lessons: OrderedLesson[], lang: Language): NoteSet[] {
  return lessons.map(o => noteSetOf(o, lang)).filter((n): n is NoteSet => n !== null)
}

export function subjectSummaries(chapters: PublicChapter[], lessons: OrderedLesson[], sets: NoteSet[]): SubjectSummary[] {
  const byChapter = new Map<string, SubjectSummary>()
  const numberOf = new Map(chapters.map(c => [c.id, c.chapter_number]))
  for (const o of lessons) {
    let s = byChapter.get(o.chapterId)
    if (!s) {
      s = { chapterId: o.chapterId, number: numberOf.get(o.chapterId) ?? 0, lessons: [], noteCount: 0, hasPyq: false }
      byChapter.set(o.chapterId, s)
    }
    s.lessons.push(o)
  }
  for (const n of sets) {
    const s = byChapter.get(n.item.chapterId)
    if (!s) continue
    if (n.isPyq) s.hasPyq = true
    else s.noteCount++
  }
  return Array.from(byChapter.values())
}
