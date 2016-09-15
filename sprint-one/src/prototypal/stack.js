var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.counter = 0;
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

stackMethods.pop = function() {
  if (this.counter > 0) {
    var copy = Object.create(this.storage);
    delete this.storage[this.counter];
    this.counter--;
    return copy[this.counter];
  }
};

stackMethods.size = function() {
  return this.counter;
};