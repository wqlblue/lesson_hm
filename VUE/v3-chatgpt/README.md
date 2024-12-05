# 企业级 vue3 开发， 商业项目
- 项目架构
    - vue-router   单页应用，路由功能
    http://localhost:5173/#/


- 理解项目的需求
    -  url要改变  #hash  不会刷新当前页面，单页应用的要求，单页应用的要求
    -  hashchange   router-view  将相应的组件显示到 router-view 位置就好了
    - 路由分成两种 hashHsitory  #home 兼容性更好 锚链接
        localhost:5173/#/home
        localhost:5173/#/about
    - 来自锚链接的原生能力
        <a href="#home">HOME</a>  <a name="home"></a>
        url + '#home' 同时把 我们送到了 home 位置 ，页面不刷新

    - tailwindcss 原子css ，外包的好帮手， 95%css不用写了
        - npm install tailwindcss postcss autoprefixer
        - npx tailwindcss init -p

    - twindcss
        - 原子css
        - 4 1rem
        - py ml
        - css带来语义化    