function selectSort(list) {
    for (let i = 0; i < list.length; i++) {
        // 假设当前元素最小
        let minIdx = i
        // 找出数组剩余元素比假定的元素还小的元素索引
        for (let j = i; j < list.length; j++) {
            if (list[j] < list[minIdx]) {
                minIdx = j
            }
        }
        // 和当前的交换
        const temp = list[i]
        list[i] = list[minIdx]
        list[minIdx] = temp
    }
    return list
}

console.log(selectSort([6,2,4,1,8,9,11]))