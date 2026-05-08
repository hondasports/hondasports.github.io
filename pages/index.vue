<template>
  <div class="relative min-h-screen">
    <!-- Fixed full-page background -->
    <div class="fixed inset-0 z-0">
      <NuxtImg
        class="w-full h-full object-cover"
        format="webp"
        src="/background.jpg"
        alt="背景画像"
      />
      <div class="absolute inset-0 bg-black/50 dark:bg-black/70" />
    </div>

    <!-- Decorative gradient orbs -->
    <div class="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      <div class="absolute top-2/3 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      <div class="absolute bottom-1/4 left-1/3 w-72 h-72 bg-emerald-500/8 rounded-full blur-3xl" />
    </div>

    <!-- Content -->
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

      <div class="space-y-6 md:space-y-10 pb-10">
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
