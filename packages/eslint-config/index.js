import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypeScript from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier'
import { typescriptRules } from './base.js'

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  prettier,
  globalIgnores(['.next/**', '.turbo/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    rules: typescriptRules,
  },
])
