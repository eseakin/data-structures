var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.count++;
  };

  list.removeHead = function() {
    if (this.count > 0) {  
      var oldHead = this.head.value;
      //delete this.head;
      this.head = this.head.next;
      this.count--;
      return oldHead;
    }
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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
