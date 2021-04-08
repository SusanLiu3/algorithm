/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
    let queue = []
    if (!root) {
        return 0
    }
    queue.push(root)
    let count = 0
    while (queue.length > 0) {
        let len = queue.length
        count++
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            for (let j = 0; j < node.children.length; j++) {
                queue.push(node.children[j])
            }
        }
    }
    return count
};