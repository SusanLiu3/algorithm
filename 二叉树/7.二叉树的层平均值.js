/**
 * 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    let res = []
    let queue = []
    if (root) {
        queue.push(root)
    }
    while (queue.length > 0) {
        let count = 0;
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            count += node.val
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(count / len)
    }
    return res
};