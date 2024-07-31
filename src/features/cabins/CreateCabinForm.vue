<script lang="ts" setup>
import AppButton from '@/components/AppButton.vue'
import AppFile from '@/components/AppFile.vue'
import AppForm from '@/components/AppForm.vue'
import AppInput from '@/components/AppInput.vue'
import AppTextarea from '@/components/AppTextarea.vue'
import FormRow from '@/components/FormRow.vue'

const emit = defineEmits<{
  'on-close-modal': []
}>()

function onCloseModal() {
  emit('on-close-modal')
}
</script>

<template>
  <AppForm form-type="modal">
    <FormRow label="Cabin name">
      <AppInput id="name" />
    </FormRow>
    <FormRow label="Maximum capacity">
      <AppInput type="number" id="maxCapacity" />
    </FormRow>
    <FormRow label="Regular price">
      <AppInput type="number" id="regularPrice" />
    </FormRow>
    <FormRow label="Discount">
      <AppInput type="number" id="discount" />
    </FormRow>
    <FormRow label="Description for website">
      <AppTextarea id="description" />
    </FormRow>
    <FormRow label="Cabin photo">
      <AppFile id="image" accept="image/*" />
    </FormRow>
    <FormRow>
      <AppButton type="reset" variant="secondary" @click="onCloseModal">Cancel</AppButton>
      <AppButton>Create new cabin</AppButton>
    </FormRow>
  </AppForm>
</template>
