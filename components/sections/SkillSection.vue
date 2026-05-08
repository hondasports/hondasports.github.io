<template>
  <section
    id="skill"
    class="px-4 md:px-8"
  >
    <div class="max-w-5xl mx-auto">
      <div class="rounded-3xl p-8 md:p-12 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/15 dark:border-white/10 shadow-2xl">
        <div class="text-center mb-10">
          <span class="inline-block text-xs font-semibold tracking-widest uppercase text-white/50 mb-3">Skills & Experience</span>
          <h2 class="text-3xl md:text-4xl font-bold text-white">
            スキル
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <SkillCard
            v-for="skill in skills"
            :key="skill.title"
            :title="skill.title"
            :description="skill.description"
            :use-year="skill.useYear"
            :icon="skill.icon"
            :color="skill.color"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { skills } from '~/data/skills'
</script>
