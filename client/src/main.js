import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment' // moment.js date/time formatting library

createApp(App)
  .use(store)
  .use(router)
  .provide('$moment', moment)
  .mount('#app')
