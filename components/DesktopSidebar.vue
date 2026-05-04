<template>
  <aside class="hidden md:block w-64 h-screen sticky top-0">
    <div class="flex items-center h-full p-4">
      <div class="space-y-4 w-full">
        <div class="text-white text-center mb-4">
          Tatsuya Miyamoto portfolio
        </div>
        <Image
          src="/avatar.png"
          alt="プロフィール画像"
          class="w-32 h-32 rounded-full mx-auto"
        />
        <nav class="space-y-4">
          <Button
            v-for="item in menuItems"
            :key="item.label"
            class="w-full p-button-text"
            @click="item.command"
          >
            {{ item.label }}
          </Button>
          <Button
            :aria-label="isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'"
            class="w-full p-button-text p-button-rounded"
            @click="toggleDarkMode"
          >
            <i
              class="pi"
              :class="isDarkMode ? 'pi-sun' : 'pi-moon'"
            />
          </Button>
        </nav>
      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup>
interface MenuItem {
  label: string
  command: () => void
}

defineProps<{
  menuItems: MenuItem[]
}>()

const { isDarkMode, toggleDarkMode } = useDarkMode()
</script>
