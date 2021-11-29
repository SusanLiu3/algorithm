/**
 * 15. 三数之和
 * 给你一个包含 n 个整数的数组 nums， 判断 nums 中是否存在三个元素 a， b， c， 
 * 使得 a + b + c = 0？ 请你找出所有满足条件且不重复的三元组。
 * 注意： 答案中不可以包含重复的三元组。
 * 示例：给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 满足要求的三元组集合为：[[-1, 0, 1], [-1, -1, 2]]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // 数组合理性判断
    if (nums.length < 3) {
        return []
    }
    // 1. 数组排序
    nums = nums.sort((a, b) => a - b)
    const res = []
    for (let i = 0; i < nums.length; i++) {
        // 因为数组已经从小到大排序了，如果i >0 ，那么就不会有符合题意的三元组存在了
        if (nums[i] > 0) {
            return res
        }
        // 4. 因为题目中要求找到的三元组不能重复，所以需要去重处理：
        if (i > 0 && nums[i] === nums[i - 1]) {
            // 如果当前循环的固定元素，和上一次循环的固定元素相同，则 continue，继续下一个循环
            continue
        }
        // 2. for循环遍历nums 同时声明一个leftleft，right指针，分别指向数组开头和结尾处
        let left = i + 1,
            right = nums.length - 1
        // 固定元素i ,不断通过移动left/right 来找到符合的三元组
        while (left < right) {
            const sum = nums[left] + nums[right] + nums[i]
            // 3. 如果nums[i] + nums[left] + nums[right] >0 那么需要将right指针向左移动
            //    如果 < 0 ，需要将left 指针向右移动 ; = 0 ，说明找到符合题目要求的元祖 分别移动leftleft right指针
            if (sum > 0) {
                right--
            } else if (sum < 0) {
                left++
            } else {
                res.push([nums[left], nums[i], nums[right]])
                // 对left 和 right 进行去重
                while (nums[left] === nums[left + 1]) left++
                while (nums[right] === nums[right - 1]) right--
                left++
                right--
            }
        }
    }
    return res

};