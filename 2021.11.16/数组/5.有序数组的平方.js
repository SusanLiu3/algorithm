/**
 * 209 给你一个按 非递减顺序 排序的整数数组 nums， 返回 每个数字的平方 组成的新数组， 要求也按 非递减顺序 排序。
 * 输入： nums = [-4, -1, 0, 3, 10]
   输出：[0, 1, 9, 16, 100]
   解释： 平方后， 数组变为[16, 1, 0, 9, 100]
   排序后， 数组变为[0, 1, 9, 16, 100]
   思路：最大值可能出现在数组首部和尾部,所以我们可以定义两个指针；
   分别指向数组起始位置和数组结尾位置以及额外的移动指针，然后比较起止元素的平方

 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let s = 0,
        e = nums.length - 1,
        k = nums.length - 1;
    let res = []
    while (s <= e) {
        if (nums[s] * nums[s] > nums[e] * nums[e]) {
            res[k--] = nums[s] * nums[s]
            s++
        } else {
            res[k--] = nums[e] * nums[e]
            e--
        }
    }
    return res
};