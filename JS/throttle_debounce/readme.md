- 认识几个url
  url的设计模式 restful api 资源api
  网站是用来暴露资源的 如何将资源暴露出去 
  - http://localhost:3001/posts/ 列表页的链接
  - http://localhost:3001/posts/:id  id 查询参数  详情页的链接
  - http://localhost:3001/users/id   用户主页链接

- 数据的查询  Read 
- 访问资源的方式
  - apiFox 是啥？  web 请求代理
    Get http://localhost:3001/posts/1 
    Patch http://localhost:3001/posts/1 
  - 资源 db.json  users posts
  - HTTP 协议
    - Method(动作 GET | PATCH 修改| POST 新增  ) + url (资源) =  请求行
    - 请求头 Cookie   Content-Type：application/json  text/json  前者正式的标准
    - 请求体 
- json-server
    - http 服务
    - db.json可以作为数据资源向外提供访问的接口 CRUD  

- 会设计restful api 接口
    - 需求
      - 新增一篇文章
      http://localhost:3000/posts  POST  请求行
      {
        。。。
      }

    - 删除 文章2
      URL_ADDRESS      http://localhost:3000/posts/2  DELETE  请求行
    
- json-server  支持restful api 设计的服务器


- 全栈防抖
  - 前后端 分离 解耦
  前端 live-server  5500 端口
  fetch url
  后端 json-server 3000 端口



- filter,map
  - 都是Array.prototype 上的方法, 所有的数组都有
  - filter 数组过滤  回调函数返回值是否为 true  
  - map 数组映射  回调函数返回值 组成新的数组  原有数组不能满足需求
  - foreach 迭代每一项   不需要返回


- 防抖 
  - 将要执行的函数交给deboucne()高阶函数去优化
  - 减少执行次数,只执行连续输入的最后一次
  - 定时器 本次关掉上一次的定时器