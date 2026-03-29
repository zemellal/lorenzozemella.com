# Lorenzo's site

Built with Astro + Tailwind CSS, deployed on Cloudflare Workers.

## Setup

```sh
bun install
bunx lefthook install
```

`lefthook install` registers the pre-commit hook. Only needed once after cloning.

## Development

```sh
bun dev
```

## Build

```sh
bun build
```

## Code quality

```sh
bun run check    # lint + format (write)
bun run lint     # lint only
bun run format   # format only
```

The pre-commit hook runs `biome check --write` automatically on staged files.
