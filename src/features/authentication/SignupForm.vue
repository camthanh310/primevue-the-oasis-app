<script lang="ts" setup>
import AppButton from '@/components/AppButton.vue'
import AppForm from '@/components/AppForm.vue'
import AppInput from '@/components/AppInput.vue'
import FormRow from '@/components/FormRow.vue'
</script>

<template>
  <AppForm>
    <FormRow label="Full name">
      <AppInput id="fullName" />
    </FormRow>
    <FormRow label="Email address">
      <AppInput type="email" id="email" />
    </FormRow>
    <FormRow label="Password (min 8 characters)">
      <AppInput type="password" id="password" />
    </FormRow>
    <FormRow label="Repeat password">
      <AppInput type="password" id="passwordConfirm" />
    </FormRow>
    <FormRow>
      <AppButton type="button" variant="secondary">Cancel</AppButton>
      <AppButton type="submit">Create new User</AppButton>
    </FormRow>
  </AppForm>
</template>
