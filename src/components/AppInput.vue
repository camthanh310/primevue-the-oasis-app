<script lang="ts" setup>
import InputText from 'primevue/inputtext'

defineOptions({
  inheritAttrs: true
})

const emit = defineEmits<{
  blur: [e: Event]
}>()

function onblur(e: Event) {
  emit('blur', e)
}
</script>

<template>
  <InputText
    v-bind="{ ...$attrs, onblur: onblur }"
    class="block w-full placeholder:text-gray-700 text-gray-700 border-0 bg-white rounded shadow-sm py-2 px-3 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
  />
</template>
