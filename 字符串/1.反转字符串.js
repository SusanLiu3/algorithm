/**
 * 编写一个函数， 其作用是将输入的字符串反转过来。 输入字符串以字符数组 char[] 的形式给出。
 不要给另外的数组分配额外的空间， 你必须原地修改输入数组、 使用 O(1) 的额外空间解决这一问题。
 输入：["h", "e", "l", "l", "o"] 输出：["o", "l", "l", "e", "h"]
 */
/**
 * 双指针 分别指向字符串头部和尾部 头尾交换
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let start = 0;
    let end = s.length - 1
    while (start < end) {
        // 交换
        let temp = s[start]
        s[start] = s[end]
        s[end] = temp
        start++
        end--
    }
    console.log(s)
};
reverseString('hello.')