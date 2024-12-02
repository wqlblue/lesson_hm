# 前端第一框架 react

- 特别适合中大型项目开发
- 学习成本高

## 安装环境
- npm i -g create-react-app 
    - react/vue  企业级应用，create-react-app 来自facebook官方推出的项目脚手架
    - -g  全局安装   安装到哪里去了
        npm config ls    配置信息

        create-react-app -> path -> prefix
- create-react-app  my-react   project name
    - 不再是index.html , js , css
      从零开始
    - 不用从零开始  拿一个标准的项目模板，快速启动

- my-react
    - src 开发目录， 代码的主战场
        index.js 入口文件
        index.css 全局样式文件
        react 18 最牛逼的开发框架
        react-dom
    - public 静态资源目录
        index.html  首页
            - root  react 功能挂载点
    - localhost:3000 -> / -> index.html -> load  index.js -> react 接管项目开发
    
    - 