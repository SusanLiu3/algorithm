/**
 * 输入两个二叉树A和B ，判断B是不是A的子结构
 */

function hasSubTree(rootA, rootB) {
  if (!rootA) {
    return false;
  }
  if (!rootB) {
    return false;
  }
  let result = false;
  if (rootA.data === rootB.data) {
    // 以二叉树A 的根节点和B 的相同，然后判断以A为根节点的树是否包含B树
    result = doesTreeAHasTreeB(rootA, rootB);
  }
  // 如果A的根节点和B的根节点不一致，则判断A的左边树的根节点 是否和B的根节点一致
  if (!result) {
    result = hasSubTree(rootA.left, rootB);
  }
  if (!result) {
    result = hasSubTree(rootA.right, rootB);
  }
  return result;
}

function doesTreeAHasTreeB(nodeA, nodeB) {
  if (!nodeB) {
    return true;
  }
  if (!nodeA) {
    return false;
  }
  if (nodeA.data !== nodeB.data) {
    return false;
  }
  // 判断 A 的左边树是否和B的左边树 一致 ；
  // A的右边树是否和B的右边树一致
  // 只有两者都一致 才能说A 包含B
  return (
    doesTreeAHasTreeB(nodeA.left, nodeB.left) &&
    doesTreeAHasTreeB(nodeA.right, nodeB.right)
  );
}
