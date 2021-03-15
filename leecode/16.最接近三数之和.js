/**
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。 
 * 找出 nums 中的三个整数， 使得它们的和与 target 最接近。 返回这三个数的和。
 *  假定每组输入只存在唯一答案
 * 输入： nums = [-1, 2, 1, -4], target = 1
   输出： 2
   解释： 与 target 最接近的和是 2(-1 + 2 + 1 = 2)。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let res = Math.pow(2, 31) - 1
    let len = nums.length
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < len; i++) {
        // 跳过重复的数字
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let j = i + 1
        let k = len - 1
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (Math.abs(sum - target) < Math.abs(target - res)) {
                res = sum
            }
            if (sum === target) {
                return sum
            } else if (sum > target) {
                while (j < k && nums[k] === nums[k - 1]) {
                    k--
                }
                k--
            } else {
                while (j < k && nums[j] === nums[j + 1]) {
                    j++
                }
                j++
            }
        }
    }
    return res
};
console.log(threeSumClosest([-1, 2, 1, -4],1))