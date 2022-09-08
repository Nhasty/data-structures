var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //add to back of line
    // define max key
    var maxKey = 1;
    // if storage is not empty
    if (Object.keys(storage).length) {
      // adjust max key
      var maxKey = Math.max.apply(Math, Object.keys(storage)) + 1;
    }
    // add value
    storage[maxKey] = value;
  };

  someInstance.pop = function() {
    // remove last item
    //find max key
    var maxKey = Math.max.apply(Math, Object.keys(storage));
    // collect value at last key
    var leaveStack = storage[maxKey];
    // remove value at last key
    delete storage[maxKey];
    // return collected value
    return leaveStack;
  };

  someInstance.size = function() {
    // return length of object keys array
    return Object.keys(storage).length;
  };

  return someInstance;
};
