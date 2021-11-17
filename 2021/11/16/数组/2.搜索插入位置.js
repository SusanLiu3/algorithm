/**
 * 35 给定一个排序数组和一个目标值， 在数组中找到目标值， 并返回其索引。 
 * 如果目标值不存在于数组中， 返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素
 * eg [1, 3, 5, 6], 5 返回 2
 */

/**
 * 实现1
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        // target 在所有元素之前
        // target在数组中
        // target = 数组中某个元素
        if (nums[i] >= target) {
            return i
        }
    }
    return nums.length
};

/**
 * 实现2 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert2 = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        const mid = parseInt(left + (right - left) / 2)
        if (target > nums[mid]) {
            left = mid + 1
        }else if (target<nums[mid]){
            right = mid -1
        }else {
            return mid // target命中某个元素
        }
    }
    // target 在所有元素之前
    // target 在所有元素之后
    // target 在数组中
    return right + 1
}