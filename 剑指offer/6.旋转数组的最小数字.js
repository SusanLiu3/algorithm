/**
 * 把一个数组最开始的若干个元素搬到数组的末尾， 我们称之为数组的旋转。 
 * 输入一个递增排序的数组的一个旋转， 输出旋转数组的最小元素。 例如数组 {3,4,5,1,2}
 为 {1,2,3,4,5}的一个旋转， 该数组的最小值为1。
 */
// 此题是二分查找的变种

function min(arr) {
    let len = arr.length;
    let index1 = 0,
        index2 = len - 1,
        midIndex = 0

    while (index1 <= index2) {
        if (index1 === index2 - 1) {
            midIndex = index2
            break
        }
        midIndex = (index1 + index2) / 2
        // 针对特殊情况做处理 [1,0,1,1,1] [1,1,1,0,1,1]这样的情况
         if (arr[midIndex] === arr[index1] && arr[index1] === arr[index2]) {
             return getMin(arr, index1, index2)
         }
        if (arr[midIndex] >= arr[index1]) {
            index1 = midIndex
        }else if (arr[midIndex] <= arr[index2]) {
            index2 = midIndex
        }
    }
    return arr[midIndex]
}

function getMin(arr, index1, index2){
    let res = arr[index1]
    for (let i = index1; i <= index2; i++) {
        if (arr[i] <res) {
            res = arr[i]
        }
    }
    return res
}

let arr = [3, 4, 5, 1, 2]
console.log(min(arr))

console.log(min([1,0,1,1,1]))