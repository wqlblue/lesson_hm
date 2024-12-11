# h5 界面开发
- 标注好了的设计稿
- 交付的 html & css & js
- 先html结构，再写样式，最后写交互
- 文档流 盒模型 layout布局（两列）
- 适配
    移动端少用，不用px 绝对大小
    用相对单位
    相对单位  rem, em, vw, vh, % 等比例缩放

- rem
  相对单位 相对于html的font-size进行相对计算


- 750 px 设计稿
    10 rem （方便等比例）= 750 html font-size 75 px
    828px 10rem = 828px 


行内块元素（inline-block）默认的 vertical-align 是 baseline，这意味着它们的基线会与父元素的基线对齐。

文本的垂直对齐方式（vertical-align）:
是 CSS 中用于控制行内元素或表格单元格中内容的垂直位置的一个属性。它主要应用于 inline、inline-block、table-cell 等类型的元素，而不适用于块级元素（除非它们被设置为 display: table-cell）。


基线（Baseline）的概念
在排版和字体设计中，基线是指文本中字母的下边缘，通常是指小写字母的底部。在 CSS 中，基线是文本行中所有字符的默认对齐位置。具体来说：