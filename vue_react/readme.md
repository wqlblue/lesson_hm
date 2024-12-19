- tract 学习路径
  - react 基础语法 过一遍 （B站|文档）
  - hooks 相关
  - 全家桶
  - 状态管理
  - react 源码
  - Antd   ...
  - ts

  - AI Coding 
    - VUE & React 一起搞
    - 自然语义编程
      tailwindcss 语义 
      antd  组件

    - 给一张设计稿  -> 生成相关的组件

    - http 引入 前端组件框架
    - vue 
      Vue 


  - 挂载点
    将前端工作交给vue/react， 在html里只需要一个**挂载**点  #root


        挂载Vue APP 应用实例

  - vue 哲学   让我们focus业务的现代前端框架
    - html界面上升到应用的复杂，现在前端复杂
    - Web应用是数据驱动的界面
    - vue 事件机制 方便 @event="handler"
    - 响应式编程
        - ref(0) 包装简单数据类型成为相应式对象
        - .value = "" 修改value  值改变的同时，界面热更新
        - 规避DOM 编程
        - 不再API 编程，而focus 业务
  - App 和传统编程的区别
    - createApp 创建一个应用 VUEApp
    - # root 结合
    - #root 里面就是vue的世界了
    {{count}}
    - {{}}  vue 的数据占位符
    可以被改变的
    不需要document.querySelector("")
    {{data}}
    setup(){
      return{
        data
      }
    }