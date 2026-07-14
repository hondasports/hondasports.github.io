// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/eslint', 'nuxt-gtag'],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Tatsuya Miyamoto | Frontend Developer',
      htmlAttrs: { lang: 'ja' },
      meta: [
        { name: 'copyright', content: `© ${new Date().getFullYear()} Tatsuya Miyamoto` },
        { name: 'author', content: 'Tatsuya Miyamoto' },
        { name: 'description', content: 'フロントエンドエンジニア Tatsuya Miyamoto のポートフォリオ' },
        { name: 'theme-color', content: '#020b14' },
        { property: 'og:title', content: 'Tatsuya Miyamoto | Frontend Developer' },
        { property: 'og:description', content: 'フロントエンドエンジニア Tatsuya Miyamoto のポートフォリオ' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://hondasports.github.io/' },
        { property: 'og:image', content: 'https://hondasports.github.io/avatar.png' },
        { property: 'og:locale', content: 'ja_JP' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Tatsuya Miyamoto | Frontend Developer' },
        { name: 'twitter:description', content: 'フロントエンドエンジニア Tatsuya Miyamoto のポートフォリオ' },
        { name: 'twitter:image', content: 'https://hondasports.github.io/avatar.png' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
  },
  srcDir: 'app',
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    families: [
      {
        name: 'Noto Sans JP',
        provider: 'google',
        weights: [400, 500, 600, 700, 800, 900],
        global: true,
      },
      {
        name: 'IBM Plex Mono',
        provider: 'google',
        weights: [400, 500, 600],
        global: true,
      },
    ],
  },
  gtag: {
    id: 'G-K2JZ4CFDNZ',
  },
})
