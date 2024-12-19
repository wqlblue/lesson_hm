1. useState Hook 的工作原理
useState 是 React 提供的一个 Hook，允许你在函数组件中添加和管理状态。它的基本语法如下：


const [state, setState] = React.useState(initialState);
state：这是你定义的状态变量，表示当前的状态值。
setState：这是一个函数，用于更新状态变量的值。调用 setState 会触发组件的重新渲染，并使用新的状态值来更新 UI。
initialState：这是状态的初始值，可以是任何类型的值（如数字、字符串、对象、数组等）。