var inorderTraversal = function (root) {
    let res=[]
    let stack=[]
    let curNode=root
    stack.push(root)
    while (stack.length>0) {
        if (curNode!=null){
            curNode=curNode.left
            stack.push(curNode)
        }else{
            curNode=stack.pop()
            res.push(curNode.val)
            curNode=curNode.right
        }
    }
}