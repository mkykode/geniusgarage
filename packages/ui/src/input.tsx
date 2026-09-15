import { PropsWithChildren } from 'react'

type InputProps = PropsWithChildren<{
  className?: string
}>

export function Input({ className, children }: InputProps) {
  return <div className={className}>{children}</div>
}
