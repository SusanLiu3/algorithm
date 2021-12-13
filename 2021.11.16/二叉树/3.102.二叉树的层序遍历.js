/**
 * 102 给你一个二叉树， 请你返回其按 层序遍历 得到的节点值。
 * （ 即逐层地， 从左到右访问所有节点）
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
var levelOrder = function (root) {
    // 层序遍历二叉树：从左到右遍历，广度优先
    // 1. 判断二叉树是否是空的
    if (!root) {
        return []
    }
    // 2. 定义一个数组模拟队列先进先出
    const queue = [],
        res = []
    const node = root
    queue.push(node)
    while (queue.length > 0) {
        const len = queue.length
        const temp = []
        // 2. 固定length 因为queue的大小在变化
        for (let i = 0; i < len; i++) {
            const q = queue.shift()
            temp.push(q.val)
            q.left && queue.push(q.left)
            q.right && queue.push(q.right)
        }
        res.push(temp)
    }
    return res
};