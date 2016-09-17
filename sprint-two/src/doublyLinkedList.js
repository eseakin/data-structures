var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;

  list.addToHead = function(newVal) {
    this.count++;
    if (this.head === null) {
      newNode = Node(newVal);
      this.head = newNode;
      this.tail = newNode;
    } else {
      var newNode = Node(newVal);
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;

    }


  };
  list.removeTail = function() {
    var result = this.tail.value;
    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;      
    }
    this.count --;
    return result;
  };

  list.contains = function(target) {
    if (this.head.value === target) {
      return true;
    }
    for (var key in this) {
      if (this[key].value === target) {
        return true;
      }
    }
    return false;
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