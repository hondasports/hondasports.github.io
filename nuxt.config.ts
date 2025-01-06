import Lara from '@primevue/themes/lara'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@primevue/nuxt-module', '@nuxt/eslint', 'nuxt-gtag'],
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        { name: 'copyright', content: '© 2024 Tatsuya Miyamoto' },
        { name: 'author', content: 'Tatsuya Miyamoto' },
        { name: 'description', content: 'Tatsuya Miyamoto Portfolio' },
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
      tailwindcss: {},
      autoprefixer: {},
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
  },
})
