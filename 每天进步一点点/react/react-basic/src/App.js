const count = 10;
function name() {
  return "wql";
}
const styles = {
  color: 'blue',
  fontSize: '16px',
  fontWeight: 'bold'
};

const list = [
  { id: 1001, name: 'Vue' },
  { id: 1002, name: 'React' },
  { id: 1003, name: 'Angular' }
]


const isShow = true;


const articleType = 1; // 0 1 2
function getArticleType(type) {
  if (type === 0) {
    return <div>我是无图文章</div>
  } else if (type === 1) {
    return <div>我是两图文章</div>
  } else {
    return <div>我是三图文章</div>
  }
}



// const handleClick = () => {
//   console.log('点击了按钮');
// }
// 事件参数 e
// const handleClick = (e) => {
//   console.log('点击了按钮', e);
// }
// 自定义参数
// const handleClick = (name) => {
//   console.log('点击了按钮', name);
// }

// 既要自定义参数还要事件参数
const handleClick = (name, e) => {
  console.log('点击了按钮', name, e);
}


function App() {

  return (

    <div className="App">
      {/* 调用函数渲染不同的模板 */}
      {/* {getArticleType(articleType)} */}
      {/* <button onClick={handleClick}>click me</button> */}
      {/* 自定义参数需要用箭头函数 */}
      {/* <button onClick={() => handleClick("jack  ")} >click me</button> */}
      {/* 自定义参数和事件参数 */}
      <button onClick={(e) => handleClick("jack", e)}>click me</button>
    </div>



    // <div className="App">
    //   this is app
    //   使用引号传递字符串
    //   {'this is message '}
    //   {/* 识别JS变量 */}
    //   {count}
    //   {/* 识别JS函数 */}
    //   {name()}
    //   {/* {方法调用} */}
    //   {new Date().toLocaleString()}
    //   {/* {使用JS对象} */}
    //   {<div style={styles}>
    //     This is a styled div.
    //   </div>}


    //   {/* 渲染列表
    //       循环哪个结构
    //       就return哪个
    //       注意事项： 记得加上独一无二的key，字符串或者 number id
    //       key的作用：react框架内部使用 提升更新性能
    //   */}
    //   <ul>
    //     {list.map(item => <li key={item.id}>{item.name}</li>)}
    //   </ul>
    // </div>

    // <div className="App">
    //   {/* 逻辑与 && */}
    //   {isShow && <div>这是一个div</div>}
    //   {/* 三元表达式 */}
    //   {isShow ? <div>这是一个div</div> : <div>这是另一个div</div>}
    // </div>
  );
}

export default App;

