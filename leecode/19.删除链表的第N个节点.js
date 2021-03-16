/**
 * 给你一个链表， 删除链表的倒数第 n 个结点， 并且返回链表的头结点。
 进阶： 你能尝试使用一趟扫描实现吗？
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 双指针，第一个指针(0)和第二个指针相距n,等第二个指针到达链表的尾部(len-1)，第二个指针
 * 移动了len-1-n个位置，第一个指针也需要移动len -n-1 个位置，即倒数第n+1个节点
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let startNode = head
    let endNode = head
    let index = 0
    // 遍历到链表的结尾处,当第二个指针到达结尾处，第一个指针即链表的倒数第n个
    while (endNode.next) {
        // startIndex 和 endIndex 相距n
        if (index >= n) {
            startNode = startNode.next
        }
        endNode = endNode.next
        index++
    }
    if (!startNode || !startNode.next) { // 只有一个节点
        head = startNode.next
        return head
    }
    if (n - 1 === index) { // 删除链表头
        head = head.next
    }
    startNode.next = startNode.next.next
    return head
};

let removeNthNode = function (head, n) {
    if (!head) {
        return head
    }
    let res = new ListNode()
    res.next = head // 消除了删除链表头和只有一个节点的问题
    let start = res
    let end = res
    while (n--) {
        end = end.next
    }
    while (end.next) {
        start = start.next
        end = end.next
    }
    start.next = start.next.next
    return res.next
}