/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归：
 * 1、确定返回值和参数；因为是判断是否为对称二叉树，所以返回值是true或者false，要根据左右子节点
 * 来判断，所以参数是左右子节点
 * 2、终止条件
 * 3、单个递归逻辑
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root){
        return true
    }
    return symmetricProcess(root.left, root.right)
};

let symmetricProcess = function (left, right) {
    // 左右子节点为空
    if (!left && !right) {
        return true
    } else if (!(left && right)) { // 左右子节点有一个是空的 ; 
        return false
    } else if (left.val!==right.val) {// 左右节点都不为空 但是值不相等
        return false
    }
    // 左右子节点相等，进行下一步递归
    // 处理逻辑需要判断左节点的左子树和 右节点的右子树；左节点的右子树和右节点的左子树
    let flag1 = symmetricProcess(left.left, right.right)
    let flag2 = symmetricProcess(left.right, right.left)
    return flag1 && flag2

}