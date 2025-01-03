<template>
  <div>
    <p class="m-0" />
    <p class="pb-2">
      {{ title }}
    </p>
    <p class="pb-2">
      {{ description }}
    </p>
    <p class="pb-2">
      使用年数: {{ useYear }}年
    </p>
    <Divider />
  </div>
</template>

<script lang="ts" setup>
import { Divider } from 'primevue'

type IProps = {
  title: string
  useYear: number
  description: string
}

defineProps<IProps>()
</script>
