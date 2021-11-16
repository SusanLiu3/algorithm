/**
 * 给你一个数组 nums 和一个值 val， 你需要 原地 移除所有数值等于 val 的元素， 并返回移除后数组的新长度。
 * 不要使用额外的数组空间， 你必须仅使用 O(1) 额外空间并原地修改输入数组
 * 思路：双指针；一个指针用于遍历数组（快指针），
 * 另外一个慢指针，当元素不等于目标值时，移动慢指针
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let slowIndex = 0;
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if (nums[fastIndex] !== val) { // 当不等于目标值时，移动慢指针
            nums[slowIndex++] = nums[fastIndex]
        }
    }
    return slowIndex
};