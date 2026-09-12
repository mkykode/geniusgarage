import { PropsWithChildren } from 'react';
import { Card } from './card'
import { CodeBlock } from './code-block'
// TODO: Import Card from './card'
// TODO: Import CodeBlock from './code-block'

// TODO: Define SnippetCardProps interface with:
//   - title: string
//   - language: string
//   - code: string
//   - tags: string[]
//   - createdAt: string

type SnippetCardProps = PropsWithChildren<{
  title: string
  language: string
  code: string
  tags: string[]
  createdAt: string
}>
// TODO: Export SnippetCard function component that:
//   - Wraps everything in a Card component
//   - Shows title as h3
//   - Shows createdAt below title
//   - Renders CodeBlock with code and language
//   - Maps over tags and renders each as a styled span
export function SnippetCard(props: SnippetCardProps) {

  const {
    title,
    language,
    code,
    tags,
    createdAt
  } = props
  return <Card>
    {title && <h3>{title}</h3>}
    {createdAt && <time>{createdAt}</time>}
    <pre

    >
      <code data-language={language}>
        {code}
      </code>
    </pre>
    {
      tags.map(
        (tag, i) => {
          return <span key={tag}>{i !== 0 && ", "}{tag}</span>
        }
      )
    }
  </Card>
}
