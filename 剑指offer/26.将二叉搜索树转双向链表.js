/**
 * 输入一棵二叉搜索树， 将该二叉搜索树转换成一个排序的双向链表。 
 * 要求不能创建任何新的结点， 只能调整树中结点指针的指向。
 */

function treeToLinkLis(root) {
    if (!root) {
        return
    }
    convert(root, last)
    while (root.left) {
        root = root.left
    }
    return root

}

function convert(node, last) {
    if (node.left) {
        last = convert(node.last) // 遍历到树的最小值
    }
    // 找到最小根节点
    node.left = last
    if (last) {
        last.right = node
    }
    // 更新last 为node 
    last = node
    if (node.right) {
        last = convert(node.right, last)
    }
    return last
}