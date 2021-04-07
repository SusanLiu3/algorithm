/**
 * 给定一棵二叉树， 想象自己站在它的右侧， 按照从顶部到底部的顺序， 返回从右侧所能看到的节点值。
 */

 /**
  * @param {TreeNode} root
  * @return {number[]}
  */
 var rightSideView = function (root) {
    let res=[]
    let queue=[]
    if (root){
        queue.push(root)
    }
    while (queue.length>0) {
        let len =queue.length;
        for (let i=0;i<len;i++){
            let node =queue.shift()
            // 每次只把最后一个元素加入
            if (i===len-1){
                res.push(node.val)
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return res
 };