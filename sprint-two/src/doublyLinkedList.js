var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(newVal) {
    if (this.head === null) {
      newNode = Node(newVal);
      this.head = newNode;
      this.tail = newNode;
    } else {
      var newNode = Node(newVal);
      this.head.prev = newNode;
      newNode.next = this.head
      this.head = newNode;

    }


  };
  list.removeTail = function() {
    var result = this.tail.value;
    this.tail.prev = this.tail;
    this.tail.next = null;

    return result;
  };


  return list;

};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};