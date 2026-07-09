<template>
  <div
    class="fixed inset-0 z-0 pointer-events-none hidden dark:block"
    :style="{ '--spotlight-x': x, '--spotlight-y': y }"
  >
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_600px_at_var(--spotlight-x)_var(--spotlight-y),rgba(255,255,255,0.07),transparent_40%)]"
    />
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_300px_at_var(--spotlight-x)_var(--spotlight-y),rgba(57,255,20,0.12),transparent_40%)]"
    />
  </div>
</template>

<script lang="ts" setup>
const { x, y } = useMouseSpotlight()
</script>
