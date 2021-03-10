/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    let left = Math.floor((len1 + len2+1) / 2);
    let right = Math.floor((len1 + len2 + 2) / 2)
    if (len1 > len2) {
        [nums1, nums2] = [nums2, nums1]
    }
    return (getDk(nums1, 0, len1 - 1, nums2, 0, len2 - 1, left) + getDk(nums1, 0, len1 - 1, nums2, 0, len2 - 1, right)) / 2

};

function getDk(list1, start1, end1, list2, start2, end2, k) {
    let len1 = end1 - start1 + 1
    let len2 = end2 - start2 + 1
    // 如果有一个长度为0 则一定是第一个数组
    if (len1 === 0) {
        return list2[start2 + k - 1]
    }

    if (k === 1) {
        return Math.min(list1[start1], list2[start2])
    }
    let tempK = Math.floor(k / 2)
    let i = start1 + Math.min(len1, tempK) - 1
    let j = start2 + Math.min(len2, tempK) - 1
    if (list1[i] <= list2[j]) {
        return getDk(list1, i + 1, end1, list2, start2, end2, k - (i + 1 - start1))
    } else {
        return getDk(list1, start1, end1, list2, j + 1, end2, k - (j + 1 - start2))
    }
}

console.log(findMedianSortedArrays([1,3],[2]))

