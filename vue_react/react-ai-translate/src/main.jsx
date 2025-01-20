import { StrictMode, useState } from 'react'; // 确保从'react'中导入useState
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// const RootELe = () => {
//   const [show, setShow] = useState(true); // 正确地在函数组件内部使用useState

//   setTimeout(() => {
//     setShow(false); // 在setTimeout回调内更新状态
//   }, 5000);

//   return (
//     <>
//       {show ? <App /> : null} {/* 根据'show'的状态决定是否渲染<App /> */}
//     </>
//   );
// };

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);