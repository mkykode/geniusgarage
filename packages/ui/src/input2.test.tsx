import { render, screen } from '@testing-library/react'
import { Input2 } from './input2'

describe('Input2 component', () => {
    it('renders children', () => {
        render(<Input2>Test content</Input2>)
        expect(screen.getByText('Test content')).toBeInTheDocument()
    })

    it('applies a className when provided', () => {
        render(<Input2 className="custom">Test content</Input2>)
        expect(screen.getByText('Test content')).toHaveClass('custom')
    })
})
