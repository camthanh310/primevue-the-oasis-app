import type { helpers } from '@/plugins/helpers'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $helpers: typeof helpers
  }
}
