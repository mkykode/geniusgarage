// TODO: Import defineConfig from 'vitest/config'
// TODO: Export default config with:
//   - test.environment: 'jsdom'
//   - test.globals: true
//   - test.setupFiles: ['./src/test/setup.ts']

import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./src/test/setup.ts'],
    }
})
