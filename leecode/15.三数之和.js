/**
 * 给你一个包含 n 个整数的数组 nums， 判断 nums 中是否存在三个元素 a， b， c， 
 * 使得 a + b + c = 0？ 请你找出所有和为 0 且不重复的三元组。注意： 答案中不可以包含重复的三元组
 * 输入： nums = [-1, 0, 1, 2, -1, -4]
 输出：[[-1, -1, 2], [-1, 0, 1]]
 */
var threeSum = function (nums) {
    if (!nums || nums.length < 3) {
        return []
    }
    nums = nums.sort((a, b) => a - b)
    let list = []
    let idx = 0
    let len = nums.length
    for (let i = 0; i < len; i++) {
        let cur = nums[i]
        if (cur > 0) {
            break;
        }
        if (i > 0 && cur === nums[i - 1]) {
            continue
        }
        let j = i + 1;
        let k = len - 1
        while (j < k) {
            let sum = nums[k] + nums[j] + cur
            if (sum === 0) {
                list[idx++] = [cur, nums[j], nums[k]]
                k--
                j++
                // 去重
                while (j < k && nums[k] === nums[k + 1]) {
                    k--
                }
                while (j < k && nums[j] === nums[j - 1]) {
                    j++
                }
            } else if (sum > 0) {
                k--
            } else {
                j++
            }
        }
    }
    return list
};
console.log(threeSum([-1, 0, 1, 2, -1, -4])) // -4 -1 -1 0 1 2 