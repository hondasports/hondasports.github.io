<template>
  <div>
    <!-- 背景固定 + オーバーレイ -->
    <div class="relative min-h-screen">
      <!-- 固定背景 -->
      <NuxtImg
        class="w-full h-full fixed inset-0 z-0"
        format="webp"
        src="/background.jpg"
        alt="背景画像"
      />
      <!-- 半透明オーバーレイ -->
      <div class="fixed inset-0 bg-black/10 backdrop-blur-sm z-0" />

      <!-- コンテンツ -->
      <div class="relative z-10">
        <!-- モバイル用ヘッダー -->
        <header class="md:hidden sticky top-0">
          <div class="text-white text-center mb-4 backdrop-blur-sm bg-black/10 p-2 rounded">
            Tatsuya Miyamoto portfolio
          </div>
          <Menubar
            :model="menuItems"
            class="container mx-auto"
          >
            <template #end>
              <Button
                class="p-button-text p-button-rounded"
                @click="toggleDarkMode"
              >
                <i
                  class="pi"
                  :class="isDarkMode ? 'pi-sun' : 'pi-moon'"
                />
              </Button>
            </template>
          </Menubar>
        </header>

        <!-- デスクトップレイアウト -->
        <div class="flex flex-col md:flex-row">
          <!-- サイドメニュー（左側・デスクトップのみ） -->
          <aside class="hidden md:block w-64 h-screen">
            <div class="flex items-center h-full p-4">
              <div class="space-y-4 w-full">
                <div class="text-white text-center mb-4">
                  Tatsuya Miyamoto portfolio
                </div>
                <Image
                  src="/avatar.png"
                  alt="プロフィール画像"
                  class="w-32 h-32 rounded-full"
                />
                <nav class="space-y-4">
                  <Button
                    v-for="item in menuItems"
                    :key="item.label"
                    class="w-full p-button-text"
                    @click="item.command"
                  >
                    {{ item.label }}
                  </Button>
                  <Button
                    class="w-full p-button-text p-button-rounded "
                    @click="toggleDarkMode"
                  >
                    <i
                      class="pi"
                      :class="isDarkMode ? 'pi-sun' : 'pi-moon'"
                    />
                  </Button>
                </nav>
              </div>
            </div>
          </aside>

          <!-- メインコンテンツ（右側） -->
          <main class="flex-1 p-4 md:p-8 md:h-screen md:overflow-y-auto">
            <div class="max-w-4xl mx-auto">
              <section
                id="top"
                class="mb-12"
              >
                <Card>
                  <template #title>
                    プログラミングは人生の一部
                  </template>
                  <template #content>
                    <p class="pt-4">
                      プログラミングは人生の一部。昔、異業種への転職も含めて考えていた時に親友からスマホアプリ開発の話を受けました。 調べならが徐々にできて行くアプリに楽しさを覚え、それ以来プログラミングが楽しい事、私の人生の一部になりました。 そんな気持ちをサブタイトルに込めています。
                    </p>
                  </template>
                </Card>
              </section>

              <section
                id="about"
                class="mb-12"
              >
                <Card>
                  <template #title>
                    自己紹介
                  </template>
                  <template #content>
                    <p class="pt-4">
                      工業高校時代にインターネットにのめり込み、卒業後プログラマとしてキャリアを開始。 初めて業務で先輩から教えてもらった言語はC言語とJavaを経験。その後、外資系半導体企業で社内SEからSIerへ転職し主にJava, Perl, MFCを業務で使用。2018年中旬にメーカ系企業に転職し主にフロントエンド(PHP, Vue)を担当。 趣味は、バイクでのツーリング。
                    </p>
                  </template>
                </Card>
              </section>

              <section
                id="skill"
                class="mb-12"
              >
                <Card>
                  <template #title>
                    <h2 class="">
                      スキル
                    </h2>
                  </template>
                  <template #content>
                    <div class="pt-4">
                      <template
                        v-for="skill in skills"
                        :key="skill.title"
                      >
                        <SkillCard
                          class="mb-4"
                          :title="skill.title"
                          :description="skill.description"
                          :use-year="skill.useYear"
                        />
                      </template>
                    </div>
                  </template>
                </Card>
              </section>

              <section
                id="content"
                class="mb-12"
              >
                <Card>
                  <template #title>
                    コンテンツ
                  </template>
                  <template #content>
                    <div class="mt-4">
                      <Divider />
                      <p class="mb-2">
                        <a
                          href="http://applion.jp/iphone/app/633386996/"
                          target="_blank"
                        >ニコカレ - ニコニコカレンダー</a>
                      </p>
                      <p class="mb-2">
                        友人の仕事がきっかけで作成したアプリ。メンテナンスをサボっていたため削除された。リンクは過去に残っていた紹介ページ。
                      </p>
                      <Divider />
                      <p class="mb-2">
                        <a
                          href="https://x.com/Bun_chan_Bot/"
                          target="_blank"
                        >Bun-chan-bot</a>
                      </p>
                      <p>ラズパイを使いたいというのと、日中部屋を留守にするのでモニタリングするために作成。</p>
                    </div>
                  </template>
                </Card>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
    <footer class="py-4 mt-auto">
      <div class="mx-auto flex justify-center space-x-4">
        <Button
          icon="pi pi-github"
          class="p-button-text"
          as="a"
          href="https://github.com/hondasports"
          target="_blank"
        />
        <Button
          icon="pi pi-twitter"
          class="p-button-text"
          as="a"
          href="https://x.com/hondasports8"
          target="_blank"
        />
        <Button
          icon="pi pi-facebook"
          class="p-button-text"
          as="a"
          href="https://www.facebook.com/miyamoto.tatsuya"
          target="_blank"
        />
        <Button
          icon="pi pi-instagram"
          class="p-button-text"
          as="a"
          href="https://www.instagram.com/hondasports/"
          target="_blank"
        />
        <Button
          label="Qiita"
          class="p-button-text"
          as="a"
          href="https://qiita.com/hondasports8"
          target="_blank"
        />
        <Button
          label="zenn"
          class="p-button-text"
          as="a"
          href="https://zenn.dev/hondasports"
          target="_blank"
        />
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import SkillCard from '../components/SkillCard.vue'

