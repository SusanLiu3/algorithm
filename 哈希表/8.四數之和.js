/**
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target， 判断 nums 中是否存在四个元素 a， b， c 和 d， 
 * 使得 a + b + c + d 的值与 target 相等？ 找出所有满足条件且不重复的四元组。
 */
/**
 * 思路类似三数之和 双指针 双for循环
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (nums.length < 4) {
        return []
    }
    let res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 1; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        for (let j = i + 1; j < nums.length - 1; j++) {
            if (j > i+1 && nums[j] === nums[j - 1]) {
                continue
            }
            let m = j + 1
            let n = nums.length - 1
            while (m < n) {
                if (nums[i] + nums[j] + nums[m] + nums[n] > target) {
                    n--
                } else if (nums[i] + nums[j] + nums[m] + nums[n] < target) {
                    m++
                } else {
                    res.push([nums[i], nums[j], nums[m], nums[n]])
                    m++;
                    n--
                    while (m < n && nums[m] === nums[m - 1]) {
                        m++
                    }
                    while (m < n && nums[n] === nums[n + 1]) {
                        n--
                    }
                }
            }
        }
    }
    return res
}

console.log(fourSum([1, 0, -1, 0, -2, 2],0))