/**
 * 输入一个矩阵， 按照从外向里以顺时针的顺序依次打印出每一个数字
 */
// 1  2  3  4
// 5  6  7  8
// 8  10 11 12
// 13 14 15 16
// 打印 1、2、3、4、8、12、16、15、14、13、9、5、6、7、11、10
function printMatrix(numbers, columns, rows) {
    if (!numbers || columns <= 0 || rows <= 0) {
        return
    }
    let start = 0;
    while (columns >= start * 2 && rows >= start * 2) {
        print(numbers, start, columns, rows)
        start++
    }
}

function print(numbers, start, columns, rows) {
    let endX = columns - 1 - start
    let endY = rows - 1 - start
    // 从左到右打印
    for (let i = start; i <= endX; i++) {
        console.log(numbers[start][i])
    }
    // 从上到下打印
    if (start < endY) {
        for (let i = start + 1; i <= endY; i++) {
            console.log(numbers[i][endX])
        }
    }
    // 从右到左打印
    if (start < endX && start < endY) {
        for (let i = endX - 1; i >= start; i--) {
            console.log(numbers[endY][i])
        }
    }
    // 从下到上打印
    if (start < endX && start < endY - 1) {
        for (let i = endY - 1; i >= start + 1; i--) {
            console.log(numbers[i][start])
        }
    }
}