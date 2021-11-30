/**
 * 541. 反转字符串II
 * 给定一个字符串 s 和一个整数 k， 你需要对从字符串开头算起的每隔 2 k 个字符的前 k 个字符进行反转。
   如果剩余字符少于 k 个， 则将剩余字符全部反转。
   如果剩余字符小于 2 k 但大于或等于 k 个， 则反转前 k 个字符， 其余字符保持原样。
   示例:输入: s = "abcdefg", k = 2
   输出: "bacdfeg"
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const swap = function (str, s, e) {
    const temp = str.split('')
    while (s < e) {
        [temp[s], temp[e]] = [temp[e], temp[s]]
        s++
        e--
    }
    return temp.join('')
}
var reverseStr = function (s, k) {
    // for 循环遍历 s , 可以让 索引 i 每次+ 2k
    // 然后比较 s.length - i 和 k 的关系
    for (let i = 0; i < s.length; i += 2 * k) {
        if (s.length - i >= k) {
            // reverse
            s = swap(s, i, i + k - 1)
            continue
        }
        // 反转全部字符串
        s = swap(s, i, s.length - 1)
    }
    return s
};