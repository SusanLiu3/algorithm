/**
 * 给定单向链表的头指针和一个结点指针， 定义一个函数在 O（ 1） 时间删除该结点。 链表结点与函数的定义如下
 */
function deleLinkListLastNode(head,node){
    // 当删除的节点是头部节点
    if(head===node){
        head = node.next
        node.next=null
    } else if (node.next === null) { // 当删除的节点是最后一个
        let prevNode=null
        let curNode=head
        while (curNode.next) {
            prevNode=curNode
            curNode=curNode.next
        }
        prevNode.next=null

    }else{
        // 通过删除节点的后一个节点的内容和指针覆盖要删除节点
        let nextNode=node.next;// 下一个节点
        let nextEle=nextNode.element;// 下一个节点内容
        node.element=nextEle
        node.next=nextNode.next
    }
   
}