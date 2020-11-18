/**
 * 快速排序(快，效率高，处理数据) 时间复杂度O(nlogn)
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
    return list;
  }
  let base = list[0];
  let left = [],
    right = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] < base) {
      left.push(list[i]);
    } else if (list[i] > base) {
      right.push(list[i]);
    }
  }
  return quickSort(left).concat([base], quickSort(right));
}
let list = [5, 1, 7, 3, 9, 8, 4, 10, 2];
// console.log(quickSort(list));
/**
 * 双指针实现
 * ① 选定一个基元元素 base (可以选中数组中间一个元素)
 * ② 初始化两个元素指针，分别指向 start 和 end
 * ③ 遍历左边比基准元素base大的值，右边比基准元素小的值，在start 和 end没有交互的时候，交换他们 （分组）
 * ④ 重复上述的步骤
 * @param {*} list
 */
function quickSortTwo(list, start, end) {
  if (list.length < 2) {
    return list;
  }

  // 获取左右分组的交界处index
  let index = partition(list, start, end);
  if (start < index-1) {
    quickSortTwo(list, start, index - 1);
  }
  if (index < end) {
    quickSortTwo(list, index, end);
  }
  return list;
}
function partition(list, start, end) {
  let base = list[Math.floor((start + end) / 2)];
  while (start <= end) {
    while (list[start] < base) {
      start++;
    }
    while (list[end] > base) {
      end--;
    }
    if (start <= end) {
      // 交换
      let temp = list[start];
      list[start] = list[end];
      list[end] = temp;
      start++;
      end--;
    }
  }
  console.log(list);
  return start;
}

console.log(quickSortTwo(list, 0, list.length - 1));
