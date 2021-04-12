/**
 * 给定一个非负整数数组 nums， 你最初位于数组的 第一个下标。
 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 判断你是否能够到达最后一个下标。
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let cover = 0
    if (nums.length === 1) {
        return true
    }
    for (let i = 0; i <= cover; i++) {
        cover = Math.max(i + nums[i], cover)
        if (cover>nums.length-1){
            return true
        }
    }
    return false
};