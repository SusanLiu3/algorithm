/**
 * 给定一个不含重复元素的整数数组 nums。 一个以此数组直接递归构建的 最大二叉树 定义如下：
 二叉树的根是数组 nums 中的最大元素。
 左子树是通过数组中 最大值左边部分 递归构造出的最大二叉树。
 右子树是通过数组中 最大值右边部分 递归构造出的最大二叉树。
 返回有给定数组 nums 构建的 最大二叉树。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    if (nums.length===0){
        return null
    }
    return constructTree(nums,0,nums.length)
};

let constructTree = function (nums, left, right) {
    // 终止
    if (left >= right) {
        return null
    }
    // 逻辑
    // 1 最大值index
    let maxIndex = left
    for (let i = left; i < right; i++) {
        if (nums[i] > nums[maxIndex]) {
            maxIndex = i
        }
    }
    // 
    let root = new TreeNode(nums[maxIndex])
    root.left = constructTree(nums, left, maxIndex )
    root.right = constructTree(nums, maxIndex + 1, right)
    return root
}