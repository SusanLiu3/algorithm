/**
 * 给你一个整数数组 nums， 其中可能包含重复元素， 请你返回该数组所有可能的子集（ 幂集）。

 解集 不能 包含重复的子集。 返回的解集中， 子集可以按 任意顺序 排列。
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let res = [],
    path = [],

    var subsetsWithDup = function (nums) {
        let used = [];
        res = []
        path = []
        nums.sort((a, b) => a - b)
        backtracking(nums, 0, used)
        return res
    };
let backtracking = function (nums, startIndex, used) {
    res.push(JSON.parse(JSON.stringify(path)))
    for (let i = startIndex; i < nums.length; i++) {
        if (i>0 && nums[i]===nums[i-1] && used[i-1]===false){
            continue
        }
        used[i]=true
        path.push(nums[i])
        backtracking(nums,i+1,used)
        used[i]=false
        path.pop()
    }
}