/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数
 */
var moveToRightK=function(arr,k){
    if (k===0){
        return arr
    }
    if (k>arr.length){
        k=k%arr.length
    }
    let curArr=arr.splice(arr.length-k,k)
    return [...curArr,...arr]
}
console.log(moveToRightK([1,2,3,4,5,6,7] ,17))