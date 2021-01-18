/**
 * 在字符串中找出第一个只出现一次的字符。 如输入 "abaccdeff"，则输出 'b'
 */
function firstNotRepeatChart(str) {
    let res = ''
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++
        } else {
            obj[str[i]] = 1
        }
    }
    let keys = Object.keys(obj)
    keys.some(i => {
        if (obj[i] === 1) {
            res = i;
            return true
        }
        return false
    })
    return res
}

console.log(firstNotRepeatChart('abaccdeff'))