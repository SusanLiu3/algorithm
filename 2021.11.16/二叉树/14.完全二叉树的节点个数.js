/**
 * 222. 完全二叉树的节点个数
 * 给出一个完全二叉树， 求出该树的节点个数
 */
const getNodesNum = function (node) {
    // 1. 递归参数和返回值：参数 node  返回值 数值
    // 2. 确定递归终止条件
    if (!node) {
        return 0
    }
    // 3. 单层递归逻辑 左子树 + 右子树 + 1
    const leftNum = getNodesNum(node.left)
    const rightNum = getNodesNum(node.right)
    return leftNum + rightNum + 1
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
    // return getNodesNum(root)
     if (!root) {
         return 0
     }
     const queue = [root]
     let res = 0
     while (queue.length > 0) {
         const len = queue.length
         for (let i = 0; i < len; i++) {
             const node = queue.shift()
             res++
             node.left && queue.push(node.left)
             node.right && queue.push(node.right)
         }
     }
     return res
};