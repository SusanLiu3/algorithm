/**
 * 字母异位词：字母相同，排序不同
 * 输入: s = "anagram", t = "nagaram"
   输出: true
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (map.has(t[i])) {
            map.set(t[i], map.get(t[i]) - 1)
        } else {
            return false
        }
    }

    for (const i of map.values()) {
        if (i !== 0) {
            return false
        }
    }
    return true
};
console.log(isAnagram("anagram", "nagaram"))