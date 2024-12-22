# usestate
 useState 是一个 ReactHooks 函数，它允许向我们的组件添加一个状态变量，从而控制组件的渲染结果
  - 本质：和普通JS变量不同的是，状态变量一旦发生变化组件的视图UI也会跟着变化（数据驱动视图）

const [count, setCount] = useState(0);
  -  useState 是一个函数，返回值是一个数组。
  -  数组中的第一个参数是状态变量，第二个参数是 set 函数用来修改状态变量。
  -  useState 的参数将作为 count 的初始值。



内置 Hook 是 React 提供的一组预定义的函数



- 修改