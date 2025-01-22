import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import enrollVantUI from './enrollVantUI.js'

import 'lib-flexible'
import './assets/reset.css'
import 'vant/lib/index.css';

const app = createApp(App)

app.use(createPinia())
    .use(router)
enrollVantUI(app)

app.mount('#app')
