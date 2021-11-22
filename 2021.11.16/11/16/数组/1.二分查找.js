/**
 * 704 给定一个 n 个元素有序的（ 升序） 整型数组 nums 和一个目标值 target， 
 * 写一个函数搜索 nums 中的 target， 如果目标值存在返回下标， 否则返回 - 1
 * 二分法前提：排序数组；无重复元素
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const middle = parseInt((left + right) / 2)
        if (target > nums[middle]) {
            left = middle + 1
        } else if (target < nums[middle]) {
            right = middle - 1
        } else {
            return middle
        }
    }
    return -1
};