/**
 * 给定一个字符串， 请你找出其中不含有重复字符的 最长子串 的长度。
 */
// 滑动窗口
function lengthOfLongestStr(s) {
    let max = 0
    for (let i = 0, j = 0; j < s.length; j++) {
        let index = s.substring(i, j).indexOf(s[j]) // 判断字符串是否存在和索引j处相同的字符
        if (index > 0) {
            i = i + index + 1 ;// 移动第一个指针
        }
        max=Math.max(max,j-i+1) // 比较最大值
    }
    return max
}
/**
 * 使用map存储值和索引
 * @param {*} s 
 */
function lengthOfLongestStr2(s) {
        let map =new Map()
        let max=0
        for(let i =0,j=0;j<s.length;j++){
            if (map.has(s[j])){
                i=Math.max(map.has(s[j])+1,i)
            }
            max=Math.max(max,j-i+1)
            map.set(s[j],j)
        }
        return max
}
console.log(lengthOfLongestStr2('abcbb'))
