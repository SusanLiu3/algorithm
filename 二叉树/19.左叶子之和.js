/**
 * 计算给定二叉树的所有左叶子之和。
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
var sumOfLeftLeaves = function (root) {
    if (!root) {
        return 0
    }
    let leftVal = sumOfLeftLeaves(root.left)
    let rightVal = sumOfLeftLeaves(root.right)
    let val = 0
    if (root.left && !root.left.left && !root.left.right) {
        val = root.left.val
    }
    return leftVal + rightVal + val
};