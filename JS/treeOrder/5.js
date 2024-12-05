class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

function levelOrderTraversal(root) {
    if (root === null) {
        return [];
    }
    const result = [];
    //  根节点入队 
    //  借组队列 先进先出 FIFO 栈 后进先出 LIFO
    const queue = [root];
    while (queue.length) {
        const currentNode = queue.shift();
        result.push(currentNode.val);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    return result;
}
console.log(levelOrderTraversal(root));