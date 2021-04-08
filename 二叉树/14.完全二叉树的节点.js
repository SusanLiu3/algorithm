/**
 * 给你一棵 完全二叉树 的根节点 root， 求出该树的节点个数。
 完全二叉树 的定义如下： 在完全二叉树中， 除了最底层节点可能没填满外， 其余每层节点数都达到最大值， 并且最下面一层的节点都集中在该层最左边的若干位置。 若最底层为第 h 层， 则该层包含 1~2 h 个节点
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
var countNodes = function (root) {
    return count(root)
    // let res = 0
    // let queue = []
    // root && queue.push(root)
    // while (queue.length > 0) {
    //     let len = queue.length
    //     for (let i=0;i<len;i++){
    //         let node =queue.shift()
    //         res++
    //         node.left && queue.push(node.left)
    //         node.right && queue.push(node.right)
    //     }
    // }
    // return res
};
let count =function (node) {
    if (node===null){
        return 0
    }
    let leftC=count(node.left)
    let rightC=count(node.right)
    return leftC+rightC+1
}