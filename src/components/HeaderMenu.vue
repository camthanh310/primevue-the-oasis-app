<script lang="ts" setup>
import { LogOut, Moon, User } from 'lucide-vue-next'
import type { HeaderMenu } from '@/types/Menu'
import AppButtonIcon from '@/components/AppButtonIcon.vue'

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
      <AppButtonIcon :aria-label="action.value">
        <Component :is="action.icon" class="size-6 text-indigo-600" />
      </AppButtonIcon>
    </li>
  </ul>
</template>
