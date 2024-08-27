import type { helpers } from '@/plugins/helpers'

declare module 'vue' {
  interface ComponentCustomProperties {
    $helpers: typeof helpers
  }
}
