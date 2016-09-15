var Queue = function() {
  this.storage = {};
  this.counter = 0;
  this.queCount = 0;

};

Queue.prototype.enqueue = function(value) {
  if (this.counter === 0) {
    this.queCount = 0;
  }
  this.storage[this.counter + this.queCount] = value;
  this.counter++;
};

Queue.prototype.dequeue = function() {
  if (this.counter > 0) {
    var result = this.storage[this.queCount];
    delete this.storage[this.queCount];
    this.counter--;
    this.queCount++;
    return result;
  }
};

Queue.prototype.size = function() {
  return this.counter;
};

Queue.prototype.value = function() {
  return this.storage;
};

