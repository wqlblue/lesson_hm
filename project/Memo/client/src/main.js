import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/reset.css'
import 'lib-flexible/flexible';
import 'vant/lib/index.css';
import {Button,Form, Field, CellGroup,Notify,Icon,Uploader,Picker,Popup} from 'vant'



const app = createApp(App)

app.use(createPinia())
    .use(Picker)
    .use(Popup)
    .use(Uploader)
    .use(Icon)
    .use(Notify)
    .use(router)
    .use(Button)
    .use(Form)
    .use(Field)
    .use(CellGroup)

app.mount('#app')
