# Agent Notes

## Writing style
Avoid em dashes (—). Use commas, periods, or semicolons instead.

## Package manager
Use **Bun** — `bun install`, `bun dev`, `bunx`. Never use npm or npx.

## Pre-commit hooks
Lefthook runs Biome on staged files with `stage_fixed: true`, meaning Biome auto-fixes and re-stages files. Commits will always produce formatted, linted output. Do not skip hooks.

## Linting / formatting
Biome handles both lint and format. `.astro` files have relaxed rules (`useConst`, `useImportType`, `noUnusedVariables`, `noUnusedImports` all off) — this is intentional for Astro's template syntax.

## Site constants
All global metadata (name, URL, description, email) lives in `src/consts.ts` as a typed `SITE` object. Use this instead of hardcoding strings.

## Deployment
The site deploys via **Cloudflare Workers** (not Pages) as a fully static build served through Workers Assets, which edge-caches assets automatically. Do not give Cloudflare Pages-specific advice. `public/_headers` sets immutable caching for hashed `/_astro/*` assets; keep it if the build setup changes.

A server-rendered variant with Astro route caching (@astrojs/cloudflare adapter, Workers Cache) exists in git history; restore it from there if server-side routes are ever needed instead of rebuilding from scratch.

## Cloudflare types
`worker-configuration.d.ts` is generated and checked in. Regenerate with `bun run cf-typegen` after changing `wrangler.jsonc` or `.dev.vars`.

## No JavaScript
The site intentionally ships zero client-side JS. No dynamic components, no navigation bar. Keep it that way unless explicitly asked to add interactivity.
