

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ActionSheet } from 'vant'
import { Area } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';
import '@/assests/reset.css'

const app = createApp(App)
app.use(Area);
app.use(ActionSheet)
app.use(router)

app.mount('#app')
