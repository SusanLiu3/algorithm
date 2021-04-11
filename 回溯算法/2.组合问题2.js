/**
 * 找出所有相加之和为 n 的 k 个数的组合。 
 * 组合中只允许含有 1 - 9 的正整数， 并且每种组合中不存在重复的数字。
 说明：
 所有数字都是正整数。
 解集不能包含重复的组合。
 */
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
let res = []
let path = []
var combinationSum3 = function (k, n) {
    res = []
    path = []
};

let traverse = function (target, k, sum, startIndex) {
    if (path.length === k && sum === target) {
        res.push(path)
        return
    }
    for (let i = startIndex; i <= 9; i++) {
        sum += i
        path.push(i)
        traverse(target, k, sum, i + 1)
        path.pop()
        sum -= i
    }
}