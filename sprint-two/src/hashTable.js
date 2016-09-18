

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.tupleCounter = 0;
  // console.log("new instance")
};

HashTable.prototype.insert = function(key, val) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  // console.log(index, key);
  var tuple = [key, val];
  var arr = this._storage.get(index) || [];

  for (var i = 0; i < arr.length; i++) {
    var existingTuple = arr[i];
    if (existingTuple[0] === val) {
      existingTuple[1] = val;
      return;
    }
  }

  arr.push(tuple);
  this._storage.set(index, arr);
  this.tupleCounter++;

  if (this.tupleCounter > (this._limit * .75)) {
    this.reshuffle(this._limit * 2);
  }
  return;
  // console.log("storage = ", this._storage[index]);
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var arr = this._storage.get(index) || [];
  var result = undefined;
  //running through array and finding which one has an arr[x][0] === key, and returning what is stored at arr[x][1]
  arr.forEach(function(tuple) {
    if (tuple[0] === key) {
      result = tuple[1];
      return;
    }
  }.bind(this));

  return result;
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var arr = this._storage.get(index) || [];
  var tuple;

  for (var i = 0; i < arr.length; i++) {
    tuple = arr[i];
    if (tuple[0] === key) {
      arr.splice(i, 1);
      this.tupleCounter--;
      if (this.tupleCounter < this._limit * .25) {
        this.reshuffle(Math.floor(this._limit / 2)); // THIS IS THE PROBLEM
      }
      return;
    }
  }
  return;
};

HashTable.prototype.reshuffle = function(newLimit) {
  var oldStorage = this._storage;

  newLimit = Math.max(newLimit, 8);
  if (newLimit === this._limit) { return; }

  this._limit = newLimit;
  this.tupleCounter = 0;
  this._storage = LimitedArray(this._limit);

  oldStorage.each(function(bucket) {
    if (!bucket) {return;}
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);  
    }
  }.bind(this));
};

HashTable.prototype.display = function() {
  var results = [];

  this._storage.each(function(bucket) {
    if (!bucket) {return}
    for (var j = 0; j < bucket.length; j++) {
      results.push(bucket[j]);  
      console.log(bucket[j])
    }
  });
  return results;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


