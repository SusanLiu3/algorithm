/**
 * 给定一个二叉树， 找出其最小深度。
 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 说明: 叶子节点是指没有子节点的节点。 左右孩子都为空的节点才是叶子节点
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
 * @return {number}
 */
var minDepth = function (root) {
    let queue = []
    let count = 0
    root && queue.push(root)
    while (queue.length > 0) {
        let len = queue.length
        count++
        let flag=false
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            if (!node.left&&!node.right){ // 当这个节点无左右子节点时，说明是最底层
                flag=true // 退出for循环
                break
            }
        }
        if(flag){
            break // 退出while
        }
    }
    return count
};