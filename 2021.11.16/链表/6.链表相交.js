/**
 * 面试题 02.07.链表相交
 * 给定两个（ 单向） 链表， 判定它们是否相交并返回交点。 请注意相交的定义基于节点的引用， 而不是基于节点的值。 
 * 换句话说， 如果一个链表的第k个节点与另一个链表的第j个节点是同一节点（ 引用完全相同）， 则这两个链表相交。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const getLinkListLen = function (head) {
    let len = 0
    let cur = head
    while (cur) {
        cur = cur.next
        len++
    }
    return len
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // 1. 求出两个链表的长度
    let lenA = getLinkListLen(headA)
    let lenB = getLinkListLen(headB)
    // 2. 设定A链表比B链表长
    let curA = headA
    let curB = headB
    if (lenA < lenB) {
        [curA, curB] = [curB, curA]
    }
    if (lenA < lenB) {
        [lenA, lenB] = [lenB, lenA]
    }

    console.log(curA, curB, lenA, lenB)
    // 3. 将A链表移动到B链表的头位置
    while (lenA > lenB) {
        curA = curA.next
        lenA--
    }

    // 4. 判断 A 链表和B链表是否相同，如果不相同，则移动AB链表；相同则找出交点
    while (curA) {
        if (curA === curB) {
            return curA
        }
        curA = curA.next
        curB = curB.next
    }
    return null
};