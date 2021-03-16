/**
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target， 
 * 判断 nums 中是否存在四个元素 a， b， c 和 d， 使得 a + b + c + d 的值与 target 相等？ 
 * 找出所有满足条件且不重复的四元组。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (!nums || nums.length < 3) {
        return []
    }

    let res = []
    let len = nums.length
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < len - 3; i++) {
        // 去重
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        if (nums[i]+nums[i+1]+nums[i+2]+nums[i+3]>target){
            break;
        }
        for (let j = i + 1; j < len - 1; j++) {
            if (j > 1 && nums[j] === nums[j - 1]) {
                continue
            }
            let m = j + 1
            let n = len - 1
            while (m < n) {
                let sum = nums[i] + nums[j] + nums[m] + nums[n]
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[m], nums[n]])
                    while (m < n && nums[n] === nums[n - 1]) {
                        n--
                    }
                    while (m < n && nums[m] === nums[m + 1]) {
                        m++
                    }
                    m++
                    n--
                } else if (sum < target) {
                    m++
                } else {
                    n--
                }
            }
        }
    }
    return res
};