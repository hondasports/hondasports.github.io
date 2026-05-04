---
name: testing-portfolio
description: Test the hondasports portfolio site end-to-end. Use when verifying UI changes, dark mode, responsive layout, or component rendering.
---

# Testing: hondasports Portfolio Site

## Overview
Nuxt 4 static portfolio site using PrimeVue (Lara theme), Tailwind CSS 4, and Vue 3. Deploys to GitHub Pages.

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

- Dev server starts on `http://localhost:3000` (or next available port like 3001/3002/3003 if occupied)
- Nuxt telemetry prompt may appear on first install — select "No"
- Husky pre-commit hooks are set up automatically via `pnpm install`

## Key Commands
- `pnpm run lint` — ESLint
- `pnpm run build` — Production build
- `pnpm run dev` — Dev server
- `pnpm run generate` — Static site generation (builds to `.output/public`, symlinked as `dist`)

## Architecture

### Layout (Hero + Fullwidth Sections)
- `app.vue` → `pages/index.vue` → section components
- **HeroSection**: Full-viewport hero with background image, avatar, name, social links
- **TheNavbar**: Fixed top navbar with scroll-triggered background transition (transparent → solid)
- **TopSection**: Philosophy section with pill badge
- **AboutSection**: Self-introduction wrapped in glassmorphism card with avatar ring and career tags
- **SkillSection**: 5 skill cards in responsive grid (3-col desktop, 1-col mobile)
- **ContentSection**: Project cards with category labels, tech tags, and external link arrows
- **AppFooter**: Social buttons, separator line, copyright
- **MobileHeader**: Hamburger menu + dark mode toggle (visible < 768px)

### Component Details
- Components auto-registered: `components/sections/` → `<SectionsComponentName />`
- Composables auto-imported: `composables/useDarkMode.ts`, `useNavigation.ts`, `useScrollAnimation.ts`
- Data files: `data/skills.ts` (skill definitions with icon, color, description, useYear)
- Dark mode: Module-level singleton in `useDarkMode.ts`, toggles `.p-dark` class on `<html>`
- Scroll animations: Intersection Observer in `useScrollAnimation.ts`, adds `.animate-visible` class

### Design System
- **Glassmorphism**: `backdrop-blur-sm`, semi-transparent backgrounds (`bg-surface-0/80`, `dark:bg-surface-800/60`)
- **Skill cards**: Each has an icon (PrimeIcons) and brand color; progress bar uses `linear-gradient`
- **Content cards**: Category label (e.g. "iOS App"), tech tags, arrow icon on hover
- **About card**: Avatar with `ring-primary/20`, career badges with `pi-check-circle` icons
- PrimeVue theme: **Lara** preset from `@primeuix/themes`
- Tailwind CSS 4, responsive breakpoint: `md:` = 768px

## What to Test

### Desktop Flow
1. **Hero section**: Avatar, name, social links (6), scroll-down button
2. **Navbar**: Transparent at top → background + shadow on scroll
3. **TopSection**: "My Philosophy" pill badge with heart icon
4. **AboutSection**: Glassmorphism card, avatar ring, 5 career tags with check icons
5. **SkillSection**: 5 cards in 3-column grid, each with:
   - Icon in colored background (e.g. Java = pi-server #f89820)
   - Gradient progress bar (width = useYear * 10%)
   - "経験年数" label + year value
6. **ContentSection**: 2 cards with category, description, tech tags, arrow icon
7. **Footer**: Social buttons, separator line (`w-16 h-px`), copyright year

### Dark Mode
- Toggle button in navbar (desktop) or header (mobile) — uses `pi-moon` / `pi-sun` icon
- Clicking adds/removes `p-dark` class on `<html>` element
- Verify via JS: `document.documentElement.classList.contains('p-dark')`
- Card backgrounds change to dark variants (`dark:bg-surface-800/60`)
- Icons and progress bar colors should remain visible on dark background
- aria-label changes: "ダークモードに切り替え" ↔ "ライトモードに切り替え"

### Responsive / Mobile
- Desktop (>= 768px): Navbar with 4 nav buttons + dark mode toggle
- Mobile (< 768px): MobileHeader with hamburger + dark mode, skill cards in 1-column
- Hamburger opens PrimeVue Drawer (right side) with "Menu" header and 4 nav items
- About section: avatar on top, text below (vertical stack)
- Content cards: 1-column layout

### JavaScript Verification
Useful console checks for programmatic verification:
```javascript
// Skill cards: icons, colors, gradient bars
const cards = document.querySelectorAll('.group.relative.rounded-2xl');
cards.forEach(c => {
  const icon = c.querySelector('i[class*="pi-"]');
  const bar = c.querySelector('[style*="linear-gradient"]');
  console.log(c.querySelector('h3')?.textContent, icon?.className, icon?.style.color, !!bar);
});

// Dark mode status
console.log('Dark:', document.documentElement.classList.contains('p-dark'));

// Footer separator
const sep = document.querySelector('footer .h-px');
console.log('Separator:', sep?.className, getComputedStyle(sep).width);
```

## CI
- GitHub Actions: `ci.yml` (lint + build), `nuxt_build.yml` (deploy), CodeQL
- CI runs lint and build on PRs — both must pass
- Static site deploys via `pnpm generate` → `dist/`

## Devin Secrets Needed
- None — this is a static portfolio site with no authentication or API keys

## Common Issues
- Port 3000 might be in use — dev server auto-assigns next available port (check output for actual port)
- `DuplicatedImports "useAppConfig"` warning is cosmetic and can be ignored
- `@primevue/themes` is deprecated — use `@primeuix/themes` instead
- Browserslist data warning ("caniuse-lite is X months old") is cosmetic
- `vite-plugin-eslint2` v5.x is incompatible with ESLint 10. Keep ESLint at v9.
- `oxc-parser` / `oxc-transform` native bindings may need manual installation if `nuxt prepare` fails
- Dark mode state is a module-level singleton in `useDarkMode.ts` — shared across all components that import it
