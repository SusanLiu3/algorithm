/**
 * 给你两棵二叉树的根节点 p 和 q， 编写一个函数来检验这两棵树是否相同。
 如果两个树在结构上相同， 并且节点具有相同的值， 则认为它们是相同的
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    return isSame(p,q)
};

let isSame = function (left, right) {
    if (!left && !right) {
        return true
    } else if (!(left && right)) {
        return false
    } else if (left.val !== right.val) {
        return false
    }
    let flag1 = isSame(left.left, right.left)
    let flag2 = isSame(left.right, right.right)
    return flag1 && flag2
}