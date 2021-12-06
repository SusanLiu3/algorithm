/**
 * 344. 反转字符串
 * 编写一个函数， 其作用是将输入的字符串反转过来。 输入字符串以字符数组 char[] 的形式给出。
 不要给另外的数组分配额外的空间， 你必须原地修改输入数组、 使用 O(1) 的额外空间解决这一问题
 */
var reverseString = function (s) {
    // 双指针，分别指向头部和尾部
    // 双指针，
    let left = 0,
        right = s.length - 1
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]]
        left++
        right--
    }
    return s
}