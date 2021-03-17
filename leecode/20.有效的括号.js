/**
 * 给定一个只包括 '('，')'， '{'， '}'， '['，']'
 的字符串 s， 判断字符串是否有效。
 有效字符串需满足：
 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合。
 输入： s = "()[]{}"
 输出： true
 输入： s = "{[]}"
 输出： true
 */
/**
 * 栈
 * ({[]})  左括号 遇到( 加入栈
 * 遇到右括号就去栈顶找，如果相同继续 否则返回false 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let map = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ])
    if (!s || s.length === 0) {
        return true
    }
    let res = []
    for (let i = 0; i < s.length; i++) { 
        // 如果是左括号，则添加到数组
        if (s[i] === '[' || s[i] === '(' || s[i] === '{') {
            res.push(s[i])
        } else {
            // [ 右括号 就看数组最新加入的是否匹配
            if (map.get(res.pop()) === s[i]) {
                continue
            }
            return false
        }
    }
    return res.length>0?false:true
};
console.log(isValid('(])'))