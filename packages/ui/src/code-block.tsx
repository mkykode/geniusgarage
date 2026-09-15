import { PropsWithChildren } from "react";

type CodeBlockProps = PropsWithChildren<{
  code: string,
  language: string
}>
export function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  return (
    <div className="overflow-auto p-4 font-mono text-lg text-gray-300 bg-gray-900 rounded-lg">
      <div className="mb-2 text-xs opacity-60">
        {language}
      </div>
      <pre className="m-0">
        <code>{code}</code>
      </pre>
    </div>
  )
}
