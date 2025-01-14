# 大厂项目技能点分析
- 全家桶
- 不要搞后端
- TypeScript js 超集
    - 在路由配置文件添加 RouteRecordRaw 类型约束 
    - 在pinia里 所有的响应式数据都要添加类型约束 ref<泛型>
    - types 目录 是类型定义的专属目录， 按模块声明类型 
    export type xxx = {  type不属于js 属于ts  类型定义

    }
    - .vue文件中 加入 lang='ts' 支持
- 工程化 vite 
    - 快    
    - 先编译再运行
        开发写的是ts, 编译后js 运行
        scss - css 一样
    - alias 配置
      @ -> src
      path.resolve(__dirname, './src')  更严谨
      在 TS 项目 里我手动安装  @types/node  解决类型报错  
      @types/node 就像是给 TypeScript 语言的一个“翻译官”，让它能理解 Node.js 的各种功能和命令。因为 TypeScript 需要知道你使用的每个库或环境的详细信息（比如函数需要什么参数，返回什么类型的数据），而 @types/node 提供了这些关于 Node.js 的详细信息。
    - vant 自动加载
       借助vite 工程化  unplugin-vue-components  自动加载组件
       @vant/auto-import-resolver 将 vant 的加载放到启动运行阶段
       项目启动更快，因为首页不需要再加载vant了
    - 按需加载组件库的组件 
- 使用了vant UI组件库
    - 选择vant 加速开发，不用重复造轮子
    - 组件开发文档
    - 学习到很多组件的写法，比如具名插槽
        - 组件的定制性
        -   
- hooks useRouter  手写自定义一个hook
- 高质量的组件
- tailwindcss 界面  css能力较强
    - 安装tailwindcss
    - 原子化的css
    - 基本不用怎么写css，很快
    - bg-gradient-to-b from-red-500 to-blue-500  渐变色
    - 如果不用渐变，就要用图片 (发送http请求 + 图片比较大)
    - flex
       flex-col
- html5 的能力点
   语义化标签
     main
   localstorage
   observer
- es6
    es6 module 
        import from + export/export default
        import * as xxx from './xxx'
        import R,{x,y} from  ''
        import type R 

- es6语法考点安排
  - 插槽
    
  - torefs
     将 store 变成组件方便解构的响应式对象
     当从一个响应式对象直接解构时，属性会丢失响应式，原因，解构的是值
     toRefs 将响应式对象方便的拆解为多个独立的响应式引用对象
  - keep alive
     vue 性能优化的语法
     - router-view 路由的切换 组件会重新渲染 
     - 首页不应该被卸载，频繁的回到首页，为了提升体验，keep-alive
        不卸载组件，只切换
     - 任何需要缓存的组件
     - v-slot 插槽的指令，指定内部的slot 部分即渲染组件
     - keep-alive  全局组件，缓存组件 性能优化
  - watch
  - 懒加载
  - 性能优化
        - 路由懒加载
        - gradient
        - vite vant
        - keep-alive
  - 防抖节流

  - 项目写法
     - 先选项目
       - AI 豆包/通义千问
       大厂的热门项目仿写  小红书/蔚来 小米 ...  移动端
       - vant
       - html5
       - pinia toRefs()  流程

 