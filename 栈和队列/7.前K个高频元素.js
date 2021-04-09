/**
 * 给定一个非空的整数数组， 返回其中出现频率前 k 高的元素。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // 使用map计算出 元素和相应出现的个数
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!map.get(nums[i])) {
            map.set(nums[i], 1)
        } else {
            map.set(nums[i], map.get(nums[i]) + 1)
        }
    }
    if (map.length <= k) {
        return [...map.keys()]
    }
    let list = [],
        res = [];
    // 再次遍历map，将个数作为key ，出现的元素作为list[key]的值
    for (const [key, value] of map) {
        if (!list[value]) {
            list[value] = [key]
        } else {
            list[value].push(key)
        }
    }
    // 再次倒叙遍历res（个数出现最多的在元素的最后面，倒叙遍历打印即可）
    for (let i = list.length - 1; res.length < k && i > 0; i--) {
        if (list[i]) {
            res.push(...list[i])
        }
    }
    return res
};

console.log(topKFrequent([5, 3, 1, 1, 1, 3, 73, 1], 2))