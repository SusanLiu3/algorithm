/**
 * 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。 
 * 请定义一个函数实现字符串左旋转操作的功能。 比如， 输入字符串 "abcdefg"
 和数字2， 该函数将返回左旋转两位得到的结果 "cdefgab"
 */
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    // 先旋转0-n-1
    s=reverse(s, 0, n - 1)
    // 旋转n-s.length-1
    s=reverse(s, n, s.length - 1)
    // 整个字符串旋转
    s=reverse(s, 0, s.length - 1)
    return s
};
let reverse = function (s, start, end) {
    let list=s.split('')
    let i = start
    let j = end
    while (i < j) {
        [list[i], list[j]] = [list[j], list[i]]
        i++;
        j--
    }
    return list.join('')
}