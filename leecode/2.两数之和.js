/**
 * 给定一个整数数组 nums 和一个整数目标值 target， 请你在该数组中找出 和为目标值 的那 两个 整数， 
 * 并返回它们的数组下标。你可以假设每种输入只会对应一个答案。 但是， 数组中同一个元素不能使用两遍。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map()
    let len = nums.length
    for (let i = 0; i < len; i++) {
        let curNum = nums[i]
        let diff = target - curNum
        let idx = map.get(diff)
        if (map.has(diff)) {
            return [idx, i]
        }
        map.set(curNum, i)
    }
};