/**
 * 参考 https://www.cnblogs.com/geyouneihan/p/12656733.html
 * 输入两个链表，找出公共节点
 */
/**
 * 借助 map 数据结构，将第一个链表加入map，然后遍历第二个链表看元素是否在map中存在
 * 空间复杂度o(n)
 * @param {第一个指针} head1 
 * @param {第二个指针} head2 
 */
function getIntersectionNode(head1, head2) {
    let map = new Map()
    let node1 = head1
    while (node1) {
        map.set(node1, true)
        node1 = node1.next
    }
    node1 = head2
    while (node1) {
        if (map.has(node1)) {
            return node1
        }
        node1 = node1.next
    }
    return null
}
/**
 * 快慢指针
 * 1. 首先遍历两个链表，计算出链表的长度
 * 2. 将慢slow指针指向较长的长度，快fast指针指向较短的指针
 * 3. 将slow指针向前移动diff，
 * 4. 然后slow和fast同时向前移动，如果有公共节点，则会相遇
 * @param {链表1} node1 
 * @param {链表2} node2 
 */
function getIntersectionNode2(head1, head2) {
    let len1 = 0
    let node1 = head1
    while (node1) {
        len1++;
        node1 = node1.next
    }
    let len2 = 0
    let node2 = head2
    while (node2) {
        len2++
        node2 = node2.next
    }
    let diff = 0,
        slow, fast;
    if (len1 > len2) {
        slow = head1
        fast = head2
        diff = len1 - len2
    } else {
        slow = head2
        fast = head1
        diff = len2 - len1
    }
    while (diff--) {
        slow = slow.next
    }
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next
    }
    return slow
}