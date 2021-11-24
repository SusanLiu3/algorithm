/**
 * 编写一个算法来判断一个数 n 是不是快乐数。
 *「 快乐数」 定义为： 对于一个正整数， 每一次将该数替换为它每个位置上的数字的平方和， 
 * 然后重复这个过程直到这个数变为 1， 也可能是 无限循环 但始终变不到 1。 
 * 如果 可以变为 1， 那么这个数就是快乐数。如果 n 是快乐数就返回 True； 不是， 则返回 False
 */
/**
 * @param {number} n
 * @return {boolean}
 */
const getSum = function (n) {
    let sum = 0
    while (n) {
        sum += (n % 10) * (n % 10)
        n = parseInt(n / 10)
    }
    return sum
}
var isHappy = function (n) {
    const s = new Set()
    // 首先了解这个数每个位置(各十百千)上的操作 取余、除法
    while (true) {
        n = getSum(n)

        if (n === 1) {
            return true
        }
        // 如果每个位置上的数字操作后的结果重复出现，但是不是1，那么就可以判断不是快乐数
        // 从上面可以看出，需要判断一个数是否存在某个集合中，那么就要想到Set 或者Map 等
        if (s.has(n)) {
            return false
        } else {
            s.add(n)
        }

    }
};