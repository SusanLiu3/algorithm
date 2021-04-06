/**
 * 请你仅使用两个队列实现一个后入先出（ LIFO） 的栈， 
 * 并支持普通队列的全部四种操作（ push、 top、 pop 和 empty）。
 实现 MyStack 类：
 void push(int x) 将元素 x 压入栈顶。
 int pop() 移除并返回栈顶元素。
 int top() 返回栈顶元素。
 boolean empty() 如果栈是空的， 返回 true； 否则， 返回 false。
 注意：
 你只能使用队列的基本操作—— 也就是 push to back、 peek / pop from front、 size 和 is empty 这些操作。
 你所使用的语言也许不支持队列。 你可以使用 list（ 列表） 或者 deque（ 双端队列） 来模拟一个队列, 只要是标准的队列操作即可。
 */
/**
 * 先进先出
 * 依然是两个队列模拟栈，其中一个队列是备份
 * Initialize your data structure here.
 */
var MyStack = function () {
    this.queue1 = []
    this.queue2 = []
};
MyStack.prototype.push = function (x) {
    this.queue1.push(x)
}

MyStack.prototype.pop = function () {
    // 先把 queue1 备份到 queue2  然后弹出最后一个元素，接着讲queue2 导入queue1
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift())
    }
    let res = this.queue1.shift()
    while (this.queue2.length > 0) {
        this.queue1.push(this.queue2.shift())
    }
    return res
}

MyStack.prototype.top = function () {
    let res =this.queue1.pop()
    this.queue1.push(res)
    return res
}

MyStack.prototype.empty = function () {
    return this.queue1.length === 0
}