/**
 * 给定一个 N 叉树， 返回其节点值的层序遍历。（ 即从左到右， 逐层遍历）。
 树的序列化输入是用层序遍历， 每组子节点都由 null 值分隔（ 参见示例）
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = []
    let queue = []
    if (root) {
        queue.push(root)
    }
    while (queue.length > 0) {
        let len = queue.length
        let temp = []
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            temp.push(node.val)
            for (let j = 0; j < node.children; j++) {
                queue.push(node.children[j])
            }
        }
        res.push(temp)
    }
    return res
};