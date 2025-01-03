import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App) //vue根组件 ->
// app对象 use方法
console.log(app);

// Focus 业务
// vue的周边生态就起来了

app.
    use(router).   // 插件使用路由功能
    mount('#app')  // -> 挂载点
