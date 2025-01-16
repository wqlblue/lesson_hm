









  # react JSX

- es6 代码，很老的浏览器 不支持 2015 年发布
  const => var
  转换一种形式 
  babel 技术
  es6 => es5 
- stylue 
  .styl => css
- JSX => 原生js 执行的代码

- babel 
  - 任何的Js 新特性 立即投入代码生产
  - es6能够快速到来的，得益于babel 工程化转译工具 
  - 前端工程的 成熟 vite/babel/stylus/webpack
  - vite 工程总负责，babel 其中的交代码转译的一项
  - 家族 
    @babel/core 核心转译逻辑 const => var 
    @babel/cli 命令行工具 npx babel src -d lib
    @babel/preset-env 配置转译规则
    preset 预处理  一个规则   "@babel/preset-env"
  - npx babel demo.js -o es5.js
    npx 不用安装，直接执行某个包,
    场景 项目可能要在其他机器上运行
    @babel/cli 先工作 npx babel ....
    已经安装 npx 找到node_moudles/.bin/babel 命令执行 
    x 执行
    - npx 
  -  npx 就像是一个帮你临时调用npm包里命令的小助手，你不需要事先安装这个包，它能直接运行，用完即走，非常方便。
    - 如果已经安装到了本地可以直接使用 npx 来运行这个工具，
       而不需要全局安装或者在命令前加上相对路径。
    - 如果指定的包没有安装在本地环境中，npx 会尝试临时安装所需的包并执行它。一旦命令执行完毕，临时安装的包会被删除，这样可以保持环境的清洁。

  - @babel/core 核心的转译工作
  - .babelrc 配置文件
    presets 预处理 @babel/preset-env es6 => es5
    加了一个 @babel/preset-react  支持jsx语法转译

- jsx?
  - 并不是js新特性
  - react UI 组件语法，react 组件
     js写 html 
  - jsx 不可以直接运行  由 babel 按 @babel/preset-react 转译
  - react.createElement()
     React.createElement() 接受三个参数：
      类型：可以是一个标签名字符串（例如 'div'、'p'），也可以是一个 React 组件（类组件或函数组件）。
      属性：这是一个对象，包含传递给元素的所有属性。如果不需要传递任何属性，可以传入 null 或者直接省略（除了类型之外的其他参数都是可选的）。
      子元素：这可以是单个子元素、多个子元素（作为额外参数提供），或者是文本内容。
  -  虚拟DOM

- JSX 的理解
  - 原生dom  性能差，直接用，胆战心惊
  - vue/react 封装了 dom 操作， 性能好 ， VDOM
    React.createElement
    聚焦于业务，而非dom操作
  - babel 在 设计 JSX UI 组件语法  js 里面写html一样
    babel 转译 jsx 语法 React.createElement
  - html UI 开发 简单
  - 直接进入到react 的函数式组件中