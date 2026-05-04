<template>
  <section
    id="skill"
    class="py-16 md:py-24 bg-surface-0 dark:bg-surface-900"
  >
    <div class="max-w-4xl mx-auto px-4 md:px-8">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center text-surface-800 dark:text-surface-100">
        スキル
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCard
          v-for="skill in skills"
          :key="skill.title"
          :title="skill.title"
          :description="skill.description"
          :use-year="skill.useYear"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { skills } from '~/data/skills'
</script>
