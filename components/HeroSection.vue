<template>
  <section
    id="top"
    class="relative flex items-center justify-center min-h-screen overflow-hidden"
  >
    <div class="relative z-10 text-center text-white px-4">
      <div class="mx-auto mb-8 w-36 h-36 md:w-40 md:h-40 rounded-full ring-4 ring-white/20 shadow-2xl overflow-hidden backdrop-blur-sm">
        <img
          src="/avatar.png"
          alt="プロフィール画像"
          class="w-full h-full object-cover"
        >
      </div>
      <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
        Tatsuya Miyamoto
      </h1>
      <p class="text-lg md:text-xl text-white/80 mb-2 font-light tracking-wide">
        Frontend Developer
      </p>
      <p class="text-sm md:text-base text-white/50 max-w-xl mx-auto mb-10">
        プログラミングは人生の一部
      </p>

      <div class="flex justify-center gap-3 mb-14">
        <Button
          v-for="link in socialLinks"
          :key="link.label"
          :icon="link.icon"
          :label="link.text"
          :aria-label="link.label"
          class="p-button-rounded p-button-outlined !text-white/90 !border-white/20 hover:!bg-white/10 hover:!border-white/40 transition-all duration-300"
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
        <i class="pi pi-chevron-down text-3xl text-white/40" />
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
