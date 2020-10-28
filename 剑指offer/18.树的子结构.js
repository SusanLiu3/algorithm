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
    /**
     * 移除节点
     * 1、找点需要移除的节点
     * 2、判断该节点的子节点数
     * 2.1 如果无子节点，直接node 设为null
     * 2.2 如果有一个左子节点(右子节点)，直接用左(右)子节点替换node
     * 2.3 如果有左右子节点，首先找出移除节点的右边树的最小节点
     *     其次 用这个最小节点去替换移除节点
     *     最后 删除原右边树的最小节点
     * @param {相对根节点} relativeNode
     * @param {需要移除的节点} removeNode
     */
    remove(relativeNode, removeNode) {
      if (!relativeNode) {
        return null;
      }
      if (removeNode < relativeNode.data) {
        relativeNode.left = this.remove(relativeNode.left, removeNode);
        return relativeNode;
      } else if (removeNode > relativeNode.data) {
        relativeNode.right = this.remove(relativeNode.right, removeNode);
        return relativeNode;
      } else {
        // 找到该节点
        if (!relativeNode.left && !relativeNode.right) {
          // 没有子节点
          relativeNode = null;
          return relativeNode;
        }
        if (!relativeNode.left) {
          // 如果左子节点为空
          relativeNode = relativeNode.right;
          return relativeNode;
        }
        if (!relativeNode.right) {
          // 如果左子节点为空
          relativeNode = relativeNode.left;
          return relativeNode;
        }
        // 左右子节点都有
        // 右边树最小的节点
        let minNode = this.minNode(relativeNode.right);
        // 替换当前移除节点
        relativeNode.data = minNode.data;
        // 删除右边树最小的那个节点
        relativeNode.right = this.remove(relativeNode.right, minNode.data);
        return relativeNode;
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

var tree2 = new BST();
tree2.insert(7);
tree2.insert(9);
tree2.insert(5);
// tree2.insert(4);

console.log(hasSubTree(tree.root, tree2.root));
