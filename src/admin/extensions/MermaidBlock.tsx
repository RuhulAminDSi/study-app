import { Node } from '@tiptap/core'
import type { NodeViewProps } from '@tiptap/react'
import { ReactNodeViewRenderer, NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import { useEffect, useRef, useState } from 'react'

let mermaidLoaded = false
async function ensureMermaid() {
  if (mermaidLoaded) return
  const mermaid = await import('mermaid')
  mermaid.default.initialize({
    startOnLoad: false,
    theme: 'dark',
    securityLevel: 'loose',
    fontFamily: 'inherit',
  })
  mermaidLoaded = true
}

function MermaidComponent(props: NodeViewProps) {
  const { node, updateAttributes } = props
  const [svg, setSvg] = useState('')
  const [error, setError] = useState('')
  const [editing, setEditing] = useState(!node.textContent.trim())
  const idRef = useRef(`mermaid-${Math.random().toString(36).slice(2, 8)}`)
  const code = node.textContent || 'graph TD\n  A[Start] --> B[End]'

  useEffect(() => {
    if (!code.trim() || editing) return
    let cancelled = false
    ;(async () => {
      try {
        await ensureMermaid()
        const mod = await import('mermaid')
        const { svg: result } = await mod.default.render(idRef.current, code)
        if (!cancelled) setSvg(result)
      } catch (e: any) {
        if (!cancelled) setError(e.message || 'Render error')
      }
    })()
    return () => { cancelled = true }
  }, [code, editing])

  if (editing || error) {
    return (
      <NodeViewWrapper className="mermaid-node">
        <div className="mermaid-header" contentEditable={false}>
          <span>📊 Mermaid Diagram</span>
          <select
            className="mermaid-theme-select"
            value={node.attrs.theme || 'dark'}
            onChange={e => updateAttributes({ theme: e.target.value })}
          >
            <option value="dark">Dark</option>
            <option value="default">Light</option>
            <option value="neutral">Neutral</option>
            <option value="forest">Forest</option>
          </select>
          {editing && (
            <button
              className="mermaid-render-btn"
              onClick={() => setEditing(false)}
              contentEditable={false}
            >
              Render
            </button>
          )}
          {!editing && error && (
            <button
              className="mermaid-edit-btn"
              onClick={() => { setEditing(true); setError('') }}
              contentEditable={false}
            >
              Edit
            </button>
          )}
        </div>
        {editing ? (
          <pre className="mermaid-editor" contentEditable={false}>
            <NodeViewContent />
          </pre>
        ) : (
          <div className="mermaid-error">{error}</div>
        )}
      </NodeViewWrapper>
    )
  }

  return (
    <NodeViewWrapper className="mermaid-node mermaid-rendered">
      <div className="mermaid-header" contentEditable={false}>
        <span>📊 Mermaid</span>
        <button
          className="mermaid-edit-btn"
          onClick={() => { setEditing(true); setSvg('') }}
          contentEditable={false}
        >
          Edit
        </button>
      </div>
      <div
        className="mermaid-svg"
        dangerouslySetInnerHTML={{ __html: svg }}
        contentEditable={false}
      />
    </NodeViewWrapper>
  )
}

export const MermaidBlock = Node.create({
  name: 'mermaidBlock',
  group: 'block',
  content: 'text*',
  isolating: true,
  defining: true,

  addAttributes() {
    return {
      theme: { default: 'dark' },
    }
  },

  parseHTML() {
    return [{ tag: 'div[data-mermaid]' }]
  },

  renderHTML() {
    return ['div', { 'data-mermaid': '', class: 'mermaid-block' }, 0]
  },

  addNodeView() {
    return ReactNodeViewRenderer(MermaidComponent)
  },

  addCommands() {
    return {
      setMermaidBlock: () => ({ commands }: { commands: any }) => {
        return commands.setNode(this.name as any, { theme: 'dark' })
      },
    } as any
  },
})
