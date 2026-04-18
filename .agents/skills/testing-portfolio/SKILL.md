# Testing: hondasports Portfolio Site

## Overview
This is a Nuxt 3 static portfolio site using PrimeVue components and Tailwind CSS. It deploys to GitHub Pages.

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

- Dev server starts on `http://localhost:3000` (or next available port like 3001 if 3000 is in use)
- Nuxt telemetry prompt may appear on first install — select "No"
- Husky pre-commit hooks are set up automatically via `pnpm install` (postinstall runs `nuxt prepare`, prepare runs `husky`)

## Key Commands
- `pnpm run lint` — ESLint
- `pnpm run build` — Production build
- `pnpm run dev` — Dev server

## Architecture
- Single page app: `app.vue` → `pages/index.vue` → `components/SkillCard.vue`
- PrimeVue components used: **Button**, **Card**, **Sidebar**, **Image**, **Divider** (registered in `nuxt.config.ts`)
- PrimeVue theme: **Lara** preset with dark mode via `.p-dark` CSS class on `<html>`
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
- Card backgrounds should change to dark theme colors

### Responsive / Mobile
- Desktop (>= 768px): Left sidebar visible with nav + avatar
- Mobile (< 768px): Sidebar hidden, sticky header with hamburger menu (`pi-bars` icon)
- Hamburger opens PrimeVue `Sidebar` component from the right with "Menu" header
- Use browser mobile emulation to test

## CI
- GitHub Actions: CodeQL analysis (JavaScript/TypeScript + Actions)
- No build/deploy CI in PR checks — only security scanning

## Devin Secrets Needed
- None — this is a static portfolio site with no authentication or API keys

## Common Issues
- `@primevue/themes` package might be deprecated in newer versions — check if migration to `@primeuix/themes` is needed
- Browserslist data warning ("caniuse-lite is X months old") is cosmetic and can be ignored or fixed with `npx update-browserslist-db@latest`
- Port 3000 might be in use — dev server auto-assigns next available port
