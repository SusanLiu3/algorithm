/**
 * 34 给定一个按照升序排列的整数数组 nums， 和一个目标值 target。 
 * 找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target， 返回[-1, -1]
 * 思路：将问题分解，分别查找左边界和右边界
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
    const leftIndex = searchLeftIndex(nums, target)
    const rightIndex = searchRightIndex(nums, target)
    if (leftIndex === -2 || rightIndex === -2) {
        return [-1, -1]
    }
    if (rightIndex - leftIndex > -1) {
        return [leftIndex, rightIndex]
    }
    return [-1, -1]
};

const searchLeftIndex = function (nums, target) {
    let left = 0;
    let right = nums.length - 1
    let leftIndex = -2
    while (left <= right) {
        const mid = parseInt(left + (right - left) / 2)
        if (target <= nums[mid]) {
            right = mid - 1 // target 在 [left,mid-1]区间中
            leftIndex = right + 1 //需要+ 1
        } else {
            left = mid + 1
        }
    }
    return leftIndex
}

const searchRightIndex = function (nums, target) {
    let left = 0;
    let right = nums.length - 1
    let rightIndex = -2
    while (left <= right) {
        const mid = parseInt(left + (right - left) / 2)
        if (target >= nums[mid]) { // target 在[mid,right]区间
            left = mid + 1
            rightIndex = left - 1 // 需要-1
        } else {
            right = mid - 1
        }
    }
    return rightIndex
}