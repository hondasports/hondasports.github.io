# Testing: hondasports Portfolio Site

## Overview
This is a Nuxt 4 static portfolio site using PrimeVue components and Tailwind CSS. It deploys to GitHub Pages.

## Setup

```bash
# Node version specified in .nvmrc
nvm install $(cat .nvmrc) && nvm use $(cat .nvmrc)

# Package manager: pnpm (version specified in package.json packageManager field)
corepack enable && corepack prepare pnpm@9.14.4 --activate

# Install dependencies
pnpm install

# Start dev server
pnpm run dev
```

- Dev server starts on `http://localhost:3000` (or next available port like 3001/3002 if 3000 is in use)
- Nuxt telemetry prompt may appear on first install — select "No"
- Husky pre-commit hooks are set up automatically via `pnpm install` (postinstall runs `nuxt prepare`, prepare runs `husky`)

## Key Commands
- `pnpm run lint` — ESLint
- `pnpm run build` — Production build
- `pnpm run dev` — Dev server
- `pnpm run generate` — Static site generation (builds to `.output/public`, symlinked as `dist`)

## Architecture
- Single page app: `app.vue` → `pages/index.vue` → `components/SkillCard.vue`
- PrimeVue components used: **Button**, **Card**, **Sidebar**, **Image**, **Divider** (registered in `nuxt.config.ts`)
- PrimeVue theme: **Lara** preset from `@primeuix/themes` (migrated from deprecated `@primevue/themes`) with dark mode via `.p-dark` CSS class on `<html>`
- Tailwind CSS for layout (responsive breakpoint: `md:` = 768px)
- `@nuxt/image` for optimized background image

## What to Test

### Page Load & Cards
- All 4 sections render: トップ, 自己紹介, スキル, コンテンツ
- Each section is wrapped in a PrimeVue `Card` component (`.p-card` class)
- SkillCard component renders 5 items (Java, C/MFC, PHP/Vue, Perl, Python) with `Divider` separators
- Background image loads via `NuxtImg`

### PrimeVue Buttons
- Sidebar navigation buttons: トップ, 自己紹介, スキル, コンテンツ
- Footer social link buttons: GitHub, X (Twitter), Facebook, Instagram (icon buttons), Qiita, zenn (text buttons)
- Check buttons have PrimeVue styling (not raw HTML buttons)

### Dark Mode
- Toggle button is in the sidebar (desktop) or header (mobile) — uses `pi-moon` / `pi-sun` icon
- Clicking adds/removes `p-dark` class on `<html>` element
- Verify via JS console: `document.documentElement.classList.contains('p-dark')`
- Card backgrounds should change: `rgb(255, 255, 255)` → `rgb(24, 24, 27)`

### Responsive / Mobile
- Desktop (>= 768px): Left sidebar visible with nav + avatar
- Mobile (< 768px): Sidebar hidden, sticky header with hamburger menu (`pi-bars` icon)
- Hamburger opens PrimeVue `Sidebar` component from the right with "Menu" header
- Use browser mobile emulation to test

### ESLint Checker (dev mode)
- `nuxt.config.ts` has `eslint.checker: true` which uses `vite-plugin-eslint2` for real-time ESLint feedback
- Verify dev server logs do NOT contain "ESLintClass is not a constructor"
- If this error appears, it means `vite-plugin-eslint2` is incompatible with the installed ESLint version

## CI
- GitHub Actions: CodeQL analysis (JavaScript/TypeScript + Actions)
- No build/deploy CI in PR checks — only security scanning
- Static site deploys via GitHub Actions workflow (`nuxt_build.yml`): `pnpm generate` → deploys `dist/`

## Devin Secrets Needed
- None — this is a static portfolio site with no authentication or API keys

## Common Issues
- `@primevue/themes` is deprecated — use `@primeuix/themes` instead (import from `@primeuix/themes/lara`)
- Browserslist data warning ("caniuse-lite is X months old") is cosmetic and can be ignored
- Port 3000 might be in use — dev server auto-assigns next available port
- `vite-plugin-eslint2` v5.x is incompatible with ESLint 10 ([issue #47](https://github.com/ModyQyW/vite-plugin-eslint2/issues/47)). Keep ESLint at v9 until upstream fixes this. The `@nuxt/eslint` module's ESLint 10 support PR is also pending ([PR #645](https://github.com/nuxt/eslint/pull/645)).
- `oxc-parser` / `oxc-transform` native bindings for linux-x64-gnu may not install automatically via pnpm. If `nuxt prepare` fails with "Cannot find native binding", manually download and extract the prebuilt bindings to `node_modules/`.
