<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-zinc-200/50 dark:border-white/10' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a
        href="#top"
        class="font-mono text-sm md:text-base font-semibold tracking-wider text-zinc-900 dark:text-white transition-colors hover:text-accent"
      >
        Tatsuya Miyamoto
      </a>

      <nav class="hidden md:flex items-center gap-1">
        <Button
          v-for="item in menuItems"
          :key="item.label"
          class="p-button-text p-button-sm text-zinc-900 dark:text-white/70 hover:text-accent dark:hover:text-accent hover:bg-transparent"
          @click="item.command"
        >
          {{ item.label }}
        </Button>
        <Button
          :aria-label="isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'"
          class="p-button-text p-button-rounded p-button-sm text-zinc-900 dark:text-white/70 hover:text-accent dark:hover:text-accent hover:bg-transparent"
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
          class="p-button-text p-button-rounded text-zinc-900 dark:text-white/70 hover:text-accent dark:hover:text-accent hover:bg-transparent"
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
          class="p-button-text text-zinc-900 dark:text-white/70 hover:text-accent dark:hover:text-accent hover:bg-transparent"
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
