import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createMetaManager } from 'vue-meta'
import { router } from './router.js'
import { createLoading } from './plugin.js'
import './style.css'
import App from './App.vue'

const app = createApp(App) //
  .use(router)
  .use(createPinia())
  .use(createMetaManager())
  .use(createLoading())

await router.isReady()

app.mount('#app')
