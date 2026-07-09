<template>
  <section
    id="skill"
    class="px-4 md:px-8"
  >
    <div class="max-w-6xl mx-auto">
      <div class="text-center md:text-left mb-10">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 text-accent text-xs font-mono font-medium mb-4">
          <i class="pi pi-bolt text-xs" />
          <span>Skills & Experience</span>
        </span>
        <h2 class="text-3xl md:text-4xl font-black text-white">
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
          class="animate-on-scroll"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { skills } from '~/data/skills'
</script>
