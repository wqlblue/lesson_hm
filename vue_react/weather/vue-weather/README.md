# 开发weather

- 组件思维
- 且页面
   - 先写template {{占位数据}}
   - html5 语义化 
   - BFC  基本概念
     Block Formatting Context 块级格式化上下文
     - 浮动 float 用来实现两（多）列式布局的方式
        float left right 左右
     - 产生问题
        - 子元素离开了文档流  父元素高度塌陷
        - 后面的元素挤占nav的空间

     - 和position的区别，四个方向上的定位  完全离开文档流
     - BFC 内部的元素不会与外部的浮动元素相互干扰。也就是说，BFC 内部的内容会自动避开浮动元素，确保它们不会重叠。


     - overflow：auto 等 display:flex  给nav元素开启了一个BFC
       - 规则,BFC元素可以得到内部浮动元素的高度
       - 块级元素不等于BFC  