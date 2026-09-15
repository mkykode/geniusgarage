import { render, screen } from '@testing-library/react'
import { Card } from './card'

describe('Card component', () => {
    it('renders children', () => {
        render(<Card>Card body</Card>)
        expect(screen.getByText('Card body')).toBeInTheDocument()
    })

    it('renders the title as a heading when provided', () => {
        render(<Card title="Fast Search">Card body</Card>)
        expect(screen.getByRole('heading', { name: 'Fast Search' })).toBeInTheDocument()
    })

    it('omits the heading when no title is given', () => {
        render(<Card>Card body</Card>)
        expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    })

    it('applies the base surface styles', () => {
        const { container } = render(<Card>Card body</Card>)
        expect(container.firstChild).toHaveClass('bg-white')
        expect(container.firstChild).toHaveClass('rounded-lg')
    })

    it('appends a custom className to the base styles', () => {
        const { container } = render(<Card className="col-span-2">Card body</Card>)
        expect(container.firstChild).toHaveClass('col-span-2')
        expect(container.firstChild).toHaveClass('bg-white')
    })
})
