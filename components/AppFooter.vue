<template>
  <footer class="py-10 bg-surface-900 dark:bg-surface-950 text-surface-400">
    <div class="max-w-5xl mx-auto px-4 md:px-8 text-center">
      <div class="flex justify-center gap-2 mb-6">
        <Button
          v-for="link in socialLinks"
          :key="link.label"
          :icon="link.icon"
          :label="link.text"
          :aria-label="link.label"
          class="p-button-text p-button-rounded !text-surface-400 hover:!text-white hover:!bg-surface-800 transition-colors"
          as="a"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
      <div class="w-16 h-px bg-surface-700 mx-auto mb-6" />
      <p class="text-sm text-surface-500">
        &copy; {{ currentYear }} Tatsuya Miyamoto
      </p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
interface SocialLink {
  label: string
  icon?: string
  text?: string
  href: string
}

const currentYear = new Date().getFullYear()

const socialLinks: SocialLink[] = [
  { label: 'GitHub', icon: 'pi pi-github', href: 'https://github.com/hondasports' },
  { label: 'X (Twitter)', icon: 'pi pi-twitter', href: 'https://x.com/hondasports8' },
  { label: 'Facebook', icon: 'pi pi-facebook', href: 'https://www.facebook.com/miyamoto.tatsuya' },
  { label: 'Instagram', icon: 'pi pi-instagram', href: 'https://www.instagram.com/hondasports/' },
  { label: 'Qiita', text: 'Qiita', href: 'https://qiita.com/hondasports8' },
  { label: 'Zenn', text: 'Zenn', href: 'https://zenn.dev/hondasports' },
]
</script>
