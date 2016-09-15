var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

// Stack.stackMethods = {};

var stackMethods = {
  push: function() {}
};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter ++;
};

stackMethods.pop = function() {
  var copy = _.extend({}, this.storage);
  if (this.counter > 0) {
    delete this.storage[this.counter];
    this.counter --;
  }
  return copy[this.counter];
};

stackMethods.size = function() {
  return this.counter;
};


