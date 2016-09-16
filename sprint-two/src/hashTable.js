

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // console.log("new instance")
};

HashTable.prototype.insert = function(key, val) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  // console.log(index, key);
  var tuple = [key, val];
  var arr = [];
  
  if (this._storage.get(index) === undefined) {
    arr.push(tuple);
    this._storage.set(index, arr);
  } else {
    arr = this._storage.get(index);
    arr.push(tuple);
    this._storage.set(index, arr);
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

  arr.forEach(function(ele, i) {
    if (ele[0] === key) {
      arr.splice(i, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


