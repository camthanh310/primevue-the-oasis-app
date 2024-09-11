<script lang="ts" setup>
import AppButton from '@/components/AppButton.vue'
</script>

<template>
  <div class="mt-auto bg-[#e0e7ff] p-2 rounded-md text-center flex flex-col gap-2">
    <h3 class="font-bold text-lg">SAMPLE DATA</h3>

    <AppButton> Upload ALL </AppButton>

    <AppButton> Upload bookings ONLY </AppButton>
  </div>
</template>