const toggleDarkMode = (): void => {
  document.documentElement.classList.toggle('p-dark')
  isDarkMode.value = !isDarkMode.value
}

const isDarkMode = ref(document?.documentElement.classList.contains('dark'))

const menuItems = [
  { label: 'トップ', command: (): void => document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' }) },
  { label: '自己紹介', command: (): void => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
  { label: 'スキル', command: (): void => document.getElementById('skill')?.scrollIntoView({ behavior: 'smooth' }) },
  { label: 'コンテンツ', command: (): void => document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' }) },
]

const skills = ref([
  { title: 'Java', description: '業務系アプリのバックエンド開発。Oracle, MySQL, PostgreSQL を使用。J2EE を用いた API 構築で Guava や JUnit を活用。', useYear: 5 },
  { title: 'C, MFC', description: '解析アプリケーションの保守で使用。C#と接続するためにCRLを使ったりもしていた。', useYear: 3 },
  { title: 'PHP, Vue', description: 'フロントエンド開発の主担当（PHP:2割, Vue:8割）。直近は、新規プロダクトの開発基盤構築、ライブラリ選定、設計、実装（一部ユニットテスト）を担当。使用技術: ESLint, Prettier, Vue3, vee-validate, zod, ky, vitest', useYear: 6 },
  { title: 'Perl', description: '半導体企業でのテキスト操作で使用。', useYear: 5 },
  { title: 'Python', description: 'Django を使った WebAPI プロトタイプ作成や、個人プロジェクト（Twitter Bot）で使用。', useYear: 1 },
])
</script>

<style>
html {
  scroll-behavior: smooth;
}
section[id] {
  scroll-margin-top: 5rem;
}
</style>
