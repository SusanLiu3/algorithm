/**
 * 给定一个非空的字符串， 
 * 判断它是否可以由它的一个子串重复多次构成。 给定的字符串只含有小写英文字母， 并且长度不超过10000。
 * 输入: "abab"
   输出: True
   解释: 可由子字符串 "ab"重复两次构成。
   KMP 解法  首先算出字符串的最长公共前缀数组next ,如果next是0  肯定没有重复子串
   子串重复多次构成的条件 str.length % (str.length - next[next.length-1])===0
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let temp = (s + s).slice(1, -1)
    return temp.indexOf(s) > -1 ? true : false
};