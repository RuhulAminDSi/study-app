import { useState, useRef, useCallback, useEffect, useMemo, type KeyboardEvent } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import { BubbleMenu, FloatingMenu } from '@tiptap/react/menus'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import { Table } from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TextAlign from '@tiptap/extension-text-align'
import Placeholder from '@tiptap/extension-placeholder'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import { TextStyle } from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import Highlight from '@tiptap/extension-highlight'
import FontFamily from '@tiptap/extension-font-family'
import CharacterCount from '@tiptap/extension-character-count'
import { common, createLowlight } from 'lowlight'
import type { Editor } from '@tiptap/core'

import { api, type ApiLesson, type ApiChapter, type ApiSideMenu } from './api'
import type { Language } from '../types'
import { translations } from '../data/translations'
import { Callout } from './extensions/Callout'
import { AnchorHeading } from './extensions/AnchorHeading'
import { MermaidBlock } from './extensions/MermaidBlock'
import { ColumnContainer, ColumnItem } from './extensions/Columns'

const lowlight = createLowlight(common)

interface ContentEditorProps {
  lesson?: ApiLesson
  language: Language
  onBack: () => void
  isNew?: boolean
  chapters?: ApiChapter[]
  menus?: ApiSideMenu[]
  lessons?: ApiLesson[]
}

type Tab = 'content_en' | 'content_bn' | 'code_en'
type ModalType = 'image' | 'link' | 'code' | 'file' | 'emoji' | null

const FONT_SIZES = ['12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px', '36px', '48px']
const FONT_FAMILIES = [
  { label: 'Sans', value: 'sans-serif' },
  { label: 'Serif', value: 'serif' },
  { label: 'Mono', value: 'monospace' },
  { label: 'Ubuntu', value: 'Ubuntu' },
  { label: 'Noto Sans', value: '"Noto Sans", sans-serif' },
  { label: 'Playfair', value: '"Playfair Display", serif' },
]

const EMOJIS = [
  '😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😋','😎','😍','🥰','😘','😗',
  '😜','😝','🤑','🤗','🤩','🤔','🤨','😐','😑','😶','😏','😒','🙄','😬','😌','😔',
  '😪','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','🥴','😵','🤯','🤠','🥳',
  '👍','👎','👊','✊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','✌️','🤟','🤘','👌',
  '❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❣️','💕','💞','💗','💖','💘',
  '⭐','🌟','✨','🔥','💯','🎯','🎉','🎊','🎈','🎁','🎀','🪄','💡','🔑','🔧','⚙️',
  '📚','📖','📝','✏️','📌','📍','🎓','🏆','🥇','🥈','🥉','🏅','🎖️','🏫','💻','🖥️',
  '📱','⌨️','🖱️','🖨️','📠','💾','💿','📀','🎥','📷','🔬','🔭','🧪','⚗️','🦠','🧬',
  '📊','📈','📉','🗂️','📁','📂','🗄️','📅','📆','✅','❌','❓','❗','➕','➖','➗',
  '✖️','🔢','🔣','🔤','🔠','🔡','🔢','🔣','🔤','🅰️','🅱️','🆎','🆑','🆒','🆓','🆔',
  '⚡','🔥','💧','🌊','🌀','🌈','☀️','🌙','⭐','🌟','☁️','⛅','⛈️','🌤️','🌥️','🌦️',
  '🐍','🐍','🦎','🐢','🦕','🦖','🐉','🌿','🍃','🍂','🍁','🌸','🌺','🌻','🌹','🌷',
]

