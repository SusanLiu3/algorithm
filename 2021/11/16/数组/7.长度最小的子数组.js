/**
 * 209 给定一个含有 n 个正整数的数组和一个正整数 s， 找出该数组中满足其和≥ s 的长度最小的 连续 子数组， 并返回其长度。 如果不存在符合条件的子数组， 返回 0。
 示例：输入： s = 7, nums = [2, 3, 1, 2, 4, 3] 输出： 2 
 解释：子数组[4, 3] 是该条件下的长度最小的子数组
 滑动窗口：双指针，当和大于s 向前移动起始指针
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let slow = 0,
        fast = 0;
    let sum = 0,
        len = 0,
        res = Number.MAX_VALUE
    while (fast <= nums.length - 1) {
        sum += nums[fast]
        while (sum >= target) { // 当和大于target 时，
            len = fast - slow + 1
            res = len < res ? len : res // 比较长度并更新
            sum = sum - nums[slow++] // 
        }
        fast++
    }
    return res === Number.MAX_VALUE ? 0 : res
};