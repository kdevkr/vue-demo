import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createMetaManager } from 'vue-meta'
import { router } from './router.js'
import { createLoading } from './plugin.js'
import { i18n } from './i18n/i18n.js'
import './style.css'

import { Quasar, Notify } from 'quasar'
import quasarLang from 'quasar/lang/ko-KR'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'

const app = createApp(App) //
  .use(router)
  .use(createPinia())
  .use(createMetaManager())
  .use(createLoading())
  .use(i18n)

app.use(Quasar, {
  plugins: {
    Notify,
  },
  lang: quasarLang,
})

await router.isReady()

app.mount('#app')
