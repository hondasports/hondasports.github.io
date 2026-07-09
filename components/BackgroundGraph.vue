<template>
  <div class="fixed inset-0 -z-10">
    <NuxtImg
      class="absolute inset-0 w-full h-full object-cover"
      src="/background.jpg"
      alt="背景画像"
      width="1920"
      height="1080"
      format="webp"
      quality="80"
    />
    <div class="absolute inset-0 bg-black/50" />
    <div class="absolute inset-0 bg-gradient-to-br from-slate-950/60 via-main/40 to-slate-900/60" />
    <div class="absolute inset-0 grid-bg opacity-20" />
    <div class="absolute inset-0 noise-bg opacity-20" />
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
  </div>
</template>
