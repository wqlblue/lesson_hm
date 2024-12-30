## 层叠上下文
  

# 页面渲染规则

- 文档流 
   body 开始从上到下,从左到右

- 布局 
  块级元素 独占一行
  行内元素 从左到右


- 盒模型 盒子(本身的大小)
  box-sizing: 
  标准盒模型 border-box;
  怪异盒模型 content-box;   
 
- 认标签 但也可转变 display;
- 块级元素 block
- 行内元素 inline  不用于做盒子  不能设置宽高，宽高由内容决定
  块级元素为何默认宽度 100%？
  html 是第一个BFC元素，body参与html的bfc
    页面显示由html负责 页面的布局  块级元素从上到下，行内元素从左到右

- display


- BFC 
 - html 是根元素，也是最顶级的BFC


- 格式上下文？ formatting context  布局规则
  - 为何弹性布局 打破了 html BFC 的规则？
     - BFC 不是某个元素的特例，弹性布局，创立了一个新的BFC
     - BFC 不是外界影响，全新的渲染区域 FFC Flex Formating Context 
       flex-direction: row|column;
  - GFC Grid Formating Context
    
 

 # BFC 
 - 独立渲染区域，不受外界影响
 - html 是最顶级的BFC
 - block level box 垂直方向，一个接一个的放置，且宽度为100%
 - 盒子垂直方向的距离由margin决定，同一个BFC的相邻盒子margin 会重叠，大的说了算
 - 每个元素的margin左边，与包含块的border相接触（从左到右）
 - BFC区域不会与 float box 重叠
 - 独立渲染区域，不受外界影响
 - 计算BFC的高度时，浮动元素也参与计算
