import { Heading } from '@tiptap/extension-heading'
import { mergeAttributes } from '@tiptap/core'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
    .slice(0, 80)
}

export const AnchorHeading = Heading.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      id: {
        default: null,
        parseHTML: el => el.getAttribute('id'),
        renderHTML: attrs => {
          if (!attrs.id) return {}
          return { id: attrs.id }
        },
      },
    }
  },

  onSelectionUpdate({ editor }) {
    const { selection } = editor.state
    const node = selection.$from.node()
    if (node && node.type.name === 'heading') {
      const id = node.attrs.id
      if (!id) {
        const text = node.textContent
        const newId = slugify(text)
        if (newId) {
          editor.chain().focus().updateAttributes('heading', { id: newId }).run()
        }
      }
    }
  },

  renderHTML({ node, HTMLAttributes }) {
    const level = node.attrs.level as number
    const text = node.textContent
    const id = node.attrs.id || slugify(text)
    return [
      `h${level}`,
      mergeAttributes(HTMLAttributes, { id, class: 'anchor-heading', 'data-anchor': id }),
      0,
    ] as const
  },
})
