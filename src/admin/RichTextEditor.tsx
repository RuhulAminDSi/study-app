import { useState } from 'react'
import { EditorContent, useEditor, type Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Highlight from '@tiptap/extension-highlight'
import Placeholder from '@tiptap/extension-placeholder'
import CharacterCount from '@tiptap/extension-character-count'
import { TableKit } from '@tiptap/extension-table'
import type { Translations } from '../types'
import { fill } from './feedback'
import MediaPicker from './MediaPicker'
import Modal from './Modal'
import { Icon, type IconName } from './ui'

interface Props {
  /** Initial HTML. The editor owns the document afterwards; remount (change `key`) to load another. */
  initial: string
  onChange: (html: string) => void
  placeholder: string
  t: Translations
}

/**
 * The lesson body editor: a structured rich-text editor (headings, lists, notes, tables, code, images,
 * links) without free colours or fonts, so every lesson keeps the reader's typography.
 */
export default function RichTextEditor({ initial, onChange, placeholder, t }: Props) {
  const [picking, setPicking] = useState(false)
  const [linking, setLinking] = useState<{ href: string; newTab: boolean } | null>(null)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
        link: { openOnClick: false, autolink: true, defaultProtocol: 'https', protocols: ['http', 'https', 'mailto'] },
      }),
      Image.configure({ HTMLAttributes: { loading: 'lazy' } }),
      Highlight,
      TableKit.configure({ table: { resizable: false } }),
      Placeholder.configure({ placeholder }),
      CharacterCount,
    ],
    content: initial,
    shouldRerenderOnTransaction: true,
    onUpdate: ({ editor: e }) => onChange(e.isEmpty ? '' : e.getHTML()),
  })

  if (!editor) return null

  const openLink = () => {
    const attrs = editor.getAttributes('link') as { href?: string; target?: string }
    setLinking({ href: attrs.href ?? '', newTab: attrs.target === '_blank' })
  }
  const applyLink = () => {
    if (!linking) return
    const chain = editor.chain().focus().extendMarkRange('link')
    if (!linking.href.trim()) chain.unsetLink().run()
    else chain.setLink({ href: linking.href.trim(), target: linking.newTab ? '_blank' : null }).run()
    setLinking(null)
  }

  const words = editor.storage.characterCount.words() as number

  return (
    <div className="rte">
      <Toolbar editor={editor} t={t} onImage={() => setPicking(true)} onLink={openLink} />
      {editor.isActive('table') && <TableBar editor={editor} t={t} />}
      <EditorContent editor={editor} className="rte-content html-content" />
      <div className="rte-footer">{fill(t.edWords, { n: words })}</div>

      {picking && (
        <MediaPicker t={t} onClose={() => setPicking(false)}
          onPick={(src, alt) => { editor.chain().focus().setImage({ src, alt }).run(); setPicking(false) }} />
      )}
      <Modal open={!!linking} onClose={() => setLinking(null)} title={t.edLinkTitle} size="sm">
        {linking && (
          <>
            <div className="form-grid">
              <label className="full-width">{t.edLinkUrl}
                <input value={linking.href} placeholder="https://" onChange={e => setLinking({ ...linking, href: e.target.value })}
                  onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); applyLink() } }} />
              </label>
              <label className="full-width rte-check">
                <input type="checkbox" checked={linking.newTab} onChange={e => setLinking({ ...linking, newTab: e.target.checked })} /> {t.edOpenNewTab}
              </label>
            </div>
            <div className="form-actions">
              {editor.isActive('link') && (
                <button className="adm-btn ghost-danger rte-push"
                  onClick={() => { editor.chain().focus().extendMarkRange('link').unsetLink().run(); setLinking(null) }}>{t.edRemoveLink}</button>
              )}
              <button className="adm-btn" onClick={() => setLinking(null)}>{t.adminCancel}</button>
              <button className="adm-btn primary" onClick={applyLink}>{t.adminSave}</button>
            </div>
          </>
        )}
      </Modal>
    </div>
  )
}

type Tool = { label: string; active?: boolean; disabled?: boolean; run: () => void } & ({ icon: IconName } | { text: string })

