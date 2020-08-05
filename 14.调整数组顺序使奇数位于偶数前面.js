/**
 * 输入一个整数数组， 实现一个函数来调整该数组中数字的顺序， 
 * 使得所有奇数位于数组的前半部分， 所有偶数位于数组的后半部分
 */
/**
 * @param {数组} arr 
 */
 function reOrder(arr){
     if (arr.length===0){
         return []
     }
     let start=0; // 指向第一个元素
     let end=arr.length-1
     while(start<end){
         // 循环遍历找到左部分的偶数
         while(start<end && arr[start]%2!=0){
            start++
         }
         while(start<end && arr[end]%2===0){
             end--
         }
         // 交换
         if (start<end){
             [arr[start],arr[end]]=[arr[end],arr[start]]
         }
     }
     return arr
 }

 console.log(reOrder([1,2,3,4,5]))