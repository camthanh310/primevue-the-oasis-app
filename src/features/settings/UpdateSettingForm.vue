<script lang="ts" setup>
import { reactive, watchEffect } from 'vue'
import type { Setting } from '@/types/Collection'
import { useSettings } from '@/composables/settings/useSettings'
import { useUpdateSetting } from '@/composables/settings/useUpdateSetting'
import AppForm from '@/components/AppForm.vue'
import FormRow from '@/components/FormRow.vue'
import AppInput from '@/components/AppInput.vue'
import AppSpinner from '@/components/AppSpinner.vue'

type SettingType = Record<Setting, number | string>

const { settings, isLoading } = useSettings()
const { updateSetting, isUpdating } = useUpdateSetting()

const defaultSetting = reactive<SettingType>({
  minBookingLength: 0,
  maxBookingLength: 0,
  maxGuestsPerBooking: 0,
  breakfastPrice: 0
})

function handleUpdate(event: Event, field: Setting) {
  let value: string | number = (event.target as HTMLInputElement).value

  if (!value) {
    return
  }

  value = Number(value)

  defaultSetting[field] = value

  updateSetting({
    [field]: value
  })
}

watchEffect(() => {
  if (settings.value) {
    for (const key in settings.value as SettingType) {
      const field = key as Setting
      defaultSetting[field] = settings.value[field]!
    }
  }
})
</script>

<template>
  <AppSpinner v-if="isLoading" />
  <AppForm v-else>
    <FormRow label="Minimum nights/booking">
      <AppInput
        id="min-nights"
        type="number"
        :disabled="isUpdating"
        :model-value="defaultSetting.minBookingLength"
        @blur="handleUpdate($event, 'minBookingLength')"
      />
    </FormRow>
    <FormRow label="Maximum nights/booking">
      <AppInput
        id="max-nights"
        type="number"
        :disabled="isUpdating"
        :model-value="defaultSetting.maxBookingLength"
        @blur="handleUpdate($event, 'maxBookingLength')"
      />
    </FormRow>
    <FormRow label="Maximum guests/booking">
      <AppInput
        id="max-guests"
        type="number"
        :disabled="isUpdating"
        :model-value="defaultSetting.maxGuestsPerBooking"
        @blur="handleUpdate($event, 'maxGuestsPerBooking')"
      />
    </FormRow>
    <FormRow label="Breakfast price">
      <AppInput
        id="breakfast-price"
        type="number"
        :disabled="isUpdating"
        :model-value="defaultSetting.breakfastPrice"
        @blur="handleUpdate($event, 'breakfastPrice')"
      />
    </FormRow>
  </AppForm>
</template>
