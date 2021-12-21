function quickSort(list) {
    // 1. 二分法 
    // 3.1 递归的终止条件
    if (list.length<=1){
        return list
    }
    // 3.2 单层递归逻辑
    // 2.1 寻找基准点
    const pivot = parseInt((0 + list.length) / 2)
    const pivotItem = list.splice(pivot, 1)
    const left = []
    const right = []
    for (let i = 0; i < list.length; i++) {
        // 2.2 比其小的放在左边数组，比其大的放在右边数组
        if (list[i]<pivotItem){
            left.push(list[i])
        }else{
            right.push(list[i])
        }
    }
    // 3. 然后递归处理左边数组和右边数组
    const leftSort = quickSort(left)
    const rightSort = quickSort(right)
    return leftSort.concat(pivotItem).concat(rightSort)
}

console.log(quickSort([9,25,3,7,11,2,44]))