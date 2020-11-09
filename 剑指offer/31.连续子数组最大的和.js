/**
 * 输入一个整型数组， 数组里有正数也有负数。 
 * 数组中一个或连续的多个整数组成一个子数组。 求所有子数组的和的最大值。 要求时间复杂度为O（ n）
 */
/**
 * 动态规划
 * 如果以f(k)表示第k个数字结尾的子数组的最大和
 * 那么就是要求出 max[f(k)]
 * 如果f(k-1)小于0，那么f(k) = data[k]则以第k数字作为 f(k)
 * 如果f(k-1)>0,那么f(k)=f(k-1)+data[k]
 * @param {*} list 
 */
function greastSumOfSubArray(list) {
    if (!list || list.length === 0) {
        return
    }
    let len = list.length

    let curSum = 0; // f(k-1)
    let curGreastSum = 0 // max[f(k)]
    let subList = []
    for (let i = 0; i < len; i++) {
        if (curSum <= 0) {
            curSum = list[i]
            subList = []
            subList.push(list[i])
        } else {
            curSum += list[i]
            subList.push(list[i])
        }
        if (curGreastSum < curSum) {
            curGreastSum = curSum
        }
    }
    let last=subList[subList.length-1]
    if (last<0){
        subList.pop()
    }
    return {
        curGreastSum,
        subList
    }
}
console.log(greastSumOfSubArray([1, -2, 3, 10, -4, 7, 2, -5]))