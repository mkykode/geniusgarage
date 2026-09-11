'use client'

import { Button } from "@geniusgarage/ui/button"
import { Card } from "@geniusgarage/ui/card"

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
}
const mockSnippets: Snippet[] = [
  {
    id: 1,
    title: 'Array Reduce Pattern',
    language: 'javascript',
    code: 'const sum = arr.reduce((acc, n) => acc + n, 0)',
    tags: ['javascript', 'array', 'functional'],
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
  },
  {
    id: 3,
    title: 'Promise.all Pattern',
    language: 'javascript',
    code: 'const results = await Promise.all(promises.map(p => p()))',
    tags: ['javascript', 'async', 'promises'],
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* TODO: Add header div with flex layout */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">My Snippets</h1>
          <Button onClick={() => console.log('Create snippet')}>
            + New Snippet
          </Button>
        </div>

        {/* TODO: Add grid div that maps over mockSnippets */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockSnippets.map((snippet) => (
            <Card key={snippet.id}>
              <div className="space-y-3">
                {/* Title and Language */}
                <div>
                  <h3 className="text-lg font-semibold mb-1">{snippet.title}</h3>
                  <span className="text-sm text-gray-500 font-mono">
                    {snippet.language}
                  </span>
                </div>

                {/* Code Preview */}
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                  <code>{snippet.code}</code>
                </pre>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {snippet.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        {/*   - Use Tailwind classes: grid gap-6 md:grid-cols-2 lg:grid-cols-3 */}
        {/*   - Map each snippet to a Card component */}
        {/*   - Inside Card, show: title, language, code preview, tags */}
      </div>
    </div>
  )
}
