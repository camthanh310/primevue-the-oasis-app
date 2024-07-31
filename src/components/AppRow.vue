<script lang="ts" setup>
import { computed } from 'vue'

type DirectionalType = 'vertical' | 'horizontal'

interface Props {
  directional?: DirectionalType
}

const props = withDefaults(defineProps<Props>(), {
  directional: 'vertical'
})

const rowClass = computed(() => {
  const customClass: Record<DirectionalType, string> = {
    horizontal: 'justify-between items-center',
    vertical: 'flex-col gap-5'
  }

  return customClass[props.directional]
})
</script>

<template>
  <div class="flex" :class="rowClass">
    <slot />
  </div>
</template>
