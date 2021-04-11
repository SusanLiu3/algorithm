/**
 * 给你一棵所有节点为非负值的二叉搜索树， 请你计算树中任意两节点的差的绝对值的最小值
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    if (root.length < 2) {
        return 0
    }
    let res = [];
    traverse(root, res)
    let min = Number.MAX_VALUE
    for (let i = 1; i < res.length; i++) {
        min = Math.min(min, Math.abs(res[i - 1], res[i]))
    }
    return min
};

let traverse = function (node, res) {
    if (!node) {
        return null
    }
    traverse(node.left)
    res.push(node.val)
    traverse(node.right)
}

var getMinimumDifference2 = function (root) {
    let stack = []
    let cur = root
    let prev = null
    let res = Number.MAX_VALUE
    while (cur || stack.length > 0) {
        if (cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            if (prev) {
                 res = Math.min(Math.abs(prev.val - cur.val), res)
            }
            res = prev
            cur = cur.right

        }
    }
}