/**
 * 为了不在赎金信中暴露字迹， 从杂志上搜索各个需要的字母， 组成单词来表达意思。
 给你一个赎金信(ransomNote) 字符串和一个杂志(magazine) 字符串， 判断 ransomNote 能不能由 magazines 里面的字符构成。
 如果可以构成， 返回 true； 否则返回 false。
 magazine 中的每个字符只能在 ransomNote 中使用一次。
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    // 判断magazine 中的字符是否可以组成ransomNote ，
    // 因为给定的字符都是字母，所以可以借助 Unicode 编码来辅助解题
    // 用到的两个方法：
    // ① 将字母转成对应的Unicode charCodeAt()  'a'.charCodeAt()  97
    // ② 将 Unicode 转对应的字母 String.fromCharCode(数字) String.fromCharCode(97)  'a'
    // 1. 首先遍历 magazine 统计其每个字符及出现的个数
    // 这里为什么会声明一个26长度的数组呢？
    // 因为26个字母，因为是用字母的Unicode 减去 a 的Unicode值 差值出现的最大值可能是26 
    // 为了规避索引溢出，所以声明26个长度的数组 
    const existList = new Array(26).fill(0)
    const base = 'a'.charCodeAt()
    for (const i of magazine) {
        existList[i.charCodeAt() - base]++
    }
    // 2. 然后遍历 ransomNote 判断字符是否在ransomNote 中出现
    for (const i of ransomNote) {
        existList[i.charCodeAt() - base]--
        if (existList[i.charCodeAt() - base] < 0) {
            return false
        }
    }
    return true
};