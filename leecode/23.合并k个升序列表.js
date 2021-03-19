/**
 * 给你一个链表数组， 每个链表都已经按升序排列。
 请你将所有链表合并到一个升序链表中， 返回合并后的链表。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 方法1 分而治之
 * 方法2 将所有节点加入数组，然后给数组排序，再将排序的数组形成链表
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let len = lists.length
    if (lists.length===0){
        return null
    }

    function mergeTwo(l1, l2) {
        if (l1 == null) return l2;
        if (l2 == null) return l1;
        let head = new ListNode(0)
        let res = head
        while (l1 && l2) {
            if (l1.val <= l2.val) {
                res.next = l1
                l1 = l1.next
            } else {
                res.next = l2;
                l2 = l2.next
            }
            res = res.next
        }
        res.next = l1 ? l1 : l2
        return head.next
    }

    function merge(left, right) {
        if (left === right) {
            return lists[left]
        }
        let mid = parseInt((left + right) / 2)
        let l1 = merge(left, mid)
        let l2 = merge(mid + 1, right)
        return mergeTwo(l1, l2)
    }
    return merge(0, len - 1)
};