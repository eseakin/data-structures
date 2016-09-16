var BinarySearchTree = function(startVal) {
  this.value = startVal;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(newVal) {
  if (this.value > newval) {
    if (this.left === null) {
      this.left = BinarySearchTree(newVal);
    } else {
      this.left.insert(newVal);
    }
  } else if (this.value < newval) {
    if (this.right === null) {
      this.right = BinarySearchTree(newVal);
    } else {
      this.right.insert(newVal);
    }

  }
};

BinarySearchTree.prototype.contains = function(findVal) {


};

BinarySearchTree.prototype.depthFirstLog = function(cb) {


};

/*
 * Complexity: What is the time complexity of the above functions?
 */
