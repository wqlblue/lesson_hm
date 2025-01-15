










- JSX
  - 在XML 里写Javascript
  - jsx 是react 的优势和特点之一，相比于vue 提升了组件的表达能力 和开发效率
    代码逻辑和template 随时互动，而不像 vue 三段式 template script 割裂了
    vue 偏向好理解的api v-if v-for  react 倾向于使用 jsx 基于js,能不要api就不要api
    vue 也可以用 jsx 语法
  - 唯一的标签包住所有标签  可以作为其他节点的容器，又会在挂载后不污染html的fragment 节点实现的
    没有实体，文档碎片 createDocumentFragment
    性能有很大的帮助
  - jsx 不能在原生js 里使用 ， react jsx 是怎么解析的