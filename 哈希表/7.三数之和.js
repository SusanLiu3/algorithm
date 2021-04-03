/**
 * 给你一个包含 n 个整数的数组 nums， 判断 nums 中是否存在三个元素 a， b， c， 
 * 使得 a + b + c = 0？ 请你找出所有和为 0 且不重复的三元组。
 注意： 答案中不可以包含重复的三元组。
 输入： nums = [-1, 0, 1, 2, -1, -4]
 输出：[[-1, -1, 2], [-1, 0, 1]]
 */
/**
 * 双指针
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) {
        return []
    }
    nums.sort((a, b) => a - b) // 排序
    let res = []
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > 0) {
            break;
        }
        // 对i去重
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let j = i + 1
        let k = nums.length - 1
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] > 0) {
                k--
            } else if (nums[i] + nums[j] + nums[k] < 0) {
                j++
            } else {
                res.push([nums[i], nums[j], nums[k]])
                k--
                j++
                // j 去重
                while (j < k && nums[j] === nums[j - 1]) {
                    j++
                }
                while (j < k && nums[k] === nums[k + 1]) {
                    k--
                }

            }
        }
    }
    return res
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))