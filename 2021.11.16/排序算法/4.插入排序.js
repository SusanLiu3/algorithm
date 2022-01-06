function insertionSort(list) {
    // 主要找待插入元素真正放置的位置,默认第一个元素是有序的
    for (let i = 1; i < list.length; i++) {
        const temp = list[i]
        let j = i
        // 假设 0 - j-1 已经排序（从小到大）
        // 此时 0 - j-1 比当前元素大，那么需要将 0 - j-1 中的元素往前移动
        // 来寻找当前元素应该在 0 - j-1 这个排序好了的数组中的位置
        while (j > 0 && list[j - 1] > temp) {
            list[j] = list[j - 1]
            j--
        }
        list[j] = temp
    }
}
const list = [6, 2, 4, 1, 8, 9, 11]
insertionSort(list)
console.log(list)
