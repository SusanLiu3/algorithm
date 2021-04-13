/**
 * 给你一个整数数组 nums， 数组中的元素 互不相同。 返回该数组所有可能的子集（ 幂集）。
 解集 不能 包含重复的子集。 你可以按 任意顺序 返回解集。
 输入： nums = [1, 2, 3]
 输出：[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let res=[]
let path=[]
var subsets = function (nums) {
    res=[]
    path=[]
    traverse(nums,0)
    return res
};
let traverse=function (nums,startIndex) {
    res.push(JSON.parse(JSON.stringify(path)))
    // 可以不需要终止条件
    for (let i =startIndex;i<nums.length;i++){
        path.push(nums[i])
        traverse(nums,i+1)
        path.pop()
    }
}