<script lang="ts" setup>
import { computed } from 'vue'

const headings = ['h1', 'h2', 'h3', 'h4'] as const
type Heading = (typeof headings)[number]

interface Props {
  headingLevel: Heading
}

const props = defineProps<Props>()

const headingClass = computed(() => {
  const css: Record<Heading, string> = {
    h1: 'text-4xl font-semibold',
    h2: 'text-3xl font-semibold',
    h3: 'text-3xl font-medium',
    h4: 'text-4xl font-medium'
  }

  return css[props.headingLevel]
})
</script>

<template>
  <Component :is="headingLevel" :class="headingClass">
    <slot />
  </Component>
</template>
