# AGENTS.md

bytebuilderslab landing page: a bilingual (de/en) Next.js site on the Pages Router with Markdown articles in `content/articles/` and Tailwind. Built as a static export (`out/`) and deployed from `main` as the Cloudflare Worker `bytebuilderslab` (`wrangler.jsonc`); `worker/index.ts` only redirects `/` to `/de` or `/en` by Accept-Language, and `scripts/generate-sitemap.mjs` writes `out/sitemap.xml` after `next build`. Every page must be static: no `getServerSideProps` or API routes.

## Toolchain

- npm with `package-lock.json`; Node from `.nvmrc` (`engines` allows `>=22`); npm version in `packageManager`. Never switch package managers.
- `overrides.next.postcss` pins PostCSS to a patched release because Next bundles a vulnerable one (SEC-001). Remove the override once a Next release ships a fixed PostCSS.

## Verify a change

```sh
npm ci
npm run typecheck   # tsc --noEmit
npm run lint        # next lint (ESLint 8, next/core-web-vitals)
npm run build       # next build; prerenders every page and article
```

CI (`.github/workflows/ci.yml`) runs exactly these, and `audit.yml` runs `npm audit --omit=dev --audit-level=high`.

## Does not exist

- There are no tests. Do not claim tests passed; the build and typecheck are the safety net.

## Conventions

Standards live in `ameetmadan/standards`. PR titles and commits follow Conventional Commits; branches are `<type>/<short-description>` off `main`.
