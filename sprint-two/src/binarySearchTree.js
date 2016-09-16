var BinarySearchTree = function(startVal) {
  this.value = startVal;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(newVal) {
  if (this.value > newVal) {
    if (this.left === null) {
      this.left = new BinarySearchTree(newVal);
    } else {
      this.left.insert(newVal);
    }
  } else if (this.value < newVal) {
    if (this.right === null) {
      this.right = new BinarySearchTree(newVal);
    } else {
      this.right.insert(newVal);
    }

  }
};

BinarySearchTree.prototype.contains = function(findVal) {
  if (this.value === findVal) {
    return true;
  } else if (this.value > findVal && this.left !== null) {
    return this.left.contains(findVal);
  } else if (this.value < findVal && this.right !== null) {
    return this.right.contains(findVal);
  }
  return false; 
  
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  this.value = cb(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  } 
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
