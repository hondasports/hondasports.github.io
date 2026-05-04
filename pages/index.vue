<template>
  <div>
    <TheNavbar
      :menu-items="menuItems"
      @open-menu="mobileMenuVisible = true"
    />

    <Drawer
      v-model:visible="mobileMenuVisible"
      header="Menu"
      position="right"
    >
      <nav class="space-y-4 p-4">
        <Button
          v-for="item in menuItems"
          :key="item.label"
          class="w-full p-button-text text-left"
          @click="() => { item.command(); mobileMenuVisible = false; }"
        >
          {{ item.label }}
        </Button>
      </nav>
    </Drawer>

    <HeroSection />

    <div class="animate-on-scroll">
      <SectionsTopSection />
    </div>
    <div class="animate-on-scroll">
      <SectionsAboutSection />
    </div>
    <div class="animate-on-scroll">
      <SectionsSkillSection />
    </div>
    <div class="animate-on-scroll">
      <SectionsContentSection />
    </div>

    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
const { mobileMenuVisible, menuItems } = useNavigation()
const { observeElements } = useScrollAnimation()

onMounted(() => {
  observeElements()
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
section[id] {
  scroll-margin-top: 4rem;
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

.p-drawer {
  z-index: 1000 !important;
}
</style>
