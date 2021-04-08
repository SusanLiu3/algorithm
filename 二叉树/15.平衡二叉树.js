/**
 * 给定一个二叉树， 判断它是否是高度平衡的二叉树。
 本题中， 一棵高度平衡二叉树定义为：
 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
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
 * @return {boolean}
 */
var isBalanced = function (root) {
    return getDepth(root) === -1 ? false : true
};
let getDepth = function (node) {
    if (node === null) {
        return 0
    }
    // 左右子树的高度差 如果大于1 返回-1 反之  返回当前的高度
    let leftDepth = getDepth(node.left)
    if (leftDepth === -1) {
        return -1
    }
    let rightDepth = getDepth(node.right)
    if (rightDepth === -1) {
        return -1
    }
    return Math.abs(leftDepth - rightDepth) > 1 ? -1 : Math.max(leftDepth, rightDepth) + 1
}