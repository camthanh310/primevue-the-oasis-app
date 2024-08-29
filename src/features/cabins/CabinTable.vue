<script lang="ts" setup>
import { computed } from 'vue'
import { EllipsisVertical, Copy, Pencil, Trash } from 'lucide-vue-next'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import AppSpinner from '@/components/AppSpinner.vue'
import AppEmpty from '@/components/AppEmpty.vue'
import { useCabins } from '@/composables/cabins/useCabins'
import type { CabinRowType } from '@/types/Collection'
import AppButtonIcon from '@/components/AppButtonIcon.vue'
import AppMenu, { type AppMenuProps } from '@/components/AppMenu.vue'

const { cabins, isLoading } = useCabins()

const items = computed(() => (value: number): AppMenuProps[] => [
  {
    label: 'Duplicate',
    icon: Copy,
    value: value,
    action: (id: number) => {
      console.log('TODO Duplicate', id)
    }
  },
  {
    label: 'Edit',
    icon: Pencil,
    value: value,
    action: (id: number) => {
      console.log('TODO Edit', id)
    }
  },
  {
    label: 'Delete',
    icon: Trash,
    value: value,
    action: (id: number) => {
      console.log('TODO Delete', id)
    }
  }
])
</script>

<template>
  <AppSpinner v-if="isLoading" />

  <AppEmpty v-else-if="!cabins?.length" resource-name="Cabins" />

  <DataTable v-else :value="cabins" table-style="min-width: 50rem" data-key="id">
    <Column field="image">
      <template #body="{ data }: { data: CabinRowType }">
        <img
          :src="data.image!"
          :alt="data.name!"
          class="block w-24 aspect-[3/2] rounded object-cover object-center scale-110 -translate-x-2"
        />
      </template>
    </Column>
    <Column field="name" header="Cabin">
      <template #body="{ data }: { data: CabinRowType }">
        <div class="text-gray-600 font-semibold font-sono text-base">{{ data.name }}</div>
      </template>
    </Column>
    <Column field="maxCapacity" header="Capacity">
      <template #body="{ data }: { data: CabinRowType }">
        <div>Fits up to {{ data.maxCapacity }} guests</div>
      </template>
    </Column>
    <Column field="price" header="Price">
      <template #body="{ data }: { data: CabinRowType }">
        <div class="font-semibold font-sono">
          {{ $helpers.formatCurrency(data.regularPrice!) }}
        </div>
      </template>
    </Column>
    <Column field="discount" header="Discount">
      <template #body="{ data }: { data: CabinRowType }">
        <div v-if="data.discount" class="font-medium font-sono text-green-700">
          {{ $helpers.formatCurrency(data.discount) }}
        </div>
        <span v-else>&mdash;</span>
      </template>
    </Column>
    <Column>
      <template #body="{ data }: { data: CabinRowType }">
        <AppMenu
          :items="items(data.id)"
          aria-haspopup="true"
          :aria-controls="`overlay_menu_${data.id}`"
        >
          <template #button="{ toggle }">
            <AppButtonIcon @click="toggle">
              <EllipsisVertical class="size-5 text-gray-700" />
            </AppButtonIcon>
          </template>
        </AppMenu>
      </template>
    </Column>
  </DataTable>
</template>
