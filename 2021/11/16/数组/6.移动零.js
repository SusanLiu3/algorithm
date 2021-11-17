/**
 * 给定一个数组 nums， 编写一个函数将所有 0 移动到数组的末尾， 同时保持非零元素的相对顺序。
 * 输入: [0, 1, 0, 3, 12]
 * 输出: [1, 3, 12, 0, 0]
 * 思路：分别定义两个指针，slow和fast
 * slow后面的元素都是0，那么何时移动slow和fast
 * 当当前元素不是零时，移动slow和fast
 * 当前元素是零时，移动fast
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let slow = 0,
        fast = 0
    while (fast <= nums.length - 1) {
        if (nums[fast] !== 0) {
            nums[slow++] = nums[fast]
        }
        fast++
    }
    for (let i = slow; i < nums.length; i++) {
        nums[i] = 0
    }
};