<script lang="ts" setup>
import { ref } from 'vue'
import AppForm from '@/components/AppForm.vue'
import FormRow from '@/components/FormRow.vue'
import AppInput from '@/components/AppInput.vue'

const settings = [
  'minBookingLength',
  'maxBookingLength',
  'maxGuestsPerBooking',
  'breakfastPrice'
] as const
type SettingType = (typeof settings)[number]

const foo = ref(1)

function handleUpdate(event: Event, field: SettingType) {
  console.log('update foo', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <AppForm>
    <FormRow label="Minimum nights/booking">
      <AppInput
        id="min-nights"
        type="number"
        :model-value="foo"
        @blur="handleUpdate($event, 'minBookingLength')"
      />
    </FormRow>
    <FormRow label="Maximum nights/booking">
      <AppInput id="max-nights" type="number" @blur="handleUpdate($event, 'maxBookingLength')" />
    </FormRow>
    <FormRow label="Maximum guests/booking">
      <AppInput id="max-guests" type="number" @blur="handleUpdate($event, 'maxGuestsPerBooking')" />
    </FormRow>
    <FormRow label="Breakfast price">
      <AppInput id="breakfast-price" type="number" @blur="handleUpdate($event, 'breakfastPrice')" />
    </FormRow>
  </AppForm>
</template>
