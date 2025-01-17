

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import './assets/reset.css'
import 'lib-flexible/flexible.js'

// 1. 引入你需要的组件
import { Button } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';


import { Form, Field, CellGroup } from 'vant';




import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);

app.mount('#app')
