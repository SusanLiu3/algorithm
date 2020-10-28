/**
 * 给定一个二叉树，输出其镜像
 * 其实就是交换左右子节点
 */

function bstMirror(node) {
  if (!node) {
    // 空节点
    return;
  }
  if (!node.left && !node.right) {
    // 无子节点
    return;
  }
  let tempLeft = node.left;
  node.left = node.right;
  node.right = tempLeft;
  if (node.left) {
    bstMirror(node.left);
  }
  if (node.right) {
    bstMirror(node.right);
  }
}


