var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    counter++;
    storage[counter] = value;
  };

  someInstance.dequeue = function() {

    if (counter > 0) {
      var result = $.extend({}, storage);


      counter --;
      return result[0];
    }
  };


  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
