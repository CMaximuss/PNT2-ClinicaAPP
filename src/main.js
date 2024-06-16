import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Dialog from 'primevue/dialog';

const app = createApp(App)

app.component('Dialog', Dialog);

app.use(createPinia())
app.use(router)

app.mount('#app')