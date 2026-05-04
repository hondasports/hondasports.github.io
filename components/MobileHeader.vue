<template>
  <header class="md:hidden sticky top-0 z-20 bg-black/10 backdrop-blur-sm p-2">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-lg">
        Tatsuya Miyamoto portfolio
      </div>
      <div>
        <Button
          icon="pi pi-bars"
          aria-label="メニューを開く"
          class="p-button-text text-white"
          @click="$emit('open-menu')"
        />
        <Button
          :aria-label="isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'"
          class="p-button-text p-button-rounded text-white ml-2"
          @click="toggleDarkMode"
        >
          <i
            class="pi"
            :class="isDarkMode ? 'pi-sun' : 'pi-moon'"
          />
        </Button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const { isDarkMode, toggleDarkMode } = useDarkMode()

defineEmits<{
  'open-menu': []
}>()
</script>
