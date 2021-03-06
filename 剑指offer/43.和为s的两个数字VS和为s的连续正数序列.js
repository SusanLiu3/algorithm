/**
 * 输入一个递增排序的数组和一个数字s， 在数组中查找两个数， 使得它们的和正好是s。
 *  如果有多对数字的和等于s， 输出任意一对即可
 */
/**
 * 双指针
 * @param {}} list 
 * @param {*} total 
 */
function findNumsWithSum(list, total) {
    let start = 0;
    let end = list.length - 1
    let num1, num2
    while (start < end) {
        let sum = list[start] + list[end]
        if (sum > total) {
            end--
        } else if (sum < total) {
            start++
        } else {
            num1 = list[start]
            num2 = list[end]
            break;
        }
    }
    return [num1, num2]
}
console.log(findNumsWithSum([1, 2, 4, 7, 11, 15], 15))

function findContinuousSequence(total) {
    let num1 = 1;
    let num2 = 2;
    let mid = (total + 1) / 2
    let curSum = num1 + num2
    if (total < curSum) {
        return
    }
    while (num1 < mid) {
        if (curSum === total) {
            console.log(num1, num2)
        }
        while (curSum > total && num1 < mid) {
            curSum -= num1
            num1++
            if (curSum === total) {
                console.log(num1, num2)
            }
        }
        num2++
        curSum += num2;
    }
}
findContinuousSequence(9)