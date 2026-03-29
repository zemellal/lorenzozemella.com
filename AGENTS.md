# Agent Notes

## Package manager
Use **Bun** — `bun install`, `bun dev`, `bunx`. Never use npm or npx.

## Pre-commit hooks
Lefthook runs Biome on staged files with `stage_fixed: true`, meaning Biome auto-fixes and re-stages files. Commits will always produce formatted, linted output. Do not skip hooks.

## Linting / formatting
Biome handles both lint and format. `.astro` files have relaxed rules (`useConst`, `useImportType`, `noUnusedVariables`, `noUnusedImports` all off) — this is intentional for Astro's template syntax.

## Site constants
All global metadata (name, URL, description, email) lives in `src/consts.ts` as a typed `SITE` object. Use this instead of hardcoding strings.

## No JavaScript
The site intentionally ships zero client-side JS. No dynamic components, no navigation bar. Keep it that way unless explicitly asked to add interactivity.
