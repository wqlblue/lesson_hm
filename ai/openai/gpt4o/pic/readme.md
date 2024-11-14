# 面向 Openai 接口编程

- 多模态
  - 单模态
    chatgpt 文本
  - 图片、视频、音频


- npm init -y 后端项目初始化
  npm i openai  openai sdk  （software development kit）

  - npm config set registry https://registry.npmmirror.com
   设置了npm的源 ， npm国外的 ， 慢， 阿里国内做了npm的镜像 ， 加速
  - 时间 占用空间
     npm i -g openai 
     npm i -g pnpm
     哪里去了，命令行直接调用  环境变量 ？ 污染全局
  - 既不重复安装，也不会污染全局，符号链接取指向之前的安装
    快了，省空间  pnpm


  - main.mjs  主入口，单点入口的职责
    mjs es6 module 模块  支持es6的语法 支持ES模块语法



  - 调试能力
    console.log(result)  深 查看他的json结构

    

  - 理解参数
    gpt4o 多模态读图能力
       - 文本指令
       - 图片地址
    
  - try catch
    容错

  - key不能提交到github上，  环境变量  安全
    资产的安全风险