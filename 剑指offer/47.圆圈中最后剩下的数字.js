/**
 * 0, 1, …, n - 1 这n个数字排成一个圆圈， 
 * 从数字0开始每次从这个圆圈里删除第m个数字。 求出这个圆圈里剩下的最后一个数字
 */

function lastRemaining(n, m) {
    let count = n;
    let idx = 0
    while (true) {
        let index = (idx + 1) * (m - 1) % count
    }
}