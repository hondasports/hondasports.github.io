<template>
  <section
    id="about"
    class="py-16 md:py-24 bg-surface-50 dark:bg-surface-800"
  >
    <div class="max-w-5xl mx-auto px-4 md:px-8">
      <div class="text-center mb-14">
        <span class="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">About Me</span>
        <h2 class="text-3xl md:text-4xl font-bold text-surface-800 dark:text-surface-100">
          自己紹介
        </h2>
      </div>
      <div class="rounded-2xl p-8 md:p-10 bg-surface-0/80 dark:bg-surface-900/60 backdrop-blur-sm border border-surface-200/60 dark:border-surface-700/40">
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div class="shrink-0">
            <div class="w-40 h-40 md:w-48 md:h-48 rounded-2xl shadow-lg overflow-hidden ring-4 ring-primary/20">
              <img
                src="/avatar.png"
                alt="プロフィール画像"
                class="w-full h-full object-cover"
              >
            </div>
          </div>
          <div class="flex-1">
            <p class="text-surface-600 dark:text-surface-300 leading-relaxed mb-6">
              工業高校時代にインターネットにのめり込み、卒業後プログラマとしてキャリアを開始。
              初めて業務で先輩から教えてもらった言語はC言語とJavaを経験。その後、外資系半導体企業で社内SEからSIerへ転職し主にJava, Perl, MFCを業務で使用。2018年中旬にメーカ系企業に転職し主にフロントエンド(PHP, Vue)を担当。
              趣味は、バイクでのツーリング。
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in careerTags"
                :key="tag"
                class="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary"
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
