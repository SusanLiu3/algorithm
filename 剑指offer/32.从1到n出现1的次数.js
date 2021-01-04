/**
 * 输入一个整数n， 求从1到n这n个整数的十进制表示中1出现的次数。 
 * 例如输入12， 从1到12这些整数中包含1 的数字有1， 10， 11 和12， 1 一共出现了5次
 */
/**
 * 方法1 遍历1 - n 对n进行求模 和1 比较
 * 需要对每一位数字进行求余和1进行比较
 * 时间复杂度nlogn
 * @param {*} n 
 */
function numberOf1BetweenN(n) {
    if (n <= 1) {
        return n
    }
    let num = 0;
    for (let i = 1; i<=n; i++) {
        let temp = i
        while (temp) {
            if (temp % 10 === 1) {
                num++
            }
            temp = parseInt(temp / 10)
        }
    }
    return num
}
console.log(numberOf1BetweenN(12))
// 方法2 待定  https://www.cnblogs.com/lishanlei/p/10707693.html
