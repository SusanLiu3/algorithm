/**
 * 给定一个二叉树和一个目标和， 判断该树中是否存在根节点到叶子节点的路径， 这条路径上所有节点值相加等于目标和。
 说明: 叶子节点是指没有子节点的节点。
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
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
   if (!root){
       return false
   }
   return hasPathProcess(root,targetSum-root.val)
};

function hasPathProcess(node, targetSum) {
    // 终止条件
    if (!node.left && !node.right && targetSum === 0) {
        return true
    }
    if (!node.left && !node.right) {
        return false
    }
    if (node.left) {
        targetSum = targetSum - node.left.val
        let flag = hasPathProcess(node.left, targetSum)
        if (flag) {
            return true
        }
        targetSum += node.left.val
    }
    if (node.right) {
        targetSum = targetSum - node.right.val
        let flag = hasPathProcess(node.right, targetSum)
        if (flag) {
            return flag
        }
        targetSum += node.right.val
    }
    return false
}