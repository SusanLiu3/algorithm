/**
 * 给你 n 个非负整数 a1， a2，...，an， 每个数代表坐标中的一个点(i, ai)。 
 * 在坐标内画 n 条垂直线， 垂直线 i 的两个端点分别为(i, ai) 和(i, 0)。
 *  找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水
 */

/**
 * 双指针
 * 1.相同情况下，两边距离越远越好
 * 2. 区域面积受限于最短的那边
 * 3. 如果左指针指向的高度比右指针指向的高度小，移动左指针 
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let len = height.length
    let startIndex = 0
    let endIndex = len - 1
    let max = 0
    while (startIndex < endIndex) {
        let startH = height[startIndex]
        let endH = height[endIndex]
        let temMax = (endIndex - startIndex) * Math.min(startH, endH)
        max = Math.max(temMax, max)
        if (startH < endH) {
            startIndex++
        } else {
            endIndex--
        }
    }
    return max
};