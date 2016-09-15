var Tree = function(value) {
      console.log("new instance ");
  var newTree = {};
  newTree.value = value;

  newTree.children = []; 

  _.extend(newTree, treeMethods);

  return newTree;


};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
  // console.log(value, " added to ",this)
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    console.log("parent match");
    return true;
  }
  if (this.children.length > 0) {
    console.log(this.children);
    for (var i = 0; i < this.children.length; i++) {
      return this.children[i].contains(target);
    }
    //this.children.forEach(function(child) {       
    //  return child.contains(target);
    //});    
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
