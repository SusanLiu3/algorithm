/**
 * 200 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']'
 的字符串， 判断字符串是否有效。
 有效字符串需满足：
 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合。
 注意空字符串可被认为是有效字符串
 */
/** *
 @param {
     string
 }
 s
     *
     @return {
         boolean
     }
     */
 var isValid = function (s) {
     // 1. 先使用map 将括号存储起来
     const m = new Map([
         ['(', ')'],
         ['{', '}'],
         ['[', ']']
     ])
     // 2. 循环遍历s，如果是左半部分的括号，添加到数组中
     const res = []
     for (let i = 0; i < s.length; i++) {
         if (['(', '{', '['].indexOf(s[i]) > -1) {
             res.push(s[i])
             continue
         }
         // 3. 如果不是，那么就判断该字符和数组中最后一个元素在map中的值是否相等
         if (m.get(res.pop()) === s[i]) {
             // 4. 如果相等，继续循环
             continue
         }
         // 5. 如果不相等，return false
         return false
     }
     return res.length === 0
 };