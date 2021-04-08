/**
 * 给定一个二叉树， 返回所有从根节点到叶子节点的路径。
 说明: 叶子节点是指没有子节点的节点
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let res = []
    let path = []
    treePath(root, path, res)
    return res
};
// 前序遍历 加回溯  回溯和递归是--对应，哟一个递归就有一个回溯
let treePath = function (node, path, result) {
    path.push(node.val)
    // 终止条件 叶子节点
    if (!node.left && !node.right) {
        // 处理逻辑
        result.push(path.join('->'))
        return
    }
    if (node.left) {
        treePath(node.left, path, result)
        path.pop() // 回溯
    }
    if (node.right) {
        treePath(node.right, path, result)
        path.pop() // 回溯
    }
}