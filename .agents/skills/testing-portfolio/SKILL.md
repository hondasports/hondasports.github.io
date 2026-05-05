---
name: testing-portfolio
description: Test the hondasports portfolio site end-to-end. Use when verifying layout, dark mode, responsive, or navigation changes.
---

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

- Dev server starts on `http://localhost:3000` (or next available port like 3001/3002/3003 if 3000 is in use)
- Nuxt telemetry prompt may appear on first install — select "No"
- Husky pre-commit hooks are set up automatically via `pnpm install` (postinstall runs `nuxt prepare`, prepare runs `husky`)

## Key Commands
- `pnpm run lint` — ESLint
- `pnpm run build` — Production build
- `pnpm run dev` — Dev server
- `pnpm run generate` — Static site generation (builds to `.output/public`, symlinked as `dist`)

## Architecture
- Single page app: `app.vue` → `pages/index.vue`
- Layout: Hero section (100vh) → fullwidth content sections with alternating backgrounds
- Navigation: `TheNavbar.vue` — fixed top navbar, transparent on hero, solid background on scroll
- Components: `HeroSection.vue`, `TheNavbar.vue`, `AppFooter.vue`, `SkillCard.vue`
- Section components: `components/sections/TopSection.vue`, `AboutSection.vue`, `SkillSection.vue`, `ContentSection.vue`
- Composables: `useDarkMode.ts` (module-level singleton ref), `useNavigation.ts`, `useScrollAnimation.ts`
- PrimeVue components used: **Button**, **Drawer** (registered in `nuxt.config.ts`)
- PrimeVue theme: **Lara** preset from `@primeuix/themes` with dark mode via `.p-dark` CSS class on `<html>`
- Tailwind CSS for layout (responsive breakpoint: `md:` = 768px)
- `@nuxt/image` for optimized background image

## What to Test

### Hero Section
- Hero takes full viewport height (min-h-screen / 100vh)
- Avatar image displays as a circle (rounded-full with overflow-hidden wrapper)
- h1 shows "Tatsuya Miyamoto", subtitle shows "Frontend Developer"
- 6 SNS link buttons: GitHub, X, Facebook, Instagram, Qiita, Zenn (all with aria-labels)
- Scroll indicator button (chevron-down icon) at the bottom
- Background image loads via `NuxtImg` with dark overlay

### Navbar Scroll Behavior
- On page load (scrollY=0): navbar is transparent (`bg-transparent`)
- After scrolling past 50px: navbar gets solid background (`bg-surface-0/90`), backdrop blur, and shadow (`shadow-md`)
- Verify with JS: `document.querySelector('header').classList.contains('shadow-md')`
- Navigation buttons: トップ, 自己紹介, スキル, コンテンツ (desktop only, hidden on mobile)

### Sections & Scroll Animations
- 4 sections render: プログラミングは人生の一部, 自己紹介, スキル, コンテンツ
- Each section wrapped in `.animate-on-scroll` div
- IntersectionObserver adds `.animate-visible` class when section enters viewport
- Verify with JS: `document.querySelectorAll('.animate-visible').length` should equal 4 after scrolling through all
- About section: avatar + text in 2-column layout (desktop)
- Content section: 2-column card grid with hover effects

### Skill Cards & Progress Bars
- 5 skill cards in grid layout (1 col mobile, 2 col md, 3 col lg)
- Each card has: skill name (h3), description, progress bar, year count
- Progress bar width = `Math.min(useYear * 10, 100)%`
  - Java: 50% (5 years)
  - C/MFC: 30% (3 years)
  - PHP/Vue: 60% (6 years)
  - Perl: 50% (5 years)
  - Python: 10% (1 year)
- Progress bar color uses PrimeVue CSS variable: `var(--p-primary-color)` → rgb(16, 185, 129) (emerald green)

### Dark Mode
- Toggle button in navbar (desktop) or header bar (mobile) — uses `pi-moon` / `pi-sun` icon
- Clicking adds/removes `p-dark` class on `<html>` element
- Verify via JS: `document.documentElement.classList.contains('p-dark')`
- aria-label changes: "ダークモードに切り替え" ↔ "ライトモードに切り替え"
- `useDarkMode` uses module-level singleton ref — state syncs between desktop/mobile components

### Responsive / Mobile
- Desktop (>= 768px): Navbar shows text navigation buttons
- Mobile (< 768px): Navbar shows only hamburger (`pi-bars`) + dark mode icon
- Hamburger opens PrimeVue `Drawer` component from the right with "Menu" header
- Drawer contains 4 navigation buttons; clicking one scrolls to section and closes Drawer
- Use browser mobile emulation (`set_mobile`) to test

### Footer
- Dark background: `bg-surface-900 dark:bg-surface-950`
- 6 SNS links (same as hero) + copyright with dynamic year
- Verify copyright year matches `new Date().getFullYear()`

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
- `vite-plugin-eslint2` v5.x is incompatible with ESLint 10 ([issue #47](https://github.com/ModyQyW/vite-plugin-eslint2/issues/47)). Keep ESLint at v9 until upstream fixes this.
- `oxc-parser` / `oxc-transform` native bindings for linux-x64-gnu may not install automatically via pnpm. If `nuxt prepare` fails with "Cannot find native binding", manually download and extract the prebuilt bindings to `node_modules/`.
- PrimeVue `Image` component may not apply `rounded-full` correctly — use `<div class="rounded-full overflow-hidden"><img /></div>` wrapper instead
- Progress bar color: Tailwind's `bg-primary` class may not resolve to a visible color in light mode. Use inline style with `var(--p-primary-color)` instead.
- `useDarkMode` composable must use a module-level ref (outside the function) to share state across multiple component instances. If dark mode icon desyncs between navbar and drawer, check that the ref is at module scope.
