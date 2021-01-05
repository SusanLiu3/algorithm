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
    for (let i = 1; i <= n; i++) {
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
// console.log(numberOf1BetweenN(12))
// 方法2 待定  https://www.cnblogs.com/lishanlei/p/10707693.html
/**
 * 推导:
 * 个位数：个位上出现1的情况，0-9 10-19 20-29 这样子，可以发现规律：以10为阶段会出现1，出现1的次数
 *        是1次；针对不完整的阶段(23)，20-23 暴露出来的数字(3)如果小于1，则这个不完整的节段出现1的次数是0，反之1
 *        n / 10 + (n % 10>1?1:0)       
 * 
 * 十位数：十位数上出现1的情况，0-99 100-199 200-299 这样子，可以发现规律：每隔100出现1 ，出现1的次数
 *        是10次，针对不完整的阶段（250），200 - 250 暴露出来的数字(50),如果大于19，则十位数上出现1的次数是10
 *        如果小于19 大于10 ，则十位数上出现1的次数是 比如暴露出来的数字（15），则15 -10 + 1 = 6
 *        如果小于10 ，十位数上不可能出现1
 *        (n / 100) * 10 + (n% 100 >19? 10 : n% 100 <10?0:n%100 - 10 +1 )
 * 百位数：百位数上出现1的情况，0-999 1000-1999，每隔 1000次出现1 ，出现1的次数是100，针对不完整阶段（2500）
 *        2000-2500 暴露出来的数字（500）如果大于199，则百位数上出现1的次数为 100次，小于199，比如（180），180-100+1 181 个
 *         (n / 1000) * 100 + (n % 1000 > 199 ? 100 : n % 100 < 100 ? 0 : n % 100 - 100 + 1)
 */

function numOf1BetweenN(n) {
    if (n < 1) {
        return 0
    }
    let num = 0
    // 1 10 100 1000
    for (let i = 1; i <= n; i *= 10) {
        let stair = i * 10
        num += getNums(stair, n)
    }
    return num
}
/**
 * 
 * @param {阶梯} stair  10 100 1000
 * @param {*} n 
 */
function getNums(stair, n) {
    // 临界值 19 199 1999
    let count = parseInt(stair / 10)
    let criticalValue = count * 2 - 1
    let modelValue = n % stair; // 取模
    return parseInt((n / stair)) * count + (modelValue > criticalValue ? count : modelValue < count ? 0 : modelValue - count + 1)
}

console.log(numOf1BetweenN(12))