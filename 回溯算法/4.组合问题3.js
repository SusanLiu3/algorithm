/**
 * 给定一个无重复元素的数组 candidates 和一个目标数 target， 找出 candidates 中所有可以使数字和为 target 的组合。
 candidates 中的数字可以无限制重复被选取。
 说明：
 所有数字（ 包括 target） 都是正整数。
 解集不能包含重复的组合。
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let res =[]
let path=[]
var combinationSum = function (candidates, target) {
    res=[]
    path=[]
    backtracking(candidates,target,0,0)
    return res
};
let backtracking =function (candidates,target,sum,index) {
    if (sum>target){
        return
    }
    if (sum === target){
        res.push(JSON.parse(JSON.stringify(path)))
        return
    }
    for (let i=index;i<candidates.length;i++){
        sum+=candidates[i]
        path.push(candidates[i])
        backtracking(candidates,target,sum,i)
        path.pop()
        sum-=candidates[i]
    }
}