<template>
  <footer class="py-10 bg-black/40 backdrop-blur-md border-t border-white/10">
    <div class="max-w-5xl mx-auto px-4 md:px-8 text-center">
      <div class="flex justify-center gap-2 mb-6">
        <Button
          v-for="link in socialLinks"
          :key="link.label"
          :icon="link.icon"
          :label="link.text"
          :aria-label="link.label"
          class="p-button-text p-button-rounded !text-white/40 hover:!text-white hover:!bg-white/10 transition-colors"
          as="a"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
      <div class="w-16 h-px bg-white/20 mx-auto mb-6" />
      <p class="text-sm text-white/30">
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
