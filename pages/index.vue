<template>
  <div class="relative min-h-screen text-white overflow-x-hidden">
    <BackgroundGraph />

    <div class="relative z-10">
      <TheNavbar
        :menu-items="menuItems"
        @open-menu="mobileMenuVisible = true"
      />

      <Drawer
        v-model:visible="mobileMenuVisible"
        header="Menu"
        position="right"
      >
        <nav class="space-y-2 p-4">
          <Button
            v-for="item in menuItems"
            :key="item.label"
            class="w-full p-button-text text-left text-white"
            @click="() => { item.command(); mobileMenuVisible = false; }"
          >
            {{ item.label }}
          </Button>
        </nav>
      </Drawer>

      <HeroSection />

      <div class="space-y-10 md:space-y-20 pb-16">
        <div class="animate-on-scroll">
          <SectionsAboutSection />
        </div>
        <div class="animate-on-scroll">
          <SectionsSkillSection />
        </div>
        <div class="animate-on-scroll">
          <SectionsContentSection />
        </div>
      </div>

      <AppFooter />
    </div>
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
section[id] {
  scroll-margin-top: 4rem;
}

.p-drawer {
  z-index: 1000 !important;
}
</style>
