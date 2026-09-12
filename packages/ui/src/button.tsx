import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary';
};
export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  const baseStyles = {
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  }

  const variantStyles = {
    primary: { background: '#d946ef', color: 'white' },
    secondary: { background: '#f3f4f6', color: '#1f2937', border: '1px solid #e5e7eb' },
  }

  const hoverStyles = {
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
  }

  return (
    <button
      style={{ ...baseStyles, ...variantStyles[variant] }}
      {...props}
    >
      {children}
    </button>
  )
}
