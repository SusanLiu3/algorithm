/**
 * 257. 二叉树的所有路径
 * 给定一个二叉树， 返回所有从根节点到叶子节点的路径
 */
/**
 * 1. 确定参数：当前节点，path 存放路径 res 存放结果
 * 2. 递归终止条件：当前node不为空，但是左右子节点为空
 * 3. 单层递归逻辑：
 */
const traversal = function (node, path, res) {
    path.push(node.val)
    if (node && !node.left && !node.right) {
        // 当前path 需要添加到res中
        res.push(path.join('->'))
        return
    }
    if (node.left) {
        traversal(node.left, path, res)
        // 回溯
        path.pop()
    }
    if (node.right) {
        traversal(node.right, path, res)
        path.pop()
    }
}
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const res = []
    const path = []
    if (!root) {
        return res
    }
    traversal(root, path, res)
    return res
};