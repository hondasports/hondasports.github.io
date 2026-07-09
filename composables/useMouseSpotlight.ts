export function useMouseSpotlight(): { x: Ref<string>, y: Ref<string> } {
  const x = ref('50%')
  const y = ref('50%')

  if (import.meta.client) {
    let rafId: number | null = null
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2

    const update = (): void => {
      x.value = `${mouseX}px`
      y.value = `${mouseY}px`
      rafId = null
    }

    const onMove = (e: MouseEvent): void => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (rafId === null) {
        rafId = requestAnimationFrame(update)
      }
    }

    onMounted(() => {
      window.addEventListener('mousemove', onMove, { passive: true })
    })

    onUnmounted(() => {
      window.removeEventListener('mousemove', onMove)
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
    })
  }

  return { x, y }
}
