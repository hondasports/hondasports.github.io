export function useDarkMode(): { isDarkMode: Ref<boolean>, toggleDarkMode: () => void } {
  const isDarkMode = ref(false)

  onMounted(() => {
    isDarkMode.value = document.documentElement.classList.contains('p-dark')
  })

  const toggleDarkMode = (): void => {
    document.documentElement.classList.toggle('p-dark')
    isDarkMode.value = !isDarkMode.value
  }

  return { isDarkMode, toggleDarkMode }
}
