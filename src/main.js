import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import './assets/main.css'
import { createPinia } from 'pinia'
import Lara from '@/presets/lara'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara
})
app.use(pinia)

app.mount('#app')
