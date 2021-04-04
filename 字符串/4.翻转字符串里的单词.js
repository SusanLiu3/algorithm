/**
 * 给定一个字符串， 逐个翻转字符串中的每个单词。
 * 输入: "the sky is blue"
 * 输出: "blue is sky the"
 */
/**
 * 移除多余空格
 * 反转整个字符串
 * 反转单词
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = removeExtractSpace(s) // 去掉多余空格
    s=reverse(s, 0, s.length - 1) // 反转整个字符串
    // 反转单个单词
    let start = 0; // 单词起始位置
    let end = 0; // 单词结束位置
    let flag = false; // 是否进入单词区域
    for (let i = 0; i < s.length - 1; i++) {
        if (!flag || (s[i] !== ' ' && s[i] === ' ')) {
            start = i // 单词起始位置
            flag = true
        }
        // 单词后由空格  
        if (flag && s[i] === ' ' && s[i - 1] !== " ") {
            end = i - 1
            entry = false; // 结束单词区间
            s=reverse(s, start, end)
            console.log(s,'****')
        }
        // 最后一个单词结尾处 没有空格
        if (flag && i === s.length - 1 && s[i - 1] !== ' ') {
            end = i
            entry = false; // 结束单词区间
            s=reverse(s, start, end)
        }
    }
    return s;
};
/**
 * 双指针
 * 移除多余空格
 * @param {*} s 
 */
let removeExtractSpace = function (s) {
    let fastIdx = 0,
        slowIdx = 0;
    // 去掉开头的空格
    while (fastIdx < s.length && s[fastIdx] === ' ') {
        fastIdx++
    }
    let res = []
    // 中间空格
    for (; fastIdx < s.length; fastIdx++) {
        if (fastIdx > 0 && s[fastIdx] === s[fastIdx - 1] && s[fastIdx] === ' ') {
            continue
        } else {
            res[slowIdx++] = s[fastIdx]
        }
    }
    // 末尾的空格
    if (slowIdx - 1 > 0 && res[slowIdx - 1] === ' ') {
        res.length = res.length - 1
    }
    return res.join('')
}
let reverse = function (s, start, end) {
    let list = s.split('')
    let i = start
    let j = end
    while (i < j) {
        [list[i], list[j]] = [list[j], list[i]]
        i++;
        j--
    }
    return list.join('')
}


function revertWords(s) {
    let start = 0;
    let end = s.length - 1
    let res = []
    let word = ''
    // 去除开头空格
    while (start < end && s[start] === ' ') {
        start++
    }
    // 去除结尾空格
    while (end > 0 && start < end && s[end] === ' ') {
        end--
    }
    while (start <=end) {
        if (s[start] === ' ' && word) {
            res.unshift(word)
            word = ''
        } else if (s[start]!==' ') {
            word += s[start]
        }
        start++
    }
    // 最后一个单词
    res.unshift(word)
    return res.join(' ')
}
console.log(revertWords("the sky is blue "))