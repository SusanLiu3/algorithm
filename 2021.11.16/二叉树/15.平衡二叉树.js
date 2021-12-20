/**
 * 110 给定一个二叉树， 判断它是否是高度平衡的二叉树
 * 一棵高度平衡二叉树定义为： 
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const getHeight = function (node) {
    // 1. 确定参数和返回值 ： 参数 node  返回值
    // 2. 确定递归终止条件： node 为null
    if (!node) {
        return 0
    }
    // 3. 确定单层递归逻辑
    // 3.1 左子树的高度
    const leftH = getHeight(node.left)
    const rightH = getHeight(node.right)
    // 左子树的高度差大于1  不是平衡二叉树
    if (leftH === -1) {
        return -1
    }
    // 右子树的高度差大于1
    if (rightH === -1) {
        return -1
    }
    // 
    if (Math.abs(leftH - rightH) > 1) {
        return -1
    } else {
        return 1 + Math.max(leftH, rightH)
    }
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    return getHeight(root) === -1 ? false : true
};