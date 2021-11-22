/**
 * 59. 螺旋矩阵II给定一个正整数 n， 
 * 生成一个包含 1 到 n ^ 2 所有元素， 且元素按顺时针顺序螺旋排列的正方形矩阵。
   示例:
     输入: 3 输出: [[1, 2, 3],[8, 9, 4],[7, 6, 5]]
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let startX = 0;
    let startY = 0;
    let loop = parseInt(n / 2) // 循环次数
    let mid = parseInt(n / 2); // 中间位置 [1,1],[2,2]
    let count = 1; // 每个位置填充的数
    let offset = 1;
    let i = 0
    let j = 0;
    const res = new Array(n).fill(0).map(n => new Array(n).fill(0)) // 初始化二维数组
    while (loop--) {
        i = startX;
        j = startY
        // 从左到右 y 在变化，x 是固定的
        for (; j < startY + n - offset; j++) {
            res[startX][j] = count++
        }
        // 从上到下
        for (; i < startX + n - offset; i++) {
            res[i][j] = count++
        }
        // 从右到左
        for (; j > startY; j--) {
            res[i][j] = count++
        }

        // 从下到上

        for (; i > startX; i--) {
            res[i][j] = count++
        }
        offset += 2

        startX++
        startY++
    }
    // 处理中间的值
    if (n % 2) {
        res[mid][mid] = count++
    }
    return res
};