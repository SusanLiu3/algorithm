/**
 * 给定一个有相同值的二叉搜索树（ BST）， 找出 BST 中的所有众数（ 出现频率最高的元素）。
 假定 BST 有如下定义：
 结点左子树中所含结点的值小于等于当前结点的值
 结点右子树中所含结点的值大于等于当前结点的值
 左子树和右子树都是二叉搜索树

 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
    let stack = []
    let prev = null
    let cur = root
    let count = 0
    let maxCount = 0
    let res = []
    while (cur || stack.length > 0) {
        if (cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            if (!prev) {
                count = 1
            } else if (prev.val === cur.val) {
                count++
            } else {
                count = 1
            }
            if (count === maxCount) {
                res.push(cur.val)
            }
            if (count > maxCount) {
                maxCount = count
                res=[]
                res.push(cur.val)
            }
            prev = cur
            cur = cur.right
        }
    }
    return res.pop()
};