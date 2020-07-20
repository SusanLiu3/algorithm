/**
 * 写一个函数， 输入n， 求斐波那契（ Fibonacci） 数列的第n项。 斐波那契数列的定义如下：
 * f(n)={
 *  0   n=0
 *  1   n=1
 *  f(n-1)+f(n-2)  n>1
 * }
 */

// 简单粗暴解决

function FibonacciTest(n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    return FibonacciTest(n - 1) + FibonacciTest(n - 2)
}
// 时间复杂度O(n)
function Fibonacci(n) {
    let res = {
        0: 0,
        1: 1
    }
    if (n < 2) {
        return res[n]
    }
    let result = 0,
        prev = 0,
        next = 1;
    for (i = 2; i <= n; i++) {
        result = prev + next;
        prev = next
        next = result
    }
    return result
}
// console.log(Fibonacci(2))
console.log(Fibonacci(3))