<script lang="ts" setup>
import { useTemplateRef, type Component } from 'vue'
import Menu from 'primevue/menu'
import type { MenuItem as PrimeMenuItem } from 'primevue/menuitem'
import AppMenuItemButton from '@/components/AppMenuItemButton.vue'

interface MenuItem extends Omit<PrimeMenuItem, 'icon' | 'key'> {
  icon?: Component | string
  value?: number | string
  action?: (actionValue?: number | string | any) => void
}

export interface AppMenuProps extends Omit<MenuItem, 'items' | 'action'> {
  items?: MenuItem[]
}

defineProps<AppMenuProps>()

defineSlots<{
  button: (props: { toggle: (event: Event) => void }) => any
  default: (props: { item: MenuItem; hide: () => void }) => any
}>()

const menuRef = useTemplateRef<InstanceType<typeof Menu> | null>('menu')

function toggle(event: Event) {
  menuRef.value?.toggle(event)
}

function hideMenu() {
  menuRef.value?.hide()
}

function hide(callback: () => void) {
  callback()
  hideMenu()
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
      <slot :item="item" :hide="hideMenu">
        <AppMenuItemButton @click="hide(() => item!.action!(item.value))" :disabled="item.disabled">
          <Component :is="item.icon" class="size-5 text-gray-400 transition-all duration-300" />
          <span>{{ item.label }}</span>
        </AppMenuItemButton>
      </slot>
    </template>
  </Menu>
</template>
