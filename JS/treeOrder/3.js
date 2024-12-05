//中序遍历

function inOrder(root) {
    if (root == null) {
        return;
    }
    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
}