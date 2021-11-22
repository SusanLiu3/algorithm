/**
 * 707. 设计链表
 * 在链表类中实现这些功能：
 get(index)： 获取链表中第 index 个节点的值。 如果索引无效， 则返回 - 1。
 addAtHead(val)： 在链表的第一个元素之前添加一个值为 val 的节点。 插入后， 新节点将成为链表的第一个节点。
 addAtTail(val)： 将值为 val 的节点追加到链表的最后一个元素。
 addAtIndex(index, val)： 在链表中的第 index 个节点之前添加值为 val 的节点。 如果 index 等于链表的长度， 则该节点将附加到链表的末尾。 如果 index 大于链表长度， 则不会插入节点。 如果index小于0， 则在头部插入节点。
 deleteAtIndex(index)： 如果索引 index 有效， 则删除链表中的第 index 个节点。
 */
class LinkNode {
    constructor(val, next) {
        this.val = val
        this.next = next
    }
}

var MyLinkedList = function () {
    this.head = null
    this.len = 0
}

/**
 * 获取链表中 第 index 个节点的值
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    // index 合理性判断
    if (index < 0 || index > this.len - 1) {
        return -1
    }
    let curNode = this.head
    while (index--) {
        curNode = curNode.next
    }
    return curNode.val
}

/**
 * 在链表头部插入节点
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    // 创建一个节点
    const newNode = new LinkNode(val)
    this.len++ // length 对应的+1
    if (!this.head) {
        // 如果当前链表是空的 ，直接赋值head
        this.head = newNode
        return
    }
    // 如果链表不是空的；
    newNode.next = this.head
    this.head = newNode // 重新赋值
}

/**
 * 在链表尾部插入节点
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let curNode = this.head
    if (!curNode) {
        // 当前链表是空的
        this.addAtHead(val)
        return
    }
    // 遍历链表，拿到最后一个节点
    while (curNode.next) {
        curNode = curNode.next
    }
    // 创建一个节点
    const newNode = new LinkNode(val)
    curNode.next = newNode
    this.len++
}

/**
 * 在第 index 个节点处插入新节点
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    // 首先判断 index 合理性
    if (index < 0 || index > this.len) {
        return
    }
    // 链表头部插入节点
    if (index === 0) {
        this.addAtHead(val)
        return
    }
    //  在链表中间和尾部插入节点
    let curNode = this.head

    // 找到 index-1 处节点
    while (--index) {
        curNode = curNode.next
    }
    const newNode = new LinkNode(val)
    const tempNext = curNode.next
    curNode.next = newNode
    newNode.next = tempNext
    this.len++
}

/**
 * 删除第 index 处的节点
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    // index 合理性判断
    if (index < 0 || index > this.len - 1) {
        return
    }
    let curNode = this.head
    // 删除头节点
    if (index === 0) {
        this.head = curNode.next
        this.len--
        return
    }

    // 找到index-1 处的节点
    while (--index) {
        curNode = curNode.next
    }
    const tempNext = curNode.next.next
    curNode.next = tempNext
    this.len--
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
