'use client'

import { useRef, useState } from 'react'
import { Button } from '@geniusgarage/ui/button'
import { SnippetCard } from '@geniusgarage/ui/snippet-card'
import { formatDate } from '@geniusgarage/utils'
// TODO: Import Button from '@geniusgarage/ui/button'
// TODO: Import Card from '@geniusgarage/ui/card'

// TODO: Define Snippet interface with these fields:
//   - id: number
//   - title: string
//   - language: string
//   - code: string
//   - tags: string[]

// TODO: Create mockSnippets array with 3 snippets:
// 1. Array Reduce Pattern (javascript, reduce code, tags: javascript, array, functional)
// 2. React useEffect Cleanup (typescript, useEffect cleanup code, tags: react, hooks, typescript)
// 3. Promise.all Pattern (javascript, Promise.all code, tags: javascript, async, promises)
interface Snippet {
  id: number
  title: string
  language: string
  code: string
  tags: string[]
  createdAt: Date  // Changed from string to Date
}
const initialSnippets: Snippet[] = [
  {
    id: 1,
    title: 'Array Reduce Pattern',
    language: 'javascript',
    code: 'const sum = arr.reduce((acc, n) => acc + n, 0)',
    tags: ['javascript', 'array', 'functional'],
    createdAt: new Date('2024-01-15'),  // Date object
  },
  {
    id: 2,
    title: 'React useEffect Cleanup',
    language: 'typescript',
    code: `useEffect(() => {
  const timer = setTimeout(() => {}, 1000)
  return () => clearTimeout(timer)
}, [])`,
    tags: ['react', 'hooks', 'typescript'],
    createdAt: new Date('2024-02-20'),  // Date object
  },
  {
    id: 3,
    title: 'Promise.all Pattern',
    language: 'javascript',
    code: 'const results = await Promise.all(promises.map(p => p()))',
    tags: ['javascript', 'async', 'promises'],
    createdAt: new Date('2024-03-10'),  // Date object
  },
]
const labelClass = 'text-sm font-medium text-gray-700'

const fieldClass =
  'w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/30 focus:outline-none'

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [snippets, setSnippets] = useState<Snippet[]>(initialSnippets)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8 min-w-screen">
      <div className="max-w-6xl mx-auto">
        {/* TODO: Add header div with flex layout */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">My Snippets</h1>
          <Button
            onClick={() => {
              if (!dialogRef.current) return
              dialogRef.current?.showModal()
              // setShowModal(true)
              // setNewSnippet({ title: '', language: 'javascript', code: '', tags: '' })
            }}
          >
            + New Snippet
          </Button>
        </div>

        {/* TODO: Add modal - render only when showModal is true */}
        <dialog
          ref={dialogRef}
          id="modal"
          className="m-auto w-[min(34rem,calc(100vw-2rem))] rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-gray-900/60"
        >
          <form
            action={(data: FormData) => {
              const newSnippet = {
                id: new Date().getTime(),
                title: String(data.get('title') ?? ''),
                language: String(data.get('language') ?? ''),
                code: String(data.get('code') ?? ''),
                tags: String(data.get('tags') ?? '')?.split(',').map(s => s.trim()).filter(Boolean),
                createdAt: new Date()  // Now a Date object
              }
              setSnippets((prev) => [
                ...prev,
                newSnippet
              ])
              dialogRef.current?.close()
            }}
          >
            <header className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">New Snippet</h2>
            </header>

            <div className="grid gap-4 px-6 py-5">
              <div className="grid gap-1.5">
                <label htmlFor="title" className={labelClass}>Title</label>
                <input id="title" name="title" type="text" required placeholder="Array Reduce Pattern" className={fieldClass} />
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="language" className={labelClass}>Language</label>
                <input id="language" name="language" type="text" required placeholder="javascript" className={fieldClass} />
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="code" className={labelClass}>Code</label>
                <textarea id="code" name="code" rows={5} required placeholder="const sum = arr.reduce((acc, n) => acc + n, 0)" className={`${fieldClass} resize-y font-mono`} />
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="tags" className={labelClass}>Tags</label>
                <input id="tags" name="tags" type="text" placeholder="javascript, array, functional" className={fieldClass} />
                <p className="text-xs text-gray-500">Separate tags with commas.</p>
              </div>
            </div>

            <footer className="flex justify-end gap-3 border-t border-gray-200 px-6 py-4">
              <Button type="button" variant="secondary" onClick={() => dialogRef.current?.close()}>
                Cancel
              </Button>
              <Button type="submit">Create snippet</Button>
            </footer>
          </form>
        </dialog>
        {/*   - Overlay: fixed position, dark semi-transparent background */}
        {/*   - Modal: white box, centered, max-width 600px */}
        {/*   - Title input: controlled input for newSnippet.title */}
        {/*   - Language select: dropdown with javascript, typescript, python, go, rust */}
        {/*   - Code textarea: controlled textarea for newSnippet.code */}
        {/*   - Tags input: controlled input for comma-separated tags */}
        {/*   - Cancel Button: onClick={() => setShowModal(false)} */}
        {/*   - Create Button: onClick={handleCreateSnippet} (create this function) */}
        {/* TODO: Add grid div that maps over mockSnippets */}
        <div className="grid gap-6 md:grid-cols-2">
          {snippets.map((snippet) => (
            <SnippetCard
              key={snippet.id}
              title={snippet.title}
              language={snippet.language}
              code={snippet.code}
              tags={snippet.tags}
              createdAt={formatDate(snippet.createdAt)}
            />
          ))}
        </div>
        {/*   - Use Tailwind classes: grid gap-6 md:grid-cols-2 lg:grid-cols-3 */}
        {/*   - Map each snippet to a Card component */}
        {/*   - Inside Card, show: title, language, code preview, tags */}
      </div>
    </div >
  )
}
