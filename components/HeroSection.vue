<template>
  <section
    id="top"
    class="flex items-center min-h-[90vh] px-4 md:px-8"
  >
    <div class="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div class="order-1">
        <p class="font-mono text-sm md:text-base tracking-[0.3em] uppercase text-white/50 mb-4">
          Frontend Developer
        </p>
        <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight text-white mb-6">
          Tatsuya<br><span class="text-accent">Miyamoto</span>
        </h1>
      </div>

      <div class="order-2 lg:justify-self-end max-w-md">
        <p class="text-lg md:text-2xl font-light leading-relaxed text-white/80 mb-8">
          プログラミングは人生の一部
        </p>
        <p class="text-sm md:text-base text-white/50 leading-relaxed mb-8">
          フロントエンドを主軸に、バックエンドから組み込みまで幅広く経験。シンプルで使いやすいシステムを作ることを信条にしています。
        </p>

        <div class="flex flex-wrap gap-3">
          <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="link.label"
            class="group inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/15 text-white/90 text-sm font-medium transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
          >
            <i
              v-if="link.icon"
              :class="link.icon"
            />
            <span v-if="link.text">{{ link.text }}</span>
          </a>
        </div>
      </div>
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
</script>
