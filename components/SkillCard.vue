<template>
  <div
    class="group card-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 border-l-4"
    :style="{ borderLeftColor: color }"
  >
    <div class="flex items-center gap-3 mb-4">
      <div
        class="flex items-center justify-center w-10 h-10 rounded-xl transition-transform duration-300 group-hover:scale-110"
        :style="{ backgroundColor: `${color}20` }"
      >
        <i
          :class="icon"
          class="text-lg"
          :style="{ color }"
        />
      </div>
      <h3 class="text-lg font-bold text-zinc-900 dark:text-white">
        {{ title }}
      </h3>
    </div>

    <p class="text-sm text-zinc-600 dark:text-white/50 mb-6 leading-relaxed line-clamp-3">
      {{ description }}
    </p>

    <div>
      <div class="flex justify-between items-center mb-2">
        <span class="text-xs font-medium font-mono text-zinc-500 dark:text-white/40 uppercase tracking-wider">Experience</span>
        <span
          class="text-sm font-bold font-mono"
          :style="{ color }"
        >{{ useYear }}年</span>
      </div>
      <div class="w-full bg-zinc-200 dark:bg-white/10 rounded-full h-2 overflow-hidden">
        <div
          class="h-2 rounded-full origin-left scale-x-0 group-[.animate-visible]:scale-x-[var(--progress)] transition-transform duration-1000 ease-out"
          :style="{ 'backgroundColor': color, '--progress': Math.min(useYear / 10, 1) }"
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
  icon: string
  color: string
}>()
</script>
