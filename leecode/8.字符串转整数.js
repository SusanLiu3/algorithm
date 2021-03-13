/**
 * 请你来实现一个 myAtoi(string s) 函数， 
 * 使其能将字符串转换成一个 32 位有符号整数（ 类似 C / C++中的 atoi 函数）。
 */
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let res = parseInt(s, 10)
    if (Number.isNaN(res)) {
        return 0
    }
    let max = Math.pow(2, 31) - 1
    let min = Math.pow(-2, 31)
    if (res > max) {
        return max
    } else if (res < min) {
        return min
    }
    return res
};