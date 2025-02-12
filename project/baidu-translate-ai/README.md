- 端模型要来了，小一点但是性能还行

- Transformers.js 前端AI库
    来自全球最大AI社区 huggingFace(LLM开源社区)
- AI是技术趋势，拥抱AI
- AIGC现在已经很成熟，生成代码，快速学习
- coze agent开发，也调用过接口完成项目中的AI应用
- 了解OpenAI 等LLM接口，完成过文生图，语义搜索等
- AI带来了全新的开发体验，前端工程师需要实施AI应用用户体验
- AI端模型能力是一个风口，我了解 transformer.js
        - prompt engineer
           - 角色 role
           - 清晰描述
           - 分步，交给多个工作流
           - 可以做什么 不做什么
           - 给大模型一些思考时间
        - btn disabled 思考过程禁用掉

- AI端模型能力是一个风口，我了解transformer.js


- React学的怎么样
    了解语法，写过一个ai项目，一周内能上手
- React组件？**与vue对比**
    返回 jsx 的函数就是组件 .jsx ||  vue 是template、script、style三段式
    函数就是对象
    React（函数式组件）/Vue setup --面向数据流的响应式编程
    - MVVM（函数）+ 组件化思想 + 函数式编程
    - vue 优势是API简洁好上手 setup语法糖
    - react 优势是纯JS风格
    - react<></>
        做容器 又没有多加节点
        但是又不用div等
        文档碎片组件 Fragment组件


- 请你介绍react 的hook 函数
    react 在hook 上很激进，vue借助了hook思想
    - useState 引入一个响应式的状态(ref)
        参数是默认值，返回是数组，第一个是状态，第二个是更新状态的函数
    - useRef 
        vue 中ref 动态绑定节点对象/对象
        useRef  null -> current
        要快速显示组件优先，所以web worker的实例化推迟 useRef 动态绑定
        worker对象
        - worker 组件函数内局部变量 null 访问问题
        - useEffect 实例化 性能问题
        - 任何地方都可以访问
        - 卸载时回收这个对象
    - useEffect
        生命周期钩子函数
        - onMouted
        - onUnmounted   return()=>{   卸载功能}
        - onUpdated

- Web Worker
        - JS 因复杂任务而启动worker 线程
        - 性能优化，压缩，加密，AI... 不做 DOM 编程
        - 实例化 new Worker(new URL('./worker.js'),{type:'module'})
        - 消息机制完成 主线程和worker线程间的通信
                事件监听
                postMessage 发送事件
        - 为了让前端性能更好，不对event loop 进行干扰

- Transformers.js
        - import from 从cdn 加载nlp js 库
        - pipeline('sentiment-analysis') pipe()  功能函数
                - 下载大模型
        - pipe(text) 拿到结果
                - postMessage


- 数据通信
    - 状态管理 pinia redux
    - 父子组件通信

- html5 功能
   - 拖拽
   - form 表单新特性
   - 语义化标签
   - canvas audio
   - 本地存储 localStorage sessionStorage
   - web socket
   - html5 file
   - web worker 多线程
   - LBS 附近的位置
   - WebGL three.js 3D 小米汽车


**React vs Vue**
不同点：
- 1. React 更多地采用了函数式编程的思想，而 Vue 则融合了面向数据流的响应式编程和一些命令式编程的特点。（这种模式称为数据驱动）
- 2. 模板系统:
        -- React: 使用JSX语法，将HTML和JavaScript混合，直接在组件中书写带有JS逻辑的HTML。
        -- Vue: 使用模板语法，可以单独编写HTML模板，也可以在组件中使用模板字符串。
- 3. 状态管理:
        -- React: 推荐使用Redux或Context API进行状态管理，尤其是Redux在社区中非常流行。
        -- Vue: 内置了Vuex作为状态管理库，更加集成和易于使用。
- 4. 组件通信:
        -- React: 主要依赖于props和回调（children作为函数），或者使用Context和Redux进行跨组件通信。
        -- Vue: 提供了props和$emit，还有自定义事件总线（Event Bus）和Vuex，通信方式更为多样化。
- 5. API风格:
        -- React: 使用Hooks和函数组件，推崇函数式编程和组合式编程。
        -- Vue: 传统上使用基于选项的API（Options API），Vue 3引入了Composition API，与React的Hooks风格相似。
- 6. 社区和生态系统:
        -- React: 拥有庞大的社区和丰富的生态系统，包括React Native等跨平台解决方案。
        -- Vue: 社区也在快速增长，拥有广泛的插件和库，但相对于React可能稍小一些。
- 7. 学习曲线:
        -- React: 学习曲线相对较高，尤其是对于新手，因为需要理解JSX、虚拟DOM和函数组件等概念。
        -- Vue: 学习曲线较为平缓，对于初学者更友好，API更加直观。
相同点
- 1. 组件化
- 2. 响应式
- 3. 虚拟DOM
- 4. 社区支持-- 都有活跃的社区和丰富的第三方库





## 百度翻译
    - NLP 翻译任务  机器学习
    - 数据驱动界面
        源语言  英文
        结果语言    中文
        待翻译文本
        翻译结果

- es6 + 介绍
        - 阮一峰
        - 2015
        - 代码简洁
        - 空值合并运算符  es2020
        - 我在开发AI项目的Progress 组件时
        - persentage = persentage ?? 0    不为空取本身，为空取右边
        
        - 大型项目
                class extend 块级作用域...
        - 使用es6 class 封装了 MyTranslationPipeline 类
            - 复杂的留给自己
            - 简单给别人调用     

- 设计模式
        - 单例模式
           - pipeline 实例化时候，只需要实例一次 下载大模型还有实例化特别耗性能
           
- Transformers.js
        - import from 从cdn 加载 nlp js 库

