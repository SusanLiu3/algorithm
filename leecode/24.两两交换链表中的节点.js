/**
 * 给定一个链表， 两两交换其中相邻的节点， 并返回交换后的链表。
 你不能只是单纯的改变节点内部的值， 而是需要实际的进行节点交换
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * [1,2,3,4]
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let res = new ListNode(0)
    res.next = head
    let temp = res //  
    // 至少两个节点
    while (temp.next && temp.next.next) {
        let prev = temp.next // 1 前一个节点
        let cur = prev.next // 2 当前节点
        temp.next = cur // 先储存当前节点
        // 两两交换
        prev.next = cur.next // 前一个节点指针指向当前节点的下一个节点
        cur.next = prev // 让当前节点指针指向前一个节点
        temp = prev
    }
    return res.next
};