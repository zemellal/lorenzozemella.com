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
The site deploys via **Cloudflare Workers** (not Pages) using the `@astrojs/cloudflare` adapter with `output: "server"`. Do not give Cloudflare Pages-specific advice.

Pages are server-rendered and edge-cached via Astro route caching, configured in `astro.config.mjs`. The Workers Cache key includes the Worker version, so each deploy starts a cold cache; no purging needed. Sessions and Cloudflare Images are intentionally disabled there; do not re-enable without need.

Keep `wrangler.jsonc` minimal. The build generates the full deploy config (adapter merges in `main`, the `ASSETS` binding, `cache.enabled`) and `wrangler deploy` picks it up automatically.

## Cloudflare types
`worker-configuration.d.ts` is generated and checked in. Regenerate with `bun run cf-typegen` after changing `wrangler.jsonc` or `.dev.vars`.

## No JavaScript
The site intentionally ships zero client-side JS. No dynamic components, no navigation bar. Keep it that way unless explicitly asked to add interactivity.
