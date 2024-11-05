# 说说你对css盒子模型的理解

1. 是什么？
当浏览器渲染一个HTML，会根据某一个标准绘制出一个矩形，该矩形包含content,padding,margin,border

2. 有哪些盒模型
 - 标准盒模型： width = content
               总宽度：width+padding+border+margin
 - IE盒模型: width =content +padding +border
               总宽度： width+margin
3. 切换
   box-sizing : border-box || content-box


# 说说css中的选择器有哪些？优先级是什么样的？
1. id
2. class
3. 标签
4. 后代选择器
5. 子集选择器
6. 兄弟选择器
7. 群组选择器
8. 伪类选择器
9. 伪元素选择器
10. 属性选择器

important>内联>ID>CLASS>后代，子集，兄弟>标签

# 说说em,px,rem,vw,vh的区别
 -是什么：都是css中的单位，这些单位灵活使用可用于做不同的适配

 # css中有哪些隐藏容器的方式 ？区别是什么？

 1. display:none ;   无文档流,无法绑定事件
 2. visibility: hidden;  无文档流,无法绑定事件
 3. opacity: 0;         有文档流,可以绑定事件
 4. width；0 height: 0;  无文档流,无法绑定事件
 5. clip-path ;       有文档流，无法绑定事件


# 清除浮动
    1. 在浮动元素的最后面添加一个空容器，在它身上clear:both
    2. 在父容器的伪元素after 上做清除浮动
    3. bfc


 # 谈谈你对BFC的理解
 Block-formating-context
 
 -bfc

 - 规则
   1.bfc容器中的子元素依然是按照正常容器的渲染规则


 - 触发条件：
 1. overflow : hidden || auto || scroll 
