/**
 * 给定四个包含整数的数组列表 A, B, C, D, 计算有多少个元组(i, j, k, l)， 
 * 使得 A[i] + B[j] + C[k] + D[l] = 0。为了使问题简单化， 
 * 所有的 A, B, C, D 具有相同的长度 N， 且 0≤ N≤ 500。 
 * 所有整数的范围在 - 2 ^ 28 到 2 ^ 28 - 1 之间， 最终结果不会超过 2 ^ 31 - 1。
 */
/**
 * 1.遍历AB，存储AB相加的值 及出现的个数
 * 2.遍历CD，判断是否存在 0-AB的值
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
    let map = new Map()
    for (let i of A) {
        for (let j of B) {
            let flag = map.has(0 - (i + j))
            map.set(0 - (i + j), flag ? map.get(0-(i + j)) + 1 : 1)
        }
    }
    let r = 0 ;// 记录 a+b+c+d=0出现的次数
    for (let i of C) {
        for (let j of D) {
            if (map.has(i + j)) {
                r += map.get(i + j)
            }
        }
    }
    return r
};