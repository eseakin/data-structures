var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.counter = 0;

  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.counter++;
};


queueMethods.dequeue = function() {
  if (this.counter > 0) {
    this.counter--;
  }
};

queueMethods.size = function() {
  return this.counter;
};


queueMethods.value = function() {
  return this.storage;

};