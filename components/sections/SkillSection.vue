<template>
  <section
    id="skill"
    class="mb-12"
  >
    <Card>
      <template #title>
        <h2>
          スキル
        </h2>
      </template>
      <template #content>
        <div class="pt-4">
          <template
            v-for="skill in skills"
            :key="skill.title"
          >
            <SkillCard
              class="mb-4"
              :title="skill.title"
              :description="skill.description"
              :use-year="skill.useYear"
            />
          </template>
        </div>
      </template>
    </Card>
  </section>
</template>

<script lang="ts" setup>
import { skills } from '~/data/skills'
</script>
