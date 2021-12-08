/**
 * 347. 前 K 个高频元素
 * 给定一个非空的整数数组， 返回其中出现频率前 k 高的元素
 * 输入: nums = [1, 1, 1, 2, 2, 3], k = 2
   输出: [1, 2]
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map()
    // 1. 统计每个元素出现的个数 map 
    for (let i = 0; i < nums.length; i++) {
        let len = map.get(nums[i]) || 0
        map.set(nums[i], ++len)
    }
    // 如果map 的length小于k 直接返回
    if (map.length <= k) {
        return map.values()
    }
    // 2. 遍历map，将出现的个数value作为数组的索引，key 作为元素 创建数组
    const temp = []
    for (const [key, value] of map) {
        if (temp[value]) {
            temp[value].push(key)
        } else {
            temp[value] = [key]
        }
    }
    // 3. 倒叙遍历数组，
    const res = []
    for (let i = temp.length - 1; res.length < k && i >= 0; i--) {
        if (temp[i]) {
            res.push(...temp[i])
        }
    }
    return res
};