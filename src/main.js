import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router.js'
import { createLoading } from './plugin.js'
import './style.css'
import App from './App.vue'

createApp(App) //
  .use(router)
  .use(createPinia())
  .use(createLoading())
  .mount('#app')
