import { render, screen } from '@testing-library/react'
import { CodeBlock } from './code-block'

describe('CodeBlock component', () => {
    it('renders the code content', () => {
        render(<CodeBlock code="const x = 1" language="javascript" />)
        expect(screen.getByText('const x = 1')).toBeInTheDocument()
    })

    it('renders the code inside a code element', () => {
        const { container } = render(<CodeBlock code="const x = 1" language="javascript" />)
        expect(container.querySelector('pre code')).toHaveTextContent('const x = 1')
    })

    it('labels the block with its language', () => {
        render(<CodeBlock code="print('hi')" language="python" />)
        expect(screen.getByText('python')).toBeInTheDocument()
    })

    it('applies the code surface styles', () => {
        const { container } = render(<CodeBlock code="const x = 1" language="javascript" />)
        expect(container.firstChild).toHaveClass('font-mono')
        expect(container.firstChild).toHaveClass('bg-gray-900')
    })
})
