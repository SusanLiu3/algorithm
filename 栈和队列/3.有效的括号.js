/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']'的字符串， 判断字符串是否有效。
 有效字符串需满足：左括号必须用相同类型的右括号闭合。左括号必须以正确的顺序闭合。
 注意空字符串可被认为是有效字符串。
 示例 1:
     输入: "()"
     输出: true
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let map = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ])

    let res = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            res.push(s[i])
        } else {
            if (map.get(res.pop()) === s[i]) {
                continue
            }
            return false
        }
    }
    return res.length > 0 ? false : true
}
console.log(isValid('(({}))[{}'))