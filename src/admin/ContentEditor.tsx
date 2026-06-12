import { useState, useRef, useCallback, useEffect, type KeyboardEvent } from 'react'
import { api, type ApiLesson, type ApiChapter, type ApiSideMenu } from './api'
import type { Language } from '../types'
import { translations } from '../data/translations'

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

type ModalType = 'image' | 'link' | 'code' | 'file' | null

function formatHtml(html: string): string {
  const div = document.createElement('div')
  div.innerHTML = html
  function indent(node: HTMLElement, depth: number): string {
    const pad = '  '.repeat(depth)
    let result = ''
    for (const child of Array.from(node.childNodes)) {
      if (child.nodeType === 3) {
        const text = child.textContent?.trim()
        if (text) result += pad + text + '\n'
      } else if (child.nodeType === 1) {
        const el = child as HTMLElement
        const tag = el.tagName.toLowerCase()
        const inlineTags = ['b', 'i', 'u', 'strong', 'em', 'a', 'span', 'code']
        if (inlineTags.includes(tag)) {
          result += pad + el.outerHTML + '\n'
        } else {
          result += pad + `<${tag}>` + '\n'
          result += indent(el, depth + 1)
          result += pad + `</${tag}>` + '\n'
        }
      }
    }
    return result
  }
  return indent(div, 0).trim()
}

