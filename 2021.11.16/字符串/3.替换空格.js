/**
 * 剑指Offer 05. 替换空格
 * 请实现一个函数， 把字符串 s 中的每个空格替换成 "%20"。
   示例 1： 输入： s = "We are happy."
   输出： "We%20are%20happy."
   双指针法
 */
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    // 1. 计算字符串中空格的大小size
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            count++
        }
    }
    // 2. 创建一个size大小的数组
    const res = [] // 去掉空格的length
    // 3. 定义指针j 指向字符串末尾
    let j = s.length + count * 2 - 1
    // 4. 从尾部开始遍历字符串，
    for (let i = s.length - 1; i >= 0; i--) {
        // 如果遇到空格，就将%20 分别赋值给 j-2,j-1,j 对应的j 往前移动三步
        if (s[i] === ' ') {
            res[j] = 0
            res[j - 1] = 2
            res[j - 2] = '%'
            j -= 3
        } else {
            // 反之 直接将索引i 处的值，赋给J
            res[j--] = s[i]

        }
    }
    return res.join('')
};