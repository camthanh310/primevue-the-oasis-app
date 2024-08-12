<script lang="ts" setup>
import { CheckCircle2, XCircleIcon } from 'lucide-vue-next'
import Toast, { type ToastMessageOptions } from 'primevue/toast'
import type { Component } from 'vue'

type PickSeverityType = Pick<ToastMessageOptions, 'severity'>
type SeverityType = Extract<PickSeverityType[keyof PickSeverityType], 'success' | 'error'>

const icon: Record<SeverityType, Component> = {
  success: CheckCircle2,
  error: XCircleIcon
}
</script>

<template>
  <Toast position="top-center" pt:root:class="max-w-72">
    <template #container="{ message }: { message: ToastMessageOptions }">
      <div class="flex items-center py-3 px-2">
        <Component :is="icon[message.severity as SeverityType]" class="size-7 stroke-2 mr-2" />
        <div class="font-medium text-sm">{{ message.summary }}</div>
      </div>
    </template>
  </Toast>
</template>
