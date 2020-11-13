/**
 * 插入排序
 * 1、将第一个元素看作是有序的，第二个到n的元素看作是无序的；
 * 2、依次遍历无序序列，每次取出一个元素插入前面有序序列的合适位置
 */

function insertSort(list) {
  if (!list || list.length === 0) {
    return list;
  }
  let len = list.length;
  let prevIndex, current;

  for (let i = 1; i < len; i++) {
    prevIndex = i - 1;
    current = list[i];
    while (prevIndex >=0 && list[prevIndex] > current) {
      // 
      

    }
  }
}
