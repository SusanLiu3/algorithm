/**
 * 删除链表中等于给定值 val 的所有节点
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 通过设置一个虚拟头部节点
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let curHead = new ListNode(0)
    let res = curHead
    let node = head
    while (node) {
        res.next=null
        if (node.val !== val) {
            res.next = node
            res = node
        }
        node = node.next
    }
    return curHead.next
};