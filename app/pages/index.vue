<script setup lang="ts">
const mobileMenuOpen = ref(false)

const navigation = [
  { label: 'トップ', href: '#top', id: 'top' },
  { label: '自己紹介', href: '#about', id: 'about' },
  { label: 'スキル', href: '#skill', id: 'skill' },
  { label: 'コンテンツ', href: '#content', id: 'content' },
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

const marqueeItems = [
  'Vue',
  'React',
  'TypeScript',
  'Nuxt',
  'Tailwind CSS',
  'Java',
  'PHP',
  'Python',
  'Perl',
  'Convex',
]

const activeSection = ref('top')
const scrollProgress = ref(0)
const heroShift = ref(0)
const heroFade = ref(1)
const scrolled = ref(false)

onMounted(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let ticking = false

  const update = (): void => {
    ticking = false
    const y = window.scrollY
    scrolled.value = y > 24

    const max = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.value = max > 0 ? Math.min(y / max, 1) : 0

    if (!reducedMotion) {
      heroShift.value = Math.min(y * 0.28, 320)
      heroFade.value = Math.max(0, 1 - y / 520)
    }

    let best = 'top'
    let bestDistance = Infinity
    for (const item of navigation) {
      const el = document.getElementById(item.id)
      if (!el) continue
      const rect = el.getBoundingClientRect()
      const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2)
      if (distance < bestDistance) {
        bestDistance = distance
        best = item.id
      }
    }
    activeSection.value = best
  }

  const onScroll = (): void => {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(update)
    }
  }

  update()
  window.addEventListener('scroll', onScroll, { passive: true })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
  })
})

function closeMobileMenu(): void {
  mobileMenuOpen.value = false
}
</script>

