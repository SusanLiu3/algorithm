function insertionSort(list) {
    // 主要找待插入元素真正放置的位置,默认第一个元素是有序的
    for (let i = 1; i < list.length; i++) {
        const temp = list[i]
        let j = i
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
