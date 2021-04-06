/**
 * 根据 逆波兰表示法， 求表达式的值。
 有效的算符包括 + 、 -、 * 、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
整数除法只保留整数部分。
给定逆波兰表达式总是有效的。 换句话说， 表达式总会得 出有效数值且不存在除数为 0 的情况。
逆波兰表达式：后缀表达式，算符写在后面  1+2   12+
栈：遇到数字压入进栅，遇到算符 弹出栈前两个元素计算后 将结果压入进栈
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let list = []
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*' || tokens[i] === '/') {
            let nums1= parseInt(list.pop())
            let nums2=parseInt(list.pop())
            let res;
            if (tokens[i]==='+'){
                res=nums1+nums2
            }else if (tokens[i]==='-'){
                res=nums2-nums1
            }else if (tokens[i]==='*'){
                res=nums1*nums2
            }else{
                res = parseInt(nums2 / nums1)
            }
            list.push(res)
        } else {
            list.push(tokens[i])
        }
    }
    return list.pop()
};