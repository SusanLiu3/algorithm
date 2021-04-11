/**
 * 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    // 
    if (postorder.length===0){
        return null
    }
    let root = postorder[postorder.length - 1]
    let node =new TreeNode(root,null,null)
    if (postorder.length===1){
        return node
    }
    // 
    let idx =0
    for(let i=0;i<inorder.length;i++){
        if (inorder[i]===root){
            idx=i
            break
        }
    }
    
    node.left = buildTree(inorder.slice(0, idx), postorder.slice(0, idx))
    node.right = buildTree(inorder.slice(idx+1), postorder.slice(idx,postorder.length-1))
    return node
};