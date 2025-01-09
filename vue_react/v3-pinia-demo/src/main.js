import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

// 大型项目
// pinia 的实例  vue全家桶中的store

const pinia = createPinia()

app.use(pinia)
app.mount('#app')