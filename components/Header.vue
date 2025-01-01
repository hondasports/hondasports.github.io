<template>
  <header class="sticky top-0">
    <Menubar :model="menuItems" class="container mx-auto">
      <template #end>
        <Button @click="toggleDarkMode">
          <span class="pi" :class="isDarkMode ? 'pi-moon': 'pi-sun'"></span>
        </Button>
      </template>
    </Menubar>
  </header>
</template>

<script setup>
const toggleDarkMode = () => {
    document.documentElement.classList.toggle('p-dark');
    isDarkMode.value = !isDarkMode.value;
};

const isDarkMode = ref(document?.documentElement.classList.contains('p-dark'));

const menuItems = [
  { label: 'トップ', command: () => document.getElementById('top').scrollIntoView() },
  { label: '自己紹介', command: () => document.getElementById('about').scrollIntoView() },
  { label: 'スキル', command: () => document.getElementById('skill').scrollIntoView() },
  { label: 'コンテンツ', command: () => document.getElementById('content').scrollIntoView() },
];
</script>
