# 为什么会存在跨域？
 - 浏览器存在同源策略 （安全性）
 - https: // 192.168.3.0 :3000  /home   协议  域名   端口  路径

 协议-域名-端口 都相同才叫同源

 # 解决方案 
1. jsonp   
  前端借助script标签的src属性不受同源策略的限制，携带参数callback向后端发送请求，并在window全局添加callback函数体，侯丹收到请求后给前端返回一个callback调用形式的字符串，并将要返回的数据作为callback的实参，前端接收到数据后执行callback函数体，从而拿到数据。

  需要前后配合，且只能发get 请求。

2. cors
    通过在相应头添加一些额外的字段，比如 access-control-allow-origin 允许访问资源的源、允许的http请求方法，允许的请求头，来告知浏览器允许跨域请求。






3. websocket
    socket协议不受同源策略的限制。


4. postMessage

