// 输入两个整数序列， 第一个序列表示栈的压入顺序， 
// 请判断第二个序列是否为该栈的弹出顺序。 
// 假设压入栈的所有数字均不相等。 
// 例如序列1、 2、 3、 4、 5 是某栈的压栈序列， 
// 序列4、 5、 3、 2、 1 是该压栈序列对应的一个弹出序列， 
// 但4、 3、 5、 1、 2 就不可能是该压栈序列的弹出序列。
/**
 * 
 * @param {栈的压入} pushStack 
 * @param {栈的弹出} popStack 
 */
function isPopOrder(pushStack, popStack) {
    if (pushStack === null || popStack === null || pushStack.length === 0 || popStack.length === 0) {
        return false
    }
    let aidStack = [] // 辅助栈
    let idx = 0
    for (let i = 0; i < pushStack.length; i++) {
        aidStack.push(pushStack[i])
        while (aidStack.length > 0 && aidStack[aidStack.length - 1] === popStack[idx]) {
            aidStack.pop()
            idx++
        }
    }
    return aidStack.length === 0
}