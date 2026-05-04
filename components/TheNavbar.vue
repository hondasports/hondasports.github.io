<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-surface-0/90 dark:bg-surface-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a
        href="#top"
        class="font-semibold text-sm md:text-base transition-colors"
        :class="scrolled ? 'text-surface-800 dark:text-surface-100' : 'text-white'"
      >
        Tatsuya Miyamoto
      </a>

      <nav class="hidden md:flex items-center gap-1">
        <Button
          v-for="item in menuItems"
          :key="item.label"
          class="p-button-text p-button-sm"
          :class="scrolled ? '' : '!text-white hover:!bg-white/10'"
          @click="item.command"
        >
          {{ item.label }}
        </Button>
        <Button
          :aria-label="isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'"
          class="p-button-text p-button-rounded p-button-sm"
          :class="scrolled ? '' : '!text-white hover:!bg-white/10'"
          @click="toggleDarkMode"
        >
          <i
            class="pi"
            :class="isDarkMode ? 'pi-sun' : 'pi-moon'"
          />
        </Button>
      </nav>

      <div class="flex md:hidden items-center gap-1">
        <Button
          :aria-label="isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'"
          class="p-button-text p-button-rounded"
          :class="scrolled ? '' : '!text-white hover:!bg-white/10'"
          @click="toggleDarkMode"
        >
          <i
            class="pi"
            :class="isDarkMode ? 'pi-sun' : 'pi-moon'"
          />
        </Button>
        <Button
          icon="pi pi-bars"
          aria-label="メニューを開く"
          class="p-button-text"
          :class="scrolled ? '' : '!text-white hover:!bg-white/10'"
          @click="$emit('open-menu')"
        />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
interface MenuItem {
  label: string
  command: () => void
}

defineProps<{
  menuItems: MenuItem[]
}>()

defineEmits<{
  'open-menu': []
}>()

const { isDarkMode, toggleDarkMode } = useDarkMode()

const scrolled = ref(false)

onMounted(() => {
  const onScroll = (): void => {
    scrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
</script>
