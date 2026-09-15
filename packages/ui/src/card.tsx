import { PropsWithChildren } from "react"


type CardProps = PropsWithChildren<{
  title?: string
  className?: string
}>

export function Card({
  title,
  className,
  children

}: CardProps) {
  return (
    <div
      className={['p-8 bg-white rounded-lg border border-gray-200', className]
        .filter(Boolean)
        .join(' ')}
    >
      {title && (
        <h3 className="mt-0 mb-2 text-xl font-bold">
          {title}
        </h3>
      )}
      <div className="text-gray-500">
        {children}
      </div>
    </div>
  )
}
