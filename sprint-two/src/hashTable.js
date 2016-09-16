

var HashTable = function() {
  this._limit = 1500;
  this._storage = LimitedArray(this._limit);
  this.tupleCounter = 0;
  // console.log("new instance")
};

HashTable.prototype.insert = function(key, val) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  // console.log(index, key);
  var tuple = [key, val];
  var arr = [];
  this.tupleCounter++;

  if (this._storage.get(index) === undefined) {
    arr.push(tuple);
    this._storage.set(index, arr);
  } else {
    arr = this._storage.get(index);
    arr.push(tuple);
    this._storage.set(index, arr);
  }

  if (tupleCounter / this._limit >= .75) {
    this._limit *= 2;
    //reshuffle
  }
  // console.log("storage = ", this._storage[index]);
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var arr = this._storage.get(index);
  //running through array and finding which one has an arr[x][0] of key, and returning what is stored at arr[x][1]
  var result;

  arr.forEach(function(ele) {
    if (ele[0] === key) {
      result = ele[1];
    }
  });

  return result;
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  // console.log(index, key);
  // console.log(this._storage);
  var arr = this._storage.get(index);
  this.tupleCounter--;

  arr.forEach(function(ele, i) {
    if (ele[0] === key) {
      arr.splice(i, 1);
    }
  });
  if (tupleCounter / this._limit <= .25) {
    this._limit /= 2;
    //reshuffle
  }
};

HashTable.prototype.display = function() {
  var results = [];
  this._storage.each(function(ele, i, col) {
    results.push(ele);
    // console.log(ele);
  });
  return results;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


