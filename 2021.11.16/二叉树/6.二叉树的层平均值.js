/**
 * 637. 二叉树的层平均值
 * 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    if (!root) {
        return []
    }
    const res = [],
        queue = []
    queue.push(root)
    while (queue.length > 0) {
        let temp = 0,
            len = queue.length
        for (let i = 0; i < len; i++) {
            const q = queue.shift()
            temp += q.val
            q.left && queue.push(q.left)
            q.right && queue.push(q.right)
        }
        res.push(temp / len)
    }
    return res
};