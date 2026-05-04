<template>
  <div>
    <!-- 背景固定 + オーバーレイ -->
    <div class="relative min-h-screen md:h-screen md:overflow-hidden">
      <!-- 固定背景 -->
      <NuxtImg
        class="w-full h-full fixed inset-0 z-0"
        format="webp"
        src="/background.jpg"
        alt="背景画像"
      />
      <!-- 半透明オーバーレイ -->
      <div class="fixed inset-0 bg-black/10 backdrop-blur-sm z-0" />

      <!-- コンテンツ -->
      <div class="relative z-10">
        <!-- モバイル用ヘッダー -->
        <MobileHeader @open-menu="mobileMenuVisible = true" />

        <!-- モバイル用サイドバーメニュー -->
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

        <!-- デスクトップレイアウト -->
        <div class="flex flex-col md:flex-row md:h-screen md:overflow-hidden">
          <!-- サイドメニュー（左側・デスクトップのみ） -->
          <DesktopSidebar :menu-items="menuItems" />

          <!-- メインコンテンツ（右側） -->
          <main class="flex-1 px-4 pb-4 pt-20 md:pt-8 md:p-8 md:h-screen md:overflow-y-auto scrollbar-hidden">
            <div class="max-w-4xl mx-auto">
              <SectionsTopSection />
              <SectionsAboutSection />
              <SectionsSkillSection />
              <SectionsContentSection />
            </div>

            <AppFooter />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { mobileMenuVisible, menuItems } = useNavigation()
</script>

<style>
html {
  scroll-behavior: smooth;
}
section[id] {
  scroll-margin-top: 5rem; /* モバイルヘッダーの高さを考慮 */
}

/* スクロールバーを非表示（スクロール機能は維持） */
.scrollbar-hidden {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}
.scrollbar-hidden::-webkit-scrollbar {
  display: none; /* Chrome/Safari/Opera */
}

/* PrimeVue Drawerのz-index調整 */
.p-drawer {
  z-index: 1000 !important;
}
</style>
