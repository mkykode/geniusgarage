import { describe, it, expect } from 'vitest'
import { formatDate, slugify, truncate, validateEmail } from './index'

describe('formatDate', () => {
    it('formats date correctly', () => {
        // Built from local parts on purpose: new Date('2024-01-15') is UTC
        // midnight, which formats as the previous day west of Greenwich.
        const date = new Date(2024, 0, 15)
        expect(formatDate(date)).toBe('Jan 15, 2024')
    })

    it('formats a date in a month it does not abbreviate', () => {
        expect(formatDate(new Date(2024, 4, 1))).toBe('May 1, 2024')
    })
})

describe('slugify', () => {
    it('converts text to slug', () => {
        expect(slugify('Hello World!')).toBe('hello-world')
    })

    it('removes special characters', () => {
        expect(slugify('Test@#$%')).toBe('test')
    })

    it('drops surrounding whitespace instead of turning it into dashes', () => {
        expect(slugify('  Hello World  ')).toBe('hello-world')
    })

    it('collapses repeated separators', () => {
        expect(slugify('Hello -- World')).toBe('hello-world')
    })

    it('strips accents from letters', () => {
        expect(slugify('Café Münster')).toBe('cafe-munster')
    })

    it('returns an empty string when nothing survives', () => {
        expect(slugify('---')).toBe('')
        expect(slugify('@#$')).toBe('')
    })
})

describe('truncate', () => {
    it('truncates long text', () => {
        expect(truncate('Hello World', 5)).toBe('Hello...')
    })

    it('does not truncate short text', () => {
        expect(truncate('Hi', 5)).toBe('Hi')
    })

    it('does not truncate text of exactly maxLength', () => {
        expect(truncate('Hello', 5)).toBe('Hello')
    })
})

describe('validateEmail', () => {
    it('validates correct email', () => {
        expect(validateEmail('test@example.com')).toBe(true)
    })

    it('rejects invalid email', () => {
        expect(validateEmail('invalid')).toBe(false)
    })

    it('rejects an address with no domain dot', () => {
        expect(validateEmail('test@example')).toBe(false)
    })

    it('rejects an address with whitespace', () => {
        expect(validateEmail('te st@example.com')).toBe(false)
    })
})
