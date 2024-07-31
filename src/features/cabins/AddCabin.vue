<script lang="ts" setup>
import AppButton from '@/components/AppButton.vue'
import AppModal from '@/components/AppModal.vue'
import CreateCabinForm from '@/features/cabins/CreateCabinForm.vue'
</script>

<template>
  <AppModal>
    <template #button="{ open }">
      <div>
        <AppButton @click="open">Add new cabin</AppButton>
      </div>
    </template>
    <template #default="{ closeCallback }">
      <CreateCabinForm @on-close-modal="closeCallback" />
    </template>
  </AppModal>
</template>
