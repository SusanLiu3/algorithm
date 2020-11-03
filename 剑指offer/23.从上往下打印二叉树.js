/**
 * 从上往下打印出二叉树的每个结点， 同一层的结点按照从左到右的顺序打印。 
 * 
 */
function printBST(root) {
    if (root === null) {
        return
    }
    let queueData = []
    queueData.push(root)
    while (queueData.length > 0) {
        let node = queueData.shift()
        console.log(node.data)
        if (node.left) {
            queueData.push(node.left)
        }
        if (node.right) {
            queueData.push(node.right)
        }

    }
}