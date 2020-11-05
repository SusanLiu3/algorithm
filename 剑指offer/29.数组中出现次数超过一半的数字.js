/**
 * 数组中有一个数字出现的次数超过数组长度的一半， 请找出这个数字。 例如输入一个长度为9的数组 {
     1, 2, 3, 2, 2, 2,  5, 4, 2 }。
 由于数字2在数组中出现了5次， 超过数组长度的一半， 因此输出2
 */
// 方法1 创建一个hash对象用于存储 数组中出现的元素（键）和次数（值）
function moreThanHalfLength(list) {
    if (!list || Array.isArray(list) || list.length === 0) {
        return
    }
    let len = list.length
    let countMap = {}
    for (let i = 0; i < len; i++) {
        if (countMap[list[i]]) {
            countMap[list[i]]++
        } else {
            countMap[list[i]] = 1
        }
        if (countMap[list[i]] > len / 2) {
            return list[i]
        }
    }
}
/**
 * 声明2个额外的变量，一个用于存储元素，另一个存储元素出现的次数
 * 如果下一个元素和这个相同，次数+1
 * 如果不同，则次数-1
 * 如果次数为0，则需要保持下一个数字，次数设为1
 * 如果寻找的元素比其他所有元素出现的次数都多，那么最后肯定是把次数设为1对应的元素
 * @param {数组} list 
 */
function moreThanHalfLengthTwo(list) {
    if (!list || Array.isArray(list) || list.length === 0) {
        return
    }
    let len = list.length
    let result = 0
    let count = 0
    for (let i = 0; i < len; i++) {
        if (count === 0) {
            result = list[i]
            count = 1
        } else if (list[i] === result) {
            count++
        } else {
            count--
        }
    }
    count = 0
    for (let i = 0; i < len; i++) {
        if (list[i] === result) {
            count++
        }
    }
    return count > len / 2 ? result : 0
}
let list = [1, 3, 3, 3, 3, 3, 2]
console.log(moreThanHalfLength(list))
console.log(moreThanHalfLengthTwo(list))