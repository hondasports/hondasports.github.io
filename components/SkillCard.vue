<template>
  <div class="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-surface-0/80 dark:bg-surface-800/60 backdrop-blur-sm border border-surface-200/60 dark:border-surface-700/40">
    <div
      class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      :style="{ background: `linear-gradient(135deg, ${color}08, ${color}15)` }"
    />

    <div class="relative">
      <div class="flex items-center gap-3 mb-3">
        <div
          class="flex items-center justify-center w-10 h-10 rounded-xl transition-transform duration-300 group-hover:scale-110"
          :style="{ backgroundColor: `${color}18` }"
        >
          <i
            :class="icon"
            class="text-lg"
            :style="{ color }"
          />
        </div>
        <h3 class="text-lg font-bold text-surface-800 dark:text-surface-100">
          {{ title }}
        </h3>
      </div>

      <p class="text-sm text-surface-500 dark:text-surface-400 mb-5 leading-relaxed line-clamp-3">
        {{ description }}
      </p>

      <div>
        <div class="flex justify-between items-center mb-2">
          <span class="text-xs font-medium text-surface-400 dark:text-surface-500 uppercase tracking-wider">経験年数</span>
          <span
            class="text-sm font-bold"
            :style="{ color }"
          >{{ useYear }}年</span>
        </div>
        <div class="w-full bg-surface-200/60 dark:bg-surface-700/40 rounded-full h-2 overflow-hidden">
          <div
            class="rounded-full h-2 transition-all duration-1000 ease-out"
            :style="{ width: `${Math.min(useYear * 10, 100)}%`, background: `linear-gradient(90deg, ${color}, ${color}cc)` }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  useYear: number
  description: string
  icon: string
  color: string
}>()
</script>
