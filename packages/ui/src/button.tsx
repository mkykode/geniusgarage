import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary' | 'danger';
};

const BUTTON_BASE =
  'px-6 py-3 text-base font-semibold rounded-lg border shadow-sm transition-all duration-200 cursor-pointer'

const BUTTON_VARIANTS = {
  primary: 'bg-brand border-transparent text-white hover:brightness-110',
  secondary: 'bg-brand-muted border-gray-200 text-gray-900 hover:bg-gray-200',
  danger: 'bg-red-500 text-white hover:bg-red-600',
} as const

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={[BUTTON_BASE, BUTTON_VARIANTS[variant], className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
