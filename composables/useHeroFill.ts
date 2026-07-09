export function useHeroFill(): Ref<number> {
  const fill = ref(0)

  if (import.meta.client) {
    const hero = ref<HTMLElement | null>(null)

    const update = (): void => {
      if (!hero.value) return
      const rect = hero.value.getBoundingClientRect()
      const height = rect.height
      const scrolled = Math.max(-rect.top, 0)
      fill.value = Math.min(scrolled / height, 1)
    }

    onMounted(() => {
      hero.value = document.getElementById('top')
      update()
      window.addEventListener('scroll', update, { passive: true })
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', update)
    })
  }

  return fill
}
