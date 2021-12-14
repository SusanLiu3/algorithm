/**
 * 429. N叉树的层序遍历
 * 给定一个 N 叉树， 返回其节点值的层序遍历。(即从左到右， 逐层遍历)
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return []
    }
    // 1. 声明一个结果变量和一个队列
    const res = [],
        queue = []
    // 2.  将根节点添加到root中
    queue.push(root)
    // 3. 遍历
    while (queue.length > 0) {
        const len = queue.length;
        const temp = []
        for (let i = 0; i < len; i++) {
            const q = queue.shift()
            temp.push(q.val)
            for (let j = 0; j < q.children.length; j++) {
                queue.push(q.children[j])
            }
        }
        res.push(temp)
    }
    return res
};