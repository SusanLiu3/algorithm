/**
 * 给定一个二叉树， 在树的最后一行找到最左边的值
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
 * 层序遍历
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    let queue = []
    root && queue.push(root)
    let res = 0
    while (queue.length > 0) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            if (i === 0) {
                res = node.val
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return res
};