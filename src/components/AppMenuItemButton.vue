<script lang="ts" setup>
import Button from 'primevue/button'

defineOptions({
  inheritAttrs: true
})
</script>

<template>
  <Button
    unstyled
    class="w-full text-left py-3 px-4 rounded-md text-base flex items-center gap-5 hover:bg-gray-50 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70"
    v-bind="$attrs"
  >
    <slot />
  </Button>
</template>
