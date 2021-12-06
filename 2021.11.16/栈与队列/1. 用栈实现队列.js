/**
 * 232. 用栈实现队列
 * 使用栈实现队列的下列操作：
   push(x) --将一个元素放入队列的尾部。
   pop() --从队列首部移除元素。
   peek() --返回队列首部的元素。
   empty() --返回队列是否为空
 */
/**
* 记住：队列：先进先出
       栈：先进后出
 */
var MyQueue = function () {
    // 1. 定义入栈，出栈
    this.inStack = []
    this.outStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    // 2. 当有数据push时，直接push进入栈
    return this.inStack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    // 4. 如果出栈数据不为空，那么直接pop出栈数据
    if (this.outStack.length > 0) {
        return this.outStack.pop()
    }
    // 3. 当需要pop数据时，首先判断出栈是否为空，如果为空，那么就需要将入栈的数据全部导入出栈中，然后出栈数据pop即可
    while (this.inStack.length > 0) {
        const ele = this.inStack.pop()
        this.outStack.push(ele)
    }
    return this.outStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    // 队列的开头元素
    const ele = this.pop()
    this.outStack.push(ele)
    return ele
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.inStack.length === 0 && this.outStack.length === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */