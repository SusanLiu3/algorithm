/**
 * 给定两个非空二叉树 s 和 t， 检验 s 中是否包含和 t 具有相同结构和节点值的子树。 s 的一个子树包括 s 的一个节点和这个节点的所有子孙。
 *  s 也可以看做它自身的一棵子树。
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
    if (!s) {
        return false
    }
    return isEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
};

let isEqual = function (left, right) {
    if (!left && !right) {
        return true
    } else if (!(left && right)) {
        return false
    } else if (left.val !== right.val) {
        return false
    }
    let flag1 = isEqual(left.left, right.left)
    let flag2 = isEqual(left.right, right.right)
    return flag1 && flag2
}