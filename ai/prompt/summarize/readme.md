# prompt 设计模式
- LLM 开发的模式
  - 代码工程
  1. npm init -y
  2. 将dependencies：{部份拷贝过去}
     npm i
     node 后端项目的依赖

- dotenv 的理解
    - process.env对象
    - key 不能在 代码中 已明文出现
    - 项目根目录下添加 .env 文件   包含key等信息.
    - 不能提交到github.  找到gitignore 文件 添加这类文件的申明.
    - dotenv.config()  将.env读入process.env对象中.

- 了解 prompt 设计模式,开发功能需求prompt模板， AI 应用 
    - 总结模板
    
