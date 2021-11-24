/**
 * 给定一个整数数组 nums 和一个目标值 target， 
 * 请你在该数组中找出和为目标值的那 两个 整数， 并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。 但是， 数组中同一个元素不能使用两遍
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 看到判断某个目标值是否在某个集合中，就可以联想到使用map或者set
    // 这道题我们使用map ;以数组中的元素为键，对应的索引为值
    const m = new Map();
    for (let i = 0; i < nums.length; i++) {
        // 如果target - nums[i] 在map 中存在，那么返回当前i 和map中的值
        if (m.has(target - nums[i])) {
            return [m.get(target - nums[i]), i]
        } else {
            // 如果不存在，则将对应的数组元素添加到map中
            m.set(nums[i], i)
        }
    }
}