/**
 * 「快乐数」 定义为： 对于一个正整数， 每一次将该数替换为它每个位置上的数字的平方和， 
 * 然后重复这个过程直到这个数变为 1， 也可能是 无限循环 但始终变不到 1。 
 * 如果 可以变为 1， 那么这个数就是快乐数。
 如果 n 是快乐数就返回 True； 不是， 则返回 False。
 */
/**
 * 如果求出的和重复出现，说明不是快乐数，返回false 
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let set = new Set()
    while (true) {
        let s = sum(n)
        if (s === 1) {
            return true
        }
        if (set.has(s)) {
            return false
        }
        set.add(s)
        n=s
    }
};

function sum(n) {
    let sum = 0
    while (n) {
        sum += (n % 10) * (n % 10)
        n = parseInt(n / 10)
    }
    return sum
}

console.log(isHappy(19))