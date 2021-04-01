/**
 * 给定一个排序数组和一个目标值， 在数组中找到目标值， 并返回其索引。
 *  如果目标值不存在于数组中， 返回它将会被按顺序插入的位置
 */

/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * 方法1 暴力求解
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let len = nums.length
    for (let i = 0; i < len; i++) {
        // 当目标值和元素相等时
        // 当目标值在元素的左边时
        if (nums[i] >= target) {
            return i
        }
    }
    return len
};
/**
 * 二分查找:排序数组
 * 时间复杂度:O(logn)
 * 空间复杂度:O(1)
 * @param {*} nums 
 * @param {*} target 
 */
var searchInsert2 = function (nums, target) {
    let left = 0;
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.ceil(left + (right - left) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
};

console.log(searchInsert2([1, 3, 5, 6], 5))