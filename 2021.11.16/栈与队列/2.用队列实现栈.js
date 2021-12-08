/**
 * 225. 用队列实现栈
 * 使用队列实现栈的下列操作：
 push(x) --元素 x 入栈
 pop() --移除栈顶元素
 top() --获取栈顶元素
 empty() --返回栈是否为空
 */
/**
 * 使用一个队列
 */
var MyStack = function () {
    this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    // 将当前队列的length -1 元素进行 shift 并添加到当前队列，那么结果得到的队列首部就是最后一个元素
    let len = this.queue.length
    while (len > 1) {
        this.queue.push(this.queue.shift())
        len--
    }
    return this.queue.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    const temp = this.pop()
    // 添加回去
    this.queue.push(temp)
    return temp
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */