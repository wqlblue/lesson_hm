import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './assets/main.css'
import { Lazyload } from 'vant';
import { createPinia } from 'pinia'

const app = createApp(App)
app
    .use(Lazyload)
    .use(createPinia())
    .use(router)
    .mount('#app')