export default function ContentEditor({ lesson, language, onBack, isNew, chapters, menus, lessons }: ContentEditorProps) {
  const t = translations[language]
  const [tab, setTab] = useState<Tab>('content_en')
  const [saving, setSaving] = useState(false)
  const [modal, setModal] = useState<ModalType>(null)
  const [imageUrl, setImageUrl] = useState('')
  const [linkUrl, setLinkUrl] = useState('')
  const [linkText, setLinkText] = useState('')
  const [codeLang, setCodeLang] = useState('')
  const [preview, setPreview] = useState(false)
  const editorRef = useRef<HTMLDivElement>(null)
  const [chapterId, setChapterId] = useState('')
  const [lessonId, setLessonId] = useState('')
  const contentCache = useRef<Record<string, string>>({})
  const [uploading, setUploading] = useState(false)
  const [fileUploading, setFileUploading] = useState(false)
  const [reorder, setReorder] = useState(false)
  const [blocks, setBlocks] = useState<string[]>([])
  const [editorKey, setEditorKey] = useState(0)
  const [dragOver, setDragOver] = useState(false)

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
        setEditorKey(k => k + 1)
      }
    }
  }, [lessonId, isNew, lessons])

  const lessonsByChapter = (chId: string) => {
    if (!chId) return []
    const menuIds = menus?.filter(m => m.chapter_id === chId).map(m => m.id) || []
    return lessons?.filter(l => menuIds.includes(l.side_menu_id)) || []
  }

  const getContent = useCallback(() => {
    if (!editorRef.current) return ''
    return editorRef.current.innerHTML
  }, [])

  function execCmd(cmd: string, val?: string) {
    document.execCommand(cmd, false, val)
    if (editorRef.current) editorRef.current.focus()
  }

  function insertAtEnd(html: string) {
    if (editorRef.current) {
      const existing = editorRef.current.innerHTML
      editorRef.current.innerHTML = existing + html
    }
  }

  function insertTable() {
    const rows = 3, cols = 3
    let html = '<table style="width:100%;border-collapse:collapse"><tbody>'
    for (let r = 0; r < rows; r++) {
      html += '<tr>'
      for (let c = 0; c < cols; c++) html += '<td style="border:1px solid #555;padding:6px">&nbsp;</td>'
      html += '</tr>'
    }
    html += '</tbody></table><br>'
    execCmd('insertHTML', html)
  }

  function openImageModal() {
    setImageUrl('')
    setModal('image')
  }

  function confirmImage() {
    if (imageUrl) {
      insertAtEnd(`<img src="${imageUrl}" alt="" style="max-width:100%">`)
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
      insertAtEnd(`<br><img src="${url}" alt="" style="max-width:100%"><br>`)
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
      insertAtEnd(`<br><a href="${url}" target="_blank" rel="noopener">📎 ${name}</a><br>`)
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
          insertAtEnd(`<br><img src="${url}" alt="${name}" style="max-width:100%"><br>`)
        } else {
          insertAtEnd(`<br><a href="${url}" target="_blank" rel="noopener">📎 ${name}</a><br>`)
        }
      } catch (e: any) {
        alert(`Upload failed: ${file.name} — ${e.message}`)
      }
    }
  }

  function openLinkModal() {
    const sel = window.getSelection()
    setLinkText(sel?.toString() || '')
    setLinkUrl('')
    setModal('link')
  }

  function confirmLink() {
    if (linkUrl) {
      if (linkText) {
        execCmd('insertHTML', `<a href="${linkUrl}">${linkText}</a>`)
      } else {
        execCmd('createLink', linkUrl)
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
    const langClass = codeLang ? ` class="language-${codeLang}"` : ''
    const html = `<pre><code${langClass} style="display:block;counter-reset:line;background:#1a1a2e;color:#e2e8f0;padding:0.75rem;border-radius:6px;font-family:'Fira Code',Consolas,monospace;font-size:0.8rem;line-height:1.7;overflow-x:auto;">`
      + `<span style="display:block;"><span style="display:inline-block;width:24px;text-align:right;color:#64748b;margin-right:12px;user-select:none;">1</span></span>`
      + `<span style="display:block;"><span style="display:inline-block;width:24px;text-align:right;color:#64748b;margin-right:12px;user-select:none;">2</span></span>`
      + `<span style="display:block;"><span style="display:inline-block;width:24px;text-align:right;color:#64748b;margin-right:12px;user-select:none;">3</span></span>`
      + `<span style="display:block;"><span style="display:inline-block;width:24px;text-align:right;color:#64748b;margin-right:12px;user-select:none;">4</span></span>`
      + `<span style="display:block;"><span style="display:inline-block;width:24px;text-align:right;color:#64748b;margin-right:12px;user-select:none;">5</span></span>`
      + `</code></pre>`
    execCmd('insertHTML', html)
    setModal(null)
    setCodeLang('')
  }

  function formatCode() {
    const html = getContent()
    const formatted = formatHtml(html)
    if (editorRef.current) {
      editorRef.current.innerHTML = formatted
    }
  }

  function insertHr() {
    execCmd('insertHTML', '<hr style="border:none;border-top:1px solid var(--border);margin:1rem 0;">')
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Tab') { e.preventDefault(); execCmd('insertHTML', '&nbsp;&nbsp;&nbsp;&nbsp;') }
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
      if (!sel || !targetId) { alert(language === 'bn' ? 'একটি পাঠ নির্বাচন করুন' : 'Select a lesson'); setSaving(false); return }

      contentCache.current[tab] = getContent()
      const body: Record<string, any> = {}
      body.content_en = contentCache.current.content_en ?? ''
      body.content_bn = contentCache.current.content_bn ?? null
      body.code_en = contentCache.current.code_en ?? null

      body.lesson_number = sel.lesson_number
      body.chapter_id = chapterId
      const menu = menus?.find(m => m.chapter_id === chapterId)
      if (menu) body.side_menu_id = menu.id

      const updated = await api.lessons.update(targetId, body as any)
      if (updated) onBack()
    } catch (e: any) { alert(e.message) } finally { setSaving(false) }
  }

  function handleEditorRef(el: HTMLDivElement | null) {
    if (el) {
      editorRef.current = el
      const initial = isNew ? '' : tab === 'content_en' ? lesson!.content_en : tab === 'content_bn' ? (lesson!.content_bn || '') : (lesson!.code_en || '')
      if (!el.innerHTML) el.innerHTML = contentCache.current[tab] ?? initial
    }
  }

  function enterReorderMode() {
    if (!editorRef.current) return
    contentCache.current[tab] = editorRef.current.innerHTML
    const blockList: string[] = []
    for (const child of Array.from(editorRef.current.childNodes)) {
      if (child.nodeType === 3) {
        const text = child.textContent?.trim()
        if (text) blockList.push(text)
      } else if (child.nodeType === 1) {
        blockList.push((child as HTMLElement).outerHTML)
      }
    }
    if (!blockList.length) blockList.push('')
    setBlocks(blockList)
    setReorder(true)
  }

  function exitReorderMode() {
    const html = blocks.filter(b => b).join('\n')
    contentCache.current[tab] = html
    setEditorKey(k => k + 1)
    setReorder(false)
  }

  function moveBlock(idx: number, dir: -1 | 1) {
    const t = idx + dir
    if (t < 0 || t >= blocks.length) return
    const next = [...blocks]
    ;[next[idx], next[t]] = [next[t], next[idx]]
    setBlocks(next)
  }

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
            if (editorRef.current) {
              contentCache.current[tab] = editorRef.current.innerHTML
            }
            setTab(tabKey)
            requestAnimationFrame(() => {
              if (editorRef.current) {
                editorRef.current.innerHTML = contentCache.current[tabKey] ?? (lesson
                  ? (tabKey === 'content_en' ? lesson.content_en : tabKey === 'content_bn' ? (lesson.content_bn || '') : (lesson.code_en || ''))
                  : '')
              }
            })
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
          <div className="ce-toolbar">
            {/* Text formatting */}
            <button onClick={() => execCmd('bold')} title="Bold"><b>B</b></button>
            <button onClick={() => execCmd('italic')} title="Italic"><i>I</i></button>
            <button onClick={() => execCmd('underline')} title="Underline"><u>U</u></button>
            <button onClick={() => execCmd('strikeThrough')} title="Strikethrough"><s>S</s></button>
            <span className="ce-sep" />

            {/* Headings */}
            <button onClick={() => execCmd('formatBlock', '<h1>')} title="Heading 1">H1</button>
            <button onClick={() => execCmd('formatBlock', '<h2>')} title="Heading 2">H2</button>
            <button onClick={() => execCmd('formatBlock', '<h3>')} title="Heading 3">H3</button>
            <button onClick={() => execCmd('formatBlock', '<h4>')} title="Heading 4">H4</button>
            <button onClick={() => execCmd('formatBlock', '<p>')} title="Paragraph">¶</button>
            <span className="ce-sep" />

            {/* Lists */}
            <button onClick={() => execCmd('insertUnorderedList')} title="Bullet list">☰</button>
            <button onClick={() => execCmd('insertOrderedList')} title="Numbered list">#</button>
            <span className="ce-sep" />

            {/* Alignment */}
            <button onClick={() => execCmd('justifyLeft')} title="Align left">⬅</button>
            <button onClick={() => execCmd('justifyCenter')} title="Align center">⬡</button>
            <button onClick={() => execCmd('justifyRight')} title="Align right">➡</button>
            <span className="ce-sep" />

            {/* Blocks */}
            <button onClick={insertTable} title="Table">⊞</button>
            <button onClick={openCodeModal} title="Code block">&lt;/&gt;</button>
            <button onClick={() => execCmd('formatBlock', '<pre>')} title="Preformatted">¶¶</button>
            <button onClick={() => execCmd('formatBlock', '<blockquote>')} title="Blockquote">❝</button>
            <button onClick={insertHr} title="Horizontal rule">—</button>
            <span className="ce-sep" />

            {/* Media */}
            <button onClick={openImageModal} title="Image">🖼</button>
            <button onClick={openLinkModal} title="Link">🔗</button>
            <button onClick={() => setModal('file')} title="Attach file">📎</button>
            <span className="ce-sep" />

            {/* Tools */}
            <button onClick={formatCode} title="Format HTML">✨</button>
            <button onClick={() => execCmd('removeFormat')} title="Clear formatting">⌫</button>
            <button onClick={() => execCmd('undo')} title="Undo">↩</button>
            <button onClick={() => execCmd('redo')} title="Redo">↪</button>
            <span className="ce-sep" />
            <button onClick={enterReorderMode} title="Reorder blocks">⇅</button>
          </div>

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
              key={editorKey}
              ref={handleEditorRef}
              className={`ce-editor${dragOver ? ' ce-editor-dragover' : ''}`}
              contentEditable
              suppressContentEditableWarning
              onKeyDown={handleKeyDown}
              onDragOver={e => { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; setDragOver(true) }}
              onDragLeave={() => setDragOver(false)}
              onDrop={e => { e.preventDefault(); setDragOver(false); handleFileDrop(e) }}
            />
          )}

        </>
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
                  {language === 'bn' ? 'URL' : 'URL'}
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
              <p className="ce-modal-hint">
                {language === 'bn'
                  ? 'একটি সিনট্যাক্স-হাইলাইট করা কোড ব্লক লাইন নম্বর সহ যোগ করবে (৫ লাইন)'
                  : 'Inserts a syntax-highlighted code block with line numbers (5 lines)'}
              </p>
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

    </div>
  )
}
