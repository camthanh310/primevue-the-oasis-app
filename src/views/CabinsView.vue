<script lang="ts" setup>
import AppHeading from '@/components/AppHeading.vue'
import AppRow from '@/components/AppRow.vue'
import AddCabin from '@/features/cabins/AddCabin.vue'
</script>

<template>
  <AppRow directional="horizontal">
    <AppHeading heading-level="h1">All cabins</AppHeading>
    Cabin Table Operations
  </AppRow>

  <AppRow>
    <div>Cabin Table</div>
    <AddCabin />
  </AppRow>
</template>
