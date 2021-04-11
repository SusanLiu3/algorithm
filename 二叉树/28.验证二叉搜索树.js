/**
 * 给定一个二叉树， 判断其是否是一个有效的二叉搜索树。

 假设一个二叉搜索树具有如下特征：

 节点的左子树只包含小于当前节点的数。
 节点的右子树只包含大于当前节点的数。
 所有左子树和右子树自身必须也是二叉搜索树
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
var isValidBST = function (root) {
    let stack = []
    let prev = null
    let cur = root
    while (cur || stack.length > 0) {
        if (cur) {
            stack.push(cur)
            cur = cur.left ;// 先把左节点加入
        } else {
            cur = stack.pop() // 中
            if (prev && prev.val >= cur.val) {
                return false
            }
            prev = cur
            cur = cur.right //右
        }
    }
    return true
};