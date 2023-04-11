// 链表和数组的思路类似, 链表是扁平化的树形结构, 一层层往下查找.  找到之后根据指定的节点操作进行赋值, 就相当于完成了插入

function Node(element) {
   this.element = element;
   this.next = null;
}

function LinkedList() {
  this.head = new Node("head");
}

LinkedList.prototype = {
  constructor: LinkedList,
  find: function(item) {
     let currentNode = this.head;
     // 类似于递归链路查找
     while(currentNode.element != item) {
        // 没找到就把当前节点的next作为变量, 再进入下一轮循环查找
        currentNode = currentNode.next;
     }
     
    if (!currentNode) {
        return null
    }
    return currentNode;
  },
  insert: function(newElement, item) {
    const newNode = new Node(newElement);  // {element: "xxx", next: null}
    const current = this.find(item);
     // 找到元素之后, 把当前元素对象赋值给后继节点
     // 而查找到的元素的后继节点被当前节点赋值, 这样的操作就算是对节点进行插入了
    const current = this.find(item);
    const current = this.find(item)
     if (current) {
          newNode.next = current.next;
          current.next = newNode;
     }
  }
}


// 调用
const linkList = new LinkedList();

linkList.insert("Conway", "head");

linkList.insert("Alma", "Russellville");
