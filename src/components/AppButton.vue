<script lang="ts" setup>
import Button from 'primevue/button'
import { computed } from 'vue'

const variants = ['primary', 'secondary', 'danger'] as const
type VaritantType = (typeof variants)[number]

const sizes = ['small', 'medium', 'large'] as const
type SizeType = (typeof sizes)[number]

interface Props {
  variant?: VaritantType
  size?: SizeType
}

defineOptions({
  inheritAttrs: true
})

const { variant = 'primary', size = 'medium' } = defineProps<Props>()

const variantClass = computed(() => {
  const css: Record<VaritantType, string> = {
    primary: 'text-indigo-50 bg-indigo-600 hover:bg-indigo-700',
    secondary: 'text-gray-600 bg-white ring-1 ring-gray-200 ring-inset hover:bg-gray-50',
    danger: 'text-red-100 bg-red-700 hover:bg-red-800'
  }

  return css[variant]
})

const sizeClass = computed((): string => {
  const css: Record<SizeType, string> = {
    small: 'font-semibold uppercase text-center py-1.5 px-4 text-sm',
    medium: 'font-medium py-2 px-5 text-base',
    large: 'font-medium py-2 px-6 text-lg'
  }

  return css[size]
})
</script>

<template>
  <Button
    class="border-none rounded-md shadow-sm disabled:cursor-none disabled:opacity-70"
    :class="[variantClass, sizeClass]"
    v-bind="$attrs"
    unstyled
  >
    <slot />
  </Button>
</template>
