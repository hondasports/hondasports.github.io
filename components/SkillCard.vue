<template>
  <Card>
    <template #title>{{ title }}</template>
    <template #content>
      <p>{{ description }}</p>
    </template>
    <template #footer>
      <p>使用年数: {{ useYear }}年</p>
    </template>
  </Card>
</template>

<script setup>
defineProps({
  title: String,
  useYear: Number,
  description: String,
});
</script>

<style scoped>
p {
  font-size: 1rem;
  line-height: 1.5;
}
</style>