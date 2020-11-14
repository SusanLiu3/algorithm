/**
 * 快速排序(快，效率高，处理数据)
 * 原理: 
 * ① 从数列中挑出一个元素作为基准
 * ② 比这个基准小的放在其左边，比它大的放在右边
 * ③ 递归地把小于基准和大于基准数进行排序
 */
/**
 * 会占用大量的内存
 * @param {*} list 
 */
function quickSort(list) {
    if (list.length < 2) {
        return list
    }
    let base = list[0]
    let left = [],
        right = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] < base) {
            left.push(list[i])
        } else if (list[i] > base) {
            right.push(list[i])
        }
    }
    return quickSort(left).concat([base], quickSort(right))
}
let list = [5, 1, 7, 3, 9, 8, 4, 10, 2]
console.log(quickSort(list))
/**
 * 双指针实现 待定
 * @param {*} list 
 */
function quickSortTwo(list) {
    if (list.length < 2) {
        return
    }
    let start = 0;
    let end = list.length - 1
    let base = list[list.length / 2]
    while (start < end) {
        while (end < list.length / 2 && list[end] > base) {
            end--
        }

    }
}