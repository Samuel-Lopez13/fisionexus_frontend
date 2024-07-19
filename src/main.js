import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';

const app = createApp(App)

app.use(VCalendar, {});
app.use(createPinia())
app.use(router)

app.mount('#app')