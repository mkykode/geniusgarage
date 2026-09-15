import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button component', () => {
    it('renders with children', () => {
        render(<Button>Click me</Button>)
        expect(screen.getByText('Click me')).toBeInTheDocument()
    })

    it('applies primary variant by default', () => {
        render(<Button>Test</Button>)
        const button = screen.getByRole('button')
        expect(button).toHaveClass('bg-brand')
    })

    it('applies secondary variant when specified', () => {
        render(<Button variant="secondary">Test</Button>)
        const button = screen.getByRole('button')
        expect(button).toHaveClass('bg-brand-muted')
        expect(button).toHaveClass('text-gray-900')
    })

    it('keeps a caller-supplied className alongside the variant', () => {
        render(<Button className="w-full">Test</Button>)
        const button = screen.getByRole('button')
        expect(button).toHaveClass('bg-brand')
        expect(button).toHaveClass('w-full')
    })

    it('forwards button attributes and events', () => {
        const onClick = vi.fn()
        render(<Button type="submit" onClick={onClick}>Submit</Button>)

        const button = screen.getByRole('button')
        expect(button).toHaveAttribute('type', 'submit')

        fireEvent.click(button)
        expect(onClick).toHaveBeenCalledOnce()
    })
})
