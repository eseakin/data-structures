var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;
  someInstance.queCount = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  if (this.counter === 0){
    this.queCount = 0;
  }
  this.storage[this.counter + this.queCount] = value;
  this.counter++;
};

queueMethods.dequeue = function() {
  if (this.counter > 0) {
    var copy = this.storage[this.queCount];
    delete this.storage[this.queCount];
    this.counter--;
    this.queCount++;
    return copy;
  }
};

queueMethods.size = function() {
  return this.counter;
};

queueMethods.value = function() {
  return this.storage;
};