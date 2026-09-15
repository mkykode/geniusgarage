import { Card } from './card'
import { CodeBlock } from './code-block'

type SnippetCardProps = {
  title: string
  language: string
  code: string
  tags: string[]
  createdAt: string
}

export function SnippetCard(props: SnippetCardProps) {

  const {
    title,
    language,
    code,
    tags,
    createdAt
  } = props
  return <Card>
    <h3 className="mt-0 mb-1 text-xl font-bold text-gray-900">{title}</h3>
    <time className="block mb-4 text-xs text-gray-500">{createdAt}</time>
    <CodeBlock code={code} language={language} />
    <div className="flex flex-wrap gap-2 mt-4">
      {
        tags.map(
          (tag) => {
            return <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-gray-700 bg-brand-muted rounded-full"
            >
              {tag}
            </span>
          }
        )
      }
    </div>
  </Card>
}
