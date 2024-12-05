// 后续遍历
function postOrder(root) {
    if (root == null) {
        return;
    }
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val);
}