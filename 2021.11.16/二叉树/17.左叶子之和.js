/**
 * 404. 左叶子之和: 计算给定二叉树的所有左叶子之和
 * 左叶子：左节点不为空且左节点没有左右孩子
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    if (!root) {
        return 0
    }
    let sum = 0
    // 迭代法
    const queue = [root]
    while (queue.length > 0) {
        const node = queue.pop()
        if (node.left && !node.left.left && !node.left.right) {
            sum += node.left.val
        }
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
    }
    return sum
};