

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
  var arr = [];
  this.tupleCounter++;
  if (this.tupleCounter / this._limit > .75) {
    this._limit *= 2;
    this.reshuffle();
  }

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
  console.log('remove')
  var arr = this._storage.get(index);
  this.tupleCounter--;
  if (this.tupleCounter / this._limit < .25) {
    this._limit = this._limit / 2;
    this.reshuffle(); // THIS IS THE PROBLEM
  }

  arr.forEach(function(ele, i) {
    console.log('inside each');
    if (ele[0] === key) {
      arr.splice(i, 1);
    }
  });
};

HashTable.prototype.reshuffle = function() {
  var results = this.display();
  this.tupleCounter = 0;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < results.length; i++) {
    console.log('results[i] ', results[i]);
    this.insert(results[i][0], results[i][1]);
  }
};

HashTable.prototype.display = function() {
  var results = [];
  console.log('display')
  console.log(this._storage)
  this._storage.each(function(ele, i, col) {
    for (var j = 0; j < ele.length; j++) {
      results.push(ele[j]);  
    }
    
    //[[key,value]]
    //[[key,value],[key1,value2]]
    // console.log(ele);
  });
  return results;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


