var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // store value last in q
    // initialize qPosition variable at front of q
    var qPosition = 1;
    // if q is not empty adjust qPosition to back of q
    if (someInstance.size()) {
      qPosition = Math.max.apply(Math, Object.keys(storage)) + 1;
    }
    // store value at q position
    storage[qPosition] = value;
  };

  someInstance.dequeue = function() {
    // remove first person i q from q
    //debugger
    var minKey = Math.min.apply(Math, Object.keys(storage));
    var leaveQ = storage[minKey];
    delete storage[minKey];
    return leaveQ;
  };

  someInstance.size = function() {
    // return q size (length of storgage object keys)
    return Object.keys(storage).length;
  };

  return someInstance;
};
