/**
 * 归并排序 O(nlogn) 分治算法 也是一种递归排序
 * 思想：将大数组拆分成小数组，直到每个小数组只有一个位置，接着将小数组归并成大数组
 */

function mergeSort(list) {
  if (list.length === 1) {
    return list;
  }
  let mid = Math.floor(list.length / 2);
  let left = list.slice(0, mid);
  let right = list.slice(mid);
  return mergeSortProcess(mergeSort(left), mergeSort(right));
}

function mergeSortProcess(left, right) {
  let res = [],
    il = 0,
    ir = 0;
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      res.push(left[il++]);
    } else {
      res.push(right[ir++]);
    }
  }
  while(il<left.length){
    res.push(left[il++])
  }
  while(ir<right.length){
    res.push(right[ir++])
  }
  return res
}

let list = [5, 1, 7, 3, 9, 8, 4, 10, 2];

console.log(mergeSort(list))
