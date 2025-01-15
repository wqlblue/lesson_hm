import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//想象你在开发一个网站，但后端的API还没有准备好。你不想干等着后端完成，你想现在就开始测试你的前端代码。
// 这时，vite-plugin-mock 就像一个“假数据生成器”，它可以模拟后端API返回的数据，让你的前端能够像真的在和后端交互一样工作。
import { viteMockServe } from 'vite-plugin-mock'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), viteMockServe({
    mockPath: 'mock',
    localEnabled: true
  })],
})
