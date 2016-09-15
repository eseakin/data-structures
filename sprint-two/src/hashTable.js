

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  console.log("new instance")
};

HashTable.prototype.insert = function(key, val) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  console.log(index,key);
  if (this._storage.get(index) !== val) {
    
    index = getIndexBelowMaxForKey(key, this._limit);
  }
  this._storage.set(index, val);
  console.log("storage = ",this._storage[index]);
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  console.log(index, key)
  console.log(this._storage)
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


