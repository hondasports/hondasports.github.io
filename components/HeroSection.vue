<template>
  <section
    id="top"
    class="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden"
  >
    <div class="relative z-10 text-center max-w-5xl mx-auto">
      <p class="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-zinc-500 dark:text-white/50 mb-6">
        Frontend Developer
      </p>

      <h1
        ref="titleRef"
        class="outline-title text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black leading-[0.9] tracking-tighter text-zinc-900 dark:text-white mb-6"
        :style="{ '--fill': fill }"
      >
        Tatsuya<br>Miyamoto
      </h1>

      <p class="text-lg md:text-xl text-zinc-600 dark:text-white/60 font-light tracking-wide mb-10">
        プログラミングは人生の一部
      </p>

      <div class="flex flex-wrap justify-center gap-3 mb-16">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="link.label"
          class="group inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-zinc-300 dark:border-white/15 text-zinc-900 dark:text-white/90 text-sm font-medium transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
        >
          <i
            v-if="link.icon"
            :class="link.icon"
          />
          <span v-if="link.text">{{ link.text }}</span>
        </a>
      </div>

      <button
        aria-label="下にスクロール"
        class="group flex flex-col items-center gap-2 bg-transparent border-none text-zinc-500 dark:text-white/40 hover:text-accent transition-colors cursor-pointer"
        @click="scrollToAbout"
      >
        <span class="font-mono text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <i class="pi pi-chevron-down text-xl animate-bounce" />
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

const titleRef = ref<HTMLElement | null>(null)
const fill = useHeroFill()

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
