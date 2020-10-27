/**
 * 定义一个函数， 输入一个链表的头结点， 反转该链表并输出反转后链表的头结点。 链表结点定义如下s
 */

 function reverseList(head){
     let newHead=null
     let curNode=head
     let prevNode=null
     while (curNode) {
        let nextNode = curNode.next  // 保存当前节点的下一个节点
        if (nextNode===null){ // 当原先的链表的next指向null，说明是原先链表的链尾，也就是反转链表的头部
            newHead=nextNode
        }
        curNode.next = prevNode
        prevNode = curNode
        curNode=nextNode
     }
     return newHead
 }