<script lang="ts" setup>
import { LogOut, Moon, User } from 'lucide-vue-next'
import Button from 'primevue/button'
import type { HeaderMenu } from '@/types/Menu'

const actions: HeaderMenu[] = [
  {
    value: 'account',
    icon: User,
    action: function () {}
  },
  {
    value: 'mode',
    icon: Moon,
    action: function () {}
  },
  {
    value: 'logout',
    icon: LogOut,
    action: function () {}
  }
]
</script>

<template>
  <ul class="flex gap-1">
    <li v-for="action in actions" :key="action.value" class="flex items-center">
      <Button
        unstyled
        :aria-label="action.value"
        class="flex items-center p-2 border-none rounded-md transition-all duration-200 hover:bg-gray-100"
      >
        <Component :is="action.icon" class="size-6 text-indigo-600" />
      </Button>
    </li>
  </ul>
</template>
