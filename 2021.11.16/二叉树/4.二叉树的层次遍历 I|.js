/**
 * 107 给定一个二叉树， 返回其节点值自底向上的层次遍历。
 * （ 即按从叶子节点所在层到根节点所在的层， 逐层从左向右遍历
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    // 可以按照层序遍历来，然后将结果反转即可
    if (!root) {
        return []
    }
    const res = [],
        queue = []
    const node = root
    queue.push(node)
    while (queue.length > 0) {
        const temp = []
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const q = queue.shift()
            temp.push(q.val) // 将当前值推进临时数组
            q.left && queue.push(q.left)
            q.right && queue.push(q.right)
        }
        res.unshift(temp)
    }
    return res
};