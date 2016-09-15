

// Instantiate a new graph
var Graph = function() {
  console.log("new instance")
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  this.nodes.push(value);
  //console.log("pushed ",value," into ",this.nodes);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  var truth = false;
  this.nodes.forEach(function(ele, i, col) {
    //console.log("checking ele ", ele)
    if (value === ele) {
      // console.log("found ", value)
      truth = true;
      return;
    }
  });
  return truth;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  var index = this.nodes.indexOf(value);
  // console.log('index:',index);
  if (index !== -1) {
    this.nodes.splice(index, 1);
    // console.log(this.nodes);
  }

//remove edges of removed node
  this.edges.forEach(function(ele, i, coll) {
    if (ele.includes(value)) {
      // console.log("found an edge that contains value", ele);
      coll.splice(i, 1);
    }
  });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // var truth = false;

  return _.any(this.edges, function(ele, i, col) {
    if ((ele[0] === fromNode && ele[1] === toNode) || ((ele[1] === fromNode && ele[0] === toNode))) {
      return true;
    }
    return false;
  });
  // this.edges.forEach(function() {});
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index;
  this.edges.forEach(function(ele, i) {
    if ((ele[0] === fromNode && ele[1] === toNode) || ((ele[1] === fromNode && ele[0] === toNode))) {
      index = i;
    }
  });
  this.edges.splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


