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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    invert(root)
    return root
};
let invert = function (node) {
    if (node === null) {
        return
    }
    // 处理逻辑
    let left = node.left
    let right = node.right
    node.left = right
    node.right = left
    invert(left)
    invert(right)
}

// 层序遍历

let invertTree2 = function (root) {
    let queue = []
    root && queue.push(root)
    while (queue.length > 0) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            let left = node.left
            let right = node.right
            node.left = right
            node.right = left
            left && queue.push(left)
            right && queue.push(right)
        }
    }
    return root
}