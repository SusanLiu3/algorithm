/**
 * 给定一个整数数组 nums 和一个目标值 target， 
 * 请你在该数组中找出和为目标值的那 两个 整数， 并返回他们的数组下标
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i] // 差值
        if (map.has(diff)){
            return [map.get(diff),i]
        }
        map.set(nums[i],i)
    }
}