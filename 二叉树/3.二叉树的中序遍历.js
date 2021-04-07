var inorderTraversal = function (root) {
    let res = []
    let stack = []
    let curNode = root

    while (curNode != null || stack.length > 0) {
        if (curNode != null) {
            stack.push(curNode)
            curNode = curNode.left
        } else {
            curNode = stack.pop()
            res.push(curNode.val)
            curNode = curNode.right
        }
    }
    return res
}