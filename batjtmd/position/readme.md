<!-- . static（默认值）
描述: 元素按照正常的文档流进行布局，不会受到 top、bottom、left 和 right 属性的影响。
示例:
css
深色版本
.element {
  position: static;
}
2. relative
描述: 元素相对于其正常位置进行定位。使用 top、bottom、left 和 right 属性可以调整元素的位置，但不会影响其他元素的位置。
示例:
css
深色版本
.element {
  position: relative;
  top: 10px;
  left: 20px;
}
3. absolute
描述: 元素相对于最近的非 static 定位的祖先元素进行定位。如果没有任何非 static 定位的祖先元素，则相对于初始包含块（通常是 <html> 元素）进行定位。
示例:
css
深色版本
.parent {
  position: relative; /* 确保子元素可以相对于它进行绝对定位 */
}

.child {
  position: absolute;
  top: 10px;
  left: 20px;
}
4. fixed
描述: 元素相对于视口（浏览器窗口）进行定位，即使页面滚动也不会改变位置。
示例:
css
深色版本
.element {
  position: fixed;
  top: 10px;
  right: 20px;
}
5. sticky
描述: 元素根据用户的滚动位置进行定位。当元素的位置达到某个阈值时，它会“粘”在某个位置（类似于 fixed），直到离开该阈值。
示例:
css
深色版本
.element {
  position: sticky;
  top: 0; /* 当元素的顶部到达视口顶部时，它会固定在那里 */
} -->

# 百度面试题之定位

## 文档（document）流()   默认布局方式 当元素按照文档流进行布局时，它们会按照源代码中的顺序依次排列，从上到下，从左到右。
- document html 文档
 网页的结构
 页面绘制的本质  像素绘制的


- 按文档流先绘制 #box1
   盒子的顺序 文档流
   精确计算盒子的大小 =  内容的大小 + padding + border + margin
   盒子的位置  在原来的位置上给 margin 间距 ，给位置定位


## postition 的属性和原理
文档流 有什么关系？
  - relative  相对定位
     - 相对默认的位置 移动 left top...
     - 盒子原来的占位 （文档流中的位置） 不受影响
  - absolute  绝对定位
    - 绝对定位会离开文档流  不占据原来的位置
    - 找到最近的 非static 定位的祖先元素  进行定位  （如果没有 祖先元素  则相对于 初始包含块 进行定位）
 # 包含块
 在 CSS 中，包含块（containing block）是一个重要的概念，它决定了一个元素的定位和尺寸计算的参考点。

