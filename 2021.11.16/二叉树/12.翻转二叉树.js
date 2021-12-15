/**
 * 226. 翻转二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const swap = function (node) {
    const {
        right,
        left
    } = node
    node.left = right
    node.right = left
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) {
        return root
    }
    // 层序遍历 （广度优先）
    const queue = [root]
    while (queue.length > 0) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            // 翻转左右节点
            swap(node)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return root
};