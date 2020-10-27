let BST = (function () {
    class Bst {
        constructor() {
            this.root = null;
        }
        insert(data) {
            let item = new Node(data, null, null)
            if (!this.root) {
                this.root = item
            } else {
                // 已经有根节点,判断在左侧插入节点还是右侧
                insertNode(this.root, item)
            }
        }

        inOrder(node) {
            if (node != null) {
                this.inOrder(node.left)
                console.log(node.data, ';')
                this.inOrder(node.right)
            }
        }
        preOder(node) {
            if (node != null) {
                console.log(node.data, ';')
                this.preOder(node.left)
                this.preOder(node.right)
            }
        }
        postOrder(node){
            if (node!=null){
                this.postOrder(node.left)
                this.postOrder(node.right)
                console.log(node.data, ';')
            }
        }
    }

    function insertNode(curNode, newNode) {
        if (newNode.data < curNode.data) {
            if (curNode.left === null) {
                curNode.left = newNode
            } else {
                insertNode(curNode.left, newNode)
            }
        } else {
            if (curNode.right === null) {
                curNode.right = newNode
            } else {
                insertNode(curNode.right, newNode)
            }
        }
    }

    function Node(data, left, right) {
        this.data = data
        this.left = left;
        this.right = right
    }
    return Bst
}())

var tree = new BST()
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

tree.postOrder(tree.root)