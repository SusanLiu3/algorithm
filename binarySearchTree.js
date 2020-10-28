let BST = (function () {
  class Bst {
    constructor() {
      this.root = null;
    }
    insert(data) {
      let item = new Node(data, null, null);
      if (!this.root) {
        this.root = item;
      } else {
        // 已经有根节点,判断在左侧插入节点还是右侧
        insertNode(this.root, item);
      }
    }

    inOrder(node) {
      if (node != null) {
        this.inOrder(node.left);
        console.log(node.data, ';');
        this.inOrder(node.right);
      }
    }
    preOder(node) {
      if (node != null) {
        console.log(node.data, ';');
        this.preOder(node.left);
        this.preOder(node.right);
      }
    }
    postOrder(node) {
      if (node != null) {
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data, ';');
      }
    }
    minNode(node) {
      if (node != null) {
        while (node.left) {
          node = node.left;
        }
        return node;
      }
    }
    maxNode(node) {
      if (node != null) {
        // 沿着树的右边进行遍历
        while (node.right) {
          node = node.right;
        }
        return node;
      }
    }
    search(relativeNode, searchNode) {
      // 如果相对根节点为空，说明其没有子节点 ，要搜索的节点不存在
      if (!relativeNode) {
        return false;
      }
      if (searchNode < relativeNode.data) {
        return this.search(relativeNode.left, searchNode);
      } else if (searchNode > relativeNode.data) {
        return this.search(relativeNode.right, searchNode);
      } else {
        return true;
      }
    }
  }

  function insertNode(curNode, newNode) {
    // 如果新插入的节点 比当前节点小，那么就是左子节点
    if (newNode.data < curNode.data) {
      // 如果当前节点的左子节点不存在，就将新节点插入这个位置
      if (curNode.left === null) {
        curNode.left = newNode;
      } else {
        // 如果存在，就继续递归
        insertNode(curNode.left, newNode);
      }
    } else {
      // 同上
      if (curNode.right === null) {
        curNode.right = newNode;
      } else {
        insertNode(curNode.right, newNode);
      }
    }
  }

  function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  return Bst;
})();

var tree = new BST();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);

// tree.postOrder(tree.root);

let min = tree.minNode(tree.root);
let max = tree.maxNode(tree.root);
console.log(min, max);

let isExist = tree.search(tree.root,9);
let isExist2 = tree.search(tree.root,98);
console.log(isExist,isExist2);
