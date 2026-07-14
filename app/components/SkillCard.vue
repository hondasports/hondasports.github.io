<script setup lang="ts">
defineProps<{
  title: string
  useYear: number
  description: string
}>()
</script>

<template>
  <article class="border-t border-[var(--portfolio-line)] py-5 first:border-t-0 first:pt-0">
    <div class="mb-2 flex items-baseline justify-between gap-4">
      <h3 class="text-base font-bold tracking-tight text-[var(--portfolio-text)]">
        {{ title }}
      </h3>
      <p class="shrink-0 font-mono text-xs font-medium text-cyan-500 dark:text-cyan-300">
        {{ useYear }} YEAR<span v-if="useYear !== 1">S</span>
      </p>
    </div>
    <p class="text-sm leading-7 text-[var(--portfolio-muted)]">
      {{ description }}
    </p>
  </article>
</template>
