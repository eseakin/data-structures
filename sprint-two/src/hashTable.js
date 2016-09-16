

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  console.log("new instance")
};

HashTable.prototype.insert = function(key, val) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  console.log(index, key);
  var obj = {}
  obj[key] = val;
  
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, obj);
  } else {
    obj = this._storage.get(index);
    obj[key] = val;
    this._storage.set(index, obj);
  }
  
  // storage[index] = {key:val}  



  // if (this._storage.get(index) !== val) {

  //   index = getIndexBelowMaxForKey(key, this._limit);
  // }
  // this._storage.set(index, val);
  console.log("storage = ", this._storage[index]);
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var result = this._storage.get(index);
  return result[key];
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  console.log(index, key);
  console.log(this._storage);
  this._storage.set(index, {key: undefined});
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


