# 星球大战
 
 - <!DOCTYPE html> 它告诉浏览器使用的是 HTML5 标准来解析页面。
 - <html lang="en">  它告诉浏览器页面的语言是英文。


- *
 css 通配符, 匹配所有元素
 margin: 0 padding: 0 所有元素就初始化一致
 由于有不同的浏览器的浏览器厂商，默认值不一样 所以初始化
 需要在页面样式开始之前，做一个样式reset  任何浏览器访问我们的页面，我们的页面都是一张白纸
 在所有浏览器上体验一致
 
 * 性能不太好，所以我们宁愿列出来所有的标签


- 居中
  - 绝对定位 position: absolute;
    - 百分比相对于包含块
  - transform 变基属性
    - translate 移动
    x 左移 负 右移 正
    y 上移 负 下移 正
 
- css 动画
 - animation
 - keyframes
 - tramsform scale translateY
 - 飞船模拟动画，逼真
 - 1% 时间差， 画龙点睛
 - transform-style: preserve-3d; 
   perspective: 800px; 

- inline元素不支持transform,所以讲display属性设置为inline-block;