<script setup lang="ts">
import { RouterView } from 'vue-router'
import ConfirmDialog from 'primevue/confirmdialog'
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppToast from '@/components/AppToast.vue'
</script>

<template>
  <AppToast />

  <ConfirmDialog pt:root:class="w-[36rem]" pt:message:class="text-gray-500" />

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
