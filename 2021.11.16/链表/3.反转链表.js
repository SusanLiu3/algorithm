/**
 * 206. 反转链表 给你单链表的头节点 head， 请你反转链表， 并返回反转后的链表。
  * Definition for singly-linked list.
  * function ListNode(val, next) {
  *     this.val = (val===undefined ? 0 : val)
  *     this.next = (next===undefined ? null : next)
  * }
  * @param {ListNode} head
  * @return {ListNode}
  */
 var reverseList = function (head) {
     let prev = null // 指向前一个节点
     let cur = head; // 指向头节点
     while (cur) {
         const temp = cur.next // 暂存cur 的下一个节点
         cur.next = prev
         prev = cur;
         cur = temp
     }
     return prev
 };