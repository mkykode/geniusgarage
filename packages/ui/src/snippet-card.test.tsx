import { render, screen } from '@testing-library/react'
import { SnippetCard } from './snippet-card'

const snippet = {
    title: 'Debounce helper',
    language: 'typescript',
    code: 'const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))',
    tags: ['async', 'utils'],
    createdAt: 'Jan 5, 2026',
}

describe('SnippetCard component', () => {
    it('renders the title as a heading', () => {
        render(<SnippetCard {...snippet} />)
        expect(screen.getByRole('heading', { name: 'Debounce helper' })).toBeInTheDocument()
    })

    it('renders the creation date', () => {
        render(<SnippetCard {...snippet} />)
        expect(screen.getByText('Jan 5, 2026')).toBeInTheDocument()
    })

    it('renders the code through CodeBlock', () => {
        const { container } = render(<SnippetCard {...snippet} />)
        expect(screen.getByText(snippet.code)).toBeInTheDocument()
        expect(screen.getByText('typescript')).toBeInTheDocument()
        expect(container.querySelector('.bg-gray-900')).toBeInTheDocument()
    })

    it('renders every tag as its own element', () => {
        render(<SnippetCard {...snippet} />)
        expect(screen.getByText('async')).toBeInTheDocument()
        expect(screen.getByText('utils')).toBeInTheDocument()
    })

    it('renders no tag elements when the list is empty', () => {
        render(<SnippetCard {...snippet} tags={[]} />)
        expect(screen.queryByText('async')).not.toBeInTheDocument()
    })
})
