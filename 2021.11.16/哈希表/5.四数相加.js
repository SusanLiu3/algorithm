/**
 * 454 四数相加
 * 给定四个包含整数的数组列表 A, B, C, D, 计算有多少个元组(i, j, k, l)， 使得 A[i] + B[j] + C[k] + D[l] = 0。
 * 为了使问题简单化， 所有的 A, B, C, D 具有相同的长度 N， 且 0≤ N≤ 500。 所有整数的范围在 - 2 ^ 28 到 2 ^ 28 - 1 之间， 最终结果不会超过 2 ^ 31 - 1
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    // 首先统计nums1 和nums2 中元素之和及出现的次数
    const map = new Map()
    for (const m1 of nums1) {
        for (const m2 of nums2) {
            let sum = map.get(m1 + m2) || 0
            sum++
            map.set(m1 + m2, sum)
        }
    }

    //  遍历nums3 和nums4 ,统计- (nums3[i] + nums4[j]) 在map 中存在与否
    // 如果存在，那么说明这四个元素之和=0，那么对应的count ++
    let count = 0 // 存取最终结果
    for (const m1 of nums3) {
        for (const m2 of nums4) {
            if (map.has(-(m1 + m2))) {
                count += map.get(-(m1 + m2))
            }
        }
    }
    return count
};