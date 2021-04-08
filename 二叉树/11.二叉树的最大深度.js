/**
 * 给定一个二叉树， 找出其最大深度。
 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 说明: 叶子节点是指没有子节点的节点。
 */
/**
 * 递归
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    return getDepth(root)
};

let getDepth = function (node) {
    if (node === null) {
        return 0
    }
    // 求出左右子树的深度，然后取最大值加1
    let leftDepth = getDepth(node.left)
    let rightDepth = getDepth(node.right)
    let depth = Math.max(leftDepth, rightDepth) + 1
    return depth
}
// 层序遍历
let maxDepth2 = function (root) {
    let queue = []
    if (root) {
        queue.push(root)
    }
    let depth = 0
    while (queue.length > 0) {
        let len = queue.length
        depth++
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
             node.left && queue.push(node.left)
             node.right && queue.push(node.right)
        }
    }
    return depth
}