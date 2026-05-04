<template>
  <section
    id="top"
    class="relative flex items-center justify-center min-h-screen overflow-hidden"
  >
    <NuxtImg
      class="absolute inset-0 w-full h-full object-cover z-0"
      format="webp"
      src="/background.jpg"
      alt="背景画像"
    />
    <div class="absolute inset-0 bg-black/40 backdrop-blur-xs z-0" />

    <div class="relative z-10 text-center text-white px-4">
      <div class="mx-auto mb-6 w-32 h-32 rounded-full ring-4 ring-white/30 shadow-2xl overflow-hidden">
        <img
          src="/avatar.png"
          alt="プロフィール画像"
          class="w-full h-full object-cover"
        >
      </div>
      <h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-3">
        Tatsuya Miyamoto
      </h1>
      <p class="text-lg md:text-xl text-white/80 mb-2">
        Frontend Developer
      </p>
      <p class="text-sm md:text-base text-white/60 max-w-xl mx-auto mb-8">
        プログラミングは人生の一部
      </p>

      <div class="flex justify-center gap-3 mb-12">
        <Button
          v-for="link in socialLinks"
          :key="link.label"
          :icon="link.icon"
          :label="link.text"
          :aria-label="link.label"
          class="p-button-rounded p-button-outlined !text-white !border-white/30 hover:!bg-white/10"
          as="a"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>

      <button
        aria-label="下にスクロール"
        class="animate-bounce cursor-pointer bg-transparent border-none"
        @click="scrollToAbout"
      >
        <i class="pi pi-chevron-down text-2xl text-white/60" />
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface SocialLink {
  label: string
  icon?: string
  text?: string
  href: string
}

const socialLinks: SocialLink[] = [
  { label: 'GitHub', icon: 'pi pi-github', href: 'https://github.com/hondasports' },
  { label: 'X (Twitter)', icon: 'pi pi-twitter', href: 'https://x.com/hondasports8' },
  { label: 'Facebook', icon: 'pi pi-facebook', href: 'https://www.facebook.com/miyamoto.tatsuya' },
  { label: 'Instagram', icon: 'pi pi-instagram', href: 'https://www.instagram.com/hondasports/' },
  { label: 'Qiita', text: 'Qiita', href: 'https://qiita.com/hondasports8' },
  { label: 'Zenn', text: 'Zenn', href: 'https://zenn.dev/hondasports' },
]

const scrollToAbout = (): void => {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
