# GeniusGarage

## Local setup

Use Node.js 20.9 or newer and pnpm 9.15.9, as declared in `package.json`.
Run commands from the repository root so pnpm links the shared workspace packages.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

- Marketing site: http://localhost:3000
- Snippet manager: http://localhost:3001

## Checks

```sh
pnpm run lint
pnpm run typecheck
pnpm run build
```

`lint` runs checks in all six workspace packages:

- Both apps use the shared Next.js ESLint preset.
- `packages/ui` uses the shared React, Hooks, and JSX accessibility preset.
- `packages/eslint-config` checks its own JavaScript with the base preset.
- `packages/typescript-config` and `packages/tailwind-config` use Prettier to
  check JSON/CSS syntax and formatting. Their configuration is also consumed by
  the apps' type checks and builds.

ESLint checks fail on warnings as well as errors. To check one package and its
dependencies, pass a Turbo filter:

```sh
pnpm run lint --filter=@geniusgarage/ui
```

`typecheck` checks both apps and the shared UI. Turbo runs `next typegen` before
each app's TypeScript check, so generated route types are available without a
previous build or dev session. Type generation always runs; successful lint and
type-check results can be cached.

Shared TypeScript presets contain compiler options. Keep `include`, `exclude`,
and app-specific path aliases in each consumer's `tsconfig.json`, because
TypeScript resolves relative paths from the file that declares them.

## Caching

Local Turbo caching is enabled. Remote caching is disabled by default in
`turbo.json`, so local checks do not require Vercel authentication.

To opt into remote caching, authenticate and link the repository:

```sh
pnpm exec turbo login
pnpm exec turbo link
```

Then set `remoteCache.enabled` to `true` in `turbo.json`. For CI, configure valid
`TURBO_TOKEN` and `TURBO_TEAM` credentials in the CI environment. Build caching
excludes `.next/dev` so restoring a production build does not overwrite a running
development server's files.

## Deployed apps
 
- Marketing Site: https://your-project.vercel.app
- Snippet Manager: https://geniusgarage-app.vercel.app
