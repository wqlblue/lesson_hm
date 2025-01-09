# 跨域

- 运行环境
  - 浏览器原生并不支持 CommonJS 模块系统，
  - 前端 
     v8 引擎 在浏览器
  - 后端
     node 封装了v8,剥离了html, 借助 c++ 调用系统服务
     http 模块就是node 实现的
-  为什么node有模块化需求？
   - 引入各种模块
   - 后端功能复杂
   - mvc model 连数据库
     view 页面
     controller 控制 参数校验，逻辑等
- require - > es6 module


-  对于一些复杂的跨域请求（如使用了自定义头部或者非简单HTTP方法的请求），
    浏览器首先会发送一个“预检”请求（OPTIONS方法），询问服务器是否允许该跨域
    请求。服务器需要在对此预检请求的响应中包含必要的CORS头部信息。如果服务器
    同意，则浏览器将发出实际请求；如果不同意，则阻止实际请求的发生。

- 为何要学node ?
  - 后端开发
  - 大前端
- jsonp
  “JSON with Padding”的名字来源于这一技术的具体实现方式：将JSON数据“填充”到一个函数调用中，以便通过<script> 标签跨域加载数据。这种方法利用了HTML <script> 标签不受同源策略限制的特点，从而实现了跨域资源共享的目的。

  document.body.appendChild(script);
  此操作将<script>标签插入到文档的<body>中，触发浏览器加载script.src指定的资源。由于这里的src指向的是一个外部资源（即http://localhost:3000?callback=...），所以这相当于向该URL发送了一个GET请求。



- CORS policy
  - 安全策略
  - baidu (domain) -> google (不受信任度) 不同的域名
  - https://127.0.0.1:5500/ js script 所在的域名
    - http://127.0.0.1:3000
    仍然被block

- 保护谁？
  - 后端，制定规则
    目前没有block 
  - 前端 
    JS 限制跨域请求
    JS dom 修改页面的 跨域内容受限制

- Cross Origin Resource Sharing
  - Origin  >  Domain + Port + Protocol

## 前后端分离
- vue 开发前端
- node/java 开发后端
  - 开发日常 跨域是家常便饭

- 换条路走
  - script + src 
    - 不受CORS限制
  - http 请求 将后端api 接口资源拿到
    - src = api url
  -json 给我

- script 阻塞式加载并执行
- jsonp
  json with padding(函数)
  - 前端需要script 标签 src 执行 api url 
  - 页面上埋下一个全局方法 window.callback
  - 需要后端的配合 数据外面包 函数
- 封装一个jsonp 函数
  - url + callback 
  - dom script 挂载 和window[callback] = callback
