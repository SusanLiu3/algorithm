/**
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) {
        return null
    }
    let root = preorder[0]
    let node = new TreeNode(root)
    if (preorder.length === 1) {
        return node
    }
    let idx = inorder.indexOf(root)
    if(idx===0){
        return null
    }
    let inList =  inorder.slice(0, idx) 
    // 中序遍历 第一个数，也就是左子树最下面的元素
   let leftVal = inList[0];
    // 最后一个数在前序遍历位置
    let leftIdx = preorder.indexOf(leftVal)
    node.left = buildTree(preorder.slice(1, leftIdx + 1), inList)
    node.right = buildTree(preorder.slice(leftIdx + 1), inorder.slice(idx + 1))
    return node
};