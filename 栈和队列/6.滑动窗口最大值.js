/**
 * 给定一个数组 nums， 有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。 
 *  你只可以看到在滑动窗口内的 k 个数字。 滑动窗口每次只向右移动一位。
 * 返回滑动窗口中的最大值。
 * 单调队列：递增或者递减的队列
 * push :如果push的数据比队列的入口数据大，那么则弹出队列数据，直到小于队列入口数据
 * pop：如果删除的元素和队列入口元素相等，则删除，不相等 不处理
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let res = [];
    let queue = new myQueue()
    // 记录前K个元素最大值
    for (let i = 0; i < k; i++) {
        queue.push(nums[i])
    }
    res.push(queue.front()) // 最大值
    for (let i = k; i < nums.length; i++) {
        // 移除队列顶部元素
        queue.pop(nums[i - k])
        queue.push(nums[i]) // 移动滑动窗口
        res.push(queue.front()) //
    }
    return res
};

let myQueue = function () {
    this.queue = []
}
myQueue.prototype.push = function (k) {
    // 如果加入的值 比 队列的入口元素的值大，就弹出队列的元素，直到比队列元素小
    while (this.queue.length > 0) {
        let res = this.queue.pop()
        if (res < k) {
            continue
        } else {
            this.queue.push(res)
            break;
        }
    }
    this.queue.push(k)
}

myQueue.prototype.pop = function (val) {
    let res = this.front()
    // 如果相逢 就弹出
    if (this.queue.length > 0 && res === val){
       this.queue.shift()
    }
    
}

myQueue.prototype.front = function () {
    let res = this.queue.shift()
    this.queue.unshift(res)
    return res
}
console.log(maxSlidingWindow([1,-1],1))