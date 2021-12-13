/**
 * 144. 二叉树的前序遍历
   145. 二叉树的后序遍历
   94. 二叉树的中序遍历
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  // 迭代法
  return preorder2(root)
  // 前序遍历：根左右
  // 递归三部曲
  // 1. 确定递归的参数和返回值 
  // 2. 确定终止条件：节点是null
  // 3. 确定单层递归的逻辑
  const res = []
  preorder(root, res)
  return res

};

const preorder = function (node, res) {
  if (!node) {
    return
  }
  res.push(node.val)
  preorder(node.left, res)
  preorder(node.right, res)
}


/**
 * 迭代法遍历 
 * 
 */
const preorder2 = function (node) {
  if (!node) {
    return []
  }
  const res = []
  // 前序遍历：中左右
  // 1. 定义一个结果数组(充当栈结构)：先进后出
  const stack = []
  // 2. 将根节点 Push 进 结果数组中
  stack.push(node)
  // 3. 循环遍历，当结果数组为空，说明遍历完成
  while (stack.length > 0) {
    // 4. 弹出根节点
    const temp = stack.pop()
    // 5. 根节点添加到数组中
    res.push(temp.val)
    // 6. 先将右节点添加到数组中
    temp.right && stack.push(temp.right)
    // 7. 将左节点添加到数组中
    temp.left && stack.push(temp.left)
  }
  return res
}