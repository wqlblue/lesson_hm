// 先序遍历
// 递归？
// 函数直接或间接调用
// - 推出条件  root == null
// - 递归公式  顶端 自顶向下    
//  整棵树先序遍历  自己先出来 左子树完成了先序遍历  右子树完成了先序遍历
function preOrder(root) {
    // 推出条件
    // 不仅是判断它是孔数，还是判断它的叶子节点是不是空树
    if (root == null) {
        return;
    }
    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
}

export { preOrder };


