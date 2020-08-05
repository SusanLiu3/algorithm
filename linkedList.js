// 使用js实现一个链表增删功能
let linkedList = (function () {
    let head = null; // 链表的头部
    let length = 0
    class LinkedList {
        /**
         * 向链表尾部添加节点
         * @param {节点}} element 
         */
        append(element) {
            let node = new Node(element)
            // 头部
            if (!head) {
                head = node;
            } else {
                let curElement = head
                while (curElement.next) {
                    curElement = curElement.next
                }
                curElement.next = node
            }
            length++
            return true
        }
        /**
         * 在某个位置插入元素 0 1 2 3
         * @param {插入的位置} position  4
         * @param {插入的节点} element 
         */
        insertNode(position, element) {
            let node = new Node(element)
            // 找到position的前一个节点
            // 边界处理
            if (position > -1 && position <= length) {
                let current = head,
                    previous = null,
                    index = 0;
                // 插入位置是头部
                if (position === 0) {
                    node.next = head;
                    head = node
                } else {
                    while (index < position) {
                        previous = current
                        current = current.next;
                        index++
                    }
                    node.next = previous.next
                    previous.next = node
                }
                length++
                return true
            } else {
                return false
            }
        }
        toString() {
            let str = ''
            let current = head;
            while (current) {
                str += current.element + (current.next ? ',' : '')
                current = current.next
            }
            return str
        }
        /**
         * 从链表尾部打印
         */
        printFromTail() {
            let list = []
            let current = head
            while (current) {
                // list.unshift(current)
                list.unshift(current.element)
                current = current.next
            }
            // return list.map(i => i.element).join(',')
            return list.join(',')
        }
    }
    class Node {
        constructor(element) {
            this.element = element // 当前节点
            this.next = null // 当前节点指向下一个节点的指针
        }
    }
    return LinkedList
})()
export default linkedList