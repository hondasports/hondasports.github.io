import Lara from '@primeuix/themes/lara'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@primevue/nuxt-module', '@nuxt/eslint', 'nuxt-gtag', '@nuxt/image'],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
      },
      title: 'Tatsuya Miyamoto Portfolio',
      meta: [
        { name: 'copyright', content: `© ${new Date().getFullYear()} Tatsuya Miyamoto` },
        { name: 'author', content: 'Tatsuya Miyamoto' },
        { name: 'description', content: 'Tatsuya Miyamoto のポートフォリオサイト。プログラミングスキル、経歴、プロジェクトを紹介しています。' },
        { property: 'og:title', content: 'Tatsuya Miyamoto Portfolio' },
        { property: 'og:description', content: 'Tatsuya Miyamoto のポートフォリオサイト。プログラミングスキル、経歴、プロジェクトを紹介しています。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://hondasports.github.io/' },
        { property: 'og:image', content: 'https://hondasports.github.io/avatar.png' },
        { property: 'og:locale', content: 'ja_JP' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Tatsuya Miyamoto Portfolio' },
        { name: 'twitter:description', content: 'Tatsuya Miyamoto のポートフォリオサイト。プログラミングスキル、経歴、プロジェクトを紹介しています。' },
        { name: 'twitter:image', content: 'https://hondasports.github.io/avatar.png' },
      ],
    },
  },
  css: [
    '~/assets/css/main.css',
    'primeicons/primeicons.css',
  ],
  compatibilityDate: '2024-11-01',
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  eslint: {
    checker: true,
    config: {
      stylistic: true, // <---
    },
  },
  gtag: {
    id: 'G-K2JZ4CFDNZ',
  },
  primevue: {
    options: {
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: '.p-dark',
        },
      },
    },
    components: {
      prefix: '',
      include: ['Button', 'Card', 'Drawer', 'Image', 'Divider'],
    },
  },
})
