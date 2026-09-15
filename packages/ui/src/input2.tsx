import { PropsWithChildren } from 'react'

type Input2Props = PropsWithChildren<{
  className?: string
}>

export function Input2({ className, children }: Input2Props) {
  return <div className={className}>{children}</div>
}
