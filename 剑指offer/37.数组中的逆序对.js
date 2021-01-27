/**
 * 在数组中的两个数字如果前面一个数字大于后面的数字， 则这两个数字组成一个逆序对。
 *  输入一个数组， 求出这个数组中的逆序对的总数
 * 1.归并排序
 * 2. 左边数组中逆序对
 * 3. 右边数组逆序对
 * 4. 
 */

function reversePairNums(list) {
    if (list.length === 0) {
        return 0
    }
    return sort(list, 0, list.length / 2, list.length-1)

}

function sort(list, left, mid, right,copy) {
    let res = []
    let lList = list.slice(0, mid)
    let rList=list.slice(mid)
    let leftNums = sort(lList, 0,lList.length/2,lList.length-1 )
    let rightNums = sort(rList, 0, rList.length / 2, rList.length-1)
    let nums = 0
    while (left <= mid && mid <= right) {
        if (list[left] > list[right]) {
            nums++
            res.push(list[left++])
        } else {
            res.push(list[right++])
        }
    }
    while (left <= mid) {
        res.push(list[left++])
    }
    while (mid <= right) {
        res.push(list[right++])
    }
    return leftNums+rightNums+nums

}
console.log(reversePairNums([7,5,6,4]))