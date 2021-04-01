/**
 * 给定一个正整数 n， 生成一个包含 1 到 n*n 所有元素， 且元素按顺时针顺序螺旋排列的正方形矩阵。
 * 每一行的遍历区间要保持一致（左开右闭或者左闭右开）[) (]
 *  上边 从左到右
 *  右边 从上到下
 *  下边 从右到左
 *  左边 从下到上
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let res = []
    for (let i = 0; i < n; i++) {
        res[i] = []
    }
    let loop = parseInt(n / 2); // 循环的圈数
    let startX = 0,
        startY = 0
    let offset = 1
    let count = 1
    let i = 0,
        j = 0;
    while (loop) {
        i = startX;
        j = startY
        // 上边
        for (j = startY; j < n + startY - offset; j++) {
            res[startX][j] = count++
        }
        // 右边
        for (i = startX; i < n + startX - offset; i++) {
            res[i][j] = count++
        }
        // 下边
        for (; j > startY; j--) {
            res[i][j] = count++
        }
        // 左边
        for (; i > startX; i--) {
            res[i][j] = count++
        }
        loop--
        startX++
        startY++
        offset += 2
    }
    let mid = Math.floor(n / 2)
    if (n % 2) {
        res[mid][mid] = count++
    }
    return res
};

console.log(generateMatrix(3))