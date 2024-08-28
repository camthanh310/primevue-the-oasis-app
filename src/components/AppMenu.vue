<script lang="ts" setup>
import { ref, type Component } from 'vue'
import Menu, { type MenuRouterBindProps } from 'primevue/menu'
import type { MenuItem as PrimeMenuItem } from 'primevue/menuitem'

// interface MenuItem extends Omit<PrimeMenuItem, 'icon'> {
//   icon?: Component | string
// }

// export interface AppMenuProps extends Omit<MenuItem, 'items'> {
//   items?: MenuItem[]
// }

// const props = defineProps<AppMenuProps>()

// const menu = ref<InstanceType<typeof Menu> | null>(null)

function toggle(event: Event) {
  //   menu.value?.toggle(event)
}
</script>

<template>
  <slot name="button" :toggle="toggle" />
  <!-- {{ props }} -->
  <!-- <Menu ref="menu" :id="$attrs['aria-controls']" :model="[]" :popup="true">
    <template #item="{ item, props }: { item: AppMenuProps; props: MenuRouterBindProps }"> -->
  <!-- <Component :is="item.icon" /> -->
  <!-- </template>
  </Menu> -->
</template>