<template>
  <div class="relative min-h-screen text-[var(--portfolio-text)]">
    <div
      class="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-cyan-400"
      :style="{ transform: `scaleX(${scrollProgress})` }"
      aria-hidden="true"
    />

    <div class="fixed inset-0 -z-50 gpu-layer">
      <img
        src="/background-hd.png"
        alt=""
        width="1920"
        height="1280"
        fetchpriority="high"
        decoding="async"
        class="gpu-layer size-full object-cover object-center"
      >
      <div class="absolute inset-0 bg-[#020b14]/50" />
    </div>

    <header
      class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#020b14]/90 text-white backdrop-blur-xl transition-shadow duration-500"
      :class="{ 'shadow-lg shadow-cyan-950/40': scrolled }"
    >
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
              class="nav-link focus-ring rounded-sm text-xs font-medium tracking-wider text-slate-300 transition-colors hover:text-cyan-300"
              :class="{ 'nav-active': activeSection === item.id }"
              :aria-current="activeSection === item.id ? 'true' : undefined"
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
        <div
          class="mx-auto w-full max-w-7xl px-5 pb-12 pt-28 will-change-transform sm:px-8 sm:pb-16 lg:px-12 lg:pb-20"
          :style="{ transform: `translate3d(0, ${heroShift}px, 0)`, opacity: heroFade }"
        >
          <div class="max-w-4xl">
            <p class="anim-fade mb-5 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300 sm:text-sm">
              <span class="h-px w-10 bg-cyan-300" />
              Frontend Developer
            </p>
            <h1 class="font-display text-[clamp(3.25rem,9vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.03em]">
              <span class="hero-line">
                <span>Tatsuya</span>
              </span>
              <span class="hero-line">
                <span
                  class="text-cyan-300"
                  style="--rise-delay: 130ms"
                >Miyamoto</span>
              </span>
            </h1>
            <p
              class="anim-fade mt-8 text-xl font-bold tracking-tight sm:text-2xl"
              style="--rise-delay: 380ms"
            >
              プログラミングは人生の一部
            </p>
            <p
              class="anim-fade mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8"
              style="--rise-delay: 500ms"
            >
              フロントエンドを主軸に、バックエンドから組み込みまで幅広く経験。シンプルで使いやすいシステムを作ることを信条にしています。
            </p>

            <div
              class="anim-fade mt-8 flex max-w-3xl flex-wrap items-center gap-x-5 gap-y-4"
              style="--rise-delay: 650ms"
            >
              <a
                v-for="link in socialLinks"
                :key="link.label"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="focus-ring group inline-flex items-center gap-2 rounded-sm text-xs font-semibold tracking-wide transition-all duration-300"
                :class="link.featured ? 'border border-cyan-300/50 bg-cyan-300/10 px-3 py-2 text-cyan-200 hover:-translate-y-0.5 hover:bg-cyan-300/20' : 'text-slate-300 hover:-translate-y-0.5 hover:text-cyan-300'"
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

        <div
          class="anim-fade absolute bottom-8 right-6 hidden flex-col items-center gap-2 text-slate-300 sm:flex lg:right-12"
          style="--rise-delay: 900ms"
          aria-hidden="true"
        >
          <span class="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
          <span class="relative block h-10 w-px overflow-hidden bg-white/20">
            <span class="scroll-hint-dot absolute left-0 top-0 h-4 w-px bg-cyan-300" />
          </span>
        </div>
      </section>

      <div
        class="marquee-mask overflow-hidden border-y border-[var(--portfolio-line)] bg-[var(--portfolio-bg)]/60 py-6 backdrop-blur-sm"
        aria-hidden="true"
      >
        <div class="marquee-track items-center">
          <template
            v-for="copy in 2"
            :key="copy"
          >
            <span
              v-for="item in marqueeItems"
              :key="`${copy}-${item}`"
              class="flex items-center gap-10 whitespace-nowrap pr-10 font-display text-3xl font-bold uppercase tracking-tight text-[var(--portfolio-muted)] sm:text-4xl"
            >
              {{ item }}
              <span class="text-xl text-cyan-400">✦</span>
            </span>
          </template>
        </div>
      </div>

      <section
        id="about"
        class="overflow-hidden border-b border-[var(--portfolio-line)] bg-[var(--portfolio-bg)]/75"
      >
        <div class="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-12 lg:py-28">
          <div class="relative">
            <span
              class="ghost-heading"
              aria-hidden="true"
            >ABOUT</span>
            <p
              v-reveal
              class="mb-4 font-mono text-xs font-semibold tracking-[0.2em] text-cyan-500 dark:text-cyan-300"
            >
              01 / ABOUT
            </p>
            <h2
              v-reveal="80"
              class="text-4xl font-black tracking-[-0.05em] sm:text-5xl"
            >
              自己紹介
            </h2>
            <p
              v-reveal="160"
              class="mt-7 text-base leading-8 text-[var(--portfolio-muted)]"
            >
              工業高校時代にインターネットにのめり込み、卒業後プログラマとしてキャリアを開始。 初めて業務で先輩から教えてもらった言語はC言語とJavaを経験。その後、外資系半導体企業で社内SEからSIerへ転職し主にJava, Perl, MFCを業務で使用。2018年中旬にメーカ系企業に転職し主にフロントエンド(PHP, Vue)を担当。 趣味は、バイクでのツーリング。
            </p>
          </div>

          <div
            id="skill"
            class="relative"
          >
            <span
              class="ghost-heading"
              aria-hidden="true"
            >SKILLS</span>
            <p
              v-reveal
              class="mb-4 font-mono text-xs font-semibold tracking-[0.2em] text-cyan-500 dark:text-cyan-300"
            >
              02 / SKILLS
            </p>
            <h2
              v-reveal="80"
              class="mb-8 text-4xl font-black tracking-[-0.05em] sm:text-5xl"
            >
              スキル
            </h2>
            <div class="grid gap-x-10 md:grid-cols-2">
              <SkillCard
                v-for="(skill, i) in skills"
                :key="skill.title"
                v-reveal="120 + i * 70"
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
        class="overflow-hidden bg-[var(--portfolio-bg)]/75"
      >
        <div class="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div class="relative mb-12 flex items-end justify-between gap-6">
            <span
              class="ghost-heading"
              aria-hidden="true"
            >WORKS</span>
            <div>
              <p
                v-reveal
                class="mb-4 font-mono text-xs font-semibold tracking-[0.2em] text-cyan-500 dark:text-cyan-300"
              >
                03 / WORKS
              </p>
              <h2
                v-reveal="80"
                class="text-4xl font-black tracking-[-0.05em] sm:text-5xl"
              >
                制作実績
              </h2>
            </div>
            <p
              v-reveal="160"
              class="hidden max-w-sm text-right text-sm leading-7 text-[var(--portfolio-muted)] md:block"
            >
              個人で企画・設計・実装したプロジェクト
            </p>
          </div>

          <div class="grid gap-px overflow-hidden border border-[var(--portfolio-line)] bg-[var(--portfolio-line)] lg:grid-cols-3">
            <a
              v-for="(project, i) in projects"
              :key="project.title"
              v-reveal="i * 120"
              :href="project.href"
              target="_blank"
              rel="noopener noreferrer"
              class="focus-ring group relative flex min-h-80 flex-col overflow-hidden bg-[var(--portfolio-surface)]/85 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:z-10 hover:bg-slate-100/80 sm:p-9 dark:hover:bg-slate-900/80"
            >
              <span
                class="pointer-events-none absolute inset-0 -translate-x-[110%] bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[110%]"
                aria-hidden="true"
              />
              <div class="mb-10 flex items-start justify-between">
                <span
                  class="flex size-14 items-center justify-center text-white transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
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

    <footer class="overflow-hidden border-t border-[var(--portfolio-line)] bg-[var(--portfolio-bg)]/88">
      <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <p
          v-reveal
          class="border-b border-[var(--portfolio-line)] py-8 text-center font-display text-[clamp(2.75rem,11vw,9rem)] font-bold leading-none tracking-tight"
          style="color: transparent; -webkit-text-stroke: 1px rgb(148 163 184 / 0.3)"
          aria-hidden="true"
        >
          Tatsuya Miyamoto
        </p>
      </div>
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
