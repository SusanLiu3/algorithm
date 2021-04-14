/**
 * 有N件物品和一个最多能被重量为W 的背包。 第i件物品的重量是weight[i]， 得到的价值是value[i]。 
 * 每件物品只能用一次， 求解将哪些物品装入背包里物品价值总和最大
 */
let weightBag = function () {
    let weight = [1, 3, 4]
    let value = [15, 20, 30]
    let bagWeight = 4
    let dp = new Array(weight.length)
    // dp[i][j] 表示从0-i 个物品中任意取，放进重量为j的背包里的价值
    for (let i = 0; i < weight.length; i++) {
        dp[i] = new Array(bagWeight + 1).fill(0)
    }
    for (let i = bagWeight; i >= weight[0]; i--) {
        dp[0][i] = dp[0][i - weight[0]] + value[0]
    }

    for (let i = 1; i < weight.length; i++) {
        for (let j = 0; j <= bagWeight; j++) {
            if (j < weight[i]) {
                dp[i][j] = dp[i - 1][j]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
            }
        }
    }
    return dp[weight.length - 1][bagWeight]
}

let weightBag2 = function () {
    let weight = [1, 3, 4]
    let value = [15, 20, 30]
    let bagWeight = 4
    let dp = new Array(bagWeight + 1).fill(0)
    for (let i = 0; i < weight.length; i++) {
        for (let j = bagWeight; j >= weight[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
        }
    }
    return dp[bagWeight]
}
console.log(weightBag2())