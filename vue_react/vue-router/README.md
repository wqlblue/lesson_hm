# vue 全家桶之 vue-router 路由

- vue 语法 组件（vue2 选项式/ vue3 组合式 大型 200行 ）、响应式、生命周期、指令（v-bind: v-model、v-for 、 v-if\v-show）、 三种数据（自有数据ref、 props 、computed）
  只做最核心的
- vue-router 路由 vue 周边生态
  - 跳转到其他页面 路由 
  - 
- vuex/pinia 状态管理

## vue-router
- 将接管路由，像交警一样
- router-link 取代a标签 
  a 标签 
  router-link 组件包含a 的功能 , 路由对应的组件显示到相应位置
  要启用，
  组件没有生效 无法识别的组件 -> div 元素
  - 向vue 添加vue-router 

- router 专门的目录
   - index.js 入口配置文件
   - router-link 是  vue-router 提供的组件

- 业务熟练度
   - vue-router 语法细节
      - routes  拆分 亮点
      [
        /
        /ABOUT 顶级路径
        ... Users // 用户模块
        ... Posts // 文章模块
      ]
      展开运算符
   - path,component
     - name  跳转用 :to ="{'name  '}"   
     - props 路由传参
  
   - 路由历史记录 history
     router-link 而不是a组件





views 文件夹：主要用于存放应用的主要页面或视图组件，每个视图组件对应一个路由，表示一个完整的页面。视图组件通常是独立的、顶层的，并且较少复用。
components 文件夹：用于存放可复用的子组件，这些组件可以在不同的视图或其它组件中多次使用，以构建复杂的用户界面。组件具有更小的粒度，专注于实现单一功能或展示特定内容。