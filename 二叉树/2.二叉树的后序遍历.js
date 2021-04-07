
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let res = []
    traversal(root, res)
    return res
};
// 确定递归参数和返回值
var traversal = function (node, res) {
    // 确定终止条件
    if (node === null) {
        return node
    }
    // 单层递归逻辑
    traversal(node.left, res)
    traversal(node.right, res)
    res.push(node.val)
}

var postorderTraversal2=function (root) {
    let res =[]
    let stack=[]
    stack.push(root)
    while (stack.length>0) {
        let temp=stack.pop()
        if (temp!=null){
            res.push(temp.val)
        }else{
            continue
        }
        stack.push(temp.left)
        stack.push(temp.right)
    }
    res.reverse()
    return res
}