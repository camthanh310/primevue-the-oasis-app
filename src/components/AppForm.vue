<script lang="ts" setup>
import { computed } from 'vue'

const formTypes = ['regular', 'modal'] as const

type FormType = (typeof formTypes)[number]

interface Props {
  formType?: FormType
}

defineOptions({
  inheritAttrs: true
})

const emit = defineEmits<{
  submit: [e: Event]
}>()

const props = withDefaults(defineProps<Props>(), {
  formType: 'regular'
})

const formClass = computed(() => {
  const css: Record<FormType, string> = {
    regular: 'py-6 px-12 bg-white border border-gray-100 rounded-lg',
    modal: 'w-[56rem]'
  }

  return css[props.formType]
})

function onsubmit(e: Event) {
  emit('submit', e)
}
</script>

<template>
  <form
    class="overflow-hidden text-base"
    :class="formClass"
    v-bind="{ ...$attrs, onsubmit: onsubmit }"
  >
    <slot />
  </form>
</template>
