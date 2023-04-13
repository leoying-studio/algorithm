function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BST(rootValue) {
    this.root = new Node(rootValue);
}

BST.prototype = {
    constructor: BST,
    insert: function(value) {
        const node = new Node(value);
        // 把根节点作为当前节点的起始节点
        let current = this.root;
        let parent = current;
        
        while(true) {
            parent = current;
            // 左子树
            if (value < current.value) {
                // 如果current.left 已经为null, 说明已经到了根节点了
                if (current.left === null) {
                    // 这个时候把对当前的节点进行赋值
                   parent.left = node;
                   break;
                } 
                // 每次遍历把left作为当前节点
                current = current.left;
            } else {
                current = current.right;
                if (current === null) {
                   parent.right = node;
                   break;
                } 
            }
        }
    },
    inOrder: function(node) {
        // 这里通过深度遍历,对左右子树递归,展示排序后的结果
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.value + " ");
            this.inOrder(node.right);
        }
    }
}

const bst = new BST(25);
bst.insert(12);
bst.insert(8);
bst.insert(35)
bst.inOrder(bst.root)
