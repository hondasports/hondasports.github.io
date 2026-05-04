<template>
  <section
    id="skill"
    class="py-16 md:py-24 bg-surface-0 dark:bg-surface-900"
  >
    <div class="max-w-5xl mx-auto px-4 md:px-8">
      <div class="text-center mb-14">
        <span class="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Skills & Experience</span>
        <h2 class="text-3xl md:text-4xl font-bold text-surface-800 dark:text-surface-100">
          スキル
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  </section>
</template>

<script lang="ts" setup>
import { skills } from '~/data/skills'
</script>
