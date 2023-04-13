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
                // 每次遍历把left作为当前节点
                current = current.left;
                // 如果current 已经为null, 说明已经到了根节点了, 这里的目的就是为了一直找到根节点元素和链表操作是一致的
                if (current === null) {
                    // 这个时候把对当前的节点进行赋值
                   parent.left = node;
                   break;
                } 
            } else {
                current = current.right;
                if (current === null) {
                   parent.right = node;
                   break;
                } 
            }
        }
    }
}

const bst = new BST(25);
bst.insert(12);
bst.insert(8);
console.log(bst);
