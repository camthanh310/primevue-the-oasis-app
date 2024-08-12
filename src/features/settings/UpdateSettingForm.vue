<script lang="ts" setup>
import type { SettingType } from '@/types/Collection'
import { useSettings } from '@/composables/useSettings'
import { useUpdateSetting } from '@/composables/useUpdateSetting'
import AppForm from '@/components/AppForm.vue'
import FormRow from '@/components/FormRow.vue'
import AppInput from '@/components/AppInput.vue'
import AppSpinner from '@/components/AppSpinner.vue'

type Setting = Exclude<Array<keyof SettingType>[number], 'created_at'>

const { settings, isLoading } = useSettings()
const { updateSetting, isUpdating } = useUpdateSetting()

function handleUpdate(event: Event, field: Setting) {
  const value = (event.target as HTMLInputElement).value

  if (!value) {
    return
  }

  updateSetting({
    [field]: Number(value)
  })
}
</script>

<template>
  <AppSpinner v-if="isLoading" />
  <AppForm v-else>
    <FormRow label="Minimum nights/booking">
      <AppInput
        id="min-nights"
        type="number"
        :disabled="isUpdating"
        :model-value="settings?.minBookingLength"
        @blur="handleUpdate($event, 'minBookingLength')"
      />
    </FormRow>
    <FormRow label="Maximum nights/booking">
      <AppInput
        id="max-nights"
        type="number"
        :disabled="isUpdating"
        :model-value="settings?.maxBookingLength"
        @blur="handleUpdate($event, 'maxBookingLength')"
      />
    </FormRow>
    <FormRow label="Maximum guests/booking">
      <AppInput
        id="max-guests"
        type="number"
        :disabled="isUpdating"
        :model-value="settings?.maxGuestsPerBooking"
        @blur="handleUpdate($event, 'maxGuestsPerBooking')"
      />
    </FormRow>
    <FormRow label="Breakfast price">
      <AppInput
        id="breakfast-price"
        type="number"
        :disabled="isUpdating"
        :model-value="settings?.breakfastPrice"
        @blur="handleUpdate($event, 'breakfastPrice')"
      />
    </FormRow>
  </AppForm>
</template>
