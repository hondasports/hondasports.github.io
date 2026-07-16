<script setup lang="ts">
const mobileMenuOpen = ref(false)

const navigation = [
  { label: 'トップ', href: '#top' },
  { label: '自己紹介', href: '#about' },
  { label: 'スキル', href: '#skill' },
  { label: 'コンテンツ', href: '#content' },
]

const socialLinks = [
  { label: 'Suzumemo', href: 'https://suzumemo.jp/', icon: 'i-material-symbols-receipt-long-rounded', featured: true },
  { label: 'GitHub', href: 'https://github.com/hondasports', icon: 'i-simple-icons-github' },
  { label: 'X', href: 'https://x.com/hondasports8', icon: 'i-simple-icons-x' },
  { label: 'Facebook', href: 'https://www.facebook.com/miyamoto.tatsuya', icon: 'i-simple-icons-facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/hondasports/', icon: 'i-simple-icons-instagram' },
  { label: 'Qiita', href: 'https://qiita.com/hondasports8', icon: 'i-simple-icons-qiita' },
  { label: 'Zenn', href: 'https://zenn.dev/hondasports', icon: 'i-simple-icons-zenn' },
]

const skills = [
  { title: 'Java', description: '業務系アプリのバックエンド開発。Oracle, MySQL, PostgreSQL を使用。J2EE を用いた API 構築で Guava や JUnit を活用。', useYear: 5 },
  { title: 'C, MFC', description: '解析アプリケーションの保守で使用。C#と接続するためにCRLを使ったりもしていた。', useYear: 3 },
  { title: 'PHP, Vue', description: 'フロントエンド開発の主担当（PHP:2割, Vue:8割）。直近は、新規プロダクトの開発基盤構築、ライブラリ選定、設計、実装（一部ユニットテスト）を担当。使用技術: ESLint, Prettier, Vue3, vee-validate, zod, ky, vitest', useYear: 6 },
  { title: 'Perl', description: '半導体企業でのテキスト操作で使用。', useYear: 5 },
  { title: 'Python', description: 'Django を使った WebAPI プロトタイプ作成や、個人プロジェクト（Twitter Bot）で使用。', useYear: 1 },
  { title: 'React', description: 'Suzumemoで使用。', useYear: 1 },
]

const projects = [
  {
    title: 'ニコカレ - ニコニコカレンダー',
    href: 'https://applion.jp/iphone/app/633386996/',
    description: '友人の仕事がきっかけで作成したiOSカレンダーアプリ。UI/UX設計から実装まで担当。メンテナンス期間を経て、現在は紹介ページのみが残存。',
    tags: ['iOS', 'Objective-C', 'Mobile'],
    icon: 'i-material-symbols-smartphone',
    accent: 'bg-orange-500',
  },
  {
    title: 'Bun-chan-bot',
    href: 'https://x.com/Bun_chan_Bot/',
    description: 'Raspberry Piを使った在宅監視と Twitter Bot として運用。センサーデータの取得、通知連携、自動ツイートまでのシステムを構築。',
    tags: ['Raspberry Pi', 'Python', 'Twitter API'],
    icon: 'i-material-symbols-memory-rounded',
    accent: 'bg-cyan-500',
  },
  {
    title: 'Suzumemo',
    href: 'https://github.com/hondasports/kakeibo',
    description: 'Suzumemoは、思いついた時に支出や収入を軽く記録し、あとから支出傾向を振り返るための個人・家族向けWeb家計簿アプリです。',
    tags: ['React', 'TypeScript', 'Convex', 'Clerk', 'MUI'],
    icon: 'i-material-symbols-receipt-long-rounded',
    accent: 'bg-teal-500',
  },
]

function closeMobileMenu(): void {
  mobileMenuOpen.value = false
}
</script>

