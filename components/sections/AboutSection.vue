<template>
  <section
    id="about"
    class="px-4 md:px-8"
  >
    <div class="max-w-5xl mx-auto">
      <div class="rounded-3xl p-8 md:p-12 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/15 dark:border-white/10 shadow-2xl">
        <div class="text-center mb-10">
          <span class="inline-block text-xs font-semibold tracking-widest uppercase text-white/50 mb-3">About Me</span>
          <h2 class="text-3xl md:text-4xl font-bold text-white">
            自己紹介
          </h2>
        </div>
        <div class="rounded-2xl p-6 md:p-8 bg-white/8 dark:bg-white/4 border border-white/10">
          <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div class="shrink-0">
              <div class="w-40 h-40 md:w-48 md:h-48 rounded-2xl shadow-xl overflow-hidden ring-4 ring-white/20">
                <img
                  src="/avatar.png"
                  alt="プロフィール画像"
                  class="w-full h-full object-cover"
                >
              </div>
            </div>
            <div class="flex-1">
              <p class="text-white/70 leading-relaxed mb-6">
                工業高校時代にインターネットにのめり込み、卒業後プログラマとしてキャリアを開始。
                初めて業務で先輩から教えてもらった言語はC言語とJavaを経験。その後、外資系半導体企業で社内SEからSIerへ転職し主にJava, Perl, MFCを業務で使用。2018年中旬にメーカ系企業に転職し主にフロントエンド(PHP, Vue)を担当。
                趣味は、バイクでのツーリング。
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in careerTags"
                  :key="tag"
                  class="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white/15 text-white/80 border border-white/10"
                >
                  <i class="pi pi-check-circle text-xs text-emerald-400" />
                  {{ tag }}
                </span>
              </div>
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
