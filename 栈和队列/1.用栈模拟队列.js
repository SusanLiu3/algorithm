/**
 * 请你仅使用两个栈实现先入先出队列。 队列应当支持一般队列支持的所有操作（ push、 pop、 peek、 empty）：
 实现 MyQueue 类：
 void push(int x) 将元素 x 推到队列的末尾
 int pop() 从队列的开头移除并返回元素
 int peek() 返回队列开头的元素
 boolean empty() 如果队列为空， 返回 true； 否则， 返回 false
 */
/**
 * 先进后出
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.out = [] // 输出栈 3 2 1
    this.in = [] // 输入栈 1 2 3
};
MyQueue.prototype.push = function (x) {
    this.in.push(x)
    return x
}
MyQueue.prototype.pop = function () {
    // 如果输出栈是空的，那么就把入栈数据导入出来 然后弹出数据
    if (this.out.length === 0) {
        while (this.in.length> 0) {
            this.out.push(this.in.pop())
        }
    } 
    // 直接弹出数据
    return this.out.pop()
}

MyQueue.prototype.peek=function () {
    let res= this.pop()
    this.out.push(res)
    return res
}

MyQueue.prototype.empty = function () {
    return this.out.length === 0 && this.in.length === 0
}