/**
 * 输入一个正整数数组， 把数组里所有数字拼接起来排成一个数， 打印能拼接出的所有数字中最小的一个。
 *  例如输入数组 {
     3,
     32,
     321
 }，
 则打印出这3个数字能排成的最小数字321323
 */
// 参考http://www.conardli.top/docs/dataStructure/%E6%95%B0%E7%BB%84/%E6%8A%8A%E6%95%B0%E7%BB%84%E6%8E%92%E6%88%90%E6%9C%80%E5%B0%8F%E7%9A%84%E6%95%B0.html#%E9%A2%98%E7%9B%AE
/**
 * 定义一种新的排序方式
 * a和b 有两种组合方式 : ab ,ba,如果ab<ba ，那么 ab应该排在ba前面，反之后面
 * 回顾 js中sort 排序 如果返回值小于0，则num1应该排在num2前面,如果返回值大于0，则num1排在num2后面
 */
function minCombinedNum(list) {
    if (!list || list.length === 0) {
        return 0
    }
    return list.sort((a, b) => {
        return a - b
    }).join('')
}
console.log(minCombinedNum([12,34,21]))