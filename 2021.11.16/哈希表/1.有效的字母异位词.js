/**
 * 242. 有效的字母异位词
 * 给定两个字符串 s 和 t， 编写一个函数来判断 t 是否是 s 的字母异位词。
 * 注意： 若 s 和 t 中每个字符出现的次数都相同， 则称 s 和 t 互为字母异位词。
 * 示例 1: 输入: s = "anagram", t = "nagaram"
          输出: true
 * 示例 2: 输入: s = "rat", t = "car"
          输出: false
 *  将 s 中的字母以字母为键出现的次数为值存为Map;
    然后遍历t字符串，出现在上面map中的字母对应的值--，如果不存在  直接返回false
    最后遍历map  如果有不为0的说明 不是字母异位词
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const m = new Map() // 定义一个map
    // 将s字符串以字母为键 出现的次数为值，存于map中
    for (const i of s) {
        let val = m.get(i) || 0
        val++
        m.set(i, val)
    }
    // 判断t 中的字母是否在map中存在，如果不存在，直接返回false;如果存在，对应的值减去1
    for (const i of t) {
        const val = m.get(i)
        if (!val) {
            return false
        }
        m.set(i, val - 1)
    }
    // 判断map 中是否存在大于0 的值，如果存在，说明s和t 不是异位词
    for (const i of m.values()) {
        if (i > 0) {
            return false
        }
    }
    return true
};
