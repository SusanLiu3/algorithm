/**
 * 虚拟头部节点
 * 在链表类中实现这些功能：
 get(index)： 获取链表中第 index 个节点的值。 如果索引无效， 则返回 - 1。
 addAtHead(val)： 在链表的第一个元素之前添加一个值为 val 的节点。 插入后， 新节点将成为链表的第一个节点。
 addAtTail(val)： 将值为 val 的节点追加到链表的最后一个元素。
 addAtIndex(index, val)： 在链表中的第 index 个节点之前添加值为 val 的节点。 如果 index 等于链表的长度， 则该节点将附加到链表的末尾。 如果 index 大于链表长度， 则不会插入节点。 如果index小于0， 则在头部插入节点。
 deleteAtIndex(index)： 如果索引 index 有效， 则删除链表中的第 index 个节点。
 */

class LinkedNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
var MyLinkedList = function () {
    this.head = new LinkedNode(0);
    this.length = 0
};
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index > this.length - 1) {
        return -1
    }
    let node = this.head.next
    while (index--) {
        node = node.next
    }
    return node.val
}
MyLinkedList.prototype.addAtHead = function (val) {
    let node = new LinkedNode(val)
    node.next = this.head.next
    this.head.next = node
    this.length++
}

MyLinkedList.prototype.addAtTail = function (val) {
    let node = this.head
    while (node.next) {
        node = node.next
    }
    let curNode = new LinkedNode(val)
    node.next = curNode
    this.length++
}

MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.length) {
        return
    }
    if (index <= 0) {
        this.addAtHead(val)
        return
    }
    let node = this.head
    while (index--) {
        node = node.next
    }
    let curNode = new LinkedNode(val)
    curNode.next = node.next
    node.next = curNode
    this.length++
}

MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index > this.length - 1) {
        return
    }
    let node = this.head
    while (index--) {
        node = node.next
    }
    node.next = node.next.next
    this.length--
}