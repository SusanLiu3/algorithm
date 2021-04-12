/**
 * 给定一个数组 candidates 和一个目标数 target， 找出 candidates 中所有可以使数字和为 target 的组合。
 candidates 中的每个数字在每个组合中只能使用一次。
 说明：
 所有数字（ 包括目标数） 都是正整数。
 解集不能包含重复的组合。
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

let res = []
let path = []
var combinationSum2 = function (candidates, target) {
    res = []
    path = []
    let used = new Array(candidates.length).fill(false)
    candidates.sort((a,b)=>a-b)
    backtracking(candidates, target, 0, 0, used)
    return res
};
let backtracking = function (candidates, target, sum, startIndex, used) {
    if (sum > target) {
        return
    }
    if (sum === target) {
        res.push(JSON.parse(JSON.stringify(path)))
        return
    }
    for (let i = startIndex; i < candidates.length; i++) {
        if (i > 0 && candidates[i - 1] === candidates[i] && used[i - 1] === false) {
            continue
        }
        sum += candidates[i]
        path.push(candidates[i])
        used[i] = true
        backtracking(candidates, target, sum, i + 1, used)
        used[i] = false; // 同一层
        sum -= candidates[i]
        path.pop()
    }
}