/**
 * 给定两个整数 n 和 k， 返回 1...n 中所有可能的 k 个数的组合。
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let path = [] // 路径
let res = [] // 最终结果
var combine = function (n, k) {
    traverse(n,k, 1)
    return res
};
let traverse = function (n, k, startIndex) {
    if (path.length === k) {
        res.push(JSON.parse(JSON.stringify(path)))
        return
    }
    for (let i = startIndex; i <= n; i++) {
        path.push(i) ;;// 
        traverse(n, k, i + 1)
        path.pop() ;// 回溯 
    }
}