/**
 * 插入排序
 * 1、把第i个元素之前的(i-1)个元素看成有序的，然后比较第i个元素和前面的有序数组；
 * 2、如果没有比第i个元素大的元素，则在有序数组的第i个元素插入元素list[i]
 * 3、如果有比i大的元素，则进行交换
 * 所以for 循环从1开始
 */

function insertSort(list) {
  if (!list || list.length === 0) {
    return list;
  }
  for (let i = 1; i < list.length; i++) {
    let j = i;
    let temp = list[i]
    while (j > 0 && list[j - 1] > temp) { // 和temp作比较
      list[j] = list[j - 1] // 将较大的数赋值往后挪一位
      j--
    }
    list[j] = temp // 将第i个元素插入
  }
  return list
}
console.log(insertSort([1,3,2,5,9,6,4]))