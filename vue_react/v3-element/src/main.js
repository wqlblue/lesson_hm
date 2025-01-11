import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElAside
} from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import { createPinia } from 'pinia'

createApp(App)
  .use(router)
  .use(createPinia())
  .use(ElButton) // UI 组件库 开发效率提升了
  .use(ElForm)
  .use(ElFormItem)
  .use(ElInput)
  .use(ElContainer)
  .use(ElHeader)
  .use(ElAside)
  .use(ElMain)
  .use(ElMenu)
  .use(ElMenuItem)
  .use(ElSubMenu)



  .mount('#app')
