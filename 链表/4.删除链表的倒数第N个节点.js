/**
 * 删除链表的倒数第N个节点
 * 经典应用：让fast指针移动n步，然后slow和fast同时移动，然后fast指向链表尾部
 * 删除slow指针指向的节点即可
 * 如果让fast移动n+1步，当fast指针到达链表尾部时，slow指向的是要删除节点的前一个元素
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 借助虚拟节点
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let curHead = new ListNode(0)
    curHead.next = head
    let fast = curHead
    let slow = curHead
    while (n--) {
        fast = fast.next
    }
    fast=fast.next // fast需要向前一步，这样slow指向删除节点的上一个
    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return curHead.next
}