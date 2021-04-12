/**
 * 给定一个仅包含数字 2 - 9 的字符串， 返回所有它能表示的字母组合。 
 * 答案可以按 任意顺序 返回。给出数字到字母的映射如下（ 与电话按键相同）。 注意 1 不对应任何字母
 */
let res = []
let path = []
let list = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz"
]
var letterCombinations = function (digits) {
    res = []
    path = []
    if (digits.length === 0) {
        return res
    }
    travaser(digits, 0)
    return res
};
let travaser = function (digits, index) {
    if (index === digits.length) {
        res.push(path.join(''))
        return
    }
    console.log(digits[index])
    let letters = list[digits[index]]
    for (let i = 0; i < letters.length; i++) {
        path.push(letters[i])
        travaser(digits, index + 1)
        path.pop()
    }
}