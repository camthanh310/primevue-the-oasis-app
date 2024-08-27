<script lang="ts" setup>
interface Props {
  resourceName: string
}

defineProps<Props>()
</script>

<template>
  <p>No {{ resourceName }} could be found.</p>
</template>
