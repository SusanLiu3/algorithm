/**
 * 给定一个整数数组 nums， 找到一个具有最大和的连续子数组（ 子数组最少包含一个元素）， 返回其最大和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = -Number.MAX_VALUE
  let count = 0
  for (let i = 0; i < nums.length; i++) {
      count += nums[i]
      if (count > res) {
          res = count
      }
      if (count <= 0) {
          count = 0
      }
  }
  return res
};