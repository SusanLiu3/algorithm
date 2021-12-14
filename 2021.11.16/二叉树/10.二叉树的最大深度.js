/**
 * 104. 二叉树的最大深度
 * 给定一个二叉树， 找出其最大深度。
   二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
   说明: 叶子节点是指没有子节点的节点。
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
var maxDepth = function (root) {
    if (!root) {
        return 0
    }
    let depth = 0
    const queue = [root]
    while (queue.length > 0) {
        const len = queue.length
        depth++
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return depth
};