function ToolButton(tool: Tool) {
  return (
    <button type="button" className={`rte-btn${tool.active ? ' active' : ''}`} title={tool.label} aria-label={tool.label}
      aria-pressed={tool.active} disabled={tool.disabled} onMouseDown={e => e.preventDefault()} onClick={tool.run}>
      {'icon' in tool ? <Icon name={tool.icon} size={16} /> : <span>{tool.text}</span>}
    </button>
  )
}

function Toolbar({ editor, t, onImage, onLink }: { editor: Editor; t: Translations; onImage: () => void; onLink: () => void }) {
  const c = () => editor.chain().focus()
  const blockValue = editor.isActive('heading', { level: 2 }) ? 'h2' : editor.isActive('heading', { level: 3 }) ? 'h3' : editor.isActive('heading', { level: 4 }) ? 'h4' : 'p'
  const setBlock = (v: string) => {
    if (v === 'p') c().setParagraph().run()
    else c().setHeading({ level: Number(v[1]) as 2 | 3 | 4 }).run()
  }
  const groups: Tool[][] = [
    [
      { icon: 'undo', label: t.edUndo, disabled: !editor.can().undo(), run: () => c().undo().run() },
      { icon: 'redo', label: t.edRedo, disabled: !editor.can().redo(), run: () => c().redo().run() },
    ],
    [
      { text: 'B', label: t.edBold, active: editor.isActive('bold'), run: () => c().toggleBold().run() },
      { text: 'I', label: t.edItalic, active: editor.isActive('italic'), run: () => c().toggleItalic().run() },
      { text: 'U', label: t.edUnderline, active: editor.isActive('underline'), run: () => c().toggleUnderline().run() },
      { text: 'S', label: t.edStrike, active: editor.isActive('strike'), run: () => c().toggleStrike().run() },
      { icon: 'highlight', label: t.edHighlight, active: editor.isActive('highlight'), run: () => c().toggleHighlight().run() },
      { icon: 'code', label: t.edInlineCode, active: editor.isActive('code'), run: () => c().toggleCode().run() },
    ],
    [
      { icon: 'list', label: t.edBulletList, active: editor.isActive('bulletList'), run: () => c().toggleBulletList().run() },
      { icon: 'listOrdered', label: t.edOrderedList, active: editor.isActive('orderedList'), run: () => c().toggleOrderedList().run() },
      { icon: 'quote', label: t.edQuote, active: editor.isActive('blockquote'), run: () => c().toggleBlockquote().run() },
      { text: '{ }', label: t.edCodeBlock, active: editor.isActive('codeBlock'), run: () => c().toggleCodeBlock().run() },
    ],
    [
      { icon: 'link', label: t.edLink, active: editor.isActive('link'), run: onLink },
      { icon: 'image', label: t.edImage, run: onImage },
      { icon: 'table', label: t.edTable, disabled: editor.isActive('table'), run: () => c().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run() },
      { icon: 'minus', label: t.edRule, run: () => c().setHorizontalRule().run() },
    ],
  ]
  return (
    <div className="rte-toolbar" role="toolbar">
      <select className="rte-block" value={blockValue} onChange={e => setBlock(e.target.value)} aria-label={t.edParagraph}>
        <option value="p">{t.edParagraph}</option>
        <option value="h2">{t.edHeading}</option>
        <option value="h3">{t.edSubheading}</option>
        <option value="h4">{t.edSubheading} 2</option>
      </select>
      {groups.map((g, i) => (
        <div key={i} className="rte-group">{g.map(tool => <ToolButton key={tool.label} {...tool} />)}</div>
      ))}
    </div>
  )
}

function TableBar({ editor, t }: { editor: Editor; t: Translations }) {
  const c = () => editor.chain().focus()
  const actions: [string, () => void, boolean?][] = [
    [t.edAddRow, () => c().addRowAfter().run()],
    [t.edAddCol, () => c().addColumnAfter().run()],
    [t.edDelRow, () => c().deleteRow().run()],
    [t.edDelCol, () => c().deleteColumn().run()],
    [t.edDelTable, () => c().deleteTable().run(), true],
  ]
  return (
    <div className="rte-tablebar">
      <Icon name="table" size={14} />
      {actions.map(([label, run, danger]) => (
        <button key={label} type="button" className={`adm-btn sm${danger ? ' ghost-danger' : ''}`} onMouseDown={e => e.preventDefault()} onClick={run}>{label}</button>
      ))}
    </div>
  )
}
