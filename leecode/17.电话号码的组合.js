/**
 * 给定一个仅包含数字 2 - 9 的字符串， 返回所有它能表示的字母组合。 
 * 答案可以按 任意顺序 返回。给出数字到字母的映射如下（ 与电话按键相同）。 注意 1 不对应任何字母。
 * 输入： digits = "23"
 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 输入： digits = ""
 输出：[]
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
let letterDigitPair = ["", "", "abc", 'def', 'ghi', 'jkl', 'mno', "pqrs", // 7
    "tuv", // 8
    "wxyz"
]
let s = ''
let res = []
var letterCombinations = function (digits, index = 0) {
    if (!digits || digits.length === 0) {
        return []
    }
    if (index === digits.length) {
        res.push(s)
        return
    }
    let letter = letterDigitPair[digits[index]]
    for (let i of letter) {
        s += i // 处理节点
        letterCombinations(digits, index + 1) // 递归
        s = s.substr(0, s.length - 1) // 回溯
    }
    return res
};
console.log(letterCombinations(''))