/**
 * 249 两个数组的交集
 * 给定两个数组， 编写一个函数来计算它们的交集
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    // 1. 输出的结果每个元素是唯一的，那么可以使用set 将给定的nums1,nums2去重
    const s1 = new Set(nums1)
    const s2 = new Set(nums2)
    const res = new Set()
    // 2. 遍历第一个数组，判断第二个数组是否包含第一个数组中的元素，如果存在，就添加到结果中
    for (const s of s1.values()) {
        if (s2.has(s)) {
            res.add(s)
        }
    }
    return [...res] // set 转数组
};
