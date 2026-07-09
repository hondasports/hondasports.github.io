<template>
  <section
    id="content"
    class="px-4 md:px-8"
  >
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16">
      <div class="hidden md:flex items-start justify-center pt-12">
        <span class="vertical-label text-4xl md:text-5xl font-black text-zinc-300 dark:text-white/10 uppercase">Works</span>
      </div>

      <div class="card-surface p-8 md:p-12">
        <div class="text-center md:text-left mb-10">
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 text-accent text-xs font-mono font-medium mb-4">
            <i class="pi pi-folder text-xs" />
            <span>Projects</span>
          </span>
          <h2 class="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white">
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
            class="group relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 h-72 md:h-80 p-6 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10"
          >
            <i
              :class="item.icon"
              class="absolute top-6 right-6 text-6xl opacity-10 transition-transform duration-500 group-hover:scale-110"
              :style="{ color: item.color }"
            />

            <div class="relative z-10">
              <span class="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-white/40">{{ item.category }}</span>
              <h3 class="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-accent transition-colors mt-1">
                {{ item.title }}
              </h3>
            </div>

            <div class="relative z-10">
              <p class="text-sm text-zinc-600 dark:text-white/70 leading-relaxed mb-4 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
                {{ item.description }}
              </p>
              <div class="flex flex-wrap gap-2 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 delay-75">
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="text-xs font-mono px-2.5 py-1 rounded-full border border-zinc-300 dark:border-white/15 text-zinc-700 dark:text-white/70 group-hover:border-accent/30 group-hover:text-accent transition-colors"
                >{{ tag }}</span>
              </div>
            </div>

            <i class="pi pi-arrow-up-right absolute top-6 right-6 text-zinc-400 dark:text-white/30 group-hover:text-accent transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
