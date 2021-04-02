/**
 * 题意： 反转一个单链表。
 示例: 输入: 1 - > 2 - > 3 - > 4 - > 5 - > NULL
 输出: 5 - > 4 - > 3 - > 2 - > 1 - > NULL
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 定义一个cur指针初始化指向head,prev指针初始化指向null
 * @param {ListNode} head
 * @return {ListNode}
 *  1,2,3,4
 */
var reverseList = function (head) {
    let cur = head; // 1
    let prev = null
    let temp // 存储cur的下一个节点
    while (cur) {
        temp = cur.next // 2
        cur.next = prev
        prev = cur;
        cur = temp;// 移动cur指针
    }
    return cur
};