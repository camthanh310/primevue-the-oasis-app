<script setup lang="ts">
import { RouterView } from 'vue-router'
import DynamicDialog from 'primevue/dynamicdialog'
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
</script>

<template>
  <DynamicDialog />

  <div class="grid grid-cols-[16rem_1fr] grid-rows-[auto_1fr] h-screen">
    <AppHeader />
    <AppSidebar />

    <main class="bg-gray-50 overflow-scroll pt-10 px-12 pb-20">
      <div class="flex flex-col gap-12 mx-auto max-w-[120rem]">
        <RouterView />
      </div>
    </main>
  </div>
</template>
