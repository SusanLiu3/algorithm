/**
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum， 
 * 找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。叶子节点 是指没有子节点的节点
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    if (!root) {
        return []
    }
     let res = []
     let path = [root.val]
     pathProcess(root, targetSum - root.val, path, res)
     return res
};

let pathProcess = function (node, targetSum, path, res) {
    // 递归终止条件
    if (!node.left && !node.right && targetSum === 0) {
        res.push(JSON.parse(JSON.stringify(path)))
        return
    }
    if (!node.left && !node.right) {
        return
    }
    if (node.left) {
        path.push(node.left.val)
        targetSum -= node.left.val
        pathProcess(node.left, targetSum, path, res)
        // 回溯
        path.pop()
        targetSum += node.left.val
    }
    if (node.right) {
        path.push(node.right.val)
        targetSum -= node.right.val
        pathProcess(node.right, targetSum, path, res)
        // 回溯
        path.pop()
        targetSum += node.right.val
    }
    return res
}