/**
 * 输入两个递增排序的链表， 合并这两个链表并使新链表中的结点仍然是按照递增排序的
 */
/**
 * 链表节点
 */
 class Node {
     constructor(element) {
         this.element = element // 当前节点
         this.next = null // 当前节点指向下一个节点的指针
     }
 }

 function combinedList(head1,head2){
     if (!head1){
         return head2
     }
     if (!head2){
         return head1
     }
     let mergedHead=null
     if (head1.element<head2.element){
         mergedHead=head1
         mergedHead.next=combinedList(head1.next,head2)
     }else{
         mergedHead = head2
         mergedHead.next = combinedList(head1, head2.next)
     }
     return mergedHead
 }