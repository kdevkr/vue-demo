import { createI18n } from 'vue-i18n'
import en from './messages.json'
import ko from './messages_ko_KR.json'

const i18n = createI18n({
  locale: 'ko', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: { en, ko }, // set locale messages
})

export { i18n }
