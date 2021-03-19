/**
 * 数字 n 代表生成括号的对数， 请你设计一个函数， 用于能够生成所有可能的并且 有效的 括号组合。
 * 输入： n = 3
 输出：["((()))", "(()())", "(())()", "()(())", "()()()"]
 */
/**
 * 递归加回溯
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res=[]
    dfs(res,n,n,'')
    return res
};

function dfs(res, left, right, str) {
    if (left === 0 && right === 0) {
        res.push(str)
        return
    }
    if (left<0){
        return
    }
    if (left > right) {
        return
    }
    dfs(res, left - 1, right, str + '(')
    dfs(res, left, right - 1, str + ')')
}