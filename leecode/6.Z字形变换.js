/**
 * 将一个给定字符串 s 根据给定的行数 numRows， 以从上往下、 从左到右进行 Z 字形排列。

 比如输入字符串为 "PAYPALISHIRING"
 行数为 3 时， 排列如下：
 P A H N
 A P L S I I G
 Y I R
 之后， 你的输出需要从左往右逐行读取， 产生出一个新的字符串， 比如： "PAHNAPLSIIGYIR"
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (!s || s.length === 0 || numRows === 1) {
        return s
    }
    let list = []
    // 初始化
    for (let i = 0; i < numRows; i++) {
        list[i] = []
    }
    // 遍历方向；1 向下遍历 -1 向上遍历
    let dir = 1;
    let index = 0
    for (let i of s) {
        console.log(index,'***')
        list[index].push(i)
        index += dir
        // 方向变化的条件
        if (index === 0 || index === numRows-1) {
            dir = -dir
        }
    }
    let res = ''
    for (let i of list) {
        res += i.join('')
    }
    return res
};
console.log(convert('AB', 1))