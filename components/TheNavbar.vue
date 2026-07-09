<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a
        href="#top"
        class="font-mono text-sm md:text-base font-semibold tracking-wider text-white transition-colors hover:text-accent"
      >
        Tatsuya Miyamoto
      </a>

      <nav class="hidden md:flex items-center gap-6">
        <a
          v-for="item in menuItems"
          :key="item.label"
          href="#"
          class="text-sm text-white/70 hover:text-accent transition-colors"
          @click.prevent="item.command"
        >
          {{ item.label }}
        </a>
        <button
          :aria-label="isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'"
          class="p-2 rounded-full text-white/70 hover:text-accent transition-colors"
          @click="toggleDarkMode"
        >
          <i
            class="pi"
            :class="isDarkMode ? 'pi-sun' : 'pi-moon'"
          />
        </button>
      </nav>

      <div class="flex md:hidden items-center gap-2">
        <button
          :aria-label="isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'"
          class="p-2 rounded-full text-white/70 hover:text-accent transition-colors"
          @click="toggleDarkMode"
        >
          <i
            class="pi"
            :class="isDarkMode ? 'pi-sun' : 'pi-moon'"
          />
        </button>
        <button
          aria-label="メニューを開く"
          class="p-2 rounded-full text-white/70 hover:text-accent transition-colors"
          @click="$emit('open-menu')"
        >
          <i class="pi pi-bars" />
        </button>
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