<template>
  <div class="relative min-h-screen text-[var(--portfolio-text)]">
    <div class="fixed inset-0 -z-50">
      <img
        src="/background-hd.png"
        alt=""
        width="1920"
        height="1280"
        fetchpriority="high"
        class="size-full object-cover object-center"
      >
      <div class="absolute inset-0 bg-[#020b14]/50" />
    </div>

    <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#020b14]/90 text-white backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          class="focus-ring flex items-center gap-3 rounded-sm"
          aria-label="トップへ移動"
        >
          <span class="flex size-8 items-center justify-center border border-cyan-300/60 font-mono text-sm font-semibold text-cyan-300">TM</span>
          <span class="hidden text-sm font-semibold tracking-wide sm:inline">Tatsuya Miyamoto</span>
        </a>

        <div class="flex items-center gap-1">
          <nav
            class="mr-3 hidden items-center gap-7 md:flex"
            aria-label="メインナビゲーション"
          >
            <a
              v-for="item in navigation"
              :key="item.href"
              :href="item.href"
              class="focus-ring rounded-sm text-xs font-medium tracking-wider text-slate-300 transition-colors hover:text-cyan-300"
            >
              {{ item.label }}
            </a>
          </nav>
          <UColorModeButton
            color="neutral"
            variant="ghost"
            aria-label="カラーモードを切り替える"
          />
          <USlideover
            v-model:open="mobileMenuOpen"
            title="Menu"
            description="ページ内メニュー"
            :ui="{ content: 'max-w-xs' }"
          >
            <UButton
              class="md:hidden"
              color="neutral"
              variant="ghost"
              icon="i-material-symbols-menu-rounded"
              aria-label="メニューを開く"
            />
            <template #body>
              <nav
                class="flex flex-col gap-2"
                aria-label="モバイルナビゲーション"
              >
                <a
                  v-for="item in navigation"
                  :key="item.href"
                  :href="item.href"
                  class="focus-ring border-b border-[var(--portfolio-line)] px-2 py-4 text-base font-semibold"
                  @click="closeMobileMenu"
                >
                  {{ item.label }}
                </a>
              </nav>
            </template>
          </USlideover>
        </div>
      </div>
    </header>

    <main>
      <section
        id="top"
        class="relative isolate flex min-h-[660px] items-end overflow-hidden bg-[#020b14]/25 pt-16 text-white lg:min-h-[620px]"
      >
        <div class="mx-auto w-full max-w-7xl px-5 pb-12 pt-28 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <div class="max-w-4xl">
            <p class="mb-5 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300 sm:text-sm">
              <span class="h-px w-10 bg-cyan-300" />
              Frontend Developer
            </p>
            <h1 class="text-[clamp(3.25rem,9vw,6.5rem)] font-black leading-[0.86] tracking-[-0.075em]">
              <span class="block">Tatsuya</span>
              <span class="block text-cyan-300">Miyamoto</span>
            </h1>
            <p class="mt-8 text-xl font-bold tracking-tight sm:text-2xl">
              プログラミングは人生の一部
            </p>
            <p class="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
              フロントエンドを主軸に、バックエンドから組み込みまで幅広く経験。シンプルで使いやすいシステムを作ることを信条にしています。
            </p>

            <div class="mt-8 flex max-w-3xl flex-wrap items-center gap-x-5 gap-y-4">
              <a
                v-for="link in socialLinks"
                :key="link.label"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="focus-ring group inline-flex items-center gap-2 rounded-sm text-xs font-semibold tracking-wide transition-colors"
                :class="link.featured ? 'border border-cyan-300/50 bg-cyan-300/10 px-3 py-2 text-cyan-200 hover:bg-cyan-300/20' : 'text-slate-300 hover:text-cyan-300'"
              >
                <UIcon
                  :name="link.icon"
                  class="size-4"
                />
                {{ link.label }}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        class="border-b border-[var(--portfolio-line)] bg-[var(--portfolio-bg)]/75"
      >
        <div class="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-12 lg:py-28">
          <div>
            <p class="mb-4 font-mono text-xs font-semibold tracking-[0.2em] text-cyan-500 dark:text-cyan-300">
              01 / ABOUT
            </p>
            <h2 class="text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              自己紹介
            </h2>
            <p class="mt-7 text-base leading-8 text-[var(--portfolio-muted)]">
              工業高校時代にインターネットにのめり込み、卒業後プログラマとしてキャリアを開始。 初めて業務で先輩から教えてもらった言語はC言語とJavaを経験。その後、外資系半導体企業で社内SEからSIerへ転職し主にJava, Perl, MFCを業務で使用。2018年中旬にメーカ系企業に転職し主にフロントエンド(PHP, Vue)を担当。 趣味は、バイクでのツーリング。
            </p>
          </div>

          <div id="skill">
            <p class="mb-4 font-mono text-xs font-semibold tracking-[0.2em] text-cyan-500 dark:text-cyan-300">
              02 / SKILLS
            </p>
            <h2 class="mb-8 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              スキル
            </h2>
            <div class="grid gap-x-10 md:grid-cols-2">
              <SkillCard
                v-for="skill in skills"
                :key="skill.title"
                :title="skill.title"
                :description="skill.description"
                :use-year="skill.useYear"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="content"
        class="bg-[var(--portfolio-bg)]/75"
      >
        <div class="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div class="mb-12 flex items-end justify-between gap-6">
            <div>
              <p class="mb-4 font-mono text-xs font-semibold tracking-[0.2em] text-cyan-500 dark:text-cyan-300">
                03 / WORKS
              </p>
              <h2 class="text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                制作実績
              </h2>
            </div>
            <p class="hidden max-w-sm text-right text-sm leading-7 text-[var(--portfolio-muted)] md:block">
              個人で企画・設計・実装したプロジェクト
            </p>
          </div>

          <div class="grid gap-px overflow-hidden border border-[var(--portfolio-line)] bg-[var(--portfolio-line)] lg:grid-cols-3">
            <a
              v-for="project in projects"
              :key="project.title"
              :href="project.href"
              target="_blank"
              rel="noopener noreferrer"
              class="focus-ring group flex min-h-80 flex-col bg-[var(--portfolio-surface)]/85 p-7 transition-colors hover:bg-slate-100/80 dark:hover:bg-slate-900/80 sm:p-9"
            >
              <div class="mb-10 flex items-start justify-between">
                <span
                  class="flex size-14 items-center justify-center text-white"
                  :class="project.accent"
                >
                  <UIcon
                    :name="project.icon"
                    class="size-7"
                  />
                </span>
                <UIcon
                  name="i-material-symbols-arrow-outward-rounded"
                  class="size-6 text-[var(--portfolio-muted)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-500"
                />
              </div>
              <h3 class="text-xl font-extrabold tracking-tight sm:text-2xl">
                {{ project.title }}
              </h3>
              <p class="mt-4 flex-1 text-sm leading-7 text-[var(--portfolio-muted)]">
                {{ project.description }}
              </p>
              <ul
                class="mt-8 flex flex-wrap gap-2"
                aria-label="使用技術"
              >
                <li
                  v-for="tag in project.tags"
                  :key="tag"
                  class="border border-[var(--portfolio-line)] px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-[var(--portfolio-muted)]"
                >
                  {{ tag }}
                </li>
              </ul>
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-[var(--portfolio-line)] bg-[var(--portfolio-bg)]/88">
      <div class="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs text-[var(--portfolio-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>© 2026 Tatsuya Miyamoto</p>
        <a
          href="#top"
          class="focus-ring inline-flex items-center gap-2 self-start rounded-sm font-mono font-medium hover:text-cyan-500"
        >
          BACK TO TOP
          <UIcon
            name="i-material-symbols-arrow-upward-rounded"
            class="size-4"
          />
        </a>
      </div>
    </footer>
  </div>
</template>
