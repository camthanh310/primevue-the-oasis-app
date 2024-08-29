<script lang="ts" setup>
import { ref, type Component } from 'vue'
import Menu from 'primevue/menu'
import type { MenuItem as PrimeMenuItem } from 'primevue/menuitem'
import Button from 'primevue/button'

interface MenuItem extends Omit<PrimeMenuItem, 'icon' | 'key'> {
  icon?: Component | string
  value?: number | string
  action: (id?: number | string) => void
}

export interface AppMenuProps extends Omit<MenuItem, 'items' | 'action'> {
  items?: MenuItem[]
}

defineOptions({
  inheritAttrs: true
})

defineProps<AppMenuProps>()

const menu = ref<InstanceType<typeof Menu> | null>(null)

function toggle(event: Event) {
  menu.value?.toggle(event)
}
</script>

<template>
  <slot name="button" :toggle="toggle" />

  <Menu
    ref="menu"
    :id="$attrs['aria-controls']"
    :model="items"
    :popup="true"
    pt:list:class="shadow-md rounded-md !p-0"
  >
    <template #item="{ item }: { item: MenuItem }">
      <Button
        unstyled
        class="w-full text-left py-3 px-4 rounded-md text-base flex items-center gap-5 hover:bg-gray-50 transition-all duration-200"
        @click="item.action(item.value)"
      >
        <Component :is="item.icon" class="size-5 text-gray-400 transition-all duration-300" />
        <span>{{ item.label }}</span>
      </Button>
    </template>
  </Menu>
</template>
