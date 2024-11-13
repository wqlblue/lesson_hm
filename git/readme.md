- git 有哪些命令？
  分布式版本控制软件，多人协作，记录修改
  写项目？ 电脑坏了  保存代码的版本且安全
  git 帮我们在本地 管理代码版本  远程仓库（分布式）
   - git init  初始化
   - git add .  把代码体提交到暂存区
   - git commit -m "注释"  把代码提交到本地仓库区
   - git push origin main 把代码提交到远程仓库区


   - git branch 查看分支
   - git checkout -b 分支名  创建分支并切换到分支
   - git merge 合并分支


##  大厂需要的git能力？
 - git是必备技能
 - 高级技巧，考点
 - git文档内置
   git help 常见的git 命令
   git 编辑器  :j   :k上下翻页 :q   退出
   git help add 深入了解某个命令
   你是如何了解git命令的参数和作用的？


## 代码仓库
 文件夹 -> 开发目录(网站)-> 代码仓库（）
  - 好处
    项目代码的版本（version） git关注的是代码的版本 
    时光穿梭机  文件的任意一个版本  有时候我们要回退过去
  - git 仓库里存的是啥？
    文件？ 文件的版本
   .git 目录 就是 仓库 
   git 相关的内容就放在.git目录里


  - git config 配置 操作留下了责任人，多人协作的思想 
    老板就知道谁提交的代码？
    git config --global user.name "xxx"
    git config --global user.email "EMAIL" 本地 远程 比对
    配置， --global 全局 


  - git status 
    当前仓库的状态
    on branch main 主分支上 默认分支

    untracked files  未跟踪的文件 还没纳入版本管理
    use commit 纳入 版本管理  提交到仓库区
  
  添加到仓库是比较严谨的事情，添加的是当前文件的版本
  - git add files
   将文件的当前版本 先添加到 暂存区
   git status 查看状态
  
  
  - 为什么需要暂存区，仓库 两个概念 
   - 后悔药
   - 分几次 add ,然后一次性commit.
     进货 ，辆买菜车  (git add 多次)   买完了(git commit  一次)  


  - git status 
    让我们了解当前仓库的状态，摸鱼后还能人家清醒


  - git log 
    代码提交记录
    --oneline  单行显示



  - 暂存区 仓库 
    - 一次性多个文件夹加入暂存区，后悔药，组成一个提交逻辑（任务）
    - 一次 commit -m 要规范讲清楚任务
    - 不要随便提交 commit,围绕开发需求
      一般一个上午会有 2-5 次 commit
    - 