<script lang="ts" setup>
import Textarea from 'primevue/textarea'
</script>

<template>
  <Textarea
    class="block w-full h-24 placeholder:text-gray-700 text-gray-700 border-0 bg-white rounded shadow-sm py-2 px-3 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    v-bind="{ ...$attrs }"
    unstyled
  />
</template>
