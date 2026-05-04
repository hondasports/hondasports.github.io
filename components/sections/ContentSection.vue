<template>
  <section
    id="content"
    class="py-16 md:py-24 bg-surface-50 dark:bg-surface-800"
  >
    <div class="max-w-5xl mx-auto px-4 md:px-8">
      <div class="text-center mb-14">
        <span class="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Works</span>
        <h2 class="text-3xl md:text-4xl font-bold text-surface-800 dark:text-surface-100">
          コンテンツ
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a
          v-for="item in contents"
          :key="item.title"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative block rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-surface-0/80 dark:bg-surface-900/60 backdrop-blur-sm border border-surface-200/60 dark:border-surface-700/40 no-underline"
        >
          <div
            class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            :style="{ background: `linear-gradient(135deg, ${item.color}08, ${item.color}15)` }"
          />

          <div class="relative">
            <div class="flex items-start justify-between gap-3 mb-4">
              <div class="flex items-center gap-3">
                <div
                  class="flex items-center justify-center w-12 h-12 rounded-xl transition-transform duration-300 group-hover:scale-110"
                  :style="{ backgroundColor: `${item.color}18` }"
                >
                  <i
                    :class="item.icon"
                    class="text-xl"
                    :style="{ color: item.color }"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-surface-800 dark:text-surface-100 group-hover:text-primary transition-colors">
                    {{ item.title }}
                  </h3>
                  <span class="text-xs font-medium text-surface-400 dark:text-surface-500">{{ item.category }}</span>
                </div>
              </div>
              <i class="pi pi-arrow-up-right text-surface-400 group-hover:text-primary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <p class="text-sm text-surface-500 dark:text-surface-400 leading-relaxed mb-4">
              {{ item.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-surface-100 dark:bg-surface-700/60 text-surface-600 dark:text-surface-300"
              >{{ tag }}</span>
            </div>
          </div>
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
  tags: string[]
}

const contents: ContentItem[] = [
  {
    title: 'ニコカレ - ニコニコカレンダー',
    description: '友人の仕事がきっかけで作成したアプリ。メンテナンスをサボっていたため削除された。リンクは過去に残っていた紹介ページ。',
    href: 'https://applion.jp/iphone/app/633386996/',
    icon: 'pi pi-mobile',
    color: '#f97316',
    category: 'iOS App',
    tags: ['iOS', 'Objective-C', 'Mobile'],
  },
  {
    title: 'Bun-chan-bot',
    description: 'ラズパイを使いたいというのと、日中部屋を留守にするのでモニタリングするために作成。',
    href: 'https://x.com/Bun_chan_Bot/',
    icon: 'pi pi-microchip',
    color: '#10b981',
    category: 'IoT / Bot',
    tags: ['Raspberry Pi', 'Python', 'Twitter API'],
  },
]
</script>
