<template>
  <section
    id="content"
    class="px-4 md:px-8"
  >
    <div class="max-w-5xl mx-auto">
      <div class="rounded-3xl p-8 md:p-12 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/15 dark:border-white/10 shadow-2xl">
        <div class="text-center mb-10">
          <span class="inline-block text-xs font-semibold tracking-widest uppercase text-white/50 mb-3">Works</span>
          <h2 class="text-3xl md:text-4xl font-bold text-white">
            コンテンツ
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <a
            v-for="item in contents"
            :key="item.title"
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative block rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white/8 dark:bg-white/4 border border-white/10 hover:border-white/20 hover:bg-white/12 no-underline"
          >
            <div
              class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              :style="{ background: `linear-gradient(135deg, ${item.color}10, ${item.color}20)` }"
            />

            <div class="relative">
              <div class="flex items-start justify-between gap-3 mb-4">
                <div class="flex items-center gap-3">
                  <div
                    class="flex items-center justify-center w-12 h-12 rounded-xl transition-transform duration-300 group-hover:scale-110"
                    :style="{ backgroundColor: `${item.color}25` }"
                  >
                    <i
                      :class="item.icon"
                      class="text-xl"
                      :style="{ color: item.color }"
                    />
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {{ item.title }}
                    </h3>
                    <span class="text-xs font-medium text-white/40">{{ item.category }}</span>
                  </div>
                </div>
                <i class="pi pi-arrow-up-right text-white/30 group-hover:text-primary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p class="text-sm text-white/50 leading-relaxed mb-4">
                {{ item.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-white/60 border border-white/8"
                >{{ tag }}</span>
              </div>
            </div>
          </a>
        </div>
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
