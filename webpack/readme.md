- vite和webpack的区别
  - vite更快，更年轻 vue 尤雨溪推荐
  - webpack比较复杂，定制性和功能更强大
  - 工程化套件
  - 开发阶段，
    打包阶段
    上线阶段
  - stylus -> css
  - ts -> js
  - js -> es6+ -> es5
  - .vue -> loader plugin   

  - node  命令行工具启动工程化  
  - 5173 端口 启动 web-server  index.html 作为首页 #root挂载点
        src/main.js 入口 App.vue 跟组件渲染出来

  - webpack 三巨头
    - webpack  打包功能核心      
    - webpack-cli  命令行工具
    - webpack dev-server 服务器

    - 运行流程
        - npm run dev 脚本开始  webpack dev --open
        - webpack-cli  命令行工具接到命令行的指令
            webpack 先打包
            serve 8080
            -- open自动打开浏览器
        - webpack 打包
            - 读取根目录下的 webpack.config.js 配置文件
                - 模块化的 modules.exports
                - entry(入口 main.js) ＋ output(打包完成后可执行的文件)   
                - devServer port + contentbase(首页)
                - plugins  htmlwebpackplugin  它会将html进行一个插件化，将打包好的js插入到html中
        - blunder

    - entry -> output
        - 处理要做的事情 module 模块功能
            js es6+ -> es5 ? 兼容性更好
        - 文件的类型
            test 正则  文件类型
            - stylus  .stylus -> css
            - js       es6  -> es5  
            - ts       ts -> js ->es5
            - .vue     vue  - js + html
        - loader 加载器  babel-loader  -> babel 转译 es6  -> es5
    - entry  main.js  -> module -> rules -> test 文件类型 -> use -> loader 加载器

    - babel js 转译  es6+ -> es5
        - babel-loader  加载js到babel 工作间  加载器
        - @babel-core    转译器的核心功能
        - @babel/preset-env   预处理方式

- vite webpack 有什么区别
  - vite  简单 更快    bundless 不需要打包
  - webpack 从入口到出口， 打包成build.js 文件 100+文件
        慢
  - webpack学习成本比较高，配置复杂，适合大型定制类项目的需求
  - vite  方便，快捷  
        stylus为例  vite只需要安装stylus 插件即可
        而webpack 需要改配置 loader 等一堆



-package.json 就是你项目的“说明书”和“购物清单”：

它描述了你的项目是什么，谁写的，用的是什么许可证。
它列出了你需要的所有工具和库，确保你在不同环境下都能安装相同的依赖。
它定义了一些常用的命令，让你可以通过简单的 npm 命令来启动、测试、构建项目。
它还可以帮助自动化工具更好地理解和处理你的项目。
有了 package.json，你可以更轻松地管理和维护你的 Node.js 项目，确保一切都井井有条。


