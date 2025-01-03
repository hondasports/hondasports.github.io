import Lara from '@primevue/themes/lara';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'copyright', content: '© 2024 Tatsuya Miyamoto' },
        { name: 'author', content: 'Tatsuya Miyamoto' },
        { name: 'description', content: 'Tatsuya Miyamoto Portfolio' }
      ]
    }
  },
  modules: [
    '@primevue/nuxt-module', '@nuxt/eslint'
  ],
  eslint: {
    checker: true,
    config: {
      stylistic: true // <---
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    'primeicons/primeicons.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  primevue: {
    options: {
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: '.p-dark',
        }
      },
    }
  }
})