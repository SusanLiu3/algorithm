/**
 * 18. 四数之和
 * 题意： 给定一个包含 n 个整数的数组 nums 和一个目标值 target， 判断 nums 中是否存在四个元素 a， b， c 和 d， 使得 a + b + c + d 的值与 target 相等？ 
 * 找出所有满足条件且不重复的四元组。注意：答案中不可以包含重复的四元组。
   示例： 给定数组 nums = [1, 0, -1, 0, -2, 2]， 和 target = 0。 
   满足要求的四元组集合为：[[-1, 0, 0, 1], [-2, -1, 1, 2], [-2, 0, 0, 2]]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  // 解法类似三数之和，两套for 循环
  // 1. 对数组合理性判断
  if (nums.length < 4) {
    return []
  }
  // 2. 排序
  nums = nums.sort((a, b) => a - b)
  // 3. 两层for循环，定义left right分别指向数组的开头和结尾处
  const res = []
  for (let i = 0; i < nums.length; i++) {
    // 第一层去重
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < nums.length; j++) {
      // 第二层去重
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }
      let left = j + 1;
      let right = nums.length - 1
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]
        // 4. 判断四数之和，和目标值做对比，然后进行相应指针的移动
        if (sum > target) {
          right--
        } else if (sum < target) {
          left++
        } else {
          res.push([nums[i], nums[j], nums[left], nums[right]])
          // 4. 同时需要进行去重判断 ; 两层for 循环处，left right 处
          while (left < right && nums[left] === nums[left + 1]) left++
          while (left < right && nums[right] === nums[right - 1]) right--
          left++
          right--
        }
      }
    }
  }
  return res
};
