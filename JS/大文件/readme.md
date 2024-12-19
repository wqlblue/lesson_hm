# 大文件上传


- 为什么File.slice() 方法返回的是一个Blob对象？
    在 JavaScript 中，File对象实际上是Blob对象的一个子类。Blob（Binary Large Object）代表二进制大对象，它是一个不可变的、原始数据的类文件对象。File对象继承了Blob对象的属性和方法，并且添加了一些与文件相关的特定属性，如name（文件名）、lastModified（最后修改日期）等。
    因为File对象本质上是一种特殊的Blob对象，所以File对象的slice方法返回Blob对象是很自然的继承行为。slice方法的目的是提取原始File或Blob对象中的一部分数据，返回的数据自然也应该是与原始数据类型兼容的，即Blob类型。



- 前端:
   1. 读取本地文件，读成一个文件对象
   2. 使用slice对文件对象进行切割，并得到Blob类型的文件对象
   3. 将Blob类型的文件对象转成 FromData 表单类型的对象
   4. 将切片一个一个发送给后端


- 后端：

当你调用 http.createServer() 时，实际上是在创建一个能够接收 HTTP 请求的服务器对象。这个服务器对象会监听特定端口（例如 3000），等待来自客户端的 HTTP 请求。


multer 和 multiparty 是两个常用的 Node.js 库，用于处理文件上传。它们都支持解析 multipart/form-data 编码的请求体，这种编码格式通常用于表单提交中的文件上传。
multipart/form-data 是一种 HTTP 请求体的编码格式，

- packge.lock.json   和 package.json的区别
package.json 是项目的配置文件,它就像是一个项目的 “身份证” 和 “购物清单”。
而 package-lock.json 是一个锁定文件,这个文件更像是一个非常详细的 “购物小票”。
package - lock.json就会把这个 1.4.2 版本号以及从哪个网址下载的这些详细信息都记录下来。以后不管谁来安装这个项目的依赖，都会安装这个 1.4.2 版本的axios，而不是其他的 1.4.x 版本。这样就保证了项目依赖的稳定性和一致性。
