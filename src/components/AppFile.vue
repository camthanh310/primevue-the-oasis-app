<script lang="ts" setup>
import { ref } from 'vue'

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

defineOptions({
  inheritAttrs: true
})

const emit = defineEmits<{
  change: [file: File]
}>()

const inputFile = ref<HTMLInputElement | null>(null)

function onchange(e: HTMLInputEvent) {
  emit('change', e.target.files![0])
}

function cleanInputFile() {
  inputFile.value!.value = ''
}

defineExpose({
  cleanInputFile
})
</script>

<template>
  <input
    type="file"
    ref="inputFile"
    class="text-base text-gray-600 rounded-md file:border-0 file:font-medium file:py-2 file:px-4 file:mr-3 file:rounded-md file:text-indigo-50 file:bg-indigo-600 file:cursor-pointer file:transition-colors file:duration-200 hover:file:bg-indigo-700"
    v-bind="{ ...$attrs, onchange }"
  />
</template>
