/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    // 递推公式 dp[i]=dp[i-1]+dp[i-2]
    if (n < 2) {
        return n
    }
    let dp = []
    dp[0] = 0
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};