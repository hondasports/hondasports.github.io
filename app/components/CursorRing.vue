<script setup lang="ts">
const enabled = ref(false)
const hovering = ref(false)
const ringX = ref(-100)
const ringY = ref(-100)

onMounted(() => {
  if (!window.matchMedia('(pointer: fine)').matches) {
    return
  }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }
  enabled.value = true

  let targetX = -100
  let targetY = -100
  let currentX = -100
  let currentY = -100
  let rafId = 0

  const onMove = (event: MouseEvent): void => {
    targetX = event.clientX
    targetY = event.clientY
  }

  const tick = (): void => {
    currentX += (targetX - currentX) * 0.18
    currentY += (targetY - currentY) * 0.18
    ringX.value = currentX
    ringY.value = currentY
    rafId = requestAnimationFrame(tick)
  }

  const onOver = (event: MouseEvent): void => {
    const target = event.target as HTMLElement | null
    hovering.value = !!target?.closest('a, button, [role="button"]')
  }

  window.addEventListener('mousemove', onMove, { passive: true })
  window.addEventListener('mouseover', onOver, { passive: true })
  rafId = requestAnimationFrame(tick)

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', onMove)
    window.removeEventListener('mouseover', onOver)
    cancelAnimationFrame(rafId)
  })
})

const ringStyle = computed(() => ({
  transform: `translate3d(${ringX.value}px, ${ringY.value}px, 0) translate(-50%, -50%)`,
}))
</script>

<template>
  <div
    v-if="enabled"
    aria-hidden="true"
    class="cursor-ring"
    :class="{ 'cursor-hover': hovering }"
    :style="ringStyle"
  />
</template>
