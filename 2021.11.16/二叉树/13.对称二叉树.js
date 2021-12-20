/**
 * 101. 对称二叉树
 * 给定一个二叉树， 检查它是否是镜像对称的
 */
const compare = function (left, right) {
    // 递归法判断是否为对称二叉树
    // 1. 确定递归的参数和返回值 参数 左子树和右子树  返回值：true或者false
    // 2. 确定递归的终止条件: 左节点和右节点为空  左节点为空 右节点不为空  右节点为空 左节点不为空 左右子节点不为空不相等

    if (!left && right) {
        return false
    } else if (left && !right) {
        return false
    } else if (left && right && left.val !== right.val) {
        return false
    } else if (!left && !right) {
        return true
    }
    // 3. 确定递归的单层逻辑：左右节点都不为空且相等
    const leftFLag = compare(left.left, right.right)
    const rightFlag = compare(left.right, right.left)
    return leftFLag && rightFlag
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    // 1. 判断一颗二叉树是否对称，主要判断其左子树和右子树是否反转
    if (!root) {
        return true
    }
    return compare(root.left, root.right)
};