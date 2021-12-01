/**
 * 151. 翻转字符串里的单词
 * 给定一个字符串， 逐个翻转字符串中的每个单词。(不要使用辅助空间， 空间复杂度要求为O(1))
   示例 1：输入: "the sky is blue" 输出: "blue is sky the"
   示例 2：输入: "  hello world!  " 输出: "world! hello"
   解释: 输入字符串可以在前面或者后面包含多余的空格， 但是反转后的字符不能包括。
   示例 3：
   输入: "a good   example"
   输出: "example good a"
   解释: 如果两个单词间有多余的空格， 将反转后单词间的空格减少到只含一个
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverse = function (s, start, end) {
  const list = s.split('')
  while (start < end) {
    [list[start], list[end]] = [list[end], list[start]]
    start++
    end--
  }
  return list.join('')
}
const removeSpace = function (s) {
  let start = 0
  let end = s.length - 1
  let res = []
  // 移除前面空格
  while (start < end && s[start] === ' ') {
    start++
  }
  // 移除后面空格
  while (start < end && s[end] === ' ') {
    end--
  }
  let fast = start,
    slow = start
  // 移除中间空格
  while (fast <= end) {
    if (fast > 0 && s[fast] === s[fast - 1] && s[fast] === ' ') {
      fast++
      continue
    } else {
      res[slow++] = s[fast++]
    }
  }
  return res.join("")
}
var reverseWords = function (s) {
  // 1. 移除前后空格
  s = removeSpace(s)
  let start = 0;
  let end = s.length - 1
  // 2. 翻转字符串
  s = reverse(s, start, end)
  // 3. 翻转单词
  let tempStart = -1
  while (start <= end) {
    // 单词的标志
    if (s[start] === ' ' && tempStart >= 0) {
      s = reverse(s, tempStart, start - 1)
      tempStart = -1
      start++
      continue
    }
    // 下一个单词 开始的索引 
    tempStart < 0 && s[start] && (tempStart = start)
    // 处理最后一个结尾单词
    if (start === end && tempStart > -1) {
      s = reverse(s, tempStart, start)
    }
    start++
  }
  return s
};