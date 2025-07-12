import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './style.css'
import './root.css'

import { createI18n } from 'vue-i18n'
import de from './locales/de.json'
import en from './locales/en.json'

const i18n = createI18n({
  locale: 'de',
  fallbackLocale: 'en',
  messages: { de, en }
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
