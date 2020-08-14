/**
 * 队列 使用两个栈实现队列的pop和push操作
 * 1. 栈是先进后出， 队列是先进先出
 * 2. 数组是先进后出
 */
let stack1 = []
let stack2 = []

function push(item) {
    stack1.push(item); // 元素在stack1 中从栈顶依次排往栈底
}
// 现在来实现pop方法，现往stack1分别push 1，2，3，4，5；
// 此时1就位于stack1 的栈顶；5在栈底；队列是先进先出，按理1应该先pop出来，但是stack1 是栈；所以此时
// 第二个stack2 出场，将从stack1 pop出来的数据push到stack1 中；5此时位于stack2的栈顶，1位于stack2 的栈底
// stack2第一个pop出来的是1 也就是第一个进队列的

function pop() {
    // 这个保证stack2数据顺序不乱
    if (stack2.length === 0) {
        while (stack1.length > 0) {
            stack2.push(stack1.pop())
        }
    }

    return stack2.pop() || null
}
push(1)
push(2)
push(3)
console.log(pop())
push(4)
console.log(pop())
console.log(pop())
console.log(pop())
console.log(pop())

/**
 * 扩展，两个队列实现栈，原理类似
 */

function Stack() {
    this.queue1 = []
    this.queue2 = []
}
Stack.prototype.push = function (item) {
    this.queue1.push(item)
}
Stack.prototype.pop = function () {
    if (this.queue1.length > 0) {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift())
        }
        console.log(this.queue1.shift())
        return this.queue1.shift() || null
    }
    while (this.queue2.length > 1) {
        this.queue1.push(this.queue2.shift())
    }
    console.log(this.queue2.shift())
    return this.queue2.shift() || null

}
let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
stack.pop()
stack.push(4)
stack.push(5)
stack.pop()
stack.pop()