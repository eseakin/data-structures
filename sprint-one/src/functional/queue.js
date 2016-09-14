var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {

    if (counter > 0) {
      var result = $.extend({}, storage);
      delete storage[0];
      delete storage[counter - 1];
      for (var i = 1; i < counter; i++) {
        storage[i - 1] = result[i];
      }
      counter--;
      return result[0];
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
