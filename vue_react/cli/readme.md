# VUE + REACT CLI 命令行

- vue-cli  command line
  - 比较复杂的大型项目，不是简单的页面开发
    web app,而非page

- npm init vite
   vite 快速构建前端项目，前端基建工具（工程化的核心套件）
   npm init 初始化项目 将初始化交给vite 这个工程化工具
   - 标准项目模板
   


   - 项目的结构
     - package.json
       依赖
       - vue ^3  开发了和上线了都要
       - vite ^5 开发阶段需要 上线不需要 vite是包工头

    - 工程的不同生命周期
       - dev 开发阶段
       - test 测试阶段
       - build 上线阶段(进行时)
       - online 运营维护

    
    - npm run dev vite
      - http 协议 5173 index.html
        - 首页 website
        - 挂载点 #app
        - src/main.js 入口文件


      - src/main.js
        - src  开发目录
           开发的主战场
        - main.js 入口文件
          createApp().mount('#app')
        - App.vue 根组件
          .vue 专属后缀
          - 三段式
            - template 模板  结构 
               {{}}
            - script  逻辑 
               响应式
               事件
               。。。
            - css 样式
        - .vue 后缀格式太好了   胶囊一样
        - 组件>HTML的 页面构建模块
          组件是现代前端的开发新单元（比html大）
          组件 = 由一个逻辑单元的html构成 + css + js（汉堡包.vue）
          某项功能的抽象


        - 现代前端拥抱组件思维,vue 前端组件库
        - 组件按照功能划分 
        - 组件 = html(一堆) + css(一堆) + js(一堆)
        - .vue 三段式组合这个组件
        - 轮播图  功能属性凸显  经典组件
        - 前端的开发单位是组件，不是页面(重复都需要轮播图)
           不能以html为单位？ 单个功能弱小
        - 从工程化角度理解组件
           - 按功能块划分，好安排工作
           - 组件可以复用(.vue)  import
           - 好维护
           -        