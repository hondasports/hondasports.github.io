<template>
  <div class="rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 p-6 transition-shadow hover:shadow-lg">
    <h3 class="text-lg font-semibold mb-2 text-surface-800 dark:text-surface-100">
      {{ title }}
    </h3>
    <p class="text-sm text-surface-500 dark:text-surface-400 mb-4 leading-relaxed">
      {{ description }}
    </p>
    <div>
      <div class="flex justify-between items-center mb-1">
        <span class="text-xs text-surface-500 dark:text-surface-400">使用年数</span>
        <span class="text-xs font-medium text-surface-700 dark:text-surface-200">{{ useYear }}年</span>
      </div>
      <div class="w-full bg-surface-200 dark:bg-surface-700 rounded-full h-2">
        <div
          class="rounded-full h-2 transition-all duration-700"
          :style="{ width: `${Math.min(useYear * 10, 100)}%`, backgroundColor: 'var(--p-primary-color)' }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  useYear: number
  description: string
}>()
</script>
