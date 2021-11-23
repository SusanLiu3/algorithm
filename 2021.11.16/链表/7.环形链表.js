/**
 * 142 环形链表
 * 给定一个链表， 返回链表开始入环的第一个节点。 如果链表无环， 则返回 null
 * 为了表示给定链表中的环， 使用整数 pos 来表示链表尾连接到链表中的位置（ 索引从 0 开始）。 如果 pos 是 - 1， 则在该链表中没有环。
 * 说明： 不允许修改给定的链表
 * 思路：快慢指针fast 和slow
 * 快指针移动两个元素，慢指针移动一个元素，即快指针移动速度是慢指针的2倍
 * 如果快慢指针相遇，说明有环
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
    let fast = head;
    let slow = head
    while (slow && fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        // 说明有环
        if (slow === fast) {
            // 从相遇节点和头节点，分别定义两个指针，相遇点就是环入口
            let temp1 = head
            let temp2 = fast
            while (temp1 !== temp2) {
                temp1 = temp1.next
                temp2 = temp2.next

            }
            return temp2
        }
    }
    return null
};