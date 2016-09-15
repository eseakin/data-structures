var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

queueMethods.dequeue = function() {
  if (this.counter > 0) {
    var copy = {};
    _.extend(copy, this.storage);
    for (var i = 1; i < this.counter; i++) {
      this.storage[i - 1] = copy[i];
    }
    delete this.storage[this.counter - 1];
    this.counter--;
    return copy[0];
  }
};

queueMethods.size = function() {
  return this.counter;
};

queueMethods.value = function() {
  return this.storage;
};