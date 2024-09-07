<script lang="ts" setup>
import { computed, useTemplateRef, watchEffect } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { object, string, number, any } from 'zod'
import { useCreateCabin } from '@/composables/cabins/useCreateCabin'
import AppButton from '@/components/AppButton.vue'
import AppFile from '@/components/AppFile.vue'
import AppForm from '@/components/AppForm.vue'
import AppInput from '@/components/AppInput.vue'
import AppTextarea from '@/components/AppTextarea.vue'
import FormRow from '@/components/FormRow.vue'
import type { CabinRowType } from '@/types/Collection'
import { useEditCabin } from '@/composables/cabins/useEditCabin'

interface Props {
  cabinToEdit?: CabinRowType | null
}

const { createCabin, isCreating } = useCreateCabin()
const { editCabin, isEditing } = useEditCabin()
const { cabinToEdit } = defineProps<Props>()

const emit = defineEmits<{
  'on-close-modal': []
}>()

const isEditSession = computed<boolean>(() => Boolean(cabinToEdit?.id))
const fileRef = useTemplateRef<InstanceType<typeof AppFile> | null>('appFile')

const schema = toTypedSchema(
  object({
    name: string({
      required_error: 'This field is required'
    }),
    maxCapacity: number({
      required_error: 'This field is required'
    }).min(1, { message: 'Capacity should be at least 1' }),
    regularPrice: number({
      required_error: 'This field is required'
    }).min(1, { message: 'Regular price should be at least 1' }),
    discount: number({
      required_error: 'This field is required'
    }),
    description: string({
      required_error: 'This field is required'
    }),
    image: any().refine((file: File) => file?.size !== 0, {
      message: 'This field is required'
    })
  }).refine((data) => data.discount <= data.regularPrice, {
    message: 'Discount should be less than regular price',
    path: ['discount']
  })
)
const { errors, defineField, handleSubmit } = useForm({
  validationSchema: schema
})

const [name, nameAttrs] = defineField('name')
const [maxCapacity, maxCapacityAttrs] = defineField('maxCapacity')
const [regularPrice, regularPriceAttrs] = defineField('regularPrice')
const [discount, discountAttrs] = defineField('discount')
const [description, descriptionAttrs] = defineField('description')
const [image, imageAttrs] = defineField('image')

function onCloseModal() {
  emit('on-close-modal')
}

const isWorking = computed(() => isCreating.value || isEditing.value)

const onSubmit = handleSubmit((values, actions) => {
  if (isEditSession.value) {
    editCabin(
      {
        newCabinData: values as CabinRowType,
        id: cabinToEdit!.id
      },
      {
        onSuccess: () => {
          actions.resetForm({
            values: {
              discount: 0,
              image: null
            }
          })
          fileRef.value?.cleanInputFile()
          onCloseModal()
        }
      }
    )
  } else {
    createCabin(values, {
      onSuccess: () => {
        actions.resetForm({
          values: {
            discount: 0,
            image: null
          }
        })
        fileRef.value?.cleanInputFile()
        onCloseModal()
      }
    })
  }
})

function handleUploadFile(file: File) {
  image.value = file
}

watchEffect(() => {
  if (!isEditSession.value) {
    discount.value = 0
  } else {
    name.value = cabinToEdit!.name!
    maxCapacity.value = cabinToEdit!.maxCapacity!
    regularPrice.value = cabinToEdit!.regularPrice!
    discount.value = cabinToEdit!.discount!
    description.value = cabinToEdit!.description!
    image.value = cabinToEdit!.image!
  }
})
</script>

<template>
  <AppForm @submit="onSubmit" form-type="modal">
    <FormRow label="Cabin name" :error="errors.name">
      <AppInput id="name" v-model="name" v-bind="nameAttrs" :disabled="isWorking" />
    </FormRow>
    <FormRow label="Maximum capacity" :error="errors.maxCapacity">
      <AppInput
        type="number"
        id="maxCapacity"
        v-model.number="maxCapacity"
        v-bind="maxCapacityAttrs"
        :disabled="isWorking"
      />
    </FormRow>
    <FormRow label="Regular price" :error="errors.regularPrice">
      <AppInput
        type="number"
        id="regularPrice"
        v-model.number="regularPrice"
        v-bind="regularPriceAttrs"
        :disabled="isWorking"
      />
    </FormRow>
    <FormRow label="Discount" :error="errors.discount">
      <AppInput
        type="number"
        id="discount"
        v-model.number="discount"
        v-bind="discountAttrs"
        :disabled="isWorking"
      />
    </FormRow>
    <FormRow label="Description for website" :error="errors.description">
      <AppTextarea
        id="description"
        v-model="description"
        v-bind="descriptionAttrs"
        :disabled="isWorking"
      />
    </FormRow>
    <FormRow label="Cabin photo" :error="errors.image">
      <AppFile
        id="image"
        accept="image/*"
        @change="handleUploadFile"
        ref="appFile"
        v-bind="imageAttrs"
        :disabled="isWorking"
      />
    </FormRow>
    <FormRow>
      <AppButton type="reset" variant="secondary" @click="onCloseModal">Cancel</AppButton>
      <AppButton type="submit" :disabled="isWorking">
        {{ isEditSession ? 'Edit Cabin' : 'Create new cabin' }}
      </AppButton>
    </FormRow>
  </AppForm>
</template>
