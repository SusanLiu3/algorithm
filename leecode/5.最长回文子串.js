/**
 * 给你一个字符串 s， 找到 s 中最长的回文子串
 * 输入： s = "babad"
 输出： "bab"
 解释： "aba"
 输入： s = "a"
 输出： "a"
 */
/**
 * 动态规划 dp[i][j] 表示从i - j组成的回文字符串
 * 只有dp[i+1][j-1] 是一个回文字符串并且 第i个元素 和第J个元素相同，那么dp[i][j]就是回文
 * @param {*} s 
 */
var longestPalindrome = function (s) {
    let dp = []
    let list = s.split('')
    let len = list.length
    let res=''
    // 之所以倒叙遍历 因为dp[i][j] 依赖dp[i+1][j-1]
    for (let i = len-1; i >=0; i--) {
        dp[i] = [] // 初始化数组
        // 依旧正序遍历
        for (let j = i; j < len; j++) {
            if (j-i===0){ // 同一个数
                dp[i][j]=true
            }
            else if (j-i===1){ // 相邻就直接判断两个数是否相同
                dp[i][j]=list[i]===list[j]
            }else{
                // 状态转移
                dp[i][j] = list[i] === list[j] &&dp[i + 1][j - 1] 
            }
            if (dp[i][j] && j-i+1>res.length){
                res=s.substring(i,j+1)
            }
        }
    }
    return res
}
console.log(longestPalindrome('abad'))