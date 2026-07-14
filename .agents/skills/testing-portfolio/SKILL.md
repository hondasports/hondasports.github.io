---
name: testing-portfolio
description: Test the hondasports portfolio site end-to-end. Use when verifying UI changes, dark mode, responsive layout, or component rendering.
---

# Testing: hondasports Portfolio Site

## Overview

Nuxt 4 static portfolio site using Nuxt UI 4, Tailwind CSS 4, and Vue 3. It deploys to GitHub Pages.

## Setup

```bash
nvm install
nvm use
corepack enable
corepack prepare pnpm@9.14.4 --activate
pnpm install
pnpm dev
```

The development server normally runs at `http://localhost:3000`.

## Required checks

```bash
pnpm lint
pnpm build
pnpm generate
```

## Architecture

- `app/app.vue`: wraps the page in `UApp`.
- `app/pages/index.vue`: hero, about, skills, works, navigation, footer, and page data.
- `app/components/SkillCard.vue`: compact skill entry.
- `app/assets/css/main.css`: Tailwind CSS imports and light/dark color tokens.
- `app/app.config.ts`: Nuxt UI colors and Material Symbols icon defaults.
- `public/background-hd.png`: high-resolution hero photograph.

## Browser verification

### Desktop

1. Verify the fixed header contains four in-page navigation links and the color-mode button.
2. Verify the hero image is sharp, the name remains readable, and the top Suzumemo link points to `https://suzumemo.jp/`.
3. Verify the About and Skills sections use the two-column layout.
4. Verify all three work entries render and the Suzumemo work entry points to the GitHub repository.
5. Verify external links include `target="_blank"` and `rel="noopener noreferrer"`.

### Mobile (390 px)

1. Verify there is no horizontal overflow.
2. Open the hamburger button and confirm the Nuxt UI slideover contains all four navigation items.
3. Select a navigation item and confirm the slideover closes and the page scrolls to the section.
4. Verify About, Skills, and Works collapse into readable single-column layouts.

### Color mode

- The default preference is dark.
- Toggle the color-mode button and confirm the `<html>` class changes between `dark` and `light`.
- Confirm text, borders, cards, and icons remain legible in both modes.

## CI/CD

- `.github/workflows/ci.yml` runs lint and build for pull requests.
- `.github/workflows/nuxt_build.yml` runs static generation and deploys `dist/` to GitHub Pages.

## Common issues

- Port 3000 may already be occupied; use the URL printed by Nuxt.
- `vite-plugin-eslint2` is an optional peer of `@nuxt/eslint`; the Nuxt ESLint dev checker is intentionally disabled and lint runs through `pnpm lint`.
- Nuxt/Rollup may emit third-party sourcemap or pure-annotation warnings; these are non-blocking when lint, build, and generate succeed.
