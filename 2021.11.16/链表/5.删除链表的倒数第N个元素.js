/**
 * 19. 删除链表的倒数第N个节点
 * eg 输入： head = [1, 2, 3, 4, 5], n = 2 输出：[1, 2, 3, 5]
 * 思路：双指针 -- 快慢指针
 * 快指针不断移动快指针，当移动的长度等n时，开始移动慢指针，
 * 当快指针到达链表尾部，慢指针指向的就是需要删除的元素
 * 因为需要删除当前元素，所以需要慢指针停留在需要删除元素的上一个
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // 使用虚拟节点，有效的避免处理头节点的情况
    const res = new ListNode(0, head)
    let fast = res
    let slow = res
    while (fast) {
        if (n-- < 0) {
            slow = slow.next
        }
        fast = fast.next
    }
    // 当前slow 是需要移除元素的前一个节点
    // 移除元素
    slow.next = slow.next.next
    return res.next
};