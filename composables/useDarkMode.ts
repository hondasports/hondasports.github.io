const isDarkMode = ref(false)
let initialized = false

export function useDarkMode(): { isDarkMode: Ref<boolean>, toggleDarkMode: () => void } {
  if (!initialized) {
    onMounted(() => {
      isDarkMode.value = document.documentElement.classList.contains('p-dark')
    })
    initialized = true
  }

  const toggleDarkMode = (): void => {
    document.documentElement.classList.toggle('p-dark')
    isDarkMode.value = !isDarkMode.value
  }

  return { isDarkMode, toggleDarkMode }
}
