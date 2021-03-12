/**
 * 给你一个 32 位的有符号整数 x， 返回将 x 中的数字部分反转后的结果。

 如果反转后整数超过 32 位的有符号整数的范围[−231, 231− 1]， 就返回 0。

 假设环境不允许存储 64 位整数（ 有符号或无符号）。
 */
/**
 * @param {number} x
 * @return {number}
 */
/**
 * 321%10  1  321/10 32  1*10 =10
 * 32%10   2  32/10  3   10*10+2*10=120
 * 3%10    3  3/10 0     120+3=123  循环结束的条件
 * 
 * @param {*} x 
 */
var reverse = function (x) {
    let res = 0
    while (true) {
        let mode = x % 10
        x = parseInt(x / 10)
        if (x === 0) {
            res = res + mode
            break;
        }
        res = res * 10 + 10 * mode
    }
    if (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)) {
        return 0
    }
    return res
};
console.log(reverse(321))