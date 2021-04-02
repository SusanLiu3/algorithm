/**
 * 给定一个链表， 返回链表开始入环的第一个节点。 如果链表无环， 则返回 null。
 为了表示给定链表中的环， 使用整数 pos 来表示链表尾连接到链表中的位置（ 索引从 0 开始）。
 如果 pos 是 - 1， 则在该链表中没有环。

 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    // 
    let fast = head
    let slow = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next // 快慢指针相遇
        if (slow === fast) {
            let index1 = fast
            let index2 = head
            while (index1 !== index2) {
                index1 = index1.next
                index2 = index2.next
            }
            return index1
        }
    }
    return null
};