<script lang="ts" setup>
import { ref } from 'vue'
import { XIcon } from 'lucide-vue-next'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'

defineSlots<{
  button: (props: { open: () => void }) => any
  default: (props: { closeCallback: () => void }) => any
}>()

const visible = ref(false)

function open() {
  visible.value = true
}

defineExpose({
  open
})
</script>
<template>
  <slot name="button" :open="open" />

  <Dialog
    v-model:visible="visible"
    modal
    :show-header="false"
    pt:mask:class="bg-white/10 backdrop-blur-sm"
    :dismissable-mask="true"
    unstyled
  >
    <template #container="{ closeCallback }">
      <div
        class="top-1/2 left-1/2 bg-white rounded-lg shadow-lg -translate-x-1/2 -translate-y-1/2 fixed transition-all duration-500"
      >
        <Button
          unstyled
          class="p-2 rounded-md transform translate-x-2 transition-all duration-200 absolute top-2 right-5 hover:bg-gray-100"
          @click="closeCallback"
        >
          <XIcon class="size-7 stroke-gray-500 text-gray-500 fill-gray-500" />
        </Button>

        <div class="pt-10 pb-5 px-8">
          <slot :close-callback="closeCallback" />
        </div>
      </div>
    </template>
  </Dialog>
</template>
