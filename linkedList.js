// 链表

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
     while(currentNode.element != item) {
        currentNode = currentNode.next;
     }
    return currentNode;
  },
  insert: function(newElement, item) {
    const newNode = new Node(newElement);  // {element: "xxx", next: null}
    const current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }
}


// 调用
const linkList = new LinkedList();

linkList.insert("Conway", "head");

linkList.insert("Alma", "Russellville");
