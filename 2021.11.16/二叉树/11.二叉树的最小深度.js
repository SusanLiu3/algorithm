/**
 * 111. 二叉树的最小深度
 * 给定一个二叉树， 找出其最小深度。
 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 说明： 叶子节点是指没有子节点的节点。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    // 最小的深度取决于左右子树都没有节点
    if (!root) {
        return 0
    }
    const queue = [root];
    let count = 0
    while (queue.length > 0) {
        count++
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            if (!node.left && !node.right) {
                return count
            }
        }
    }
    return count
};