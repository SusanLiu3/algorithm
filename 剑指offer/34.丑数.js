/**
 * 我们把只包含因子2、 3 和5的数称作丑数（ Ugly Number）。 
 * 求按从小到大的顺序的第1500个丑数。 
 * 例如6、 8 都是丑数， 但14不是， 因为它包含因子7。 习惯上我们把1当做第一个丑数
 */
/**
 * 1. 丑数 应该是前一个丑数乘以 2,3或者5 的结果
 * 2. 对 ✖️ 2，3，5的数进行优化（并不是每个数都得乘）
 *    记录下✖️（2，3，5）刚好比当前最大丑数大的下标i2,i3,i5
 *    下一次直接从i2,i3,i5开始乘
 * 3. 从小到达排列，所以是取最小值
 * @param {*} index 
 */
function getUglyNumber(index) {
    if (index <= 0) {
        return 0
    }
    let list = [1]
    let i2=0, i3=0, i5 = 0
    while (list.length < index) {
        list.push(Math.min(list[i2] * 2, list[i3] * 3, list[i5] * 5))
        let curItem = list[list.length-1]
        if (list[i2] * 2 <= curItem) {
            i2++
        }
        if (list[i3] * 3 <= curItem) {
            i3++
        }
        if (list[i5] * 5 <=curItem) {
            i5++
        }
    }
    return list[list.length-1]
}

console.log(getUglyNumber(99))