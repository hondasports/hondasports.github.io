<template>
  <div
    class="group card-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.07]"
  >
    <div class="flex items-start justify-between mb-4">
      <div
        class="flex items-center justify-center w-11 h-11 rounded-xl"
        :style="{ backgroundColor: `${color}20` }"
      >
        <i
          :class="icon"
          class="text-xl"
          :style="{ color }"
        />
      </div>
      <span
        class="text-sm font-bold font-mono"
        :style="{ color }"
      >{{ useYear }}年</span>
    </div>

    <h3 class="text-lg font-bold text-white mb-2">
      {{ title }}
    </h3>

    <p class="text-sm text-white/50 leading-relaxed mb-4 line-clamp-3">
      {{ description }}
    </p>

    <div class="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
      <div
        class="h-1.5 rounded-full origin-left scale-x-0 group-[.animate-visible]:scale-x-[var(--progress)] transition-transform duration-1000 ease-out"
        :style="{ 'backgroundColor': color, '--progress': Math.min(useYear / 10, 1) }"
      />
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
