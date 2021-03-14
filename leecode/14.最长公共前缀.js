/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀， 返回空字符串 ""。
 * 输入： strs = ["flower", "flow", "flight"]
   输出： "fl"
   输入： strs = ["dog", "racecar", "car"]
   输出： ""
   解释： 输入不存在公共前缀。
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) {
    return ''
  }
  let prefix = strs[0];
  // 遍历字符串数组
  for (let i of strs) {
    // 如果匹配不是开头，对prefix进行截取，逐步减少
    while (i.indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1)
    }
  }
  return prefix
};