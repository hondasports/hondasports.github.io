<template>
  <div class="group relative rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white/8 dark:bg-white/4 border border-white/10 hover:border-white/20 hover:bg-white/12">
    <div
      class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      :style="{ background: `linear-gradient(135deg, ${color}10, ${color}20)` }"
    />

    <div class="relative">
      <div class="flex items-center gap-3 mb-3">
        <div
          class="flex items-center justify-center w-10 h-10 rounded-xl transition-transform duration-300 group-hover:scale-110"
          :style="{ backgroundColor: `${color}25` }"
        >
          <i
            :class="icon"
            class="text-lg"
            :style="{ color }"
          />
        </div>
        <h3 class="text-lg font-bold text-white">
          {{ title }}
        </h3>
      </div>

      <p class="text-sm text-white/50 mb-5 leading-relaxed line-clamp-3">
        {{ description }}
      </p>

      <div>
        <div class="flex justify-between items-center mb-2">
          <span class="text-xs font-medium text-white/40 uppercase tracking-wider">経験年数</span>
          <span
            class="text-sm font-bold"
            :style="{ color }"
          >{{ useYear }}年</span>
        </div>
        <div class="w-full bg-white/10 rounded-full h-2 overflow-hidden">
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
