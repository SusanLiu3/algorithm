/**
 * 515. 在每个树行中找最大值
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
var largestValues = function (root) {
    if (!root) {
        return []
    }
    const res = [],
        queue = []
    queue.push(root)
    while (queue.length > 0) {
        const len = queue.length
        let max = queue[0].val;
        for (let i = 0; i < len; i++) {
            const q = queue.shift()
            max = q.val > max ? q.val : max // 比较最大值
            q.left && queue.push(q.left)
            q.right && queue.push(q.right)
        }
        max !== Number.MIN_VALUE && res.push(max) // 收集最大值
    }
    return res
};