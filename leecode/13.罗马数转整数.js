/**
 * 给定一个罗马数字， 将其转换成整数。 输入确保在 1 到 3999 的范围内。
 */
/**
 * 遍历罗马字符串，比较当前位和前一位的大小
 * 如果前一位比当前位小，那么需要减去前一位，
 * 反之相加
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    if (!s || s.length === 0) {
        return s
    }
    let romanNumsParir = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let prev = 0
    let sum = 0
    for (let i of s) {
        let num = romanNumsParir[i]
        if (num <=prev) {
            sum += prev
        } else {
            sum -= prev
        }
        prev = num
    }
    sum += prev // 最后一个元素
    return sum
};
console.log(romanToInt('MDCC'))