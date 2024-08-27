<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { Building, Calendar, Home, Settings, User } from 'lucide-vue-next'
import type { Menu } from '@/types/Menu'

const menus: Menu[] = [
  {
    href: 'dashboard',
    name: 'Home',
    icon: Home
  },
  {
    href: 'bookings',
    name: 'Bookings',
    icon: Calendar
  },
  {
    href: 'cabins',
    name: 'Cabins',
    icon: Building
  },
  {
    href: 'users',
    name: 'Users',
    icon: User
  },
  {
    href: 'settings',
    name: 'Settings',
    icon: Settings
  }
]
</script>

<template>
  <aside class="bg-white py-8 px-6 border-r border-gray-100 flex flex-col gap-10 row-[1_/_-1]">
    <div class="flex justify-center">
      <img class="h-24 w-auto" src="/logo-light.png" alt="Logo" />
    </div>

    <nav>
      <ul class="flex flex-col gap-2">
        <li v-for="menu in menus" :key="menu.href">
          <RouterLink
            active-class="bg-gray-50 text-gray-800 rounded-md"
            exact-active-class="bg-gray-50 text-gray-800 rounded-md"
            class="group flex items-center gap-3 text-gray-600 font-medium text-base py-3 px-6 transition-all duration-300 hover:bg-gray-50 hover:text-gray-800 hover:rounded-md"
            :to="{ name: menu.href }"
            v-slot="{ isActive }"
          >
            <Component
              :is="menu.icon"
              :class="[isActive ? 'text-indigo-600 ' : 'text-gray-400']"
              class="size-6 transition-all duration-300 group-hover:text-indigo-600"
            />
            {{ menu.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
