var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var queCount = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (counter === 0) {
      queCount = 0;
    }
    storage[counter + queCount] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    if (counter > 0) {
      var result = storage[queCount];
      delete storage[queCount];
      queCount++;
      counter--;
      return result;
    }

  };

  someInstance.value = function() {
    return storage;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
