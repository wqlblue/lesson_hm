// import { useRef } from "react";
// function App() {
//   const showDom = () => {
//     console.dir(inputRef.current);
//   };
//   const inputRef = useRef(null);
//   return (
//     <div>
//       <input ref={inputRef} type="text " />
//       <button onClick={showDom}>获取</button>
//     </div>
//   );
// }
// export default App;

// import { useEffect } from "react";





// function Son(props) {
//   // props 是一个对象,包含了父组件传递过来的所有的数据
//   console.log(props);
//   return (
//     <div>
//       <h1>我是子组件</h1>
//       <h2>我是子组件的属性{props.name},{props.children}</h2>
//     </div>
//   )
// }

// function App() {
//   const name = 'this is app name'
//   return (
//     < div className="App" >
//       <Son name={name}
//         age={18}
//         sex={true}
//         arr={[1, 2, 3]}
//         obj={{ name: '张三', age: 18 }}
//         children={
//           <h1>我是子组件的children</h1>
//         }
//       />
//     </div>
//   );
// }
// export default App;



// function Son(props) {
//   console.log(props);

//   return (
//     <div>
//       <h1>我是子组件</h1>
//       {props.children}
//     </div>
//   )
// }


// function App() {
//   return (
//     <div className="App">
//       <Son>
//         <span>aaaaaaa</span>
//       </Son>
//     </div>
//   )
// }
// export default App;




// function Son(props) {
//   console.log(props)
//   return <div>this is son</div>
// }

// function App() {
//   return (
//     <div>
//       <Son />
//       <span>this is span</span>
//     </div>
//   )
// }

// export default App


// 父组件实现兄弟组件传值
// import React, { useState } from 'react'

// function A({ onGetAName }) {
//   const name = '张三'
//   return (
//     <div>
//       this is a component
//       <button onClick={() => onGetAName(name)}>Send</button>
//     </div>
//   )
// }

// function B({ name }) {
//   return (
//     <div>
//       this is b component,{name}
//     </div>
//   )
// }

// function App() {
//   const [name, setName] = useState('')
//   const getAName = (name) => {
//     console.log(name);
//     setName(name)
//   }
//   return (
//     <div>
//       this is app
//       <A onGetAName={getAName} />
//       <B name={name} />
//     </div>
//   )
// }

// export default App;





// // 使用createContext的方法创建一个上下文对象
// // 在顶层组件 通过Provider组件提供数据

// // 底层组件通过useContext获取数据

// import React, { useContext } from 'react'
// const MyContext = React.createContext()
// function A() {

//   return (
//     <div>
//       this is a component
//       <B />
//     </div>
//   )
// }
// function B() {
//   const msg = useContext(MyContext)
//   return (
//     <div>

//       this is b component,{msg}
//     </div>
//   )
// }


// function App() {
//   const msg = 'hello'
//   return (
//     <div>
//       <MyContext.Provider value={msg} >
//         this is app
//         <A />
//       </MyContext.Provider>

//     </div>
//   )
// }
// export default App;



// useEffect
// import React, { useState, useEffect } from 'react'
// const URL = 'https://geek.itheima.net/v1_0/channels?spm=5176.28103460.0.0.44835d27l8Etwx'
// function App() {
//   const [list, setList] = useState([])
//   useEffect(() => {
//     //额外的操作 获取频道列表
//     async function getlist() {
//       const res = await fetch(URL)
//       const data = await res.json()
//       console.log(data);
//       setList(data.data.channels)
//     }
//     getlist()
//   })
//   return (
//     <div>
//       <ul>
//         {list.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//       this is app
//     </div>
//   )

// }
// export default App;


// 不同依赖性的useEffect

// import React, { useState, useEffect } from 'react'

// // 当依赖项为空数组时 初始化执行一次
// // 当依赖项为空时 初始化和组件更新
// // 当传入特定的依赖项时 初始化和 依赖项改变时 执行
// function App() {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     console.log('useEffect1');
//   })

//   return (
//     <div>
//       this is app
//       <button onClick={() => setCount(count + 1)}>{count}</button>
//     </div>
//   )

// }
// export default App;



// useEffect 清楚副作用

// import React, { useState, useEffect } from 'react'
// function Son() {
//   useEffect(() => {
//     let timer = setInterval(() => {
//       console.log('定时器');
//     }, 1000)

//     return () => {
//       clearInterval(timer)
//     }
//   }, [])
//   return (

//     <div>
//       this is son
//     </div>
//   )
// }
// function App() {
//   const [show, setShow] = useState(true)
//   return (
//     <div>
//       {show && <Son />}
//       <button onClick={() => setShow(!show)}>卸载</button>
//       this is app
//     </div>
//   )
// }

// export default App;






// 封装自定义Hook
// 1. 声明一个由use打头的函数
// 2. 在函数内部封装可复用的逻辑
// 3. 把组件中用到的状态或者回调return出去 （以对象或者数组）
// 4. 在哪个组件要用到这个逻辑，就执行这个函数，结构出来的状态和回调进行使用
// import React, { useState } from 'react';


// function useToggle() {
//   const [value, setValue] = useState(true)
//   const toggle = () => setValue(!value)
//   return [value, toggle]
// }
// function App() {
//   // const [value, setValue] = useState(true)

//   // const toggle = () => setValue(!value)
//   const [value, toggle] = useToggle()
//   return (
//     <div>
//       {value && <div> aa </div>}
//       <button onClick={toggle}>toggle</button>
//     </div>
//   )
// }
// export default App; 





// HOOk 不能用在哪里
// 1. 条件判断 
// 2  组件外

import { useState } from "react";
// useState()
function App() {

  return (

    <div>
      APP
    </div>
  )
}
export default App;