export default function ContentEditor({ lesson, language, onBack, isNew, chapters, menus, lessons }: ContentEditorProps) {
  const t = translations[language]
  const [tab, setTab] = useState<Tab>('content_en')
  const [saving, setSaving] = useState(false)
  const [modal, setModal] = useState<ModalType>(null)
  const [imageUrl, setImageUrl] = useState('')
  const [linkUrl, setLinkUrl] = useState('')
  const [linkText, setLinkText] = useState('')
  const [preview, setPreview] = useState(false)
  const [chapterId, setChapterId] = useState('')
  const [lessonId, setLessonId] = useState('')
  const contentCache = useRef<Record<string, string>>({})
  const [uploading, setUploading] = useState(false)
  const [fileUploading, setFileUploading] = useState(false)
  const [reorder, setReorder] = useState(false)
  const [blocks, setBlocks] = useState<string[]>([])
  const [findOpen, setFindOpen] = useState(false)
  const [findText, setFindText] = useState('')
  const [replaceText, setReplaceText] = useState('')
  const [findMatches, setFindMatches] = useState<RegExpExecArray[]>([])
  const [findIndex, setFindIndex] = useState(-1)
  const findRef = useRef<HTMLInputElement>(null)
  const [dragOver, setDragOver] = useState(false)
  const [codeLang, setCodeLang] = useState('')
  const [showSlashMenu, setShowSlashMenu] = useState(false)
  const [slashSearch, setSlashSearch] = useState('')
  const slashRef = useRef<HTMLDivElement>(null)
  const [emojiSearch, setEmojiSearch] = useState('')
  const editorWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lesson) {
      const menu = menus?.find(m => m.id === lesson.side_menu_id)
      if (menu) setChapterId(menu.chapter_id)
      setLessonId(lesson.id)
    }
  }, [lesson, menus])

  useEffect(() => {
    if (isNew && lessonId && lessons) {
      const sel = lessons.find(l => l.id === lessonId)
      if (sel) {
        contentCache.current = {}
        if (sel.content_en) contentCache.current.content_en = sel.content_en
        if (sel.content_bn) contentCache.current.content_bn = sel.content_bn
        if (sel.code_en) contentCache.current.code_en = sel.code_en
      }
    }
  }, [lessonId, isNew, lessons])

  const lessonsByChapter = (chId: string) => {
    if (!chId) return []
    const menuIds = menus?.filter(m => m.chapter_id === chId).map(m => m.id) || []
    return lessons?.filter(l => menuIds.includes(l.side_menu_id)) || []
  }

  function getInitialContent(tab: Tab): string {
    const cached = contentCache.current[tab]
    if (cached !== undefined) return cached
    if (isNew) return ''
    if (!lesson) return ''
    if (tab === 'content_en') return lesson.content_en
    if (tab === 'content_bn') return lesson.content_bn || ''
    return lesson.code_en || ''
  }

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        codeBlock: false,
        link: false,
        underline: false,
      }),
      AnchorHeading.configure({ levels: [1, 2, 3, 4] }),
      Underline,
      Link.configure({ openOnClick: false }),
      Image.configure({ inline: false, allowBase64: true }),
      Table.configure({ resizable: true }),
      TableRow,
      TableCell,
      TableHeader,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({ placeholder: language === 'bn' ? 'কন্টেন্ট লিখুন...' : 'Write content...' }),
      CodeBlockLowlight.configure({ lowlight }),
      TaskList,
      TaskItem.configure({ nested: true }),
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      FontFamily,
      CharacterCount,
      Callout,
      MermaidBlock,
      ColumnContainer,
      ColumnItem,
    ],
    content: getInitialContent(tab),
    editorProps: {
      attributes: {
        class: 'tiptap-editor',
      },
    },
  })

  useEffect(() => {
    if (editor) {
      const content = getInitialContent(tab)
      editor.commands.setContent(content)
    }
  }, [tab, lesson?.id, isNew, lessonId])

  useEffect(() => {
    if (reorder && editor) {
      setBlocks(splitHtmlBlocks(editor.getHTML()))
    }
  }, [reorder])

  useEffect(() => {
    if (!editor) return

    function applyCodeBlockAttrs() {
      const editorEl = editor.view.dom
      editorEl.querySelectorAll<HTMLElement>('pre').forEach(pre => {
        const code = pre.querySelector<HTMLElement>('code')
        if (!code) return
        if (!pre.hasAttribute('data-lang')) {
          const match = Array.from(code.classList).find(c => c.startsWith('language-'))
          if (match) pre.setAttribute('data-lang', match.replace('language-', ''))
        }
      })
    }

    const txnHandler = () => applyCodeBlockAttrs()
    editor.on('transaction', txnHandler)
    applyCodeBlockAttrs()
    return () => { editor.off('transaction', txnHandler) }
  }, [editor])

  /* ── Auto-save draft ── */
  useEffect(() => {
    if (!editor || !lesson?.id) return
    const interval = setInterval(() => {
      localStorage.setItem(`draft-${lesson.id}-${tab}`, editor.getHTML())
    }, 30000)
    return () => clearInterval(interval)
  }, [editor, lesson?.id, tab])

  /* ── Restore draft on mount ── */
  useEffect(() => {
    if (!editor || !isNew || !lessonId) return
    const saved = localStorage.getItem(`draft-${lessonId}-${tab}`)
    if (saved) editor.commands.setContent(saved)
  }, [editor, isNew, lessonId, tab])

  /* ── Find & Replace logic ── */
  const runFind = useCallback(() => {
    if (!editor || !findText) { setFindMatches([]); setFindIndex(-1); return }
    const text = editor.state.doc.textContent
    const re = new RegExp(findText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
    const matches: RegExpExecArray[] = []
    let m: RegExpExecArray | null
    while ((m = re.exec(text)) !== null) matches.push(m)
    setFindMatches(matches)
    setFindIndex(matches.length > 0 ? 0 : -1)
  }, [editor, findText])

  const goToMatch = useCallback((idx: number) => {
    if (!editor || idx < 0 || idx >= findMatches.length) return
    const m = findMatches[idx]
    const { doc } = editor.state
    let pos = 0
    let remaining = m.index
    doc.descendants((node, nodePos) => {
      if (remaining <= 0) return false
      const len = node.textContent.length
      if (remaining <= len) {
        pos = nodePos + 1 + remaining
        return false
      }
      remaining -= len
      return true
    })
    editor.commands.setTextSelection({ from: pos, to: pos + m[0].length })
    editor.commands.scrollIntoView()
    setFindIndex(idx)
  }, [editor, findMatches])

  const replaceCurrent = useCallback(() => {
    if (!editor || findIndex < 0 || findIndex >= findMatches.length) return
    const m = findMatches[findIndex]
    const { from, to } = editor.state.selection
    if (from === to) {
      const pos = m.index
      editor.commands.setTextSelection({ from: pos, to: pos + m[0].length })
    }
    editor.chain().focus().deleteSelection().insertContent(replaceText).run()
    setTimeout(runFind, 100)
  }, [editor, findIndex, findMatches, replaceText, runFind])

  const replaceAll = useCallback(() => {
    if (!editor) return
    let content = editor.getHTML()
    content = content.replace(new RegExp(findText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), replaceText)
    editor.commands.setContent(content)
    setFindMatches([])
    setFindIndex(-1)
  }, [editor, findText, replaceText])

  /* ── Inline emoji shortcut ── */
  const EMOJI_MAP: Record<string, string> = useMemo(() => ({
    ':smile:': '😀', ':happy:': '😊', ':sad:': '😢', ':wink:': '😉',
    ':lol:': '😂', ':love:': '❤️', ':fire:': '🔥', ':star:': '⭐',
    ':check:': '✅', ':cross:': '❌', ':warn:': '⚠️', ':info:': 'ℹ️',
    ':arrow:': '➡️', ':back:': '⬅️', ':up:': '⬆️', ':down:': '⬇️',
    ':code:': '</>', ':book:': '📚', ':note:': '📝', ':tip:': '💡',
    ':bulb:': '💡', ':rocket:': '🚀', ':brain:': '🧠', ':target:': '🎯',
    ':trophy:': '🏆', ':gear:': '⚙️', ':link:': '🔗', ':search:': '🔍',
    ':lock:': '🔒', ':key:': '🔑', ':pencil:': '✏️', ':clip:': '📎',
    ':calc:': '📊', ':chart:': '📈', ':video:': '🎥', ':audio:': '🔊',
    ':flag:': '🚩', ':bangbang:': '❗', ':question:': '❓',
  }), [])

  useEffect(() => {
    if (!editor) return
    const handleUpdate = () => {
      const text = editor.state.doc.textContent
      for (const [shortcut, emoji] of Object.entries(EMOJI_MAP)) {
        if (text.endsWith(shortcut)) {
          const { tr } = editor.state
          const pos = tr.doc.content.size
          const from = pos - shortcut.length
          tr.replaceWith(from, pos, editor.schema.text(emoji))
          editor.view.dispatch(tr)
          break
        }
      }
    }
    editor.on('update', handleUpdate)
    return () => { editor.off('update', handleUpdate) }
  }, [editor, EMOJI_MAP])

  /* ── TOC generation ── */
  const generateToc = useCallback(() => {
    if (!editor) return
    const headings: { level: number; text: string; id: string }[] = []
    editor.state.doc.descendants((node, _pos) => {
      if (node.type.name === 'heading') {
        const id = node.attrs.id || node.textContent.toLowerCase().replace(/[^\w]+/g, '-')
        headings.push({ level: node.attrs.level as number, text: node.textContent, id })
      }
    })
    if (headings.length < 2) return
    const items = headings.map(h =>
      `<li><a href="#${h.id}" style="margin-left:${(h.level - 1) * 1.5}ch">${'  '.repeat(h.level - 1)}${h.text}</a></li>`
    ).join('')
    editor.chain().focus().insertContent(`<div class="toc-block"><h4>📑 Table of Contents</h4><ul>${items}</ul></div>`).run()
  }, [editor])

  useEffect(() => {
    if (!editor) return
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === '/' && (e.target as HTMLElement).closest('.ProseMirror')) {
        const { selection } = editor.state
        const parent = selection.$from.parent
        if (parent.type.name === 'paragraph' && parent.content.size === 0) {
          e.preventDefault()
          setShowSlashMenu(true)
          setSlashSearch('')
        }
      }
      if (e.key === 'Escape') setShowSlashMenu(false)
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault()
        setFindOpen(p => !p)
        setTimeout(() => findRef.current?.focus(), 100)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [editor])

  useEffect(() => {
    if (!showSlashMenu) return
    const handler = (e: MouseEvent) => {
      if (slashRef.current && !slashRef.current.contains(e.target as Node)) {
        setShowSlashMenu(false)
      }
    }
    setTimeout(() => document.addEventListener('mousedown', handler), 0)
    return () => document.removeEventListener('mousedown', handler)
  }, [showSlashMenu])

  useEffect(() => {
    if (!preview) return
    const timer = setTimeout(() => {
      const body = document.querySelector('.ce-preview-body')
      if (!body) return
      body.querySelectorAll<HTMLElement>('pre').forEach(pre => {
        const code = pre.querySelector('code')
        if (!code) return
        const match = Array.from(code.classList).find(c => c.startsWith('language-'))
        if (match && !pre.hasAttribute('data-lang')) {
          pre.setAttribute('data-lang', match.replace('language-', ''))
        }
        if (!pre.querySelector('.ce-preview-copy-btn')) {
          const btn = document.createElement('button')
          btn.className = 'ce-preview-copy-btn'
          btn.textContent = 'Copy'
          btn.addEventListener('click', e => {
            e.stopPropagation()
            navigator.clipboard.writeText(code.textContent || '')
            btn.textContent = 'Copied!'
            setTimeout(() => { btn.textContent = 'Copy' }, 2000)
          })
          pre.appendChild(btn)
        }
      })
    }, 50)
    return () => clearTimeout(timer)
  }, [preview, tab, editor])

  function splitHtmlBlocks(html: string): string[] {
    const div = document.createElement('div')
    div.innerHTML = html
    const result: string[] = []
    for (const child of Array.from(div.childNodes)) {
      if (child.nodeType === 3) {
        const text = child.textContent?.trim()
        if (text) result.push(text)
      } else if (child.nodeType === 1) {
        result.push((child as HTMLElement).outerHTML)
      }
    }
    if (!result.length) result.push('')
    return result
  }

  const getContent = useCallback(() => {
    return editor?.getHTML() || ''
  }, [editor])

  function execAction(fn: (chain: ReturnType<Editor['chain']>) => ReturnType<Editor['chain']>) {
    if (!editor) return
    fn(editor.chain().focus()).run()
  }

  function insertTable() {
    execAction(c => c.insertTable({ rows: 3, cols: 3, withHeaderRow: false }))
  }

  function openImageModal() {
    setImageUrl('')
    setModal('image')
  }

  function confirmImage() {
    if (imageUrl && editor) {
      editor.chain().focus().setImage({ src: imageUrl }).run()
      setModal(null)
      setImageUrl('')
    }
  }

  function handleImageTabChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === 'upload') {
      setImageUrl('__upload__')
    } else {
      setImageUrl('')
    }
  }

  async function uploadImage(file: File) {
    setUploading(true)
    try {
      const result = await api.files.upload(file)
      const url = `http://localhost:3001/uploads/${result.storage_path}`
      editor?.chain().focus().setImage({ src: url }).run()
      setModal(null)
    } catch (e: any) {
      alert(e.message)
    } finally {
      setUploading(false)
      setImageUrl('')
    }
  }

  async function uploadFile(file: File) {
    setFileUploading(true)
    try {
      const result = await api.files.upload(file)
      const url = `http://localhost:3001/uploads/${result.storage_path}`
      const name = result.original_name || file.name
      const ext = name.split('.').pop()?.toLowerCase()
      const icon = ['jpg','jpeg','png','gif','webp','svg'].includes(ext || '') ? '🖼️' :
                   ['pdf'].includes(ext || '') ? '📄' :
                   ['doc','docx'].includes(ext || '') ? '📝' :
                   ['xls','xlsx'].includes(ext || '') ? '📊' :
                   ['zip','rar','7z'].includes(ext || '') ? '🗜️' : '📎'
      editor?.chain().focus().insertContent(`<p><a href="${url}" target="_blank" rel="noopener">${icon} ${name}</a></p>`).run()
      setModal(null)
    } catch (e: any) {
      alert(e.message)
    } finally {
      setFileUploading(false)
    }
  }

  async function handleFileDrop(e: React.DragEvent) {
    e.preventDefault()
    const files = Array.from(e.dataTransfer.files)
    for (const file of files) {
      try {
        const result = await api.files.upload(file)
        const url = `http://localhost:3001/uploads/${result.storage_path}`
        const name = result.original_name || file.name
        if (file.type.startsWith('image/')) {
          editor?.chain().focus().setImage({ src: url }).run()
        } else {
          const ext = name.split('.').pop()?.toLowerCase()
          const icon = ['jpg','jpeg','png','gif','webp','svg'].includes(ext || '') ? '🖼️' :
                       ['pdf'].includes(ext || '') ? '📄' :
                       ['doc','docx'].includes(ext || '') ? '📝' : '📎'
          editor?.chain().focus().insertContent(`<p><a href="${url}" target="_blank" rel="noopener">${icon} ${name}</a></p>`).run()
        }
      } catch (e: any) {
        alert(`Upload failed: ${file.name} — ${e.message}`)
      }
    }
  }

  function openLinkModal() {
    const { from, to } = editor?.state.selection || { from: 0, to: 0 }
    const selectedText = editor ? editor.state.doc.textBetween(from, to) : ''
    setLinkText(selectedText || '')
    setLinkUrl('')
    setModal('link')
  }

  function confirmLink() {
    if (linkUrl && editor) {
      if (linkText && editor.state.selection.empty) {
        editor.chain().focus().insertContent(`<a href="${linkUrl}">${linkText}</a>`).run()
      } else {
        editor.chain().focus().setLink({ href: linkUrl }).run()
      }
      setModal(null)
      setLinkUrl('')
      setLinkText('')
    }
  }

  function openCodeModal() {
    setCodeLang('')
    setModal('code')
  }

  function insertCodeBlock() {
    if (!editor) return
    editor.chain().focus().setCodeBlock({ language: codeLang || 'plaintext' }).insertContent('// write your code here').run()
    setModal(null)
    setCodeLang('')
  }

  function insertHr() {
    execAction(c => c.setHorizontalRule())
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault()
      handleSave()
    }
  }

  async function handleSave() {
    setSaving(true)
    try {
      const targetId = isNew ? lessonId : lesson?.id
      const sel = lessons?.find(l => l.id === lessonId)
      if (!sel || !targetId) {
        alert(language === 'bn' ? 'একটি পাঠ নির্বাচন করুন' : 'Select a lesson')
        setSaving(false)
        return
      }

      if (editor) contentCache.current[tab] = editor.getHTML()

      const body: Record<string, any> = {}
      body.content_en = contentCache.current.content_en ?? ''
      body.content_bn = contentCache.current.content_bn ?? null
      body.code_en = contentCache.current.code_en ?? null
      body.lesson_number = sel.lesson_number
      body.chapter_id = chapterId
      const menu = menus?.find(m => m.chapter_id === chapterId)
      if (menu) body.side_menu_id = menu.id

      await api.lessons.update(targetId, body as any)
      onBack()
    } catch (e: any) {
      alert(e.message)
    } finally {
      setSaving(false)
    }
  }

  function enterReorderMode() {
    if (!editor) return
    contentCache.current[tab] = editor.getHTML()
    setBlocks(splitHtmlBlocks(editor.getHTML()))
    setReorder(true)
  }

  function exitReorderMode() {
    const html = blocks.filter(b => b).join('\n')
    contentCache.current[tab] = html
    editor?.commands.setContent(html)
    setReorder(false)
  }

  function moveBlock(idx: number, dir: -1 | 1) {
    const t = idx + dir
    if (t < 0 || t >= blocks.length) return
    const next = [...blocks]
    ;[next[idx], next[t]] = [next[t], next[idx]]
    setBlocks(next)
  }

  function hasActive(name: string | Record<string, string>, attrs?: Record<string, string>): boolean {
    if (!editor) return false
    if (typeof name === 'string') {
      return editor.isActive(name, attrs)
    }
    return editor.isActive(name)
  }

  function setFontSize(size: string) {
    if (!editor) return
    editor.chain().focus().setMark('textStyle', { fontSize: size }).run()
  }

  function setFontFamily(family: string) {
    if (!editor) return
    editor.chain().focus().setFontFamily(family).run()
  }

  function setColor(color: string) {
    if (!editor) return
    editor.chain().focus().setColor(color).run()
  }

  function setHighlight(color?: string) {
    if (!editor) return
    if (color) {
      editor.chain().focus().toggleHighlight({ color }).run()
    } else {
      editor.chain().focus().toggleHighlight().run()
    }
  }

  function setImageWidth(width: string) {
    if (!editor) return
    editor.chain().focus().updateAttributes('image', { width }).run()
  }

  function insertEmoji(emoji: string) {
    if (!editor) return
    editor.chain().focus().insertContent(emoji).run()
    setModal(null)
  }

  const slashCommands = [
    { name: 'Paragraph', icon: '¶', action: () => execAction(c => c.setParagraph()) },
    { name: 'Heading 1', icon: 'H1', action: () => execAction(c => c.toggleHeading({ level: 1 })) },
    { name: 'Heading 2', icon: 'H2', action: () => execAction(c => c.toggleHeading({ level: 2 })) },
    { name: 'Heading 3', icon: 'H3', action: () => execAction(c => c.toggleHeading({ level: 3 })) },
    { name: 'Bullet List', icon: '☰', action: () => execAction(c => c.toggleBulletList()) },
    { name: 'Numbered List', icon: '#', action: () => execAction(c => c.toggleOrderedList()) },
    { name: 'Task List', icon: '☐', action: () => execAction(c => c.toggleTaskList()) },
    { name: 'Blockquote', icon: '❝', action: () => execAction(c => c.toggleBlockquote()) },
    { name: 'Code Block', icon: '</>', action: () => execAction(c => c.setCodeBlock()) },
    { name: 'Callout', icon: '💬', action: () => execAction(c => (c as any).setCallout?.('info') ?? c.insertContent('<div data-callout="info"><p></p></div>')) },
    { name: 'Mermaid', icon: '📊', action: () => execAction(c => (c as any).setMermaidBlock?.() ?? c.insertContent('<div data-mermaid>graph TD\n  A-->B</div>')) },
    { name: 'Columns', icon: '📰', action: () => execAction(c => (c as any).setColumns?.(2) ?? c.insertContent('<div data-columns="2"><div data-column><p>Left</p></div><div data-column><p>Right</p></div></div>')) },
    { name: 'Table of Contents', icon: '📑', action: generateToc },
    { name: 'Table', icon: '⊞', action: insertTable },
    { name: 'Divider', icon: '—', action: insertHr },
    { name: 'Image', icon: '🖼', action: openImageModal },
    { name: 'Emoji', icon: '😊', action: () => setModal('emoji') },
  ]

  const filteredSlash = slashCommands.filter(cmd =>
    cmd.name.toLowerCase().includes(slashSearch.toLowerCase()),
  )

  const filteredEmojis = emojiSearch
    ? EMOJIS.filter(e => e.includes(emojiSearch))
    : EMOJIS

  const [codeBlocks, setCodeBlocks] = useState<{ idx: number; lang: string; top: number; left: number; width: number; text: string }[]>([])

  useEffect(() => {
    if (!editor || !editorWrapperRef.current) return
    const wrapper = editorWrapperRef.current
    function updatePositions() {
      const wrapperRect = wrapper.getBoundingClientRect()
      const editorEl = editor.view.dom
      const scrollTop = wrapper.scrollTop || 0
      const blocks: typeof codeBlocks = []
      let idx = 0
      editorEl.querySelectorAll<HTMLElement>('pre').forEach(pre => {
        const code = pre.querySelector<HTMLElement>('code')
        if (!code) return
        const rect = pre.getBoundingClientRect()
        const match = Array.from(code.classList).find(c => c.startsWith('language-'))
        const lang = match ? match.replace('language-', '') : 'code'
        blocks.push({
          idx: idx++,
          lang,
          top: rect.top - wrapperRect.top + scrollTop + 4,
          left: rect.right - wrapperRect.left - 80,
          width: rect.width,
          text: code.textContent || '',
        })
      })
      setCodeBlocks(blocks)
    }
    editor.on('transaction', updatePositions)
    updatePositions()
    wrapper.addEventListener('scroll', updatePositions)
    return () => {
      editor.off('transaction', updatePositions)
      wrapper.removeEventListener('scroll', updatePositions)
    }
  }, [editor])

  return (
    <div className="content-editor">
      <div className="ce-header">
        <button className="admin-action-btn" onClick={onBack}>← {t.adminBackEditor}</button>
        <h3>{isNew ? (language === 'bn' ? 'কন্টেন্ট যোগ করুন' : 'Add Content') : lesson!.title_en}</h3>
        <button
          className={`admin-action-btn ${preview ? 'primary' : ''}`}
          onClick={() => setPreview(p => !p)}
          style={{ marginLeft: 'auto' }}
        >
          {preview ? '✏️ Edit' : '👁 Preview'}
        </button>
        <button className="admin-action-btn primary" onClick={handleSave} disabled={saving}>
          {saving ? '...' : t.adminSave}
        </button>
      </div>

      <div className="ce-create-form">
        <div className="ce-create-row">
          <div className="ce-create-field">
            <label>{t.adminChapter}</label>
            <select value={chapterId} onChange={e => { setChapterId(e.target.value); setLessonId('') }}>
              <option value="">-- {language === 'bn' ? 'অধ্যায় নির্বাচন করুন' : 'Select Chapter'} --</option>
              {chapters?.map(ch => (
                <option key={ch.id} value={ch.id}>
                  {language === 'bn' && ch.title_bn ? ch.title_bn : ch.title_en}
                </option>
              ))}
            </select>
          </div>
          <div className="ce-create-field">
            <label>{t.lesson}</label>
            <select value={lessonId} onChange={e => setLessonId(e.target.value)} disabled={!chapterId}>
              {!isNew && lesson ? null : <option value="">-- {language === 'bn' ? 'পাঠ নির্বাচন করুন' : 'Select Lesson'} --</option>}
              {lessonsByChapter(chapterId).map(l => (
                <option key={l.id} value={l.id}>
                  {l.title_en}{l.title_bn ? ` (${l.title_bn})` : ''}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="ce-tabs">
        {(['content_en', 'content_bn', 'code_en'] as Tab[]).map(tabKey => (
          <button key={tabKey} className={`ce-tab ${tab === tabKey ? 'active' : ''}`} onClick={() => {
            if (editor) contentCache.current[tab] = editor.getHTML()
            setTab(tabKey)
          }}>
            {tabKey === 'content_en' ? t.adminContentEn : tabKey === 'content_bn' ? t.adminContentBn : t.adminCode}
          </button>
        ))}
      </div>

      {preview ? (
        <div className="ce-preview">
          <div className="ce-preview-body" dangerouslySetInnerHTML={{ __html: getContent() }} />
        </div>
      ) : (
        <>
          {!reorder && (
            <div className="ce-toolbar">
              <button onClick={() => execAction(c => c.toggleBold())} data-active={hasActive('bold')} title="Bold"><b>B</b></button>
              <button onClick={() => execAction(c => c.toggleItalic())} data-active={hasActive('italic')} title="Italic"><i>I</i></button>
              <button onClick={() => execAction(c => c.toggleUnderline())} data-active={hasActive('underline')} title="Underline"><u>U</u></button>
              <button onClick={() => execAction(c => c.toggleStrike())} data-active={hasActive('strike')} title="Strikethrough"><s>S</s></button>
              <span className="ce-sep" />

              <button onClick={() => execAction(c => c.toggleHeading({ level: 1 }))} data-active={hasActive('heading', { level: '1' })} title="Heading 1">H1</button>
              <button onClick={() => execAction(c => c.toggleHeading({ level: 2 }))} data-active={hasActive('heading', { level: '2' })} title="Heading 2">H2</button>
              <button onClick={() => execAction(c => c.toggleHeading({ level: 3 }))} data-active={hasActive('heading', { level: '3' })} title="Heading 3">H3</button>
              <button onClick={() => execAction(c => c.toggleHeading({ level: 4 }))} data-active={hasActive('heading', { level: '4' })} title="Heading 4">H4</button>
              <button onClick={() => execAction(c => c.setParagraph())} data-active={hasActive('paragraph')} title="Paragraph">¶</button>
              <span className="ce-sep" />

              <select className="ce-font-select" onChange={e => setFontFamily(e.target.value)} defaultValue="">
                <option value="" disabled>Font</option>
                {FONT_FAMILIES.map(f => (
                  <option key={f.value} value={f.value}>{f.label}</option>
                ))}
              </select>
              <select className="ce-font-select" onChange={e => setFontSize(e.target.value)} defaultValue="">
                <option value="" disabled>Size</option>
                {FONT_SIZES.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <input
                type="color"
                className="ce-color-picker"
                onChange={e => setColor(e.target.value)}
                title="Text color"
                value="#fafafa"
              />
              <input
                type="color"
                className="ce-color-picker"
                onChange={e => setHighlight(e.target.value)}
                title="Highlight color"
                value="#f59e0b"
              />
              <span className="ce-sep" />

              <button onClick={() => execAction(c => c.toggleBulletList())} data-active={hasActive('bulletList')} title="Bullet list">☰</button>
              <button onClick={() => execAction(c => c.toggleOrderedList())} data-active={hasActive('orderedList')} title="Numbered list">#</button>
              <button onClick={() => execAction(c => c.toggleTaskList())} data-active={hasActive('taskList')} title="Task list">☐</button>
              <span className="ce-sep" />

              <button onClick={() => execAction(c => c.setTextAlign('left'))} data-active={hasActive({ textAlign: 'left' })} title="Align left">⬅</button>
              <button onClick={() => execAction(c => c.setTextAlign('center'))} data-active={hasActive({ textAlign: 'center' })} title="Align center">⬡</button>
              <button onClick={() => execAction(c => c.setTextAlign('right'))} data-active={hasActive({ textAlign: 'right' })} title="Align right">➡</button>
              <span className="ce-sep" />

              {editor?.isActive('table') && (
                <>
                  <button onClick={() => execAction(c => c.addRowAfter())} title="Add row">+Row</button>
                  <button onClick={() => execAction(c => c.deleteRow())} title="Delete row">-Row</button>
                  <button onClick={() => execAction(c => c.addColumnAfter())} title="Add column">+Col</button>
                  <button onClick={() => execAction(c => c.deleteColumn())} title="Delete column">-Col</button>
                  <button onClick={() => execAction(c => c.deleteTable())} title="Delete table">✕Tbl</button>
                  <span className="ce-sep" />
                </>
              )}

              {editor?.isActive('image') && (
                <>
                  <button onClick={() => setImageWidth('200px')} title="Small 200px">S</button>
                  <button onClick={() => setImageWidth('400px')} title="Medium 400px">M</button>
                  <button onClick={() => setImageWidth('600px')} title="Large 600px">L</button>
                  <button onClick={() => setImageWidth('100%')} title="Full width">Full</button>
                  <button onClick={() => setImageWidth('')} title="Original">Orig</button>
                  <span className="ce-sep" />
                </>
              )}

              {editor?.isActive('codeBlock') && (() => {
                const { selection } = editor.state
                const node = selection.$from.node()
                const lang = node?.attrs?.language || 'plaintext'
                return (
                  <>
                    <span className="ce-code-lang-badge">{lang}</span>
                    <button onClick={() => {
                      if (!editor) return
                      const { selection } = editor.state
                      const node = selection.$from.node()
                      if (node?.textContent) {
                        navigator.clipboard.writeText(node.textContent)
                      }
                    }} title="Copy code">📋</button>
                    <select className="ce-font-select" value={lang} onChange={e => {
                      if (editor) {
                        editor.chain().focus().updateAttributes('codeBlock', { language: e.target.value }).run()
                      }
                    }} style={{ fontSize: '0.7rem' }}>
                      <option value="plaintext">Plain</option>
                      <option value="javascript">JavaScript</option>
                      <option value="typescript">TypeScript</option>
                      <option value="python">Python</option>
                      <option value="java">Java</option>
                      <option value="cpp">C++</option>
                      <option value="csharp">C#</option>
                      <option value="go">Go</option>
                      <option value="rust">Rust</option>
                      <option value="php">PHP</option>
                      <option value="html">HTML</option>
                      <option value="css">CSS</option>
                      <option value="sql">SQL</option>
                      <option value="bash">Bash</option>
                      <option value="json">JSON</option>
                      <option value="yaml">YAML</option>
                    </select>
                    <span className="ce-sep" />
                  </>
                )
              })()}

              <button onClick={insertTable} title="Table">⊞</button>
              <button onClick={openCodeModal} title="Code block">&lt;/&gt;</button>
              <button onClick={() => execAction(c => c.toggleBlockquote())} data-active={hasActive('blockquote')} title="Blockquote">❝</button>
              <button onClick={insertHr} title="Horizontal rule">—</button>
              <button onClick={() => execAction(c => (c as any).setCallout?.('info') ?? c.insertContent('<div data-callout="info"><p></p></div>'))} title="Callout/Alert">💬</button>
              <button onClick={() => execAction(c => (c as any).setMermaidBlock?.() ?? c.insertContent('<div data-mermaid>graph TD\n  A-->B</div>'))} title="Mermaid diagram">📊</button>
              <button onClick={() => execAction(c => (c as any).setColumns?.(2) ?? c.insertContent('<div data-columns="2"><div data-column><p>Left</p></div><div data-column><p>Right</p></div></div>'))} title="Columns">📰</button>
              <button onClick={() => setModal('emoji')} title="Emoji / Icon">😊</button>
              <span className="ce-sep" />

              <button onClick={openImageModal} title="Image">🖼</button>
              <button onClick={openLinkModal} title="Link">🔗</button>
              <button onClick={() => setModal('file')} title="Attach file">📎</button>
              <span className="ce-sep" />

              <button onClick={() => execAction(c => c.undo())} title="Undo">↩</button>
              <button onClick={() => execAction(c => c.redo())} title="Redo">↪</button>
              <span className="ce-sep" />
              <button onClick={() => { setFindOpen(p => !p); setTimeout(() => findRef.current?.focus(), 100) }} title="Find & Replace (Ctrl+F)" data-active={findOpen}>🔍</button>
              <span className="ce-sep" />
              <button onClick={enterReorderMode} title="Reorder blocks">⇅</button>
            </div>
          )}

          {findOpen && (
            <div className="ce-findbar">
              <input
                ref={findRef}
                className="ce-find-input"
                type="text"
                placeholder="Find..."
                value={findText}
                onChange={e => { setFindText(e.target.value); setTimeout(runFind, 50) }}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    if (findMatches.length > 0) goToMatch(findIndex >= 0 ? (findIndex + 1) % findMatches.length : 0)
                  }
                }}
              />
              {findMatches.length > 0 && (
                <span className="ce-find-count">{findIndex + 1}/{findMatches.length}</span>
              )}
              <button className="ce-find-nav" onClick={() => goToMatch(Math.max(0, findIndex - 1))} disabled={findIndex <= 0}>▲</button>
              <button className="ce-find-nav" onClick={() => goToMatch((findIndex + 1) % findMatches.length)} disabled={findIndex < 0}>▼</button>
              <input
                className="ce-find-input ce-replace-input"
                type="text"
                placeholder="Replace..."
                value={replaceText}
                onChange={e => setReplaceText(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') { e.preventDefault(); replaceCurrent() }
                }}
              />
              <button className="ce-find-action" onClick={replaceCurrent} disabled={findIndex < 0}>Rpl</button>
              <button className="ce-find-action" onClick={replaceAll} disabled={!findText}>All</button>
              <button className="ce-find-close" onClick={() => setFindOpen(false)}>✕</button>
            </div>
          )}

          {editor && !reorder && (
            <>
              <BubbleMenu editor={editor}>
                <div className="ce-bubble-menu">
                  <button onClick={() => execAction(c => c.toggleBold())} data-active={hasActive('bold')}><b>B</b></button>
                  <button onClick={() => execAction(c => c.toggleItalic())} data-active={hasActive('italic')}><i>I</i></button>
                  <button onClick={() => execAction(c => c.toggleUnderline())} data-active={hasActive('underline')}><u>U</u></button>
                  <button onClick={() => execAction(c => c.toggleStrike())} data-active={hasActive('strike')}><s>S</s></button>
                  <span className="ce-sep" />
                  <input
                    type="color"
                    className="ce-bubble-color"
                    onChange={e => setColor(e.target.value)}
                    title="Text color"
                    value="#fafafa"
                  />
                  <input
                    type="color"
                    className="ce-bubble-color"
                    onChange={e => setHighlight(e.target.value)}
                    title="Highlight"
                    value="#f59e0b"
                  />
                  <span className="ce-sep" />
                  <button onClick={openLinkModal} title="Link">🔗</button>
                  <button onClick={() => execAction(c => c.unsetLink())} data-active={hasActive('link')} title="Remove link">✂</button>
                  <span className="ce-sep" />
                  <select className="ce-bubble-select" onChange={e => {
                    const v = e.target.value
                    if (v === 'p') execAction(c => c.setParagraph())
                    else if (v.startsWith('h')) execAction(c => c.toggleHeading({ level: Number(v[1]) as 1|2|3|4 }))
                  }} defaultValue="">
                    <option value="" disabled>Style</option>
                    <option value="p">Paragraph</option>
                    <option value="h1">H1</option>
                    <option value="h2">H2</option>
                    <option value="h3">H3</option>
                    <option value="h4">H4</option>
                  </select>
                </div>
              </BubbleMenu>

              <FloatingMenu editor={editor}>
                <div className="ce-floating-menu">
                  <button onClick={() => execAction(c => c.toggleHeading({ level: 1 }))} title="Heading 1">H1</button>
                  <button onClick={() => execAction(c => c.toggleHeading({ level: 2 }))} title="Heading 2">H2</button>
                  <button onClick={() => execAction(c => c.toggleBulletList())} title="Bullet list">☰</button>
                  <button onClick={insertTable} title="Table">⊞</button>
                  <button onClick={() => execAction(c => c.setCodeBlock())} title="Code">&lt;/&gt;</button>
                  <button onClick={() => execAction(c => c.toggleBlockquote())} title="Quote">❝</button>
                  <button onClick={insertHr} title="Divider">—</button>
                  <button onClick={openImageModal} title="Image">🖼</button>
                </div>
              </FloatingMenu>
            </>
          )}

          {reorder ? (
            <div className="ce-reorder-panel">
              {blocks.map((block, i) => (
                <div key={i} className="ce-reorder-block">
                  <div className="ce-reorder-controls">
                    <button onClick={() => moveBlock(i, -1)} disabled={i === 0} title="Move up">▲</button>
                    <span className="ce-reorder-num">{i + 1}</span>
                    <button onClick={() => moveBlock(i, 1)} disabled={i === blocks.length - 1} title="Move down">▼</button>
                  </div>
                  <div className="ce-reorder-content">
                    <div className="ce-reorder-tag">{block.replace(/<([^\s>]+).*/, '<$1>')}</div>
                    <div className="ce-reorder-preview" dangerouslySetInnerHTML={{ __html: block }} />
                  </div>
                </div>
              ))}
              <button className="admin-action-btn primary" onClick={exitReorderMode} style={{ marginTop: '0.75rem' }}>
                {language === 'bn' ? 'সম্পন্ন' : 'Done'}
              </button>
            </div>
          ) : (
            <div
              className={`ce-editor-wrapper${dragOver ? ' ce-editor-dragover' : ''}`}
              ref={editorWrapperRef}
              onDragOver={e => { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; setDragOver(true) }}
              onDragLeave={() => setDragOver(false)}
              onDrop={e => { e.preventDefault(); setDragOver(false); handleFileDrop(e) }}
              onKeyDown={handleKeyDown}
            >
              <EditorContent editor={editor} />
              {codeBlocks.map(b => (
                <button
                  key={b.idx}
                  className="ce-copy-code-btn"
                  style={{
                    position: 'absolute',
                    top: b.top,
                    left: b.left,
                    zIndex: 50,
                  }}
                  onClick={e => {
                    e.stopPropagation()
                    const btn = e.currentTarget
                    navigator.clipboard.writeText(b.text)
                    btn.textContent = 'Copied!'
                    btn.classList.add('copied')
                    setTimeout(() => {
                      btn.textContent = 'Copy'
                      btn.classList.remove('copied')
                    }, 2000)
                  }}
                >
                  Copy
                </button>
              ))}
            </div>
          )}
        </>
      )}

      {showSlashMenu && (
        <div className="ce-slash-menu" ref={slashRef}>
          <div className="ce-slash-search">
            <input
              type="text"
              placeholder={language === 'bn' ? 'কমান্ড খুঁজুন...' : 'Search command...'}
              value={slashSearch}
              onChange={e => setSlashSearch(e.target.value)}
              autoFocus
            />
          </div>
          <div className="ce-slash-list">
            {filteredSlash.map((cmd, i) => (
              <div key={i} className="ce-slash-item" onClick={() => {
                cmd.action()
                setShowSlashMenu(false)
                editor?.chain().focus().run()
              }}>
                <span className="ce-slash-icon">{cmd.icon}</span>
                <span className="ce-slash-name">{cmd.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Emoji / Icon Picker Modal */}
      {modal === 'emoji' && (
        <div className="ce-modal-overlay" onClick={() => setModal(null)}>
          <div className="ce-modal ce-modal-emoji" onClick={e => e.stopPropagation()}>
            <div className="ce-modal-header">
              <h4>{language === 'bn' ? 'ইমোজি / আইকন' : 'Emoji / Icon'}</h4>
              <button className="ce-modal-close" onClick={() => setModal(null)}>✕</button>
            </div>
            <div className="ce-modal-body">
              <input
                type="text"
                placeholder={language === 'bn' ? 'খুঁজুন...' : 'Search...'}
                value={emojiSearch}
                onChange={e => setEmojiSearch(e.target.value)}
                className="ce-emoji-search"
                autoFocus
              />
              <div className="ce-emoji-grid">
                {filteredEmojis.map((emoji, i) => (
                  <button
                    key={i}
                    className="ce-emoji-item"
                    onClick={() => insertEmoji(emoji)}
                    title={emoji}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {modal === 'image' && (
        <div className="ce-modal-overlay" onClick={() => { if (!uploading) setModal(null) }}>
          <div className="ce-modal" onClick={e => e.stopPropagation()}>
            <div className="ce-modal-header">
              <h4>{language === 'bn' ? 'ছবি যোগ করুন' : 'Insert Image'}</h4>
              <button className="ce-modal-close" onClick={() => { if (!uploading) setModal(null) }}>✕</button>
            </div>
            <div className="ce-modal-body">
              <div className="ce-image-tabs">
                <label>
                  <input type="radio" name="imageSrc" value="url" defaultChecked onChange={handleImageTabChange} />
                  URL
                </label>
                <label>
                  <input type="radio" name="imageSrc" value="upload" onChange={handleImageTabChange} />
                  {language === 'bn' ? 'আপলোড' : 'Upload'}
                </label>
              </div>

              {imageUrl !== '__upload__' ? (
                <>
                  <label style={{ marginTop: '0.75rem', display: 'block' }}>{language === 'bn' ? 'ছবির URL' : 'Image URL'}</label>
                  <input
                    type="url"
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    autoFocus
                  />
                </>
              ) : (
                <>
                  <label style={{ marginTop: '0.75rem', display: 'block' }}>{language === 'bn' ? 'ছবি নির্বাচন করুন' : 'Choose Image'}</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={e => { const f = e.target.files?.[0]; if (f) uploadImage(f) }}
                    disabled={uploading}
                  />
                  {uploading && <p className="ce-modal-hint">{language === 'bn' ? 'আপলোড হচ্ছে...' : 'Uploading...'}</p>}
                </>
              )}
            </div>
            <div className="ce-modal-footer">
              <button className="admin-action-btn" onClick={() => { if (!uploading) setModal(null) }}>{t.adminCancel}</button>
              {imageUrl !== '__upload__' && (
                <button className="admin-action-btn primary" onClick={confirmImage} disabled={!imageUrl}>
                  {t.adminAdd}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Link Modal */}
      {modal === 'link' && (
        <div className="ce-modal-overlay" onClick={() => setModal(null)}>
          <div className="ce-modal" onClick={e => e.stopPropagation()}>
            <div className="ce-modal-header">
              <h4>{language === 'bn' ? 'লিঙ্ক যোগ করুন' : 'Insert Link'}</h4>
              <button className="ce-modal-close" onClick={() => setModal(null)}>✕</button>
            </div>
            <div className="ce-modal-body">
              <label>{language === 'bn' ? 'লিঙ্ক URL' : 'Link URL'}</label>
              <input
                type="url"
                value={linkUrl}
                onChange={e => setLinkUrl(e.target.value)}
                placeholder="https://example.com"
                autoFocus
              />
              <label style={{ marginTop: '0.75rem' }}>{language === 'bn' ? 'লিঙ্ক টেক্সট' : 'Link Text'}</label>
              <input
                type="text"
                value={linkText}
                onChange={e => setLinkText(e.target.value)}
                placeholder={language === 'bn' ? 'এখানে ক্লিক করুন' : 'Click here'}
              />
            </div>
            <div className="ce-modal-footer">
              <button className="admin-action-btn" onClick={() => setModal(null)}>{t.adminCancel}</button>
              <button className="admin-action-btn primary" onClick={confirmLink} disabled={!linkUrl}>
                {t.adminAdd}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Code Block Modal */}
      {modal === 'code' && (
        <div className="ce-modal-overlay" onClick={() => setModal(null)}>
          <div className="ce-modal" onClick={e => e.stopPropagation()}>
            <div className="ce-modal-header">
              <h4>{language === 'bn' ? 'কোড ব্লক যোগ করুন' : 'Insert Code Block'}</h4>
              <button className="ce-modal-close" onClick={() => setModal(null)}>✕</button>
            </div>
            <div className="ce-modal-body">
              <label>{language === 'bn' ? 'প্রোগ্রামিং ভাষা (ঐচ্ছিক)' : 'Language (optional)'}</label>
              <select value={codeLang} onChange={e => setCodeLang(e.target.value)}>
                <option value="">{language === 'bn' ? 'কোনোটিই নয়' : 'None'}</option>
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="cpp">C++</option>
                <option value="csharp">C#</option>
                <option value="go">Go</option>
                <option value="rust">Rust</option>
                <option value="php">PHP</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="sql">SQL</option>
                <option value="bash">Bash</option>
                <option value="json">JSON</option>
              </select>
            </div>
            <div className="ce-modal-footer">
              <button className="admin-action-btn" onClick={() => setModal(null)}>{t.adminCancel}</button>
              <button className="admin-action-btn primary" onClick={insertCodeBlock}>
                {t.adminAdd}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* File Attachment Modal */}
      {modal === 'file' && (
        <div className="ce-modal-overlay" onClick={() => { if (!fileUploading) setModal(null) }}>
          <div className="ce-modal" onClick={e => e.stopPropagation()}>
            <div className="ce-modal-header">
              <h4>{language === 'bn' ? 'ফাইল সংযুক্ত করুন' : 'Attach File'}</h4>
              <button className="ce-modal-close" onClick={() => { if (!fileUploading) setModal(null) }}>✕</button>
            </div>
            <div className="ce-modal-body">
              <label style={{ marginTop: '0.75rem', display: 'block' }}>{language === 'bn' ? 'ফাইল নির্বাচন করুন (PDF, DOC, ইত্যাদি)' : 'Choose File (PDF, DOC, etc.)'}</label>
              <input
                type="file"
                onChange={e => { const f = e.target.files?.[0]; if (f) uploadFile(f) }}
                disabled={fileUploading}
              />
              {fileUploading && <p className="ce-modal-hint">{language === 'bn' ? 'আপলোড হচ্ছে...' : 'Uploading...'}</p>}
            </div>
            <div className="ce-modal-footer">
              <button className="admin-action-btn" onClick={() => { if (!fileUploading) setModal(null) }}>{t.adminCancel}</button>
            </div>
          </div>
        </div>
      )}

      {!preview && editor && (
        <div className="ce-statusbar">
          <span className="ce-status-item">
            {editor.storage.characterCount?.characters?.().toLocaleString() || 0} chars
          </span>
          <span className="ce-status-item">
            {editor.storage.characterCount?.words?.().toLocaleString() || 0} words
          </span>
          <span className="ce-status-item">
            ~{Math.max(1, Math.round((editor.storage.characterCount?.words?.() || 0) / 200))} min read
          </span>
        </div>
      )}

    </div>
  )
}
