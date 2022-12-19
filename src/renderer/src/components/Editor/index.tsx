import { EditorContent, useEditor } from '@tiptap/react'
import Highlight from '@tiptap/extension-highlight'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import Placeholder from '@tiptap/extension-placeholder'
import Document from '@tiptap/extension-document'

interface EditorProps {
  content: string
}

export function Editor({ content }: EditorProps) {
  const editor = useEditor({
    extensions: [
      Highlight,
      Typography,

      Document.extend({
        content: 'heading block*',
      }),

      StarterKit.configure({
        document: false,
      }),

      Placeholder.configure({
        placeholder: 'Untitled',
        emptyEditorClass:
          'before:content-[attr(data-placeholder)] before:text-gray-500 before:h-0 before:float-left before:pointer-events-none',
      }),
    ],

    content,
    autofocus: 'end',
    editorProps: {
      attributes: {
        class:
          'focus:outline-none prose prose-invert prose prose-headings:mt-0',
      },
    },
  })

  return <EditorContent editor={editor} className="w-[65ch]" />
}
