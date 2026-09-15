// TODO: Import render, screen from '@testing-library/react'
// TODO: Import Button from './button'

// TODO: Create describe block for 'Button component'
//   - Test 1: 'renders with children'
//     - Render: <Button>Click me</Button>
//     - Assert: screen.getByText('Click me') is in the document
//   - Test 2: 'applies primary variant by default'
//     - Render: <Button>Test</Button>
//     - Assert: button has 'bg-blue-500' class
import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button component', () => {
    it('renders with children', () => {
        render(<Button>Click me</Button>)
        expect(screen.getByText('Click me')).toBeInTheDocument()
    })

    it('applies primary variant by default', () => {
        render(<Button>Test</Button>)
        const button = screen.getByRole('button')
        expect(button).toHaveClass('bg-blue-500')
    })
})
