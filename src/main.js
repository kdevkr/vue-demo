import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createMetaManager, useMeta } from 'vue-meta'
import { router } from './router.js'
import { createLoading } from './plugin.js'
import './style.css'
import App from './App.vue'

const metaManager = createMetaManager()
useMeta({ title: 'Vue Demo' }, metaManager)

createApp(App) //
  .use(router)
  .use(createPinia())
  .use(metaManager)
  .use(createLoading())
  .mount('#app')
