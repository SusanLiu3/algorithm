function selectSort(list) {
    for (let i = 0; i < list.length; i++) {
        let minIdx = i
        // 找出最小的元素索引
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