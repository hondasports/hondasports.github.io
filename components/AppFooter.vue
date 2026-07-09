<template>
  <footer class="py-12 border-t border-zinc-200 dark:border-white/10">
    <div class="max-w-6xl mx-auto px-4 md:px-8 text-center">
      <div class="flex justify-center gap-4 mb-8">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="link.label"
          class="text-2xl text-zinc-500 dark:text-white/40 hover:text-accent transition-colors"
        >
          <i
            v-if="link.icon"
            :class="link.icon"
          />
          <span
            v-else
            class="text-base font-mono"
          >{{ link.text }}</span>
        </a>
      </div>
      <div class="w-16 h-px bg-zinc-300 dark:bg-white/20 mx-auto mb-6" />
      <p class="text-sm font-mono text-zinc-500 dark:text-white/30">
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
