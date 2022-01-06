function quickSort(list, s, e) {
    if (s < e) {
        const pivot = divide(list, s, e) // 拿到基准值
        quickSort(list, s, pivot)
        quickSort(list, pivot + 1, e)
    }
    return list

}
// 二分法：比基准值小的逻到左边  比基准值大的往右
function divide(list, start, end) {
    // 1. 定义一个基准值 选择最后一个元素
    const pivotItem = list[end - 1]
    // 2. 定义一个指针
    let i = start - 1  // 分割指针，索引比i大的元素 比基准元素大
    // 3. 遍历数组
    for (let j = start; j < end; j++) {
        // 比较当前元素和基准值
        // 如果当前元素比基准值小，那么指针向前移动一位，同时和当前元素交换
        if (list[j] < pivotItem) {
            i++;
            swap(list,j,i)
        }
    }
    // 将基准值和指针前一位进行交换
    swap(list,i+1,end-1)
    return i + 1
}

function swap(A,i,j){
     const t = A[i];
     A[i] = A[j];
     A[j] = t;
}

console.log(quickSort([9, 25, 3, 7, 11, 2, 44], 0, 7))