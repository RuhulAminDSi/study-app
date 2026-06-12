import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer, NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import type { NodeViewProps } from '@tiptap/react'

export const CALLOUT_TYPES = [
  { type: 'info', icon: 'ℹ️', label: 'Info' },
  { type: 'tip', icon: '💡', label: 'Tip' },
  { type: 'warning', icon: '⚠️', label: 'Warning' },
  { type: 'danger', icon: '❌', label: 'Danger' },
  { type: 'success', icon: '✅', label: 'Success' },
] as const

export type CalloutType = typeof CALLOUT_TYPES[number]['type']

function CalloutComponent(props: NodeViewProps) {
  const { node, updateAttributes } = props
  const type = (node.attrs.type || 'info') as CalloutType
  const callout = CALLOUT_TYPES.find(c => c.type === type)

  return (
    <NodeViewWrapper className={`callout-node callout-${type}`} data-callout={type}>
      <div className="callout-header" contentEditable={false}>
        <span className="callout-icon">{callout?.icon || 'ℹ️'}</span>
        <select
          className="callout-type-select"
          value={type}
          onChange={e => updateAttributes({ type: e.target.value })}
          contentEditable={false}
        >
          {CALLOUT_TYPES.map(c => (
            <option key={c.type} value={c.type}>{c.icon} {c.label}</option>
          ))}
        </select>
      </div>
      <div className="callout-content">
        <NodeViewContent />
      </div>
    </NodeViewWrapper>
  )
}

export const Callout = Node.create({
  name: 'callout',
  group: 'block',
  content: 'paragraph+',
  defining: true,
  isolating: true,

  addAttributes() {
    return {
      type: { default: 'info' },
    }
  },

  parseHTML() {
    return [{ tag: 'div[data-callout]' }]
  },

  renderHTML({ HTMLAttributes }) {
    const type = (HTMLAttributes.type || 'info') as string
    return ['div', mergeAttributes({ 'data-callout': type }, { class: `callout-${type}` }), 0]
  },

  addNodeView() {
    return ReactNodeViewRenderer(CalloutComponent)
  },

  addCommands() {
    return {
      setCallout: (type: CalloutType = 'info') => ({ commands }: { commands: any }) => {
        return commands.setNode(this.name as any, { type })
      },
    } as any
  },
})
