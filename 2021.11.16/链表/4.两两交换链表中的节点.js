/**
 * 24. 两两交换链表中的节点
 * eg [1,2,3,4]
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    const res = new ListNode(0, head)
    let cur = res
    // 因为两两交换，所以至少设计三个节点元素 
    while (cur.next && cur.next.next) {
        const tempNext = cur.next // 记录临时节点 // 1
        const tempNext2 = cur.next.next.next // 3

        cur.next = cur.next.next // cur → 2
        cur.next.next = tempNext; // 2 → 1
        cur.next.next.next = tempNext2 // 1 → 3

        cur = cur.next.next
    }
    return res.next
};