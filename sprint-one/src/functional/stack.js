var Stack = function() {
  var someInstance = {};

  var counter = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter ++;
  };

  var extend = function(copy, original) {
    for (var key in original) {
      copy[key] = original[key];
    } 
    return copy;
  }

  someInstance.pop = function() {
    if (counter > 0) {
      // var result = Object.create(storage);
      var result = extend({}, storage);

      counter --;
      delete storage[counter];
      return result[counter];
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
