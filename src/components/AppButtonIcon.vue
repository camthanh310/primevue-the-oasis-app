<script lang="ts" setup>
import Button from 'primevue/button'
</script>

<template>
  <Button
    unstyled
    class="flex items-center p-2 border-none rounded-md transition-all duration-200 hover:bg-gray-100"
    v-bind="$attrs"
  >
    <slot />
  </Button>
</template>
