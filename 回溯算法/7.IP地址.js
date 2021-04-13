/**
 * 给定一个只包含数字的字符串， 用以表示一个 IP 地址， 返回所有可能从 s 获得的 有效 IP 地址。 你可以按任何顺序返回答案。

 有效 IP 地址 正好由四个整数（ 每个整数位于 0 到 255 之间组成， 且不能含有前导 0）， 整数之间用 '.'
 分隔。

 例如： "0.1.2.201"
 和 "192.168.1.1"
 是 有效 IP 地址， 但是 "0.011.255.245"、
 "192.168.1.312"
 和 "192.168@1.1"
 是 无效 IP 地址
 */
/**
 * @param {string} s
 * @return {string[]}
 */
let res = []
var restoreIpAddresses = function (s) {
    res = []
    backtracking(s, 0, 0)
    return res
};
let backtracking = function (s, startIndex, pointNum) {
    // 终止条件
    if (pointNum === 3) {
        if (isValid(s, startIndex, s.length - 1)) {
            res.push(s)
        }
        return
    }
    // 逻辑处理
    for (let i = startIndex; i < s.length; i++) {
        if (isValid(s, startIndex, i)) {
            let lst = s.toString().split('')
            lst.splice(i + 1, 0, '.')
            s = lst.join('')
            pointNum++
            backtracking(s, i + 2, pointNum)
            pointNum--
            let tem = s.toString().split('')
            tem.splice(i + 1, 1)
            s = tem.join('')
        }
    }
}
let isValid = function (s, start, end) {
    if (start > end) {
        return false
    }
    if (s[start] === '0' && start !== end) {
        return false
    }
    let num = 0;
    for (let i = start; i <= end; i++) {
        if (s[i] > 9 || s[i] < 0) {
            return false
        }
        num = num * 10 + (s[i] - 0)
        console.log(num)
        if (num > 255) {
            return false
        }
    }
    return true
}

console.log(restoreIpAddresses('25525511135'))