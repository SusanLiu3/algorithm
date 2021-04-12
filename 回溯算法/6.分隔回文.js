/**
 * 给你一个字符串 s， 请你将 s 分割成一些子串， 使每个子串都是 回文串。 返回 s 所有可能的分割方案。
 回文串 是正着读和反着读都一样的字符串
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
let res = []
let path = []
var partition = function (s) {
    res = []
    path = []
    backtracking(s,0)
    return res
};
let backtracking = function (s, startIndex) {
    if (startIndex >= s.length) {
        res.push(path)
        return
    }
    for (let i = startIndex; i < s.length; i++) {
        if (isPlain(s, startIndex, i)) {
            path.push(s.substr(startIndex, i - startIndex + 1))
        }else{
            continue
        }
        backtracking(s,startIndex+1)
        path.pop()
    }
}

let isPlain = function (s, start, end) {
    let i = start;
    let j = end
    while (i <= j) {
        if (s[i] !== s[j]) {
            return false
        }
    }
    return true
}