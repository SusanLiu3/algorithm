/**
 * 给定一个含有 n 个正整数的数组和一个正整数 s， 找出该数组中满足其和≥ s 的长度最小的 连续 子数组， 并返回其长度。
 *  如果不存在符合条件的子数组， 返回 0。
 */
/**
 * 滑动窗口: 不断调节子序列的起始和终止位置， 直到符合要求;
 * 其精妙之处在于，根据当前子序列和大小的情况，不断调节子序列的
 * 起始位置，从而将时间复杂度从O(n*n) 到O(n) 
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let i = 0;
    let sum = 0
    let result = Number.MAX_VALUE
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j]
        // 不断调整起始位置
        while (sum >= target) {
            let len = j - i + 1  // 子序列长度
            result = Math.min(result, len)
            sum -= nums[i++] // 不断移动子序列的起始位置
        }
    }
    return result===Number.MAX_VALUE?0:result
};
console.log(minSubArrayLen(8, [2, 3, 1, 2, 4, 3]))