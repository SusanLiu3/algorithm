/**
 * 239. 滑动窗口最大值
 * 给定一个数组 nums， 有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。 你只可以看到在滑动窗口内的 k 个数字。 滑动窗口每次只向右移动一位。
 返回滑动窗口中的最大值
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    // 1. 声明栈数组和结果数组，队列数组存放结果索引
    const res = [],
        stack = []
    // 2. 确保队列数组中的头部元素存放的是队列最大值的索引
    for (let i = 0; i < nums.length; i++) {
        //    2.1 遍历 nums 时，如果当前元素比队列元素大，那么需要不断的pop 队列元素，直到队列中的元素比当前元素小
        while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
            stack.pop()
        }
        //    2.2 将当前元素的索引push进队列
        stack.push(i)
        // 3. 如果当前队列首部元素不在滑动窗口内，就需要移除
        if (stack[0] <= i - k) {
            stack.shift()
        }
        // 4. 当达到滑动窗口条件时，将队列首部元素添加到结果数组中
        if (i >= k - 1) {
            res.push(nums[stack[0]])
        }
    }
    return res
};
