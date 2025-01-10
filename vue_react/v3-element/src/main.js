import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import element3 from 'element3'
import router from './router'
import { createPinia } from 'pinia'

createApp(App)
    .use(createPinia())
    .use(element3)  // UI组件库 开发效率提升了100倍
    .use(router)
    .mount('#app')


