// 组件就是函数
// 组件首字母大写 复用
// 组件的返回值是JSX
function App() {
  // jsx
  // js函数区域 里编写html
  let myTitle = <h1>Hello,world</h1>
  // <!-- --> html  /* */ css
  return (
    // <div>
    //   {myTitle}
    // </div>
    // JSX 最外层，只能有且必须有一个节点
    // enclosed tag -> 原理？ api
    <div>
      <p>hello</p><p>world</p>
    </div>
    // 在 React 中，JSX 规定组件的返回值必须被一个单一的父级元素包裹。
    // 这是因为 JSX 在编译时会被转换为一系列的 React.createElement 调用，
    // 而每个 React.createElement 需要有一个明确的父节点来构建出 DOM 树结构。
    // 如果你尝试返回多个顶层元素而不使用一个父级元素包裹它们，JavaScript 将无法正确解析这些元素，从而导致错误。
  )
}

export default App
