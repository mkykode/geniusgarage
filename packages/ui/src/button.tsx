import { ButtonHTMLAttributes, MouseEventHandler, PropsWithChildren, SyntheticEvent } from "react";

type ButtonProps = PropsWithChildren<{
  variant?: 'primary' | 'secondary',
  onClick?: MouseEventHandler<HTMLButtonElement>
}>
export function Button({
  variant = 'primary',
  onClick,
  children
}: ButtonProps) {
  const baseStyles = {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: '600',
  }

  const variantStyles = {
    primary: {
      backgroundColor: '#0070f3',
      color: 'white',
    },
    secondary: {
      backgroundColor: '#f5f5f5',
      color: '#333',
      border: '1px solid #e5e7eb',
    },
  }

  return (
    <button
      onClick={onClick}
      style={{ ...baseStyles, ...variantStyles[variant] }}
    >
      {children}
    </button>
  )
}
