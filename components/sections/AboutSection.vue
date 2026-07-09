<template>
  <section
    id="about"
    class="px-4 md:px-8"
  >
    <div class="max-w-6xl mx-auto">
      <div class="card-surface p-8 md:p-12">
        <div class="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">
          <div class="shrink-0 mx-auto md:mx-0">
            <div class="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-2 ring-accent/30 shadow-xl shadow-accent/10">
              <img
                src="/avatar.png"
                alt="プロフィール画像"
                class="w-full h-full object-cover"
              >
            </div>
          </div>

          <div>
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 text-accent text-xs font-mono font-medium mb-4">
              <i class="pi pi-user text-xs" />
              <span>About Me</span>
            </span>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-6">
              自己紹介
            </h2>
            <p class="text-white/70 leading-loose mb-6 text-lg">
              工業高校時代にインターネットにのめり込み、卒業後プログラマとしてキャリアを開始。
              初めて業務で先輩から教えてもらった言語はC言語とJavaを経験。その後、外資系半導体企業で社内SEからSIerへ転職し主にJava, Perl, MFCを業務で使用。2018年中旬にメーカ系企業に転職し主にフロントエンド(PHP, Vue)を担当。
              趣味は、バイクでのツーリング。
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in careerTags"
                :key="tag"
                class="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded-full border border-white/15 text-white/80 hover:border-accent/50 hover:text-accent transition-colors"
              >
                <i class="pi pi-check-circle text-xs" />
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const careerTags = [
  'フロントエンド',
  'バックエンド',
]
</script>
