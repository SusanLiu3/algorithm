/**
 * 请实现一个函数， 把字符串 s 中的每个空格替换成 "%20"。
 */
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            count++;
            continue
        };
    }
    let res = new Array(s.length + count * 2)
    let j = res.length - 1
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i]!=' ') {
            res[j--] = s[i]
        } else {
            res[j] = '0'
            res[j - 1] = '2'
            res[j - 2] = '%'
            j = j - 2
        }
    }
    return res.join('')
};