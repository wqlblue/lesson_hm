# 前端存储考点

## 存储在浏览器里

- localStorage
- cookie
    - 登入
    - 存储在浏览器中的一段字符串 key=value;expires;path=/;
        domain 会自动设置
        
    - 字符串
       key=value
    - cookie 属于相应的domain
        document.cookie 种下一个cookie domain 
        name value path domain expires...
    - CookieManager 类
        - getCookie
        - setCookie
        - RemoveCookie
- 日期对象
    - [Object Date]
    - 日期操作
        new Date()
    - gettime()  格林尼治毫秒数 
    - settime( 24*3600*1000)     
    - cookies expire 面试的穷追猛打
        - 生命期（用户身份），到期后推出
        - 退出功能  deleteCookie("name") -1

- path  /   全网通用   /a/b/c
- cookie 是什么 
    - 某域名，存储在浏览器空间中的一段字符串，格式为 key=value;expires;path=/;

    - 一直都在，除非过期

- cookie 和 localStorage 区别
    - cookie 是 字符串，localStorage 是 对象(getItem,setItem)
    - cookie 空间小 存储小 关键数据   4kb为单位
        - 每次http请求都会带上 弥补http无状态
        - 因为每次http请求都会带上cookie，会影响性能,所以要克制，不然会影响http的性能
    - localStorage 空间大 存储大  5mb为单位
    - 不同的应用场景
        - cookie 存储用户身份等
        - localStorage 存储用户数据 掘金首页文章列表 离线访问