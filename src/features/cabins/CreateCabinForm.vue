<script lang="ts" setup>
import { useForm } from '@vue-hooks-form/core'
import AppButton from '@/components/AppButton.vue'
import AppFile from '@/components/AppFile.vue'
import AppForm from '@/components/AppForm.vue'
import AppInput from '@/components/AppInput.vue'
import AppTextarea from '@/components/AppTextarea.vue'
import FormRow from '@/components/FormRow.vue'
import type { Cabin } from '@/types/Collection'

const emit = defineEmits<{
  'on-close-modal': []
}>()

const {
  register,
  handleSubmit,
  getValues,
  formState: { errors }
} = useForm<Cabin>()

function onCloseModal() {
  emit('on-close-modal')
}

function onSubmit() {
  console.log('should working...')
}
</script>

<template>
  <AppForm @submit.prevent="handleSubmit(onSubmit)()" form-type="modal">
    <FormRow label="Cabin name" :error="errors.name?.message">
      <AppInput
        id="name"
        :="
          register('name', {
            required: 'This field is required'
          })
        "
      />
    </FormRow>
    <FormRow label="Maximum capacity" :error="errors.maxCapacity?.message">
      <AppInput
        type="number"
        id="maxCapacity"
        :="
          register('maxCapacity', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1'
            }
          })
        "
      />
    </FormRow>
    <FormRow label="Regular price" :error="errors.regularPrice?.message">
      <AppInput
        type="number"
        id="regularPrice"
        :="
          register('regularPrice', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Regular price should be at least 1'
            }
          })
        "
      />
    </FormRow>
    <FormRow label="Discount" :error="errors.discount?.message">
      <AppInput
        type="number"
        id="discount"
        :="
          register('discount', {
            required: 'This field is required',
            validate: (value) =>
              value <= getValues('regularPrice') || 'Discount should be less than regular price'
          })
        "
      />
    </FormRow>
    <FormRow label="Description for website" :error="errors.description?.message">
      <AppTextarea
        id="description"
        :="
          register('description', {
            required: 'This field is required'
          })
        "
      />
    </FormRow>
    <FormRow label="Cabin photo">
      <AppFile
        id="image"
        accept="image/*"
        :="
          register('image', {
            required: 'This field is required'
          })
        "
      />
    </FormRow>
    <FormRow>
      <AppButton type="reset" variant="secondary" @click="onCloseModal">Cancel</AppButton>
      <AppButton type="submit">Create new cabin</AppButton>
    </FormRow>
  </AppForm>
</template>
