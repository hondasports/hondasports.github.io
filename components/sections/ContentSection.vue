<template>
  <section
    id="content"
    class="px-4 md:px-8"
  >
    <div class="max-w-6xl mx-auto">
      <div class="text-center md:text-left mb-10">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 text-accent text-xs font-mono font-medium mb-4">
          <i class="pi pi-folder text-xs" />
          <span>Projects</span>
        </span>
        <h2 class="text-3xl md:text-4xl font-black text-white">
          コンテンツ
        </h2>
      </div>

      <div class="grid grid-cols-1 gap-6">
        <a
          v-for="item in contents"
          :key="item.title"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group card-surface p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
        >
          <div
            class="shrink-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl"
            :style="{ backgroundColor: `${item.color}15` }"
          >
            <i
              :class="item.icon"
              class="text-3xl md:text-4xl"
              :style="{ color: item.color }"
            />
          </div>

          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-3 mb-2">
              <span class="font-mono text-xs uppercase tracking-wider text-white/40">{{ item.category }}</span>
              <span
                v-if="item.year"
                class="text-xs font-mono px-2 py-0.5 rounded-full border border-white/15 text-white/60"
              >{{ item.year }}</span>
              <span
                v-if="item.role"
                class="text-xs font-mono px-2 py-0.5 rounded-full border border-white/15 text-white/60"
              >{{ item.role }}</span>
            </div>
            <h3 class="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors mb-2">
              {{ item.title }}
            </h3>
            <p class="text-sm md:text-base text-white/60 leading-relaxed mb-4">
              {{ item.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="text-xs font-mono px-2.5 py-1 rounded-full border border-white/15 text-white/70 group-hover:border-accent/30 group-hover:text-accent transition-colors"
              >{{ tag }}</span>
            </div>
          </div>

          <i class="pi pi-arrow-up-right text-white/30 group-hover:text-accent transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface ContentItem {
  title: string
  description: string
  href: string
  icon: string
  color: string
  category: string
  year?: string
  role?: string
  tags: string[]
}

const contents: ContentItem[] = [
  {
    title: 'ニコカレ - ニコニコカレンダー',
    description: '友人の仕事がきっかけで作成したiOSカレンダーアプリ。UI/UX設計から実装まで担当。メンテナンス期間を経て、現在は紹介ページのみが残存。',
    href: 'https://applion.jp/iphone/app/633386996/',
    icon: 'pi pi-mobile',
    color: '#f97316',
    category: 'iOS App',
    role: '個人開発',
    tags: ['iOS', 'Objective-C', 'Mobile'],
  },
  {
    title: 'Bun-chan-bot',
    description: 'Raspberry Piを使った在宅監視と Twitter Bot として運用。センサーデータの取得、通知連携、自動ツイートまでのシステムを構築。',
    href: 'https://x.com/Bun_chan_Bot/',
    icon: 'pi pi-microchip',
    color: '#10b981',
    category: 'IoT / Bot',
    role: '個人開発',
    tags: ['Raspberry Pi', 'Python', 'Twitter API'],
  },
]
</script>
