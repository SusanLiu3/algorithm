/**
 * 冒泡排序原理:
 * 1、比较相邻元素，如果第一个比第二个大，则进行交换
 * 2、对每一对相邻元素做此操作
 * 3、针对每一个元素重复上述过程，除了最后一个
 */
function bubbleSort(list) {
  if (!list || list.length === 0) {
    return list;
  }
  for (let i = 0; i < list.length - 1; i++) {
    let flag = true; // 标识此次循环是否交换的标识
    for (let j = 0; j < list.length - 1; j++) {
      if (list[j] > list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
        flag = false;
      }
    }
    if (flag) {
      break;
    }
    console.log(`第${i}轮遍历:${list.join('、')}`);
  }
  return list;
}

// 第0轮遍历:1、3、5、7、2、9
// 第1轮遍历:1、3、5、2、7、9
// 第2轮遍历:1、3、2、5、7、9
// 第3轮遍历:1、2、3、5、7、9

console.log(bubbleSort([3, 1, 7, 5, 9, 2]));

console.log(bubbleSort([1,2,3,4,5]));
