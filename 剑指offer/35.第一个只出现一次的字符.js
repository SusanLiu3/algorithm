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

// 举一反三
/**
 * 定义一个函数， 输入两个字符串， 从第一个字符串中删除在第二个字符串中出现过的所有字符。 
 * 例如从第一个字符串 "We are students. "中删除在第二个字符串 "aeiou" 中出现过的字符得到的结果是 "W r Stdnts."
 */

function delChartInSecondChart(str1, str2) {
    let list1 = str1.split('')

    return list1.filter(i => str2.indexOf(i) === -1).join('')
}

console.log(delChartInSecondChart('We are students', 'aeiou'))



/**
 * 定义一个函数， 删除字符串中所有重复出现的字符。 例如输入 "google"，删除重复的字符之后的结果是 "gole"
 */

function delRepeatChart(str) {
    let ret = []
    for (let i = 0; i < str.length; i++) {
        if (ret.indexOf(str[i]) === -1) {
            ret.push(str[i])
        }
    }
    return ret.join('')
}
console.log(delRepeatChart('google'))

/**
 * 在英语中， 如果两个单词中出现的字母相同， 并且每个字母出现的次数也相同， 那么这两个单词互为变位词（ Anagram）。 
 * 例如silent与listen、 evil与live等互为变位词。 
 * 请完成一个函数， 判断输入的两个字符串是不是互为变位词
 */

function isAnagram(str1, str2) {
    let flag = true
    let hash = {}
    for (let i = 0; i < str1.length; i++) {
        if (hash[str1[i]]) {
            hash[str1[i]]++
        } else {
            hash[str1[i]] = 1
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (hash[str2[i]]) {
            hash[str2[i]]--
        } else {
            hash[str2[i]] = 1
            flag = false
        }
    }
    if (!flag) {
        return flag
    }
    for (const key in hash) {
        if (hash.hasOwnProperty(key)) {
            // 如果有大于0的，则false
            if (hash[key] > 0) {
                flag = false
            }
        }
    }
    return flag
}

console.log('是否是变位数',isAnagram('silent', 'listen'))

console.log('是否是变位数', isAnagram('test', 'listen'))