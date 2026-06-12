import { Node, mergeAttributes } from '@tiptap/core'
import type { NodeViewProps } from '@tiptap/react'
import { ReactNodeViewRenderer, NodeViewWrapper, NodeViewContent } from '@tiptap/react'

function ColumnsContainer(props: NodeViewProps) {
  const { node, updateAttributes } = props
  const count = node.attrs.count || 2

  return (
    <NodeViewWrapper className="columns-node" data-columns={count}>
      <div className="columns-toolbar" contentEditable={false}>
        <span className="columns-label">📰 Columns ({count})</span>
        <select
          className="columns-select"
          value={count}
          onChange={e => updateAttributes({ count: Number(e.target.value) })}
        >
          <option value={2}>2 Columns</option>
          <option value={3}>3 Columns</option>
        </select>
      </div>
      <div className="columns-container">
        <NodeViewContent />
      </div>
    </NodeViewWrapper>
  )
}

function ColumnItemComp(_props: NodeViewProps) {
  return (
    <NodeViewWrapper className="column-item" as="div">
      <div className="column-content">
        <NodeViewContent />
      </div>
    </NodeViewWrapper>
  )
}

export const ColumnContainer = Node.create({
  name: 'columnContainer',
  group: 'block',
  content: 'columnItem+',
  isolating: true,
  defining: true,

  addAttributes() {
    return {
      count: { default: 2 },
    }
  },

  parseHTML() {
    return [{ tag: 'div[data-columns]' }]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes({ 'data-columns': HTMLAttributes.count || 2 }, { class: 'columns-wrapper' }), 0]
  },

  addNodeView() {
    return ReactNodeViewRenderer(ColumnsContainer)
  },

  addCommands() {
    return {
      setColumns: (count: number = 2) => ({ commands }: { commands: any }) => {
        return commands.setNode(this.name as any, { count })
      },
    } as any
  },
})

export const ColumnItem = Node.create({
  name: 'columnItem',
  group: 'columnItem',
  content: 'block+',
  isolating: true,
  defining: true,

  parseHTML() {
    return [{ tag: 'div[data-column]' }]
  },

  renderHTML({ HTMLAttributes: attrs }) {
    return ['div', mergeAttributes(attrs, { 'data-column': '' }, { class: 'column-item-inner' }), 0]
  },

  addNodeView() {
    return ReactNodeViewRenderer(ColumnItemComp)
  },
})
