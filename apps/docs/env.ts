// NEXT_PUBLIC_* values are inlined by Next at build time, so each one has to be
// referenced as a literal property access rather than looked up dynamically.
//
// The fallback matters for CI: .env* is gitignored, so the value is absent on a
// fresh clone and a hard failure here would break `next build`. Set it in
// .env.local (see .env.example) to override.
export const env = {
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME ?? 'GeniusGarage Docs',
} as const
