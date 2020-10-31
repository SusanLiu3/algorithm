/**
 * 定义栈的数据结构， 请在该类型中实现一个能够得到栈的最小元素的min函数。 
 * 在该栈中， 调用min、 push及pop的时间复杂度都是O（ 1）
 */
function Stack() {
    this.mData = [] // 先进后出
    this.mMin = [] // 辅助栈保存最小值，该栈的大小应和数据栈保持一致
}
Stack.prototype.push = function (val) {
    let top=this.top(this.mMin)
    // 如果添加的值 比最小值小，则正常push
    if (this.mMin.length === 0 || top>val) {
        this.mMin.push(val)
    } else {
    // 反之，将目前最小的值压入进栈
        this.mMin.push(top)
    }
    this.mData.push(val)
}
Stack.prototype.top = function (stack) {
    if (stack.length > 0) {
        return stack[stack.length - 1]
    }
    return ''
}
Stack.prototype.pop = function () {
    this.mMin.pop()
   return this.mData.pop()
}
Stack.prototype.min = function () {
    if (this.mMin.length > 0) {
        return this.mMin[this.mMin.length - 1]
    }
}
Stack.prototype.print=function (stack) {
    console.log(stack.join(','))
}
let s=new Stack()
s.push(6)
s.push(3)
s.push(4)
console.log(s.min())
s.pop()
console.log(s.min())
s.pop()
console.log(s.min())
