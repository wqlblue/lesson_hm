# VUE 哲学

- 前端刀耕火种的年代
   - 开发思想
     底层API  DOM编程+事件机制
     复杂，开发效率低 性能差（频繁访问，甚至修改dom）
     V8 引擎（JS，单线程） + 渲染引擎（html+css）
     以快速显示页面为第一要务
- jquery
  js 框架 DOM操作简单
  $ 等封装简化了js开发

- web 1.0（csdn blog） -> 2.0(twitter)
  JS代码量增大，性能排在第一位

- 演变到VUE / REACT 现代前端框架    
    更关注于业务开发（数据，响应式，组件化），不要在意JSdom底层，框架封装了
    声明式编程，强调做什么，而不是怎么做


    数据思维 + vue/react  实现方法  = 前端开发


- data title
- vue提供给专注于业务的语法 v-model 双向绑定
    - data title input.value 使用
    - 同时 input.value 改变 title 也会改变



- todos 应用    
  - todos 数据项
  - title 任务
  - @keydown.enter 回车事件 @event.vue 事件监听
    .enter 事件修饰符  事件业务更快

-  动态样式业务
    ：动态绑定  v-bind： 缩写
    ：class="{}"   双引号内部是JS 运行区域
    - {done:todo.done}
    - 动态绑定类名
当你想要根据组件的状态动态地添加或移除 CSS 类时，可以使用 v-bind:class（简写为 :class）指令，并传递一个对象给它。对象的键是类名，值是一个条件表达式，如果表达式求值为 true，则应用该类；如果为 false，则不应用该类。