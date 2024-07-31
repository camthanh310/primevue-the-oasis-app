<script lang="ts" setup>
import AppHeading from '@/components/AppHeading.vue'
import AppRow from '@/components/AppRow.vue'
import SignupForm from '@/features/authentication/SignupForm.vue'
</script>

<template>
  <AppRow>
    <AppHeading heading-level="h1">Create a new user</AppHeading>
    <SignupForm />
  </AppRow>
</template>
