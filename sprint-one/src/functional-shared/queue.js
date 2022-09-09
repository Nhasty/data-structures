var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  // Use an object with numeric keys to store values
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};
queueMethods.enqueue = function (value) {
  var currentQ = this.storage;
  var qPosition = 1;
  if (this.size()) {
    qPosition = Math.max.apply(Math, Object.keys(currentQ)) + 1;
  }
  currentQ[qPosition] = value;
};
queueMethods.dequeue = function () {
  var currentQ = this.storage;
  var minKey = 1;
  minKey = Math.min.apply(Math, Object.keys(currentQ));
  var leaveQ = this.storage[minKey];
  delete this.storage[minKey];
  return leaveQ;
};
queueMethods.size = function () {
  return Object.keys(this.storage).length;
}

