/**
 * 203. 移除链表元素
 * 链表操作的两种方式：
 * 1. 在原有链表上操作
 * 2. 设置虚拟头节点进行操作
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    const resHead = new ListNode(0, head) // 设置虚拟头节点  统一头结点和普通节点的操作
    let curNode = resHead
    while (curNode && curNode.next) {
        if (curNode.next.val === val) {
            const temp = curNode.next.next
            curNode.next = temp // 继续遍历curNode.next 直到其和目标值不相等
        } else {
            curNode = curNode.next
        }
    }
    return resHead.next
};