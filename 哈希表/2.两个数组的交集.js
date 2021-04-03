/**
 * 给定两个数组， 编写一个函数来计算它们的交集。
 * 输入： nums1 = [1, 2, 2, 1], nums2 = [2, 2]
 输出：[2]
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let res = []
    for (const i of set1.values()) {
        if (set2.has(i)) {
            res.push(i)
        }
    }
    return res
};
console.log(intersection([1, 2, 2, 1],[2,2]))