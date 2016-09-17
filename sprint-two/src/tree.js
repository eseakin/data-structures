var Tree = function(value, parentVal) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = parentVal || null;
  newTree.children = []; 

  _.extend(newTree, treeMethods);

  return newTree;


};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value, this));
  // console.log(value, " added to ",this)
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};

treeMethods.removeFromParent = function(target, index) {
  if (this.value === target) {
    if (this.parent !== null) {
      this.parent.children.splice(index, 1);
    }
    this.parent = null;
  //taket he parent value off the child
  //slice it off the array of children
    return this;
  }

  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      return this.children[i].removeFromParent(target, i);
    }
  }
  // run through the children array, find value
  //taket he parent value off the child
  //slice it off the array of children
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
