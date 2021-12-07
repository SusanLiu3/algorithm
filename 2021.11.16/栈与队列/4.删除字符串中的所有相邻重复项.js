/**
 * 1047. 删除字符串中的所有相邻重复项
 * 给出由小写字母组成的字符串 S， 重复项删除操作会选择两个相邻且相同的字母， 并删除它们。
 在 S 上反复执行重复项删除操作， 直到无法继续删除。
 在完成所有重复项删除操作后返回最终的字符串。 答案保证唯一
 输入： "abbaca"
 输出： "ca"
 */
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    // 1. 声明一个栈（数组替代，先进后出）
    const res = []
    // 2. 遍历s,从数组pop一个元素，判断这个元素和字符串中的元素是否相等
    for (let i = 0; i < s.length; i++) {
        const temp = res.pop()
        if (temp && temp === s[i]) {
            // 3. 如果相等，continue
            continue
        }
        // 4. 如果不相等，将pop的元素加到数组中，同时也将字符串的元素加到数组
        temp && res.push(temp)
        res.push(s[i])
    }
    return res.join('')
};