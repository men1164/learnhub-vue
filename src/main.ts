import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Toast, { POSITION, PluginOptions } from 'vue-toastification'
import '/node_modules/vue-toastification/dist/index.css'

const pinia = createPinia()
const options: PluginOptions = {
  position: POSITION.TOP_CENTER,
}

createApp(App).use(pinia).use(router).use(Toast, options).mount('#app')
