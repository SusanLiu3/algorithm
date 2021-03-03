/**
 * 输入一棵二叉树的根结点， 求该树的深度。 
 * 从根结点到叶结点依次经过的结点（ 含根、 叶结点） 形成树的一条路径， 最长路径的长度为树的深度
 */
/**
 * 如果一棵树，只有一个节点，那么深度为1
 * 如果一棵树，只有左侧子节点，那么深度是左侧子节点的深度+1
 * 如果一棵树，只有右侧子节点，那么深度是右侧子节点深度 +1
 * 如果一棵树，有左右子节点，那么深度是左右子节点深度的最大值+1
 * @param {根节点} root 
 */
function treeDepth(root) {
    if (root === null) {
        return 0
    }
    let left = treeDepth(root.left)
    let right = treeDepth(root.right)
    return left > right ? left + 1 : right + 1
}