var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // object
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // assign storage at key = item to empty object
  this._storage[item] = {};
};

setPrototype.contains = function(item) {
  //collect keys and see if they include item
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  //delete value at set storage key = item
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
