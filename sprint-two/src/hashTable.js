

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //convert key to index
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if index is empty
  if (!this._storage[index]) {
    // create empty array at index (limited array)
           // LOOK INTO HOW EACH IS USED IN HASH TABLE HELPERS TO GET CLUE TO WHATS SUPPOSED TO BE STORED AT EACH INDEX
    this._storage[index] = [];
  }
  // push [k, v] to list at index
  this._storage[index].push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var atIndex = this._storage[index];
  //if array at index
  if (atIndex) {
    // iterate through array
    for (var i = 0; i < atIndex.length; i++) {
      // if tuple[0] contains k
      if (atIndex[i][0] === k) {
        // return tuple[1]
        return atIndex[i];
      }
    }
  }
  // return undefined
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if array at index
    // iterate through array
     // if tuple[0] is key
       //remove it from list
  // if array at index is empty at end remove array
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


