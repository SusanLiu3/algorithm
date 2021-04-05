/**
 * 给定一个 haystack 字符串和一个 needle 字符串， 
 * 在 haystack 字符串中找出 needle 字符串出现的第一个位置(从0开始)。 如果不存在， 则返回 - 1。
 */
/**
 * KMP 算法：当字符不匹配时，可以记录匹配的一些内容，避免从头再做匹配
 * next数组：最长相等前后缀
 *          初始化next 数组
 *          处理前后缀相等情况，处理前后缀不相等情况
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length===0){
        return 0
    }
    let list = next(needle)
    let j = 0
    for (let i = 0; i < haystack.length; i++) {
        while (j > 0 && haystack[i] !== needle[j]) {
            j = list[j - 1]
        }
        if (haystack[i] === needle[j]) {
            j++
        }
        if (j === needle.length ) {
            return i - needle.length+1
        }
    }
    return -1
};

let next = function (pattern) {
    let res = []
    res[0] = 0;
    let j = 0; // 前缀末尾，也代表着之前子串前后缀相等的长度
    for (let i = 1; i < pattern.length; i++) {
        // 如果 前后缀不相等，则向前回溯
        while (j > 0 && pattern[i] !== pattern[j]) {
            j = res[j - 1]
        }
        if (pattern[i] === pattern[j]) {
            j++
        }
        res[i] = j
    }
    return res
}
console.log(strStr('hello','ll'))