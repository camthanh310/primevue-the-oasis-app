<script lang="ts" setup>
interface Props {
  label?: string
  error?: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="grid items-center grid-cols-[16rem_1fr_1.2fr] gap-4 py-3 first:pt-0 last:pb-0 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-gray-100 has-[button]:flex has-[button]:justify-end has-[button]:gap-3"
  >
    <label
      class="font-medium text-gray-700 text-base"
      v-if="label"
      :for="$slots?.default?.()[0]?.props?.id"
    >
      {{ label }}
    </label>
    <slot />
    <span class="text-red-700 text-base" v-if="error">
      {{ error }}
    </span>
  </div>
</template>
