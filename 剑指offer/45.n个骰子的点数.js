/**
 * 把n个骰子扔在地上， 所有骰子朝上一面的点数之和为s。 输入n， 打印出s的所有可能的值出现的概率
 */
/**
 * 1. total(n,s) 表示n个骰子出现次数为s的个数
 * 2. total(n,s)+=total(n-1,s-1) 当前n个骰子出现的点数之和等于n-1个骰子出现s-1点数之和 加上本次出现的点数
 * @param {*} n 
 */
function printProbability(n) {
    let list = []
    // 初始化List
    for (let i = 1; i < n + 1; i++) {
        list[i] = []
        for (let j = i; j < 6 * n + 1; j++) {
            list[i][j] = 0
        }
    }
    // 1个骰子出现的点数次数是1
    for (let i = 1; i <= 6; i++) {
        list[1][i] = 1
    }

    for (let i = 2; i <= n; i++) { // 骰子个数
        for (let j = i; j < 6 * n + 1; j++) { // 点数之和
            for (let m = 1; m <= 6; m++) { // 点数
                if (j - m < i - 1) {
                    break
                }
                list[i][j] += list[i - 1][j - m]
            }
        }
    }
    let total = Math.pow(6, n)
    let res = []
    for (let i = n; i < 6 * n + 1; i++) {
        let probability = list[n][i]/total
        res[i-n]=probability
    }
    console.log(res)
}

printProbability(2)