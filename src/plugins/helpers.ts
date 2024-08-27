import type { App } from 'vue'
import { formatCurrency } from '@/utils/helpers'

export const helpers = {
  formatCurrency
}

export default {
  install: (app: App) => {
    app.config.globalProperties.$helpers = helpers
  }
}
