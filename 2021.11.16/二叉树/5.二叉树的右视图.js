/**
 * 199 给定一棵二叉树， 想象自己站在它的右侧， 按照从顶部到底部的顺序， 
 * 返回从右侧所能看到的节点值
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) {
        return []
    }
    // 还是和前面的层序遍历一样，声明一个队列
    const res = [],
        queue = []
    queue.push(root)
    while (queue.length > 0) {
        // 2. 声明临时数组，存放每一层的结果  缓存队列的length
        const temp = [],
            len = queue.length
        for (let i = 0; i < len; i++) {
            const q = queue.shift();
            // 3. 将队列中最后一个数字加入到临时数组中
            if (i === len - 1) {
                temp.push(q.val)
            }
            q.left && queue.push(q.left)
            q.right && queue.push(q.right)
        }
        // 4. 将临时数组推入结果数组中
        res.push(temp)
    }
    return res
};