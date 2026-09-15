import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import type { PlopTypes } from '@turbo/gen'

// packages/ui exposes each component twice: as a named re-export from the
// src/index.ts barrel, and as a subpath in the package manifest, which is how
// the apps import them (`@geniusgarage/ui/button`). Both are edited here as
// real file reads rather than through plop's `append`, which leaves a blank
// line, trailing spaces and no final newline behind.
function registerComponent(
  plop: PlopTypes.NodePlopAPI,
  answers: Record<string, unknown>
): string {
  const root = join(plop.getPlopfilePath(), '..', '..')
  const kebab = plop.renderString('{{ kebabCase name }}', answers)
  const pascal = plop.renderString('{{ pascalCase name }}', answers)
  const done: string[] = []

  const barrelPath = join(root, 'packages/ui/src/index.ts')
  const barrel = readFileSync(barrelPath, 'utf8')
  const exportLine = `export { ${pascal} } from './${kebab}'`
  if (barrel.includes(exportLine)) {
    done.push('barrel already up to date')
  } else {
    writeFileSync(barrelPath, `${barrel.trimEnd()}\n${exportLine}\n`)
    done.push('src/index.ts')
  }

  const manifestPath = join(root, 'packages/ui/package.json')
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
  const subpath = `./${kebab}`
  if (manifest.exports[subpath]) {
    done.push('manifest already up to date')
  } else {
    manifest.exports[subpath] = `./src/${kebab}.tsx`
    writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)
    done.push(`package.json exports ${subpath}`)
  }

  return done.join(', ')
}

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setActionType('register-ui-component', (answers) =>
    registerComponent(plop, answers as Record<string, unknown>)
  )

  plop.setGenerator('component', {
    description: 'Create a new UI component in packages/ui',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (e.g., Input):',
        validate: (input: string) =>
          input.trim().length > 0 || 'Component name is required',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{ turbo.paths.root }}/packages/ui/src/{{ kebabCase name }}.tsx',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'add',
        path: '{{ turbo.paths.root }}/packages/ui/src/{{ kebabCase name }}.test.tsx',
        templateFile: 'templates/component-test.hbs',
      },
      {
        type: 'register-ui-component',
      },
    ],
  })
}
