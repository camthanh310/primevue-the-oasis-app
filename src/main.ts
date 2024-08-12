import './assets/main.css'

import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.use(ToastService)
app.use(VueQueryPlugin)

app.mount('#app')
