/**
 * 选择排序
 * 1、在未排序序列中，找出最小的数 放在排序序列的初始位置
 * 2、再从剩余未排序序列中，找到最小数，放在已经排序的尾部
 * 3、重复第二步操作
 * 时间复杂度: O(n*n)
 */
function selectSort(list) {
  if (!list || list.length === 0) {
    return list;
  }
  for (let i = 0; i < list.length; i++) {
    let minIndex = i; // 最小元素键值
    for (let j = i; j < list.length; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
    }
    // 找到最小数的键 ，和i进行交换

    let temp = list[i];
    list[i] = list[minIndex];
    list[minIndex] = temp;
    console.log(`第${i}轮遍历:${list.join('、')}`);
  }
  return list
}

console.log(selectSort([3, 1, 7, 5, 9, 2]));

