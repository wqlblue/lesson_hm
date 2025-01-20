- 巴菲特 卖了一半的苹果股票
  - 端模型要来了
  - 小一点，但是性能还行
  - 前端AI未来
- Transformers.js 前端AI库
  来自于全球最大AI社区 huggingFace(LLM 社区)
- AI 是技术趋势，拥抱AI，
- AIGC 现在已经很成熟，生成代码，快速学习
- coze agent 开发，也调用过接口完成项目中的AI应用
- 了解OpenAI 等LLM接口，完成过文生图，语义搜索等
- AI带来了全新的开发体验，前端工程师需要实施AI应用用户体验
- AI 端模型能力是一个风口，我了解 transformer.js
    - prompt engineer
        - 角色 role
        - 清晰描述任务
        - 分布，交给多个工作流
        - 可以做什么，不做什么
        - 给大模型一些思考的时间
    - button disabled  

        
- react 学的怎么样？
    了解语法，写过一个AI项目，一周内能上手
- react 组件？
    返回 JSX 的函数就是组件 .jsx
    template/script/style  三段写法 .vue文件
    函数就是对象
    React(函数式组件)/vue 函数式编程setup
- react 坚持不用v-model双向绑定 性能不好  单向数据流
- MVVM  + 组件化思想 + 函数式编程
    - vue 的优势是 API 简洁好上手 setup语法糖 (ref,reactive,defineProps)
     v-for v-if 
    - react 优势是纯JS风格  函数参数解构就是props   map , 上手难
- react <></>
    做容器 有没有多加节点
    但是又不用div等
    文档碎片组件 fragment

- react

请你介绍react 的hook 函数 
    react 在hook 上很激进  vue 借鉴了 hook 思想 
    - useState  引入一个响应式的状态(ref)
        参数是默认值，返回是数组，第一个是状态，第二个是更新状态的函数
    - useRef
        vue中  ref 动态绑定节点/对象
        useRef  null -> current
        要快速显示组件优先， 所以 webworker的实例化推迟  useRef 动态绑定
        worker对象
        - worker  组件函数内局部变量  null 访问问题
        - useEffect  实例化  性能问题
        - 任何地方都可以访问
    - useEffect
        生命周期钩子函数    
          - onMounted
          - onUnmounted
          - onUpdated
        
- 数据通信
    - 状 态管理 pinia redux
    - 父子组件通信

- html5 功能
    - 拖拽
    - form 表单新特性
    - 语义化标签
    - canvas
    - 本地存储 localStorage sessionStorage
    - websocket
    - web worker  多线程
    - html5 file
    - LBS Location Based Service 地理定位服务
    - WebGL  three.js 3D 小米汽车
    
    - Web worker
        - JS 因复杂任务启动 worker 线程
        - 性能优化，压缩，加密，AI...   不做DOM变编程
        - 实例化 new Worker(new URL(./worker.js, import.meta.url), {type: 'module'})
        - 消息机制完成  主线程和worker线程间的通信
           事件监听
           postMessage 发送事件



## 百度翻译
    - NLP 翻译任务 机器学习 
    - 数据驱动界面
       源语言   英文
       结果语言 中文
       待翻译文本
       翻译结果